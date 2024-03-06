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

   $(window).scroll(function() {
   var height = $(window).scrollTop();
   
         /*Если сделали скролл на 100px задаём новый класс для header*/
      if(height > 100){
      $('.scroll__top').addClass('show');
      } else{
            /*Если меньше 100px удаляем класс для header*/
      $('.scroll__top').removeClass('show');
      }
   
   });

   $(".reg__complete--switch").click(function() {
      $(".reg__complete--switch").toggleClass('active');
      $(".complete__info").toggleClass('show');
      $(".checkbox-2").toggleClass('show');
    });

   $('.pay__tabs--usdt input[name="radio"]').click(function(){
      var target = $('#block-' + $(this).val());
    
      $('.block-text').not(target).hide(0);
      target.fadeIn(500);
   });

   $('.pay__radio--wallet input[name="radio"]').click(function(){
      var target = $('#block-' + $(this).val());
    
      $('.block-text').not(target).hide(0);
      target.fadeIn(500);
   });

   $(".card__btn--pay").click(function() {
      $(".card__info").addClass('hide');
      $(".card__code").addClass('show');
    });

   $(".connect__change--switch").click(function() {
      $(".connect__change--switch").toggleClass('active');
      $(".connect__info").toggleClass('show');
   });

   $(".ntf__checkbox--input").click(function() {
      $(".card__checkbox--sub").toggleClass('show');
   });

   $(".form__change button").click(function() {
      $(".reset").addClass('hide');
      $(".reset__complete").addClass('show');
   });

   $(".header__burger").click(function() {
      $(".header__menu--mobile").toggleClass('show');
      $(".header__burger").toggleClass('show');
   });

   $(".header__burger.account").click(function() {
      $(".account").toggleClass('show');
      $(".sidebar").toggleClass('show');
      $("body").toggleClass('no-scroll');
   });

   $('.select').each(function() {
      const _this = $(this),
          selectOption = _this.find('option'),
          selectOptionLength = selectOption.length,
          selectedOption = selectOption.filter(':selected'),
          duration = 450; // длительность анимации 
  
      _this.hide();
      _this.wrap('<div class="select"></div>');
      $('<div>', {
          class: 'new-select',
          text: _this.children('option:disabled').text()
      }).insertAfter(_this);
  
      const selectHead = _this.next('.new-select');
      $('<div>', {
          class: 'new-select__list'
      }).insertAfter(selectHead);
  
      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
          $('<div>', {
              class: 'new-select__item',
              html: $('<span>', {
                  text: selectOption.eq(i).text()
              })
          })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      }
  
      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function() {
          if ( !$(this).hasClass('on') ) {
              $(this).addClass('on');
              selectList.slideDown(duration);
  
              selectItem.on('click', function() {
                  let chooseItem = $(this).data('value');
  
                  $('select').val(chooseItem).attr('selected', 'selected');
                  selectHead.text( $(this).find('span').text() );
  
                  selectList.slideUp(duration);
                  selectHead.removeClass('on');
              });
  
          } else {
              $(this).removeClass('on');
              selectList.slideUp(duration);
          }
      });
  });
  
 });  

 /* return input field to variable text */
var text = document.getElementById("inputText");

/* return button to variable btn */
var btn = document.getElementById("copyText");

/* call function on button click */
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}