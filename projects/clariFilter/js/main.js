/*
   CounterUp
   ========================================================================== */
    // jQuery(document).ready(function( $ ) {
    //   $('.counter').counterUp({
    //     time: 500
    //   });
    // });


/*
   Sticky Nav
   ========================================================================== */
   $(window).on('scroll', function() {
       if ($(window).scrollTop() > 200) {
           $('.header-top-area').addClass('menu-bg');
       } else {
           $('.header-top-area').removeClass('menu-bg');
       }
   });

/*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/*
   One Page Navigation & wow js
   ========================================================================== */
  jQuery(function($) {
      //Initiat WOW JS
      new WOW().init();

      // one page navigation
      $('.main-navigation').onePageNav({
              currentClass: 'active'
      });
  });

  jQuery(document).ready(function() {

      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

    //   $(window).on('scroll', function() {
    //       if ($(window).scrollTop() > 200) {
    //           $('.fixed-top').removeClass('hide-logo');
    //       } else {
    //           $('.fixed-top').addClass('hide-logo');
    //       }
    //   });

  });

  /* Nivo Lightbox
  ========================================================*/
  jQuery(document).ready(function( $ ) {
     $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

  });

/*
   Page Loader
   ========================================================================== */
   $(window).load(function() {
    "use strict";
    $('#loader').fadeOut();
   });
