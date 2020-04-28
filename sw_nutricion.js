var MiCache = "MiCache_v1";
var archivos = [
  "index.html",
  "css/estilos.css",
  "css/fuentes.css",
  "css/normalize.css",
 
  "js/app.js",
  "sw_nutricion.js",
  "js/main.js",
  "images/icons/nutricion-16.png",
  "images/icons/nutricion-32.png", 
  "images/icons/nutricion-72.png",
  "images/icons/nutricion-128.png",
  "images/icons/nutricion-152.png",
  "images/icons/nutricion-180.png",
  "images/icons/nutricion-192.png",
  "images/icons/nutricion-256.png",
  "images/icons/nutricion-512.png",
  "manifest.json"
  
];


//Borrar caches diferentes al actual
  self.addEventListener('activate', function(event){
    event.waitUntil(
        // Get all the cache name
        caches.keys().then(function(cacheNames){
            // wait all cache deleted
            return Promise.all(
                // filter out staticCacheName (only keep staticCacheName)
                cacheNames.filter( function(name){
                    return name.startsWith('MiCache') && name != MiCache;
                }).map(function(name){
                    // delete cache, return promise
                    return caches.delete(name);
                })
            )
        })
    .then(self.clients.claim())); //this line is important in some contexts
});

  self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(MiCache).then(function(cache) {
        console.log('Cache: ', MiCache, 'abierto');
        return cache.addAll(archivos);
      },
      function(error){
        console.log('Datos recargados desde cache')
      }
      )
    );
  });

  self.addEventListener('fetch', function(evento) {
    evento.respondWith(
      caches.match(evento.request).then(function(cacheRespuesta){
        return(cacheRespuesta) || fetch(evento.request);
        })
       );
      });