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
    "url": "/_nuxt/a7ccd91bb2e75e8011c6.js",
    "revision": "334bdd2173ec69286271fb7640bdf852"
  },
  {
    "url": "/_nuxt/a9436a6b432fa2e421f2.js",
    "revision": "a0c69aa1ca2da498a30e3d60d4380575"
  },
  {
    "url": "/_nuxt/b05d13f3916f69d505cf.js",
    "revision": "71e475f5354fa782b59199595213b8a8"
  },
  {
    "url": "/_nuxt/c140bedc3be729f86127.js",
    "revision": "b21a9413b827c7fe6b2d84f245aba973"
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
