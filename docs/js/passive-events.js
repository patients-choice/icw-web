// Add passive event listener support for native event listeners
(function() {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {}

    // Override addEventListener to make all touch events passive by default
    var originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' || type === 'mousewheel') {
            if (options && typeof options === 'object') {
                options.passive = options.passive !== false;
            } else if (options === undefined) {
                options = { passive: true };
            }
        }
        return originalAddEventListener.call(this, type, listener, options);
    };

    // Handle Google Maps specific events
    window.addEventListener('load', function() {
        var mapsIframe = document.querySelector('iframe[src*="google.com/maps"]');
        if (mapsIframe) {
            mapsIframe.addEventListener('load', function() {
                try {
                    var mapsWindow = mapsIframe.contentWindow;
                    if (mapsWindow) {
                        var mapsAddEventListener = mapsWindow.addEventListener;
                        mapsWindow.addEventListener = function(type, listener, options) {
                            if (type === 'touchstart' || type === 'touchmove') {
                                if (options && typeof options === 'object') {
                                    options.passive = options.passive !== false;
                                } else if (options === undefined) {
                                    options = { passive: true };
                                }
                            }
                            return mapsAddEventListener.call(this, type, listener, options);
                        };
                    }
                } catch (e) {
                    console.warn('Could not modify Google Maps iframe event listeners:', e);
                }
            });
        }
    });
})();

// Add passive event listener support for jQuery
(function() {
    function initJQueryPassiveSupport() {
        if (typeof jQuery === 'undefined') {
            // If jQuery isn't loaded yet, wait for it
            setTimeout(initJQueryPassiveSupport, 100);
            return;
        }

        if (typeof jQuery.fn.on === 'function') {
            var originalOn = jQuery.fn.on;
            jQuery.fn.on = function() {
                var args = Array.prototype.slice.call(arguments);
                if (args.length > 1 && typeof args[1] === 'object' && args[1] !== null) {
                    if (args[0].indexOf('touch') === 0 || args[0] === 'wheel' || args[0] === 'mousewheel') {
                        args[1] = jQuery.extend({}, args[1], { passive: true });
                    }
                }
                return originalOn.apply(this, args);
            };
        }
    }

    // Start the initialization
    initJQueryPassiveSupport();
})(); 