const VERSION = 'v1';

self.addEventListener('install', e => {
    e.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;

    if (request.method !== 'GET') {
        return;
    }

    event.respondWith(cacheResponse(request));

    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/js/index.js',
        // '/assets/js/MediaPlayer.js',
        // '/assets/js/plugins/AutoPlay.js',
        // '/assets/js/plugins/AutoPause.js',
        // '/assets/css/main.css',
        // '/assets/video/video.mp4',
    ])
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

