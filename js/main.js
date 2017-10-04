$(document).ready(function () {
    'use strickt';

    // add slider height

    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(windowHeight - (upperHeight + navHeight));
    $('.carousel').carousel();

    $('.slider .overlay h1').centerany();


});
