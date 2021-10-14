$(document).ready(function () {

    $('.fa-bars').on('click', function () {
        $('.categories').toggleClass('hide');
    });

    $('.hero-cover').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        smartSpeed: 1000,
        dots: true,
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".xzoom, .xzoom-gallery").xzoom({
        tint: '#333',
        Xoffset: 15,
        title: true,
        position: "lens",
        lensShape: "circle",
        tint: "#000",
        fadeOut: true,
        bg: true

    });


});