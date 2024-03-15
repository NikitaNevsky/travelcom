$(document).ready(function() {
 
    $("a.scroll-to").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });

    $(".icon-menu").click(function() {
      $(".menu__list").addClass('show');
      $(".icon-menu").addClass('d-none');
      $(".icon-close").addClass('show');
    });

    $(".icon-close").click(function() {
      $(".menu__list").removeClass('show');
      $(".icon-menu").removeClass('d-none');
      $(".icon-close").removeClass('show');
    });

    $(".menu__close").click(function() {
      $(".menu__list").removeClass('show');
      $(".icon-menu").removeClass('d-none');
      $(".icon-close").removeClass('show');
    });

    $(".form__search--type").click(function() {
      $(".top__item--type").toggleClass('show');
    });

    $(".form__search--business").click(function() {
      $(".top__item--business").toggleClass('show');
    });

    $(".form__search--seat").click(function() {
      $(".top__item--seat").toggleClass('show');
    });

    $(".scroll__top").on("click", function() {
      $("body").scrollTop(0);
    });

    $(".fly.many").click(function() {
      $(".fly.many").toggleClass('show');
    });

    $(".class__item").click(function() {
      $(".class__item").toggleClass('active');
    });

    $('.class__item').on('click', function(){
      $('.class__item').toggleClass('active');
      $(this).toggleClass('active');
    });

    $(".hotel__about--button button").click(function() {
      $(".hotel__about--button button").toggleClass('show');
      $(".about__more--list").toggleClass('show');
    });

    $(".form__parameters--beds").click(function() {
      $(".top__item--beds").toggleClass('show');
    });

    $(".form__parameters--food").click(function() {
      $(".top__item--food").toggleClass('show');
    });

    $(".comment__arrow").click(function() {
      $(".comment__arrow").toggleClass('show');
      $(".reviews__item").toggleClass('show');
    });

    $('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
      var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
      $(popup_id).show(); // Открываем окно
      $('.overlay_popup').show(); // Открываем блок заднего фона
    }) 
    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
      $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    })

    $(".reviews__list.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive:{
          0:{
              nav: true,
              items:1
          },
          600:{
              nav: true,
              items:3
          }
      }
    });

    $(".likeit__slider.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive:{
          0:{
              nav: true,
              items:1
          },
          600:{
              nav: true,
              items:3
          }
      }
    });

    $(".hotel__images--mob.owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive:{
          0:{
              nav: true,
              items:1
          },
          600:{
              nav: true,
              items:3
          }
      }
    });
  
 });  

//  var acc = document.getElementsByClassName("notofications__accordion");
//  var i;
 
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.maxHeight) {
//        panel.style.maxHeight = null;
//      } else {
//        panel.style.maxHeight = panel.scrollHeight + "px";
//      }
//    });
//  }

var acc = document.getElementsByClassName("notifications__item--accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.acc;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("filters__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.acc;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}