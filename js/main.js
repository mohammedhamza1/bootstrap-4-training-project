$(document).ready(function () {

    'use strickt';

    // add slider height

    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(windowHeight - (upperHeight + navHeight));

    // trigger the carousel
    $('.carousel').carousel();


    // centering slider heading
    $('.slider .overlay h1').centertop();
    // centering fontawesome in overlay
    $('.our-work .shuffle-images .col-sm .overlay i').centerany();


    // shuffle images section
    $('.our-work .our-feilds span').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.our-work .shuffle-images .col-sm,.our-work .shuffle-images .col-sm .overlay').css('opacity', '.09');
        } else {

        }
    });


});
