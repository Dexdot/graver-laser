function printSlidesLg(){$(".siema__btns.-lg .pgtn__line").css("background","#fff");var e=".siema__btns.-lg .siema__btn-"+this.currentSlide;$(e).children().css("background","#ff8000")}function printSlidesLr(){$(".siema__btns.-lr .pgtn__line").css("background","#fff");var e=".siema__btns.-lr .siema__btn-"+this.currentSlide;$(e).children().css("background","#ff8000")}function printSlidesBx(){$(".siema__btns.-bx .pgtn__line").css("background","#fff");var e=".siema__btns.-bx .siema__btn-"+this.currentSlide;$(e).children().css("background","#ff8000")}$(document).ready(function(){$(".hamburger, .nav__link").click(function(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("__active")}),$("a[href*='#']").on("click",function(e){e.preventDefault();var n=$(this).attr("href"),i=$(n).offset().top;$("html, body").animate({scrollTop:i},1e3)}),$(".hw").slick({speed:1400,infinite:!0,draggable:!1,swipe:!1,autoplay:!0,autoplaySpeed:8e3,dots:!0,arrows:!1}),$(".slick-dots li button").html('<span class="pgtn__line"></span>');var e=+$(".service__info--lg").outerHeight();$(".service__slider--lg .service__slide").height(e),window.addEventListener("resize",function(){var e=+$(".service__info--lg").outerHeight();$(".service__slider--lg .service__slide").height(e)});var n=+$(".service__info--lr").outerHeight();$(".service__slider--lr .service__slide").height(n),window.addEventListener("resize",function(){var e=+$(".service__info--lr").outerHeight();$(".service__slider--lr .service__slide").height(e)});var i=+$(".service__info--bx").outerHeight();$(".service__slider--bx .service__slide").height(i),window.addEventListener("resize",function(){var e=+$(".service__info--bx").outerHeight();$(".service__slider--bx .service__slide").height(e)})});var lgSiema=new Siema({selector:".service__slider",duration:800,easing:"ease-out",onInit:printSlidesLg,onChange:printSlidesLg}),siemaBtn0=document.querySelector(".siema__btn-0"),siemaBtn1=document.querySelector(".siema__btn-1"),siemaBtn2=document.querySelector(".siema__btn-2"),siemaBtn3=document.querySelector(".siema__btn-3"),siemaBtn4=document.querySelector(".siema__btn-4");siemaBtn0.addEventListener("click",function(){return $(".siema__btn.-lg .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lgSiema.goTo(0)}),siemaBtn1.addEventListener("click",function(){return $(".siema__btn.-lg .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lgSiema.goTo(1)}),siemaBtn2.addEventListener("click",function(){return $(".siema__btn.-lg .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lgSiema.goTo(2)}),siemaBtn3.addEventListener("click",function(){return $(".siema__btn.-lg .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lgSiema.goTo(3)}),siemaBtn4.addEventListener("click",function(){return $(".siema__btn.-lg .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lgSiema.goTo(4)});var lrSiema=new Siema({selector:".service__slider--lr",duration:800,easing:"ease-out",onInit:printSlidesLr,onChange:printSlidesLr}),siemaBtn5=document.querySelector(".siema__btns.-lr .siema__btn-0"),siemaBtn6=document.querySelector(".siema__btns.-lr .siema__btn-1"),siemaBtn7=document.querySelector(".siema__btns.-lr .siema__btn-2"),siemaBtn8=document.querySelector(".siema__btns.-lr .siema__btn-3"),siemaBtn9=document.querySelector(".siema__btns.-lr .siema__btn-4");siemaBtn5.addEventListener("click",function(){return $(".siema__btn.-lr .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lrSiema.goTo(0)}),siemaBtn6.addEventListener("click",function(){return $(".siema__btn.-lr .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lrSiema.goTo(1)}),siemaBtn7.addEventListener("click",function(){return $(".siema__btn.-lr .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lrSiema.goTo(2)}),siemaBtn8.addEventListener("click",function(){return $(".siema__btn.-lr .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lrSiema.goTo(3)}),siemaBtn9.addEventListener("click",function(){return $(".siema__btn.-lr .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),lrSiema.goTo(4)});var bxSiema=new Siema({selector:".service__slider--bx",duration:800,easing:"ease-out",onInit:printSlidesBx,onChange:printSlidesBx}),siemaBtn5=document.querySelector(".siema__btns.-bx .siema__btn-0"),siemaBtn6=document.querySelector(".siema__btns.-bx .siema__btn-1"),siemaBtn7=document.querySelector(".siema__btns.-bx .siema__btn-2"),siemaBtn8=document.querySelector(".siema__btns.-bx .siema__btn-3"),siemaBtn9=document.querySelector(".siema__btns.-bx .siema__btn-4");siemaBtn5.addEventListener("click",function(){$(".siema__btns.-bx .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000");var e=$(this);return console.log(e),bxSiema.goTo(0)}),siemaBtn6.addEventListener("click",function(){return $(".siema__btns.-bx .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),bxSiema.goTo(1)}),siemaBtn7.addEventListener("click",function(){return $(".siema__btns.-bx .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),bxSiema.goTo(2)}),siemaBtn8.addEventListener("click",function(){return $(".siema__btns.-bx .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),bxSiema.goTo(3)}),siemaBtn9.addEventListener("click",function(){return $(".siema__btns.-bx .pgtn__line").css("background","#fff"),$(this).children().css("background","#ff8000"),bxSiema.goTo(4)});