self.addEventListener('install', (e) => {
  console.log('Calculator Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
