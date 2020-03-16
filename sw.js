importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ae24a9ee7492311a631.js",
    "revision": "b986cf4729f4288bf53e204aa6688b3a"
  },
  {
    "url": "/_nuxt/23d5ed0f412a3f279c48.js",
    "revision": "151f4a0907f4a3c349104deed37b71d4"
  },
  {
    "url": "/_nuxt/39588eb512c36b5a1c7b.js",
    "revision": "61e96f0462494cc4e6f16328ecab8a5b"
  },
  {
    "url": "/_nuxt/4f67882254a5b67267be.js",
    "revision": "df71e1d25a94c67e6df16c2f71d4add4"
  },
  {
    "url": "/_nuxt/5019471301bd98a35fa3.js",
    "revision": "04e38ae470f7d711a907778f835cb5c4"
  },
  {
    "url": "/_nuxt/a42ad6c8c339fe6d1a57.js",
    "revision": "8ce896220f53f8695a488e01440e73f0"
  },
  {
    "url": "/_nuxt/c2af434036722ca3ddfa.js",
    "revision": "1907ca2af5699b726b81c48d3f7e422b"
  },
  {
    "url": "/_nuxt/dedb4c384660d79bca3f.js",
    "revision": "f84a8af2a7fa5681e004f5051593dbdd"
  },
  {
    "url": "/_nuxt/e11963d65b3a309d63bf.js",
    "revision": "ae36ef13b4fdf6593ca3baaa505b3661"
  },
  {
    "url": "/_nuxt/e5feb588a6946816e259.js",
    "revision": "7b4232242f06f8da5bb8b7a667ed269a"
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
