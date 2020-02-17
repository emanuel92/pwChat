importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.core.skipWaiting();
workbox.core.clientsClaim();

const precacheToken = "1.0.0";

workbox.precaching.precacheAndRoute(
  [
    { url: "/", revision: precacheToken },
    { url: "/index.html", revision: precacheToken },
    { url: "/index.js", revision: precacheToken },
    { url: "/style.css", revision: precacheToken },
    { url: "/favicon.ico", revision: precacheToken },
    { url: "/manifest.webmanifest", revision: precacheToken }
  ],
  {
    cleanUrls: false
  }
);

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.CacheFirst({
    cacheName: "css-cache"
  })
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache"
  })
);
