"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","45a4a5a0380bb64f835a4d6c99eb23f1"],["./static/css/main.2fdd8a81.css","bd459715b801d572450080f0fdaf0a96"],["./static/js/main.acdce35d.js","a801e7f817cabf9dfe53381257a2f8de"],["./static/media/Roboto-Black.2a82f89b.eot","2a82f89b0a35ee7f9d45ec2ec862f7b2"],["./static/media/Roboto-Black.2b8d6922.woff2","2b8d6922c2c9957356bc50f475de4e79"],["./static/media/Roboto-Black.44236ad5.ttf","44236ad507eddcbfd986333f38bd13d5"],["./static/media/Roboto-Black.4c3b6229.woff","4c3b6229efe63a13dbb4c3c32e292e61"],["./static/media/Roboto-Black.ab04c761.svg","ab04c7611d94b690aee3c08a18ae8748"],["./static/media/Roboto-BlackItalic.1f37c754.svg","1f37c7545ae9f63d2279f99875678396"],["./static/media/Roboto-BlackItalic.38d14dd4.woff2","38d14dd4ff163c34e45b9701668652d4"],["./static/media/Roboto-BlackItalic.3a99796b.woff","3a99796b2d8592471fcf278df4334d5d"],["./static/media/Roboto-BlackItalic.4b7407c6.eot","4b7407c6740b8294d97a7bf88995c44d"],["./static/media/Roboto-BlackItalic.ad0f284c.ttf","ad0f284c7113fd0aaf39b0e59b6afb09"],["./static/media/Roboto-Bold.56a76a22.ttf","56a76a220d9c9765946d0802d4d661c4"],["./static/media/Roboto-Bold.ab96cca2.woff2","ab96cca26751239828b8e9c524cca5bb"],["./static/media/Roboto-Bold.ad140ff0.woff","ad140ff02a7091257e2b31619106194e"],["./static/media/Roboto-Bold.c7f4667b.svg","c7f4667b59b9bc95130e697009d3829c"],["./static/media/Roboto-Bold.c8bcb1cb.eot","c8bcb1cb78f9e45e2bcbf626bae19f0b"],["./static/media/Roboto-BoldItalic.355e3887.woff2","355e388740673054493ce5fe32e37596"],["./static/media/Roboto-BoldItalic.4b2cc52b.eot","4b2cc52b05e2a960c4f11f15490d8a47"],["./static/media/Roboto-BoldItalic.a7dce23c.woff","a7dce23c0dd99a4afa5cdb4925f0358a"],["./static/media/Roboto-BoldItalic.c2e0f75d.svg","c2e0f75da3677f645034d61c0445c9ba"],["./static/media/Roboto-BoldItalic.d23d5bda.ttf","d23d5bdadc495f12ef69192243e95e4d"],["./static/media/Roboto-Light.054fa50b.svg","054fa50baa6598a7bf0c6deec135d3a4"],["./static/media/Roboto-Light.18307918.eot","183079184d96a491f16e3cc70414975d"],["./static/media/Roboto-Light.37fbbbad.woff","37fbbbad5577a95bdf058307c717c882"],["./static/media/Roboto-Light.8e0860f3.woff2","8e0860f3581b197e9fa4713a706c7bcc"],["./static/media/Roboto-Light.a2b8c641.ttf","a2b8c641546c0e5a95e22e5a262f0357"],["./static/media/Roboto-LightItalic.056caeab.ttf","056caeabe95749fe2b973bb9a0cd0776"],["./static/media/Roboto-LightItalic.1a9e39e5.svg","1a9e39e536aed26b863b243e68f97e3a"],["./static/media/Roboto-LightItalic.879d940b.woff2","879d940bccbb25f6096ec4361154d469"],["./static/media/Roboto-LightItalic.c7b4e746.woff","c7b4e746cf8ecbf412fc944146154d24"],["./static/media/Roboto-LightItalic.cdd1c486.eot","cdd1c486770034a6122e28a1aa165373"],["./static/media/Roboto-Medium.2741a14e.woff2","2741a14e49524efa6059c735010239d0"],["./static/media/Roboto-Medium.2b4f394c.svg","2b4f394ce87ea4e7a68bd9d0cbba7c16"],["./static/media/Roboto-Medium.303ded64.woff","303ded6436dcf7ea75157e2aeff876ce"],["./static/media/Roboto-Medium.76cad5ba.eot","76cad5ba6b8a38a77fe037807d2bc8e5"],["./static/media/Roboto-Medium.c54f2a3e.ttf","c54f2a3ee42d2a58d82f1da293995d20"],["./static/media/Roboto-MediumItalic.7a49ce79.eot","7a49ce79b6089d4d37bf47225c7e5e32"],["./static/media/Roboto-MediumItalic.da059a73.woff","da059a7386fea889c55cce11253df175"],["./static/media/Roboto-MediumItalic.eb65fb18.svg","eb65fb18d4446e4ac27d6e27c25fc224"],["./static/media/Roboto-MediumItalic.f10d1f42.woff2","f10d1f42838680a70ac2b66e62887106"],["./static/media/Roboto-MediumItalic.fa183350.ttf","fa183350bf6b814ae5523c8d49de7c73"],["./static/media/Roboto-Regular.081b11eb.woff","081b11ebaca8ad30fd092e01451015dc"],["./static/media/Roboto-Regular.6a561d68.eot","6a561d68369fd1fb9768cbc8641e5d95"],["./static/media/Roboto-Regular.766c8926.svg","766c8926f6d9061fef24cd7269a341d0"],["./static/media/Roboto-Regular.99b14f0d.ttf","99b14f0da0591e0d71678dc163eaff8b"],["./static/media/Roboto-Regular.b2a6341a.woff2","b2a6341ae7440130ec4b4b186aff8413"],["./static/media/Roboto-RegularItalic.527502d7.svg","527502d7927a41ca0b6a194f9cb34656"],["./static/media/Roboto-RegularItalic.8add1ba3.woff","8add1ba317c27e39b7781c95fa174671"],["./static/media/Roboto-RegularItalic.90dbf902.ttf","90dbf902b8d0592e1beb7c8829bcc1cb"],["./static/media/Roboto-RegularItalic.df8e3a9b.woff2","df8e3a9b9aed943417973988732b928f"],["./static/media/Roboto-RegularItalic.f3660f49.eot","f3660f493ea5e520648477d2b273db32"],["./static/media/Roboto-Thin.790ebf41.woff2","790ebf41d0214f5eda4ef61263ed75f8"],["./static/media/Roboto-Thin.90d3804f.woff","90d3804f0231704c15ccc5861245e8ce"],["./static/media/Roboto-Thin.ba422f71.svg","ba422f71e799f3d29cbf99e6abded2bd"],["./static/media/Roboto-Thin.c25fd8d0.eot","c25fd8d00fd9f570545d6240f6ec459a"],["./static/media/Roboto-Thin.cc85ce37.ttf","cc85ce37b4256966e6f3a3559239c5c0"],["./static/media/Roboto-ThinItalic.11b5cc95.ttf","11b5cc9584f2c007a22966a031ead20e"],["./static/media/Roboto-ThinItalic.21e9a2e5.svg","21e9a2e5ed0b0d8d1bb7fd1e1f71104d"],["./static/media/Roboto-ThinItalic.58829329.woff","588293290e86dad97fcf33ed1719c083"],["./static/media/Roboto-ThinItalic.64ca718f.eot","64ca718f48db91b27e8c134ad25d0066"],["./static/media/Roboto-ThinItalic.8a2c1a5d.woff2","8a2c1a5de09de8bb2c45390a10f90c2b"],["./static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["./static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["./static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["./static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["./static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["./static/media/webfont-medical-icons.2c059384.eot","2c059384791acd6c4f18a40d00b75874"],["./static/media/webfont-medical-icons.465f38e2.svg","465f38e2140f97345af7f6d8b9160c1e"],["./static/media/webfont-medical-icons.586744dc.ttf","586744dc06e85516d573d4491bf40d8a"],["./static/media/webfont-medical-icons.9d55dcb2.woff","9d55dcb28bd60cdc12896b14ed741b39"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var o="./index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(o,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});