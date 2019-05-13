"use strict";
jQuery(document).ready(function ($) {

// ======
// tab
// ======

var widget = $('.tabs-colorful-icons');

var tabs = widget.find('ul a'),
    content = widget.find('.tabs-content-placeholder > div');

tabs.on('click', function (e) {

    e.preventDefault();

    // Get the data-index attribute, and show the matching content div

    var index = $(this).data('index');

    tabs.removeClass('tab-active');
    content.removeClass('tab-content-active');

    $(this).addClass('tab-active');
    content.eq(index).addClass('tab-content-active');

});

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();



//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



});
