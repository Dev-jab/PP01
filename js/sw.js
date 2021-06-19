// asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_PWA';

// Archivos a cachear en la app
var urlsToCache = [
	'./',
	'./css/all.css',
	'./css/all.min.css',
	'./css/bootstrap.css',
	'./css/bootstrap.min.css',
	'./css/estilos.css',
	'./css/swiper.min.css',
	'./fonts/fa-brands-400.eot',
	'./fonts/fa-brands-400.svg',
	'./fonts/fa-brands-400.ttf',
	'./fonts/fa-brands-400.woff',
	'./fonts/fa-brands-400.woff2',
	'./fonts/fa-regular-400.eot',
	'./fonts/fa-regular-400.svg',
	'./fonts/fa-regular-400.ttf',
	'./fonts/fa-regular-400.woff',
	'./fonts/fa-regular-400.woff2',
	'./fonts/fa-solid-900.eot',
	'./fonts/fa-solid-900.svg',
	'./fonts/fa-solid-900.ttf',
	'./fonts/fa-solid-900.woff',
	'./fonts/fa-solid-900.woff2',
	'./images/icons96PWA.png',
	'./images/imagesfondo-slide-1.jpg',
	'./images/imagesfondo-slide-2.jpg',
	'./images/imagesfondo-slide-3.jpg',
	'./js/bootstrap.min.js',
	'./js/ejemplo.js',
	'./js/jquery.malihu.PageScroll2id.min.js',
	'./js/jquery.stickit.min.js',
	'./js/jquery-3.3.1.min.js',
	'./js/mis-scripts.js',
	'./js/popper.min.js',
	'./js/sw.js',
	'./js/swiper.min.js',
];

// evento Install
self.addEventListener('install', e=> {
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => {
				return cache.addAll(urlsToCache)
							.then(() => { 
							 self.skipWaiting();	
							});
			})
			.catch(err => console.log('No se ha registrado el cache', err))
	); 
});

// evento Activate
// que la app funcione sin conexion
self.addEventListener('activate', e=> {
	const cacheWhitelist = [CACHE_NAME];
	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})						
				);
			})		
			.then(()=> {
				// Activar cache
				self.clients.claim();
			})
	);

}); 


// evento fetch 
self.addEventListener('fetch', e=> {
	e.respondWith(
		caches.match(e.request)
			.then(res => {
				if(res){
					// devuelvo datos desde cache
					return res;
				}

				return fetch(e.request);
			}) 
	);
});
				


