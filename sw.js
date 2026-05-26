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

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PAGES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
