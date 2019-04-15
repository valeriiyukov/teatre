$(document).ready(function($) {
      AOS.init({
      once: true
  });
    
$('.toggle-mnu').on('click', function(){
    $('.navigation').toggleClass('on');
    setTimeout(function(){
        $('.main-header__nav ul, .main-header__toggle-mnu').toggleClass('hide');
    }, 200)        
    setTimeout(function(){
        $('.navigation__toggle-mnu').toggleClass('on');
    }, 700)   
    
    $(this).addClass('hidden');
    
})
    
$('.navigation__toggle-mnu').on('click', function(){
    setTimeout(function(){
    $('.toggle-mnu').removeClass('hidden');
    }, 700)
})
    
$('.backward-arrow').on('click', function(){
    history.back(-1);
})
    

});

//    
// var stickyOffset = $('.main-header').offset().top;
//
//   $(window).scroll(function(){
//   var sticky = $('.main-header'),
//   scroll = $(window).scrollTop();
//
//   if (scroll >= stickyOffset) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
//   });


$('.gallery__slider, .video-slider__slider').slick({
  infinite: true,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
          cssEase: 'linear',
    variableWidth: true,
    variableHeight: true,
        infinite: true,
          arrows: false
      }
    }
  ]
});

$('.gallery-slider__btn-next').on('click', function() {
  $('.gallery__slider').slick('slickNext');
});

$('.gallery-slider__btn-prev').on('click', function() {
  $('.gallery__slider').slick('slickPrev');
});

$('.video-slider__btn-next').on('click', function() {
  $('.video-slider__slider').slick('slickNext');
});

$('.video-slider__btn-prev').on('click', function() {
  $('.video-slider__slider').slick('slickPrev');
});




