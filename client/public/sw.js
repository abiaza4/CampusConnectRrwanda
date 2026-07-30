const CACHE_NAME = "campusconnect-v1";
const STATIC_CACHE = "campusconnect-static-v1";
const PAGE_CACHE = "campusconnect-pages-v1";

const STATIC_ASSETS = [
  "/",
  "/universities",
  "/study-guide",
  "/scholarships",
  "/compare",
  "/events",
  "/equivalence",
  "/visa-guide",
  "/important-info",
  "/blog",
  "/faq",
  "/about",
  "/team",
  "/cost-calculator",
  "/currency-converter",
  "/privacy-policy",
  "/terms-and-conditions"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== STATIC_CACHE && key !== PAGE_CACHE)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    if (request.method === "GET") {
      event.respondWith(
        caches.match(request).then((cached) => {
          const fetchPromise = fetch(request)
            .then((response) => {
              const clone = response.clone();
              if (response.ok) {
                caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
              }
              return response;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        })
      );
    }
    return;
  }

  if (request.method === "GET") {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request)
          .then((response) => {
            const clone = response.clone();
            if (response.ok) {
              caches.open(PAGE_CACHE).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    );
  }
});
