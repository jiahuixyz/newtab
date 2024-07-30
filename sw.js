const CACHE_NAME = `my-newtab-v1`;
const PRE_CACHED_RESOURCES = [
    '/newtab/',
    '/newtab/index.html',
    '/newtab/index.js',
    '/newtab/motto.js',
    '/newtab/favicon.ico',
    '/newtab/index.css'
];

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {

    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRE_CACHED_RESOURCES);
    })());

    // const filesUpdate = cache => {
    //     const stack = [];
    //     PRE_CACHED_RESOURCES.forEach(file => stack.push(
    //         cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
    //     ));
    //     return Promise.all(stack);
    // };
    //
    // event.waitUntil(caches.open(CACHE_NAME).then(filesUpdate));

});

self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        // Get the resource from the cache.
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
            return cachedResponse;
        } else {
            try {
                // If the resource was not in the cache, try the network.
                const fetchResponse = await fetch(event.request);

                // Save the resource in the cache and return it.
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
            } catch (e) {
                // The network failed.
            }
        }
    })());
});