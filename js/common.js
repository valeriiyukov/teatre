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
    
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });
    
    scrollorama.animate('.preview',{
    duration:400, property:'opacity'
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


