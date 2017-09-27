$(document).ready(function() {
  // Menu navigation script (toggling)
    $('.hamburger, .nav__link').click(function() {
      $('.hamburger').toggleClass('is-active');
      $('.nav').toggleClass('__active');
    });


    var tab = $('.pgtn__item');
      tab.click(function() {
        $('.pgtn__line').css('background-color', '#bdbdbd');
        var target = $(this).attr('data-target');
        $(this).children().css('background-color', '#ff8000');
        $('.hw__slide').hide();
        $('.hw__slide').fadeOut(300);
        $('.' + target).fadeIn(300);
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