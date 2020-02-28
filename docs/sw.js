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
    { url: "/pwChat/", revision: precacheToken },
    { url: "/pwChat/index.html", revision: precacheToken },
    { url: "/pwChat/index.js", revision: precacheToken },
    { url: "/pwChat/css/style.css", revision: precacheToken },
    { url: "/pwChat/css/font.css", revision: precacheToken },
    { url: "/pwChat/favicon.ico", revision: precacheToken },
    { url: "/pwChat/manifest.webmanifest", revision: precacheToken }
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
