!function(){var e=String(Date.now()),n=["/","/bundle.css","/bundle.js","assets/icon.png"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(n){return n||self.fetch(e.request)}))}),self.addEventListener("install",function(t){t.waitUntil(self.caches.open(e).then(function(e){return e.addAll(n)}))}),self.addEventListener("activate",function(n){n.waitUntil(self.caches.keys().then(function(n){return Promise.all(n.map(function(t,s){if(n[s]!==e)return self.caches.delete(n[s])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map