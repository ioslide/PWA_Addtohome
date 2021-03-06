const version = "2.0",
    preCache = "PRECACHE-" + version,
    cacheList = [
        "/js/addtohomescreen.min.js",
        "/js/application.js",
        "/style/addtohomescreen.css"
    ];

/*  Service Worker Event Handlers */
self.addEventListener( "install", function ( event ) {
    console.log( "Installing the service worker!" );
    self.skipWaiting();
    caches.open( preCache )
        .then( cache => {
            cache.addAll( cacheList );
        } );

} );

self.addEventListener( "activate", function ( event ) {
    event.waitUntil(
        caches.keys().then( cacheNames => {
            cacheNames.forEach( value => {
                if ( value.indexOf( version ) < 0 ) {
                    caches.delete( value );
                }
            } );
            console.log( "service worker activated" );
            return;
        } )

    );

} );

self.addEventListener( "fetch", function ( event ) {
    event.respondWith(
        caches.match( event.request )
        .then( function ( response ) {
            if ( response ) {
                return response;
            }
            return fetch( event.request );
        } )
    );
} );
