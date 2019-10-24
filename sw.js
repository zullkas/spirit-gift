importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14ffe04e8af6e12a3d32.js",
    "revision": "efceb4da9c0975c5e1f63ca83d373c86"
  },
  {
    "url": "/_nuxt/1db4e62c577f60dace87.js",
    "revision": "5d0aec2ceed29f26044036ae15843d05"
  },
  {
    "url": "/_nuxt/22674f0a2adbd15c1f48.js",
    "revision": "a27e3ffb75c9339e2fbadd3d5af6e074"
  },
  {
    "url": "/_nuxt/319f7ac829d6791464ee.js",
    "revision": "d8f4b10c5896f9680deed0c78104ef35"
  },
  {
    "url": "/_nuxt/4d7ec98e02f973665413.js",
    "revision": "afb48a201876610b298662412d32feb0"
  },
  {
    "url": "/_nuxt/5576bf248b2aacbdafbb.js",
    "revision": "cac5d1413b5b4630aa722e4887f0d4da"
  },
  {
    "url": "/_nuxt/7c24bebdff4750ba4afb.js",
    "revision": "f2c25ab613b876acf2326200bc6e349b"
  },
  {
    "url": "/_nuxt/7de7e77b0ce1adaf7d85.js",
    "revision": "853d35beafb58b261a4cfe5bb34e3d00"
  },
  {
    "url": "/_nuxt/a7ccd91bb2e75e8011c6.js",
    "revision": "334bdd2173ec69286271fb7640bdf852"
  },
  {
    "url": "/_nuxt/f1bb10510d29ec1842dd.js",
    "revision": "1883d928182da1a5624194c2599d3376"
  }
], {
  "cacheId": "spirit-gift",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
