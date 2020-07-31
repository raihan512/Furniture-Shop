$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000,
        pause: "hover"
    });

    //Sticky Menu
    $('.sticky-menu').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav')
        } else {
            $('nav').removeClass('sticky-nav')
        }
    });

});