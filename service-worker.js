self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cleverpush-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './icon-192x192.png',
        './icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});