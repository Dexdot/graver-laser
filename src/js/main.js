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
      swipe: false,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      arrows: false,
    });
    $('.slick-dots li button').html('<span class="pgtn__line"></span>');

// Service slide-lg height
  var siemaSlideLgHeight = +$('.service__info--lg').outerHeight();
  $('.service__slider--lg .service__slide').height(siemaSlideLgHeight);
  window.addEventListener('resize', function () {
    var siemaSlideLgHeight = +$('.service__info--lg').outerHeight();
    $('.service__slider--lg .service__slide').height(siemaSlideLgHeight);
  });

// Service slide-lr height
  var siemaSlideLrHeight = +$('.service__info--lr').outerHeight();
  $('.service__slider--lr .service__slide').height(siemaSlideLrHeight);
  window.addEventListener('resize', function () {
    var siemaSlideLrHeight = +$('.service__info--lr').outerHeight();
    $('.service__slider--lr .service__slide').height(siemaSlideLrHeight);
  });

// Service slide-bx height
  var siemaSlideBxHeight = +$('.service__info--bx').outerHeight();
  $('.service__slider--bx .service__slide').height(siemaSlideBxHeight);
  window.addEventListener('resize', function () {
    var siemaSlideBxHeight = +$('.service__info--bx').outerHeight();
    $('.service__slider--bx .service__slide').height(siemaSlideBxHeight);
  });

// FancyBox
    $("[data-fancybox]").fancybox({
      protect: true,
      animationEffect : "fade", // fade, zoom, zoom-in-out
      transitionEffect : "fade", // fade, slide, circular, tube, rotate,
    });
});

// Siema

    /* Laser engrav */
      function printSlidesLg() {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        var sBtn = '.siema__btns.-lg .siema__btn-'+this.currentSlide;
        $(sBtn).children().css('background', '#ff8000');
      };

      var lgSiema = new Siema({
        selector: '.service__slider',
        duration: 800,
        easing: 'ease-out',
        onInit: printSlidesLg,
        onChange: printSlidesLg
      });
      var siemaBtn0 = document.querySelector('.siema__btn-0');
      var siemaBtn1 = document.querySelector('.siema__btn-1');
      var siemaBtn2 = document.querySelector('.siema__btn-2');
      var siemaBtn3 = document.querySelector('.siema__btn-3');
      var siemaBtn4 = document.querySelector('.siema__btn-4');

      siemaBtn0.addEventListener('click', function () {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lgSiema.goTo(0);
      });
      siemaBtn1.addEventListener('click', function () {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lgSiema.goTo(1);
      });
      siemaBtn2.addEventListener('click', function () {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lgSiema.goTo(2);
      });
      siemaBtn3.addEventListener('click', function () {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lgSiema.goTo(3);
      });
      siemaBtn4.addEventListener('click', function () {
        $('.siema__btns.-lg .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lgSiema.goTo(4);
      });

    /* Laser cut */
      function printSlidesLr() {
        $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
        var sBtn = '.siema__btns.-lr .siema__btn-'+this.currentSlide;
        $(sBtn).children().css('background', '#ff8000');
      };

      var lrSiema = new Siema({
        selector: '.service__slider--lr',
        duration: 800,
        easing: 'ease-out',
        onInit: printSlidesLr,
        onChange: printSlidesLr
      });

      var siemaBtn5 = document.querySelector('.siema__btns.-lr .siema__btn-0');
      var siemaBtn6 = document.querySelector('.siema__btns.-lr .siema__btn-1');
      var siemaBtn7 = document.querySelector('.siema__btns.-lr .siema__btn-2');
      var siemaBtn8 = document.querySelector('.siema__btns.-lr .siema__btn-3');
      var siemaBtn9 = document.querySelector('.siema__btns.-lr .siema__btn-4');

      siemaBtn5.addEventListener('click', function () {
          $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
          $(this).children().css('background', '#ff8000');
          return lrSiema.goTo(0);
        });
      siemaBtn6.addEventListener('click', function () {
        $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lrSiema.goTo(1);
      });
      siemaBtn7.addEventListener('click', function () {
        $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lrSiema.goTo(2);
      });
      siemaBtn8.addEventListener('click', function () {
        $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lrSiema.goTo(3);
      });
      siemaBtn9.addEventListener('click', function () {
        $('.siema__btns.-lr .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return lrSiema.goTo(4);
      });

    /* Boxes */
      function printSlidesBx() {
        $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
        var sBtn = '.siema__btns.-bx .siema__btn-'+this.currentSlide;
        $(sBtn).children().css('background', '#ff8000');
      };

      var bxSiema = new Siema({
        selector: '.service__slider--bx',
        duration: 800,
        easing: 'ease-out',
        onInit: printSlidesBx,
        onChange: printSlidesBx
      });

      var siemaBtn5 = document.querySelector('.siema__btns.-bx .siema__btn-0');
      var siemaBtn6 = document.querySelector('.siema__btns.-bx .siema__btn-1');
      var siemaBtn7 = document.querySelector('.siema__btns.-bx .siema__btn-2');
      var siemaBtn8 = document.querySelector('.siema__btns.-bx .siema__btn-3');
      var siemaBtn9 = document.querySelector('.siema__btns.-bx .siema__btn-4');

      siemaBtn5.addEventListener('click', function () {
          $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
          $(this).children().css('background', '#ff8000');
          return bxSiema.goTo(0);
        });
      siemaBtn6.addEventListener('click', function () {
        $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return bxSiema.goTo(1);
      });
      siemaBtn7.addEventListener('click', function () {
        $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return bxSiema.goTo(2);
      });
      siemaBtn8.addEventListener('click', function () {
        $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return bxSiema.goTo(3);
      });
      siemaBtn9.addEventListener('click', function () {
        $('.siema__btns.-bx .pgtn__line').css('background', '#fff');
        $(this).children().css('background', '#ff8000');
        return bxSiema.goTo(4);
      });
