// sw.js - service worker minimal

self.addEventListener('install', event => {
  // on force l'activation immédiate
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // rien de special pour l'instant
});

self.addEventListener('fetch', event => {
  // on laisse tout passer au réseau pour le moment
});
