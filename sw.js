self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('arids-v2').then(cache => cache.addAll([
      'index.html', 'pes-a-volum.html', 'volum-a-pes.html', 'about.html',
      'manifest.json', 'icon-192.png', 'icon-512.png'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});