const CACHE = 'cave-v2';
const PAGES = [
  '/Cave-a-vin/',
  '/Cave-a-vin/index.html',
  '/Cave-a-vin/Ma-Cave.html',
  '/Cave-a-vin/millesimes.html',
  '/Cave-a-vin/regionsviticoles.html',
  '/Cave-a-vin/Fenetrededegustation.html',
  '/Cave-a-vin/decryptage-oenologique.html',
  '/Cave-a-vin/cepage-du-mois.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PAGES)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
