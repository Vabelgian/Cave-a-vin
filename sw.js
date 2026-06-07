// ─────────────────────────────────────────────────────────────────────────────
// Vinea — Service Worker
// Version : changer ce numéro à chaque déploiement pour forcer la mise à jour
// ─────────────────────────────────────────────────────────────────────────────
const VERSION = 'cave-v3';

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
];

// Données JSON et JS : mises en cache au premier accès
const DATA_FILES = [
  '/Cave-a-vin/vins.json',
  '/Cave-a-vin/millesimes.json',
  '/Cave-a-vin/degustations.json',
  '/Cave-a-vin/regions.json',
  '/Cave-a-vin/manifest.json',
  '/Cave-a-vin/data/articles.js',
];

// ── INSTALLATION ─────────────────────────────────────────────────────────────
// On prend le contrôle immédiatement (skipWaiting) et on met en cache
// toutes les pages + données d'un coup.
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(VERSION).then(cache =>
      cache.addAll([...PAGES, ...DATA_FILES])
    )
  );
});

// ── ACTIVATION ───────────────────────────────────────────────────────────────
// On supprime tous les anciens caches (cave-v1, cave-v2…) pour libérer
// de l'espace et éviter de servir de vieilles versions.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== VERSION).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ── STRATÉGIE DE FETCH ───────────────────────────────────────────────────────
// Deux comportements selon le type de ressource :
//
// • Données JSON / articles.js → "Cache d'abord, réseau en arrière-plan"
//   On sert immédiatement ce qu'on a (rapide, fonctionne hors ligne),
//   puis on rafraîchit silencieusement le cache pour la prochaine visite.
//
// • Tout le reste (pages HTML, images…) → "Réseau d'abord, cache en secours"
//   On essaie le réseau pour avoir la version la plus récente.
//   Si le réseau est absent, on sert le cache.

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Ignorer les requêtes non-GET et les ressources externes (fonts Google, etc.)
  if (event.request.method !== 'GET') return;
  if (!url.includes('/Cave-a-vin/') && !url.endsWith('/Cave-a-vin/')) return;

  const isData = url.endsWith('.json') || url.includes('articles.js');

  if (isData) {
    // ── CACHE FIRST + mise à jour en arrière-plan ──
    event.respondWith(
      caches.open(VERSION).then(cache =>
        cache.match(event.request).then(cached => {
          // Lancer la requête réseau en parallèle pour mettre le cache à jour
          const networkFetch = fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          }).catch(() => null);

          // Servir le cache immédiatement s'il existe, sinon attendre le réseau
          return cached || networkFetch;
        })
      )
    );
  } else {
    // ── NETWORK FIRST + cache en secours ──
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Mettre en cache la réponse fraîche
          if (response.ok) {
            caches.open(VERSION).then(cache =>
              cache.put(event.request, response.clone())
            );
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
