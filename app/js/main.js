$(function(){
	//  $('.header__btn').click(function(){
	//  	$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 15000);
	//  	return false;
  //    });


     $('.header__btn').click(function(e){
      e.preventDefault();
      $('body, html').animate({ scrollTop: $('.form').offset().top }, 10000);
      });

    
    $('.burger-btn').on('click', function(){
        $('.menu__list').slideToggle();
      });

      new WOW().init();

});