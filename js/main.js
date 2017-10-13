$(document).ready(function () {

    'use strickt';

    // add slider height
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(windowHeight - (upperHeight + navHeight));

    // centering slider heading in slider section
    $('.slider .overlay h1').centertop();
    // centering fontawesome in featured work section
    $('.our-work .shuffle-images .col-sm .overlay i').centerany();

    // shuffle images section
    $('.our-work .our-feilds span').on('click', function () {
        // make controller active
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            // display all imgs
            $('.our-work .shuffle-images .col-sm').css('opacity', '1');
        } else {
            // hide all imgs except imgs that have controller data class
            $('.our-work .shuffle-images .col-sm').css('opacity', '.09');
            $('.' + $(this).data('class')).css('opacity', '1');
        }
    });


    // change the color of footer .links ul li:before 
    $('footer .links ul li').on('mouseenter mouseleave', function () {
        $(this).toggleClass('change-color');
    });

    // change navbar style when scrolling
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.slider').innerHeight()) {


        } else {

        }

    });
    // add class active to navigation when scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.our-work').offset().top - 100) {
            $('#w').addClass('active').siblings().removeClass('active');
            if ($(window).scrollTop() >= $('.latest-post').offset().top - 100) {
                $('#b').addClass('active').siblings().removeClass('active');
                if ($(window).scrollTop() >= $('.contact-us').offset().top - 100) {
                    $('#c').addClass('active').siblings().removeClass('active');
                }
            }
        } else {
            $('#a').addClass('active').siblings().removeClass('active');
        }


    });



});
