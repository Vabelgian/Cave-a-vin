// ─────────────────────────────────────────────────────────────────────────────
// Vinea — Service Worker
// Version : cave-v8 (cache d'images persistant, photos disponibles hors ligne)
// ─────────────────────────────────────────────────────────────────────────────

// Cache des pages et des données : renouvelé à chaque changement de VERSION
const VERSION = 'cave-v8';

// Cache des photos : NE CHANGE PAS quand VERSION change, les photos déjà vues
// restent donc disponibles hors ligne après une mise à jour de l'app.
// À incrémenter uniquement si tu veux volontairement tout vider (cave-images-v2…).
const IMG_CACHE = 'cave-images-v1';

// Pages HTML à mettre en cache immédiatement à l'installation
const PAGES = [
  '/Cave-a-vin/',
  '/Cave-a-vin/index.html',
  '/Cave-a-vin/Ma-Cave.html',
  '/Cave-a-vin/millesimes.html',
  '/Cave-a-vin/regionsviticoles.html',
  '/Cave-a-vin/Fenetrededegustation.html',
  '/Cave-a-vin/decryptage-oenologique.html',
  '/Cave-a-vin/cepage-du-mois.html',
  '/Cave-a-vin/article.html',
  '/Cave-a-vin/afriquedusud.html',
  '/Cave-a-vin/altoadige.html',
  '/Cave-a-vin/anjou-saumur.html',
  '/Cave-a-vin/bolgheri.html',
  '/Cave-a-vin/bourgogne.html',
  '/Cave-a-vin/brunello-montalcino.html',
  '/Cave-a-vin/campanie.html',
  '/Cave-a-vin/chablis.html',
  '/Cave-a-vin/chianti-classico.html',
  '/Cave-a-vin/espagne.html',
  '/Cave-a-vin/france.html',
  '/Cave-a-vin/frioul.html',
  '/Cave-a-vin/italie.html',
  '/Cave-a-vin/loire.html',
  '/Cave-a-vin/piemont-barolo.html',
  '/Cave-a-vin/portugal.html',
  '/Cave-a-vin/rioja.html',
  '/Cave-a-vin/sancerre-pouilly.html',
  '/Cave-a-vin/sicile-etna.html',
  '/Cave-a-vin/toscane.html',
  '/Cave-a-vin/touraine.html',
  '/Cave-a-vin/westerncape.html',
  '/Cave-a-vin/ajouter-vin.html',
  '/Cave-a-vin/calendrier-millesimes.html',
];

// Données JSON et JS
const DATA_FILES = [
  '/Cave-a-vin/vins.json',
  '/Cave-a-vin/millesimes.json',
  '/Cave-a-vin/degustations.json',
  '/Cave-a-vin/regions.json',
  '/Cave-a-vin/manifest.json',
  '/Cave-a-vin/data/articles.js',
];

// Image de secours affichée si une photo n'a jamais été chargée en ligne
const PLACEHOLDER_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
  '<rect width="400" height="300" fill="#1a1a1a"/>' +
  '<text x="200" y="155" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#c9a24b">' +
  'Photo indisponible hors ligne</text></svg>';

// ── INSTALLATION ─────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(VERSION).then(cache =>
      cache.addAll([...PAGES, ...DATA_FILES])
    )
  );
});

// ── ACTIVATION ───────────────────────────────────────────────────────────────
// On garde le cache courant ET le cache d'images, on supprime le reste.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== VERSION && key !== IMG_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ── OUTILS ───────────────────────────────────────────────────────────────────
function isImageRequest(request, url) {
  return (
    request.destination === 'image' ||
    /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(new URL(url).pathname)
  );
}

// ── STRATÉGIE DE FETCH ───────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = request.url;

  // 1. L'API Netlify passe directement par internet, sans interception
  if (url.includes('netlify.app')) return;

  // 2. Ignorer les requêtes non-GET et les ressources hors de l'app
  if (request.method !== 'GET') return;
  if (!url.includes('/Cave-a-vin/')) return;

  // 3. PHOTOS : cache d'abord + mise à jour en arrière-plan ───────────────────
  if (isImageRequest(request, url)) {
    event.respondWith(
      caches.open(IMG_CACHE).then(async cache => {
        // ignoreSearch : ?v=123 ne casse pas la correspondance
        const cached = await cache.match(request, { ignoreSearch: true });

        const networkFetch = fetch(request)
          .then(response => {
            // status 200 uniquement : cache.put refuse les réponses partielles (206)
            if (response && response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => null);

        if (cached) {
          // On sert le cache tout de suite, la mise à jour se fait en coulisses
          event.waitUntil(networkFetch);
          return cached;
        }

        const response = await networkFetch;
        if (response) return response;

        // Hors ligne et photo jamais vue : image de secours plutôt qu'une icône cassée
        return new Response(PLACEHOLDER_SVG, {
          headers: { 'Content-Type': 'image/svg+xml' },
        });
      })
    );
    return;
  }

  // 4. DONNÉES (JSON, articles.js) : cache d'abord + mise à jour en arrière-plan ─
  const isData = url.split('?')[0].endsWith('.json') || url.includes('articles.js');

  if (isData) {
    event.respondWith(
      caches.open(VERSION).then(cache =>
        cache.match(request).then(cached => {
          const networkFetch = fetch(request)
            .then(response => {
              if (response.ok) cache.put(request, response.clone());
              return response;
            })
            .catch(() => null);

          if (cached) {
            event.waitUntil(networkFetch);
            return cached;
          }
          return networkFetch.then(response => response || Response.error());
        })
      )
    );
    return;
  }

  // 5. PAGES et reste : réseau d'abord, cache en secours ──────────────────────
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(
            caches.open(VERSION).then(cache => cache.put(request, copy))
          );
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then(cached => {
          if (cached) return cached;
          // Navigation hors ligne vers une page inconnue : retour à l'accueil
          if (request.mode === 'navigate') {
            return caches.match('/Cave-a-vin/index.html');
          }
          return Response.error();
        })
      )
  );
});
