// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  '/HuaPai.html',
  '/script/install.js',
];

self.addEventListener('install', (evt) => {
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
      if (key !== CACHE_NAME) {
	  //if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  //// CODELAB: Add fetch event handler here.
  //if (evt.request.url.includes('/forecast/')) {
  //evt.respondWith(
  //    caches.open(DATA_CACHE_NAME).then((cache) => {
  //      return fetch(evt.request)
  //          .then((response) => {
  //            // If the response was good, clone it and store it in the cache.
  //            if (response.status === 200) {
  //              cache.put(evt.request.url, response.clone());
  //            }
  //            return response;
  //          }).catch((err) => {
  //            // Network request failed, try to get it from the cache.
  //            return cache.match(evt.request);
  //          });
  //    }));
  //return;
  //}
  //evt.respondWith(
  //    caches.open(CACHE_NAME).then((cache) => {
  //      return cache.match(evt.request)
  //          .then((response) => {
  //            return response || fetch(evt.request);
  //          });
  //    })
  //);
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('HuaPai.html');
                });
          })
  );
});

