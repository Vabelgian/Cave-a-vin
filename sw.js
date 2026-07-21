// ─────────────────────────────────────────────────────────────────────────────
// Vinea — Service Worker
// Version : cave-v4 (Forçage de la mise à jour globale)
// ─────────────────────────────────────────────────────────────────────────────
const VERSION = 'cave-v6';

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
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(VERSION).then(cache =>
      cache.addAll([...PAGES, ...DATA_FILES])
    )
  );
});

// ── ACTIVATION ───────────────────────────────────────────────────────────────
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
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // 1. SÉCURITÉ EN LIGNE DIRECTE POUR L'API NETLIFY
  // Si la requête s'en va vers Netlify, on la laisse filer sur internet immédiatement 
  // sans que le Service Worker ne bloque ou n'intercepte quoi que ce soit.
  if (url.includes('netlify.app')) {
    return; 
  }

  // Ignorer les requêtes non-GET et les ressources externes
  if (event.request.method !== 'GET') return;
  if (!url.includes('/Cave-a-vin/') && !url.endsWith('/Cave-a-vin/')) return;

  const isData = url.endsWith('.json') || url.includes('articles.js');

  if (isData) {
    // ── CACHE FIRST + mise à jour en arrière-plan ──
    event.respondWith(
      caches.open(VERSION).then(cache =>
        cache.match(event.request).then(cached => {
          const networkFetch = fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          }).catch(() => null);

          return cached || networkFetch;
        })
      )
    );
  } else {
    // ── NETWORK FIRST + cache en secours ──
    event.respondWith(
      fetch(event.request)
        .then(response => {
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
