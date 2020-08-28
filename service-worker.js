/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b567af6b8819939f502fedf70cb71313"
  },
  {
    "url": "about.html",
    "revision": "a977d78a3e038d4279d3fe776943f21f"
  },
  {
    "url": "assets/css/0.styles.dc8946f9.css",
    "revision": "793438c5a427e4bac75ffad061f5c6b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dff8bfe1.js",
    "revision": "8d3bd5018c2df6dc4208e8ffcfe7c0c2"
  },
  {
    "url": "assets/js/11.392514e1.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.9f7b5449.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.e005f7af.js",
    "revision": "8f06cd2e56cba9445873e1005ab45013"
  },
  {
    "url": "assets/js/14.bb903432.js",
    "revision": "bc457c1e2c535a1619900aa235531da1"
  },
  {
    "url": "assets/js/15.825fd6f0.js",
    "revision": "979df655f35062b7b7e4a4730563147f"
  },
  {
    "url": "assets/js/16.1fd3d88d.js",
    "revision": "aaa87b501913cf3c85d91add352c25a2"
  },
  {
    "url": "assets/js/17.078bfba4.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.8a51b3bf.js",
    "revision": "cba400f0e979fc5817e30b1c5c34764a"
  },
  {
    "url": "assets/js/19.9243df07.js",
    "revision": "b628562f4e97d7214889482762e32ef9"
  },
  {
    "url": "assets/js/2.20115dad.js",
    "revision": "60c55580ad81d207b7f4cf3b99b7714a"
  },
  {
    "url": "assets/js/20.ad4aff1e.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.01db3c3d.js",
    "revision": "5fe9fec80671033f0fcd6016b7ae78c9"
  },
  {
    "url": "assets/js/22.f77e636e.js",
    "revision": "68a546e27ebee420b99f77bb8d69a7ab"
  },
  {
    "url": "assets/js/23.1009edf5.js",
    "revision": "21d2a394aa12cc5708f57041f0c57384"
  },
  {
    "url": "assets/js/24.22d5d5ae.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.7b4d3450.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.b32bfd9e.js",
    "revision": "a9ca5e82b5dafe353d5a1117af856e4b"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.c62655c2.js",
    "revision": "1ba76477d44bf9c2cc160d8840f2506f"
  },
  {
    "url": "assets/js/4.1ae92357.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.7e75d9d4.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.c21c06e1.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.01492cc7.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.c68f678e.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.bb34c018.js",
    "revision": "d7e5957e2157c92fb154a9d155131cf4"
  },
  {
    "url": "demo.html",
    "revision": "ad0cfaafdddb290b862faba1a0fc4961"
  },
  {
    "url": "en/about.html",
    "revision": "aec4b032522a70c78cf06808f856e906"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "ec7806e33a730427f4b5c29d26df9302"
  },
  {
    "url": "en/guide/config.html",
    "revision": "198c3ab44b1909d4374426d65e1dbeb6"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "83efcebf5458a8f7ae1ff63e48ed7801"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "9f34d2508effbdc963ab15ac9e3d85e4"
  },
  {
    "url": "en/guide/index.html",
    "revision": "12ab72bb7815abb304406600c0adb742"
  },
  {
    "url": "en/guide/page.html",
    "revision": "eb0ce5fff0ed870a611a83a9bdb15f51"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "561554f7b5c68a9974f443a92b1ab3e6"
  },
  {
    "url": "en/index.html",
    "revision": "f5f31a31cc697b25ee72ae1b223622e3"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "b213908677caec58a52d36f443a1bb86"
  },
  {
    "url": "guide/config.html",
    "revision": "bb99d835c65c7b1935ab1b08d5906397"
  },
  {
    "url": "guide/faq.html",
    "revision": "d14088edce7bf372ea90769873541a7d"
  },
  {
    "url": "guide/icon.html",
    "revision": "02e7ea166e7a57c87ae93738e0bee172"
  },
  {
    "url": "guide/index.html",
    "revision": "94f4279cc7a6196d642bf9fb02945d15"
  },
  {
    "url": "guide/migrate.html",
    "revision": "6f1d64f45dd40789292eccf999910068"
  },
  {
    "url": "guide/page.html",
    "revision": "f7b0268e63b9e272283e16cad21cef1b"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "51c77d247577f3f48edbd135e809f952"
  },
  {
    "url": "index.html",
    "revision": "3062ba8a0f1c2f98312fd2e9e9b04d8c"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
