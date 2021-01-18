const staticCacheName = "sillyquestions_static";
const assets = [
  "/",
  "/index.html",
  "/phaser.min.js",
  "/game.js",
  "/app.js",
  "/styles.css",
  "/assets/sky.png",
  "/assets/dude.png",
  "/assets/platform.png",
  "/assets/star.png",
  "/manifest.json",
];

//Install service worker
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed!");
  e.waituntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching core assets...");
      cache.addAll(assets);
    })
  );
});

//Activate service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated!");
});

//Fetch event
self.addEventListener("fetch", (fetchEvent) => {
  console.log("Fetch event detected :", fetchEvent);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
