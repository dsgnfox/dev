// прелоадер
$(window).on('load', function () {
  $('.preloader').delay(500).fadeToggle(500);
});

// установка wow js
new WOW().init();

// установка сетки для фоток
$('.grid').isotope({
  itemSelector: '.grid-item'
});

// фильтры в галерее
$('.filter__btn').click(function() {
  let filterBtn = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterBtn });
  $(this).siblings('.is-active').removeClass('is-active');
  $(this).addClass('is-active');
});


//установка галереи
$(".js-fancybox").fancybox({
	loop: false
});

// Появление и анимация текста anna makoveeva
$(document).ready(function(e){
  $('.w_svg-box').css('opacity','1');
  $('.w_text-bg').animate({'stroke-dasharray': '1850 2000', 'stroke-dashoffset': '0'});
  setTimeout(function () {
    $('.w_text-bg').css({'fill': '#fff', 'stroke-width': '0px'});
  }, 800);
  setTimeout(function () {
    var left = 0,
        top = 0,
        element = $('body'),
        offset = {
                  left: element.offset().left,
                  top: element.offset().top
                 };           
    element.on('mousemove', function(e){
      left = (e.pageX-offset.left);
      top = (e.pageY-offset.top);
      $('.w_text').css('opacity','1');
      $('.w_text').css({
        'x': (0.05*left/12),
        'y': '-'+(0.05*top/10+30)
      });
      });
    element.mouseleave(function(){
      $('.w_text').css('opacity','0');
    });
    }, 1800);
});

// скролл по кнопке смотреть портфолио
$('.w-btn__link').click(function(){
  $("html, body").animate({ scrollTop: $('.main').offset().top -100+'px' }, 1000);
});

// скролл по лого в шапке
$('.header__logo').click(function(){
  $("html, body").animate({ scrollTop: $('body').offset().top }, 1000);
});

// появление шапки
$(window).scroll(function(){
  if($(window).scrollTop()>550){
    $('.header').removeClass('js-hide');
  }
  else {
    $('.header').addClass('js-hide');
  }
});
