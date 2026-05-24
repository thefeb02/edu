(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    var $backToTop = $('.back-to-top');

    if (!$backToTop.length) {
        $backToTop = $('<a>', {
            href: '#',
            class: 'btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top',
            'aria-label': 'Back to top'
        }).html('<i class="fa fa-angle-double-up"></i>');

        $('body').append($backToTop);
    }

    function toggleBackToTopButton() {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn('slow');
        } else {
            $backToTop.fadeOut('slow');
        }
    }

    toggleBackToTopButton.call(window);
    $(window).on('scroll', toggleBackToTopButton);

    // Keep navbar visible while scrolling down
   $(document).ready(function () {

    var $navbar = $('.navbar-modern.sticky-top');

    if (!$navbar.length) {
        return;
    }

    var thresholdTop = $navbar.offset().top;

    function updateStickyNavbar() {

        if ($(window).scrollTop() > thresholdTop) {

            $navbar.addClass('is-fixed');
            $('body').addClass('has-fixed-navbar');

        } else {

            $navbar.removeClass('is-fixed');
            $('body').removeClass('has-fixed-navbar');
        }
    }

    updateStickyNavbar();

    $(window).on('scroll resize', updateStickyNavbar);

});
    // FAQ show more / show less
    $(document).ready(function () {
        var $faqToggleBtn = $('#faqToggleBtn');
        var $faqExtras = $('.faq-extra');

        if (!$faqToggleBtn.length || !$faqExtras.length) {
            return;
        }

        $faqToggleBtn.on('click', function () {
            var isHidden = $faqExtras.first().hasClass('d-none');

            if (isHidden) {
                $faqExtras.removeClass('d-none');
                $faqToggleBtn.text('Show less').attr('aria-expanded', 'true');
            } else {
                $faqExtras.find('.collapse.show').collapse('hide');
                $faqExtras.addClass('d-none');
                $faqToggleBtn.text('Show more').attr('aria-expanded', 'false');
            }
        });
    });

    $backToTop.on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return true;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

document.body.style.margin = "0";