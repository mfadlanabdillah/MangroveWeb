const cacheName = "mangrove-cache-v1";
const assetsToCache = [
  "./",
  "./index.html",
  "./Build/MangroveWeb.loader.js",
  "./Build/MangroveWeb.framework.js",
  "./Build/MangroveWeb.data",
  "./Build/MangroveWeb.wasm",
  "./TemplateData/style.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
