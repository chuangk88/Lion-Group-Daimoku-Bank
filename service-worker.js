self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Simply fetch all requests from the network for real-time sync
  event.respondWith(fetch(event.request));
});