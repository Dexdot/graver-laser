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
      infinite: true,
      draggable: false,
      // autoplay: true,
      // autoplaySpeed: 8000,
      dots: true,
      arrows: false,
    });
    $('.slick-dots li button').html('<span class="pgtn__line"></span>');

});