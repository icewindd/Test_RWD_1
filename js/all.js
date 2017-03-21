$(document).ready(function() {
  $('.js-mobileMenu').on('click',function(e){
    e.preventDefault();
    $('.js-mobileMenu').toggleClass('active');
    $('body').toggleClass('js-menu-show');
  });
  $('.js-like').click(function(event) {
  	event.preventDefault();
  });//end on

  $('.scrollTop').click(function(event) {
  	event.preventDefault();
  	var target = $(this).attr('href');
	var targetPos = $(target).offset().top;
	$('body').animate({scrollTop:targetPos-50},1000);
	$('scrollTop').removeClass('active');
	$(this).addClass('active');
  });//end click
  $(window).scroll(function(){
  	var scrollPos = $(window).scrollTop();
  	if(scrollPos>=100){
  		$('.top').addClass('active');
  	}else{
  		$('.top').removeClass('active');
  	}
  });//end scroll

    $('.top').click(function(event){
  		event.preventDefault();
  		$('body').animate({scrollTop:0},2000);

  	});//end top click

});