'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47fdb6d3fe1fa807b73ebe23e30561c8",
"assets/AssetManifest.json": "d036a72f071d6edc330da590fcdd67ea",
"assets/assets/fonts/eczar.ttf": "a82fa9531e575b6defb41798194615a0",
"assets/assets/fonts/orbitro.ttf": "7c062f5378d9bca93937259466fcddc7",
"assets/assets/fonts/outfit.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/images/about_background.png": "473846de7dfb1119df56252062d14487",
"assets/assets/images/all/1.jpg": "c2d9c85e0897faaaa7b5b2937e446c94",
"assets/assets/images/all/10.jpg": "c5abe17454d9f05fc7e187a2ff8e8b77",
"assets/assets/images/all/11.jpg": "9cfecc0e0e6549ff42ef868c2843a860",
"assets/assets/images/all/12.jpg": "79e1b2bf1b2cd641012813ec96f24f77",
"assets/assets/images/all/14.jpg": "a1779766c343c5bf7cccbe2e2d86f06c",
"assets/assets/images/all/15.jpg": "6acf7cc0033e9a40f71bf3e49d17b69a",
"assets/assets/images/all/16.jpg": "73c100d8250c27e439d0593f44c2ec57",
"assets/assets/images/all/17.jpg": "13b8497de08bc458484abdc0031ae521",
"assets/assets/images/all/18.jpg": "7b36d85f9a5b564bb903701182d21c66",
"assets/assets/images/all/19.jpg": "323eb73ab3a7e905650694be8b430a3d",
"assets/assets/images/all/2.jpg": "a5cad4184e1e2e11727f4a8e033f73fe",
"assets/assets/images/all/20.jpg": "7712dd0f357c3e2fd7e7095a1d6e06ee",
"assets/assets/images/all/21.jpg": "55038608aa4c89338fc6caa3043fe9a8",
"assets/assets/images/all/22.jpg": "24aed332609270f5c3f444d92bf68c36",
"assets/assets/images/all/23.jpg": "596d60db0c248932a243f7c389e3c60e",
"assets/assets/images/all/24.jpg": "3754fb1a0b395b4f16fef8226b6452ca",
"assets/assets/images/all/25.jpg": "eb3c9da8b320eb2b5b1e17d46c570bb3",
"assets/assets/images/all/26.jpg": "0f356e0bfdbceb4a75f0ba5d97b1caa2",
"assets/assets/images/all/27.jpg": "fbf93dc19581e5722d7faeae0e05ff25",
"assets/assets/images/all/28.jpg": "afd2288fcd4cfd9960638879d0884539",
"assets/assets/images/all/29.jpg": "b055c47b27f427dcd4bd6ea15aae9bd4",
"assets/assets/images/all/3.jpg": "e82d724af90df2540958c2204a55d2f0",
"assets/assets/images/all/30.jpg": "344a42051b70e4e71414c1770fc05432",
"assets/assets/images/all/31.jpg": "2536f5d54e67ea15877e28be865f591a",
"assets/assets/images/all/32.jpg": "5dc4f6e78ded628cd1008d0ce91eab44",
"assets/assets/images/all/33.jpg": "b83d9fe52bde9c3f15649124d07b9fc7",
"assets/assets/images/all/34.jpg": "3fca3d9bd21471555e60682b4608b4b3",
"assets/assets/images/all/35.jpg": "5ff329533212a274087302c6e8544e4c",
"assets/assets/images/all/36.jpg": "5f33f88d51b6d5d063f13a6afcf712ba",
"assets/assets/images/all/37.jpg": "06d6f050e9626b184d918ad35f043614",
"assets/assets/images/all/38.jpg": "512ad811b0e0ae3a845ea71173d36efb",
"assets/assets/images/all/39.jpg": "bd14360cdf78b054ac3c03f3b9eb1adb",
"assets/assets/images/all/4.jpg": "a756d334507ca60a61b93b10b6fb0725",
"assets/assets/images/all/40.jpg": "e897b2cc4632ce3d611e17b0b49e98c9",
"assets/assets/images/all/41.jpg": "460e9935aef5665c0987fb64e89a3f4c",
"assets/assets/images/all/42.jpg": "79922b676054489357b4ff0035155eb4",
"assets/assets/images/all/43.jpg": "4d7b4894cf6db5ee04531275d73aa145",
"assets/assets/images/all/44.jpg": "fdfcdb0cbe7e22d979703a75a1ed6cb1",
"assets/assets/images/all/45.jpg": "14676b35f2dd4ba5b6230735aef407c4",
"assets/assets/images/all/46.jpg": "23bb858e1b866cc992a53ea23b7a50f3",
"assets/assets/images/all/47.jpg": "92f588b6f4f6ea6fed718e8b2779780b",
"assets/assets/images/all/48.jpg": "6b3b252c0aa61e42bbea81e3ca0559df",
"assets/assets/images/all/49.jpg": "8b45f626ac5b47fa8457edca3f710295",
"assets/assets/images/all/5.jpg": "1ce9079861f8ac40a29e67ccc96576ab",
"assets/assets/images/all/50.jpeg": "d9a03a3d31cd05459f0590b52b811dea",
"assets/assets/images/all/51.png": "ceda0f7251f60316875ab4cc69b980cf",
"assets/assets/images/all/52.jpg": "2580d71cca45ac077f65ec18cfac1321",
"assets/assets/images/all/6.jpg": "7360ead77bbab238f44a609c07cd3e3f",
"assets/assets/images/all/7.jpg": "1193f97b917b728a9b1a6832d6c40515",
"assets/assets/images/all/8.jpg": "af950a1e6200100a75e3fca84e6b620a",
"assets/assets/images/all/9.jpg": "5bab40a5fd0bf33b8ff3c2d331d2b4a8",
"assets/assets/images/all/autoclub.jpg": "94883e0a07955b2c5391611d67c8d4c9",
"assets/assets/images/logo.png": "b76c7ba33e9a0c2b3ca71420f9109031",
"assets/assets/images/logoMain.PNG": "2156fb4c9d55abd39e6ce28870074e45",
"assets/assets/images/logoSVG.svg": "4495227217ca22c7436204e964945d11",
"assets/assets/images/monogram.PNG": "c021e7319599e5fb986895c37778134f",
"assets/assets/images/side/1.png": "35c4b302f838e7bfe422e51f7c9b32b8",
"assets/assets/images/side/2.png": "d06b9275072c012c6d2014781aeda7a7",
"assets/assets/images/side/3.png": "4048a5a7fb8e4b34f12a955eaf9891d8",
"assets/assets/images/side/4.png": "d91e5f442be5b3ed63b4f6dc65831cc8",
"assets/assets/images/side/5.png": "1c1442b4ed79906d9a96b841ff9d0056",
"assets/assets/images/side/6.png": "de84e1e5f5dcf5426e64b293281bb68d",
"assets/assets/images/side/seven.png": "c55cb46277a5a55acae008fe277dd290",
"assets/assets/videos/3.mp4": "747a1e40eb015ee2a0d56facdc4028d7",
"assets/assets/videos/6.mp4": "4027cbd596982fd1f47e0139cdbfb9b1",
"assets/assets/videos/bestshot-2.mp4": "8d6253d25caced5c6a88d0e5b2191bef",
"assets/assets/videos/full_drone_view.mp4": "f5d494db567690207f5baa46fa21e309",
"assets/assets/videos/vid1.mp4": "cce02a0a5ef436144c7d04aded5f9422",
"assets/assets/videos/vid2.mp4": "8722425a53f2439ba52be845a4b99300",
"assets/assets/videos/vid4.mp4": "cd8c6442f055b2761c08e5675361e63f",
"assets/assets/videos/vid5.mp4": "32b082ed9fd58056a13cf335e26cbe1b",
"assets/assets/videos/vid6.mp4": "f9e9731ff861aa3819014382b65eb4bf",
"assets/FontManifest.json": "0db7da59b7a44801d7353251e16e5a29",
"assets/fonts/MaterialIcons-Regular.otf": "deb9da483a37da816c2b55dac5e42860",
"assets/NOTICES": "a79aa6496b1268231c67558a25608a09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4303e4db836495f2a9756300a61c2506",
"/": "4303e4db836495f2a9756300a61c2506",
"main.dart.js": "69d721cf21613344041ac0235e7b50b4",
"manifest.json": "30720d021355fb867ac65b7c5d2efbf7",
"version.json": "3e88faae09ac1e8dd16cb9394abfe559"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
