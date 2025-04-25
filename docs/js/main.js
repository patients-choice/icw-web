(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        // Hide spinner when page is fully loaded
        $(window).on('load', function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        });
        
        // Also hide spinner after a maximum timeout (5 seconds) as a fallback
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 5000);
    };
    spinner();
    
    
    // Initiate the wowjs with optimized settings
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,          // Trigger animations when element is 50px from viewport
        mobile: true,        // Enable animations on mobile devices
        live: true,          // Look for new WOW elements
        callback: function(box) {
            // Callback when animation completes
        },
        scrollContainer: null // Optional scroll container selector
    }).init();

    // Add custom animation durations
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.wow');
        elements.forEach(element => {
            // Faster animations for service boxes
            if (element.closest('.service')) {
                element.style.animationDuration = '0.5s';
            }
            // Slightly faster animations for other elements
            else {
                element.style.animationDuration = '0.8s';
            }
        });
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    if (document.querySelector('.testimonial-carousel')) {
        new Swiper('.testimonial-carousel', {
            slidesPerView: 1,
            spaceBetween: 25,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    }
    
})(jQuery);

