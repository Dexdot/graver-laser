$(document).ready(function() {
// Menu navigation script (toggling)
    $('.hamburger, .nav__link').click(function() {
      $('.hamburger').toggleClass('is-active');
      $('.nav').toggleClass('__active');
    });

// Smooth scroll
    $("a[href*='#']").on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      var top = $(target).offset().top;
      $('html, body').animate({
        scrollTop: top},
        1000)
    });

// Slick slider
    $('.hw').slick({
      speed: 1400,
      draggable: false,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: true,
      prevArrow: '<span class="pgtn__wrap pgtn__wrap--left" data-target="mark"><span class="pgtn__line"></span></span>',
      nextArrow: '<span class="pgtn__wrap pgtn__wrap--right" data-target="mercury"><span class="pgtn__line"></span></span>'
    });


});