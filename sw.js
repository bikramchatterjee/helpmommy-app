self.addEventListener('fetch', function(event) {
  // This is a basic service worker for PWA functionality
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
