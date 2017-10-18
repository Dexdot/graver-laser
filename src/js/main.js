$(function() {
  // Menu navigation script (toggling)
      $('.hamburger, .nav__link, .order-call').click(function() {
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
        autoplay: false,
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

      /* Portfolio */
        function printPortfolio() {
          $('.siema__btns.-pf .pgtn__line').css('background', '#cccccb');
          var sBtn = '.siema__btns.-pf .siema__btn-'+this.currentSlide;
          $(sBtn).children().css('background', '#ff8000');
        };

        var pfSiema = new Siema({
          selector: '.portfolio__wrap',
          duration: 800,
          easing: 'ease-out',
          onInit: printPortfolio,
          onChange: printPortfolio
        });

        var siemaBtn0 = document.querySelector('.siema__btns.-pf .siema__btn-0');
        var siemaBtn1 = document.querySelector('.siema__btns.-pf .siema__btn-1');

        siemaBtn0.addEventListener('click', function () {
            $('.siema__btns.-pf .pgtn__line').css('background', '#cccccb');
            $(this).children().css('background', '#ff8000');
            return pfSiema.goTo(0);
          });
        siemaBtn1.addEventListener('click', function () {
          $('.siema__btns.-pf .pgtn__line').css('background', '#cccccb');
          $(this).children().css('background', '#ff8000');
          return pfSiema.goTo(1);
        });
      
      /* Clients */
        function printClients() {
          $('.siema__btns.-cl .pgtn__line').css('background', '#bdbdbd');
          var sBtn = '.siema__btns.-cl .siema__btn-'+this.currentSlide;
          $(sBtn).children().css('background', '#ff8000');
        };

        var clSiema = new Siema({
          selector: '.clients__slider',
          duration: 800,
          easing: 'ease-out',
          onInit: printClients,
          onChange: printClients
        });

        var siemaBtn0 = document.querySelector('.siema__btns.-cl .siema__btn-0');
        var siemaBtn1 = document.querySelector('.siema__btns.-cl .siema__btn-1');

        siemaBtn0.addEventListener('click', function () {
            $('.siema__btns.-cl .pgtn__line').css('background', '#bdbdbd');
            $(this).children().css('background', '#ff8000');
            return clSiema.goTo(0);
          });
        siemaBtn1.addEventListener('click', function () {
          $('.siema__btns.-cl .pgtn__line').css('background', '#bdbdbd');
          $(this).children().css('background', '#ff8000');
          return clSiema.goTo(1);
        });

  // FancyBox
      $("[data-fancybox]").fancybox({
        protect: true,
        animationEffect : "zoom-in-out",
        transitionEffect : "fade",
      });

  // Masked phone input
      $("#phone").mask("+7 (999) 999-99-99");
  // Yandex.Maps
        ymaps.ready(init);
        var myMap, myPlacemark;

        function init(){ 
          myMap = new ymaps.Map("map", {
            center: [55.774431, 49.143685],
            zoom: 16,
          }); 

          myPlacemark = new ymaps.Placemark([55.774431, 49.143685], {
            hintContent: '"Гравер Лазер" - Казань, ул. Качалова, д.76',
            balloonContent: ''
          }, {
                  iconLayout: 'default#image',
                  iconImageHref: './prod/img/point.png',
                  iconImageSize: [130, 110],
                  iconImageOffset: [-38, -115]
                });
          myMap.geoObjects.add(myPlacemark);  
          myMap.behaviors.disable('scrollZoom');
        }

  // Footer links hover
      $('.footer__link--inst').mouseenter(function() {
        $('symbol#inst path').css('fill', '#ff8000');
      });
      $('.footer__link--inst').mouseleave(function() {
        $('symbol#inst path').css('fill', '#fff');
      });
      $('.footer__link--vk').mouseenter(function() {
        $('symbol#vk path').css('fill', '#ff8000');
      });
      $('.footer__link--vk').mouseleave(function() {
        $('symbol#vk path').css('fill', '#fff');
      });

  // Modals
      $('.btn-purchase').on('click', function() {
        $('.modal-cost-overlay').fadeIn();
        $('.modal-cost-overlay').css('display', 'flex');
      });
      $('.modal-cost-close').on('click', function() {
        $('.modal-cost-overlay').fadeOut();
      });

      $('.service__order').on('click', function() {
        $('.modal-enroll-overlay').fadeIn();
        $('.modal-enroll-overlay').css('display', 'flex');
      });
      $('.modal-enroll-close').on('click', function() {
        $('.modal-enroll-overlay').fadeOut();
      });

      $('a.order-call').on('click', function() {
        $('.modal-call-overlay').fadeIn();
        $('.modal-call-overlay').css('display', 'flex');
      });
      $('.modal-call-close').on('click', function() {
        $('.modal-call-overlay').fadeOut();
      });

      $('.modal-success-close').on('click', function() {
        $('.modal-success-overlay').fadeOut();
      });

      $('.portfolio__link').on('click', function() {
        $('.modal-video-overlay').fadeIn();
        $('.modal-video-overlay').css('display', 'flex');
      });
      $('.modal-video-close').on('click', function() {
        $('.modal-video-overlay').fadeOut();
        $("iframe").each(function() {
          $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
      });

  // Video portfolio
      var thumb = $('.modal-video-nav-link'),
          video = $('.modal-video iframe');
      thumb.on('click', function() {
        thumb.css('border', 'none');
        $(this).css('border', '1px solid #ff8000');
        $("iframe").each(function() {
          $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
        var currVideo = '.' + $(this).children('a').attr('modal-video');
        video.fadeOut();
        video.hide();
        $(currVideo).hide();
        $(currVideo).fadeIn();
      });

  // PHPMailer AJAX
      $('.modal-call .form').submit(function() {
        $.ajax({
          url: './call.php',
          type: 'POST',
          data: $(this).serialize()
        })
        .done(function() {
          $('.modal-call-overlay').fadeOut();
          $('.modal-success-overlay--call').css('opacity', 0);
          $('.modal-success-overlay--call').css('display', 'flex');
          $('.modal-success-overlay--call').animate({opacity: 1}, 1200);
          $('.modal-call .form').find('input, textarea').val('');
          $('.modal-call .form').trigger('reset');
        })
        .fail(function() {
          alert('Не удалось отправить сообщение. Пожалуйста, повторите попытку');
        });
        
        return false;
      });
      $('.callback__form .form').submit(function() {
        $.ajax({
          url: './cost.php',
          type: 'POST',
          data: $(this).serialize()
        })
        .done(function() {
          $('.modal-success-overlay--order').css('opacity', 0);
          $('.modal-success-overlay--order').css('display', 'flex');
          $('.modal-success-overlay--order').animate({opacity: 1}, 1200);
          $('.callback__form .form').find('input, textarea').val('');
          $('.callback__form .form').trigger('reset');
        })
        .fail(function() {
          alert('Не удалось отправить сообщение. Пожалуйста, повторите попытку');
        });

        return false;
      });
      $('.modal-enroll .form').submit(function() {
        $.ajax({
          url: './cost.php',
          type: 'POST',
          data: $(this).serialize()
        })
        .done(function() {
          $('.modal-enroll-overlay').fadeOut();
          $('.modal-success-overlay--order').css('opacity', 0);
          $('.modal-success-overlay--order').css('display', 'flex');
          $('.modal-success-overlay--order').animate({opacity: 1}, 1200);
          $('.modal-enroll .form').find('input, textarea').val('');
          $('.modal-enroll .form').trigger('reset');
        })
        .fail(function() {
          alert('Не удалось отправить сообщение. Пожалуйста, повторите попытку');
        });

        return false;
      });
      $('.modal-cost .form').submit(function() {
        $.ajax({
          url: './cost.php',
          type: 'POST',
          data: $(this).serialize()
        })
        .done(function() {
          $('.modal-cost-overlay').fadeOut();
          $('.modal-success-overlay--order').css('opacity', 0);
          $('.modal-success-overlay--order').css('display', 'flex');
          $('.modal-success-overlay--order').animate({opacity: 1}, 1200);
          $('.modal-cost .form').find('input, textarea').val('');
          $('.modal-cost .form').trigger('reset');
        })
        .fail(function() {
          alert('Не удалось отправить сообщение. Пожалуйста, повторите попытку');
        });

        return false;
      });

  // Animations
      new WOW().init();

      var handleMatchMedia = function (mediaQuery) {
              if (mediaQuery.matches) {
                  $('.slideInDown').removeClass('slideInDown').addClass('fadeInLeft');
                  $('.slideInUp, .fadeInUp').removeClass('slideInUp').addClass('fadeInRight');
              }
          };
      mql = window.matchMedia('all and (max-width: 657px)');
      handleMatchMedia(mql);
      mql.addListener(handleMatchMedia);

});
