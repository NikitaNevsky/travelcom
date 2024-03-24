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

    $(".flights__item").click(function() {
      $(".flights__item").addClass('active');
      $(".hotels__item").removeClass('active');
      $(".travel__item").removeClass('active');
      $(".search-flights").addClass('show');
      $(".search-hotels").removeClass('show');
      $(".search-travel").removeClass('show');
      $(".offer").addClass('offer-flights');
      $(".offer").removeClass('offer-hotels');
      $(".offer").removeClass('offer-travel');
    });

    $(".hotels__item").click(function() {
      $(".hotels__item").addClass('active');
      $(".flights__item").removeClass('active');
      $(".travel__item").removeClass('active');
      $(".search-hotels").addClass('show');
      $(".search-flights").removeClass('show');
      $(".search-travel").removeClass('show');
      $(".offer").addClass('offer-hotels');
      $(".offer").removeClass('offer-flights');
      $(".offer").removeClass('offer-travel');
    });

    $(".travel__item").click(function() {
      $(".travel__item").addClass('active');
      $(".flights__item").removeClass('active');
      $(".hotels__item").removeClass('active');
      $(".search-travel").addClass('show');
      $(".search-flights").removeClass('show');
      $(".search-hotels").removeClass('show');
      $(".offer").addClass('offer-travel');
      $(".offer").removeClass('offer-flights');
      $(".offer").removeClass('offer-hotels');
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

    $('.show_popup2').click(function() {
      $('#popup2').hide(); 
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

var dt = new DataTransfer();
 
$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();
 
	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="input-file-list-item">' +
			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
});
 
function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');	
	$(target).closest('.input-file-list-item').remove();	
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;  
}