'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "54351df6913ad3e0da6b0b13415eae7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d271d953cd0915d7ab96bbedee94925e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "530f524ea3fb5083731c8807dbad4c7e",
".git/logs/refs/heads/main": "8e189ca7b4a862b57bf71cc044bd87fe",
".git/logs/refs/remotes/origin/main": "23fa4a692bfa3e3e1e2747b351abd504",
".git/objects/04/c46ab1af49e96114dd62e0a369579267c4ca5c": "499293f54878fd44f824ad31fc87d55f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/bc82b3f771225e6f7c1961c041e28a910ed489": "d328a0b434464c26bf64a645728cae38",
".git/objects/0b/6011fe8845fffc09171d4abc774c4f2b845cd1": "24640d0f58ab35f034fe152bb4f737aa",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/9654e7d1f4abe3d11280dba11b862e8b334829": "2a9da16ba4965fd78b879158c72a3dcc",
".git/objects/12/d149100e65e5bc7d126899119f3c6997e85efc": "24c6d6628303120e89e40800f706a35f",
".git/objects/14/8ea949c268f8b8b57119b14850ae9629e176ad": "c243df511796f4ea70571cf87ddd742a",
".git/objects/14/abafb20a653694770a704d86695ca4238f1d9f": "1269ffa9fa37ae5838190f6c1ad1f593",
".git/objects/15/5bea6c3a58dea8228dd607094bd952b88a689f": "714d54f3592fc723c050e21c43235d61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/fc20f41b32cb1050fd352e11d9466c1ee1f971": "d0304cf271f94aa6bdfac2337180f669",
".git/objects/28/1cbbf2086e0c20bdd5fa71dfa740040f53a758": "b9afe30e1a75456d59dd390610b20b44",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/607dbff08f21c9f1610573a81f28ede8fe8f5a": "460484ab36a914ef6f80379db5fb3dd6",
".git/objects/2d/ae8113e5d2f0ea7602b3edf9001d2406459b00": "04650bab78d95b927ea2c42da724113c",
".git/objects/2f/d9a80700c08fe42e9993926bbd675de3a51aec": "fd52839f68fb9b91629036ef00ac1239",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/bc753b5ff19fada53a7809c4c968e6242a1bc2": "d9977a2cb3ea2594160d0d7edc80e5ff",
".git/objects/3d/1784036da1aa4884cddb5717d6387d8b7ec6ea": "29f1e02f5ed4a8d3f0f3f12e5a5660c4",
".git/objects/3e/29f5238ae59c2f4f5eb5c86b607d12c5ec9282": "89232c073221503c52ba2ce97b6b7741",
".git/objects/41/686ba13ffb9bcce3d83e9ab29541fde0c3c040": "ff7e10570a74812a908f05ed23a43ac6",
".git/objects/42/390ef7176ef9b2f573b4eacbcd19fa8dfc75aa": "eac5f0535aeeb028cd5fca403e167456",
".git/objects/43/d43644ba438f1eea9140d82233e3dcce4e4ba0": "d170fbe76b9954f64f32391b0ec00aa3",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/99cc072a85c98c2db6e8154be5752a77cb8bef": "b816f37077176f40db036debdf56e9be",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/43de1d55979ce27d5e6951a0611b82191e0993": "8eefa620afa568a30617df9a11ec41eb",
".git/objects/51/26615aba189c522f2f5bd2c626576545cd684b": "fe54d36892f126aaf862d0d1c4d47bff",
".git/objects/52/d7ca549cb6617928b07e8f25ff4d7100e5b416": "bf4d80cce5949445fe1fc7c1a50bf17a",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/8ff47beae7789b46be4a86a6f9dc8f457f22a9": "60a927f49f65203602348c622c61eb0b",
".git/objects/5b/527732f18dd756d29888dc75d2309d201850e1": "9ab9be3b54fb1c92b58c9d619a8303a0",
".git/objects/5e/1ad953892b2719abec0aca69750fe6ce1247e6": "088be6e2c6557c6f863fd72a5d68d27f",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/62/b3b2bcf61f6a97260fa8a0b804c7d9e6a2e328": "99a8042f3e4113ba2e58a6a5c6e5069f",
".git/objects/75/ac9fb2e72e748d671c4a968bd55e57667cdbba": "faa3bfb9b74b3e39b540afe007504fc5",
".git/objects/78/079a2e4810e26b0452e46d7e79c7d32cfc83c2": "1c013f18bdb267007070d6cc03d5cf4a",
".git/objects/79/b6e1678dcb288a588648f3278d01bbf038f276": "b838e9fcd79de54e19c59d6b6c1af096",
".git/objects/82/1f95ed3964cc164d681b40e7fb990e2865eb42": "e37c75063c41dcfc09e1a772b9b20b03",
".git/objects/84/5609bde2807bce3c9f429706a632999bb80f39": "5893d17c6abe5caeba84ccb0bf82df76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7af9ed1c942424abe7fa482e23da85c0ef84cd": "c594857c2781fe850c29b406abeaeb2e",
".git/objects/8e/44026bdf64c2b68f95a3155cdde764053f406a": "1b504537ffe094dfcafb81d99b605046",
".git/objects/91/7660a34812b7570287c0fc0285df89e1f2f259": "0ef380173744878f9b2f67a097322a25",
".git/objects/93/0e73c40c47c7923567b1fbf1b7cc961078def3": "97ffd8f6cc9235bba3e84010b3c5baf9",
".git/objects/93/217aaf33d4c09f06fa38e121ea3b4b99f853c8": "97b22049375eb7e4795cdc05a6ceb17b",
".git/objects/93/be9e2b529304610ab75b2592f2667ead93dfb6": "d7a1ba3de7842a3f9da474af02ea2b57",
".git/objects/94/8031319f096f43b77a3d3f177c04f9b931f95c": "71a41f1212d5d81393f93fa805a199c6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/f3888ce776426c39c506bd9e45156363368167": "140418bed70e964de09cbef25c925271",
".git/objects/9a/70667f21431c46605be0da7fa09e11c9822b49": "1d0ff24b936bd56e30036df8d823aee9",
".git/objects/9b/e5ccbd8a452df79d9fd67e14a8b414c996dd51": "c998a8fcbad4fa9955e7aba4e48dab79",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a0/abc15e3a7c0a6448da37bf3f94576db571993e": "f4b4e3416920766c496371e983501364",
".git/objects/a7/ac37dfb64ace9106f06b554754f286491aef09": "3dfaae7628335485314d55a6d9362c06",
".git/objects/a9/c27ee4836148d35351bd9190203a037df19ecd": "ca531a17a9f20e6707c4276061e4ab82",
".git/objects/b2/449e2ed3b3e07ab5d24fa71f3cec14e3e1d091": "a958d9e349291826c9209278b07d3e8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6f8171201d866ce291f24822d413cd4be04b53": "114b30f068435243309fbbf4ffc48216",
".git/objects/b9/13f426405c7d01190d387a81c1973761057eed": "3668d397877571d2bb4fae5f5b1ccbc7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c1/31d63512ac2aad90688bed8882e16e8768eaaf": "1767b9500aa356a8bc640f1789d61235",
".git/objects/c1/3ff02f8fe9b77d21266436c2d881dba7c8f1d4": "eb8811f57c221ea54c20ceb85f7f06b0",
".git/objects/c6/08472a056e406f6ac3bc37851c5bf66f1dfb54": "33856a050c1eb17582ba93b5d9f3d149",
".git/objects/c9/5a08c99d3283727663b631a9cc9562a9da5cd3": "5f55066b65d8eea8184c2d021501473d",
".git/objects/ca/c92ce639d8a1832224fbe37ac7f1545dc8f026": "ff2d35a99a441df6d5f5c64c74ad1571",
".git/objects/ca/ecd1ee63591fcd4a3ff7f3a7447bfce55d171d": "f5b432026a6482c64daa1b9fe0af7862",
".git/objects/ce/a7d72cedf33a775152b34ddd327b38f0d20ee6": "ec271256ef2ed2b051b40f5fc3225e4c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/15b4821d29a2653b9313e5598e5b15d0526ba9": "22a98d0cab105d181979cfac1b274931",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/50a6e477b4b5a8cf2efffe075d20b10f72622a": "4dd12162ae894ceb70b83d7b17f08034",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/7780edc6a22aca7c28f7ff5f7fad0b7c0275c9": "5149ad0b2e81eb09a126e9ef38e9fcc6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e5fe5f183f89c3c31069084be838bbae59ab84": "18f428dd4cf61f320a51a6653d6e8a17",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/ec/c9b82a2d48bd90588d607b953356df873ce718": "1f5d1c9dcf76d702647918f3c880bb8c",
".git/objects/f2/95e5bca9050c981e267b16183ad16919178a1c": "b55bc91d58b1f7fc322c5a796242dbc7",
".git/objects/f2/eb9e455758490b3696643c6fcf1d38bd14fe6e": "02dd8a79c29e9664c98b7d901f0f31fe",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/ff/00b30677d1b11a326e09b566482a041ad161ce": "c972e3cfdcc31cf0efdbd68611f4e5a6",
".git/refs/heads/main": "dd50c09fff0c98b9558f634d4b34123a",
".git/refs/remotes/origin/main": "dd50c09fff0c98b9558f634d4b34123a",
"assets/AssetManifest.bin": "42e3cc13ff8987e31b548c9e3aed680b",
"assets/AssetManifest.bin.json": "281740b26c817dbef27f7a372e176c3f",
"assets/AssetManifest.json": "2d1b8d85fb632d75dba97a99949ca692",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/icons/bag.svg": "0c97d6e28bd5ed8a82c4681cae202b40",
"assets/assets/icons/chat.svg": "fa425262b057b55344d95c6d5b292b45",
"assets/assets/icons/filter.svg": "fbc3fded374ed6b960ce0f46b734b3bd",
"assets/assets/icons/home.svg": "24e2ad3dd440a339ce72342d96ec1a6f",
"assets/assets/icons/profile.svg": "2f8901d01bc25027e4daa6adc60804b0",
"assets/assets/icons/search.svg": "1376ffd72d390011db89a35c9719299e",
"assets/assets/icons/wallet.svg": "0ad56e31478456660032e9daa141520a",
"assets/assets/images/black_coffee.png": "10d18c88a53d6bbcf5cff10c42193a86",
"assets/assets/images/coffee.jpg": "6c4051ffc4a1ac7072c67bb8368f343f",
"assets/assets/images/coffee2.png": "0918d4c5d997e217b4c6615bca158178",
"assets/assets/images/cup.png": "e19fe21722e812b2363e3780617690e7",
"assets/assets/images/error.png": "3e011ae22cc904e1a11d484c8474c5e9",
"assets/assets/images/image.png": "259fb1aac0f0b6dac22f1a519d690deb",
"assets/assets/images/logo_assignment.png": "fafa7265640db2b7ef96aebb9ff16f5e",
"assets/assets/images/swift_cafe.png": "ddddda8cd21b71c1bf984c4cfd75c7f8",
"assets/assets/images/veg.png": "600836b7e31fc4fcc78476509f010c56",
"assets/FontManifest.json": "bca619855852aae6eed8fa0ab96b2883",
"assets/fonts/MaterialIcons-Regular.otf": "95ca8b3b0491eee5f8f4b83e01b43e22",
"assets/NOTICES": "5ca90072e03a4aa61869f33e4117ea38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eccbca098503347c3b1814aa0f4ea9a5",
"/": "eccbca098503347c3b1814aa0f4ea9a5",
"main.dart.js": "5f9910b2ff56c0ca5465a678dc70c142",
"manifest.json": "d2f6c1dc28c47857c427d9b0184364c1",
"version.json": "a1561810196a3ca0cdedf32d733b6779"};
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
