// Service worker de MVG Learning: permite instalar la app y abrirla sin internet.
// Sube el número de versión cada vez que publiques cambios importantes.
const CACHE = "mvg-learning-v5";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Primero intenta la red (para ver siempre lo último); si no hay conexión, usa lo guardado.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === location.origin) {
          const copia = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copia));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
