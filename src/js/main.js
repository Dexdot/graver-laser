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

// Service slide height
    var siemaSlideHeight = +$('.service__info').outerHeight();
    $('.service__slide').height(siemaSlideHeight);
    window.addEventListener('resize', function () {
      var siemaSlideHeight = +$('.service__info').outerHeight();
      $('.service__slide').height(siemaSlideHeight);
    });

});

// Siema
    var mySiema = new Siema({
      selector: '.service__slider',
      duration: 800,
      easing: 'ease-out'
    });
    var siemaBtn0 = document.querySelector('.siema__btn-0');
    var siemaBtn1 = document.querySelector('.siema__btn-1');
    var siemaBtn2 = document.querySelector('.siema__btn-2');
    var siemaBtn3 = document.querySelector('.siema__btn-3');
    var siemaBtn4 = document.querySelector('.siema__btn-4');

    siemaBtn0.addEventListener('click', function () {
      $('.siema__btn .pgtn__line').css('background', '#fff');
      $(this).children().css('background', '#ff8000');
      return mySiema.goTo(0);
    });
    siemaBtn1.addEventListener('click', function () {
      $('.siema__btn .pgtn__line').css('background', '#fff');
      $(this).children().css('background', '#ff8000');
      return mySiema.goTo(1);
    });
    siemaBtn2.addEventListener('click', function () {
      $('.siema__btn .pgtn__line').css('background', '#fff');
      $(this).children().css('background', '#ff8000');
      return mySiema.goTo(2);
    });
    siemaBtn3.addEventListener('click', function () {
      $('.siema__btn .pgtn__line').css('background', '#fff');
      $(this).children().css('background', '#ff8000');
      return mySiema.goTo(3);
    });
    siemaBtn4.addEventListener('click', function () {
      $('.siema__btn .pgtn__line').css('background', '#fff');
      $(this).children().css('background', '#ff8000');
      return mySiema.goTo(4);
    });