const cacheName = 'app-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/path/to/icon-192x192.png',
  '/path/to/icon-512x512.png',
  '/css/styles.css',
  '/js/app.js'
];

// Install the service worker
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate the service worker
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch and cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching', event.request.url);
});
