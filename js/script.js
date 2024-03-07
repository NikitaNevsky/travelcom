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

    $('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
      var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
      $(popup_id).show(); // Открываем окно
      $('.overlay_popup').show(); // Открываем блок заднего фона
    }) 
    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
      $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    })
  
 });  