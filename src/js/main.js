$(document).ready(function() {
  // Menu navigation script (toggling)
    $('.hamburger, .nav__link').click(function() {
      $('.hamburger').toggleClass('is-active');
      $('.nav').toggleClass('__active');
    });


// Smooth scroll
    // $("a[href*='#']").on('click', function(event) {
    //   event.preventDefault();
    //   var target = $(this).attr('href');
    //   var top = $(target).offset().top;
    //   $('html, body').animate({
    //     scrollTop: top},
    //     1300)
    // });
});