$(document).ready(function() {
  $('.js-mobileMenu').on('click',function(e){
    e.preventDefault();
    $('.js-mobileMenu').toggleClass('active');
    $('body').toggleClass('js-menu-show');
  });
  $('.js-like').click(function(event) {
  	event.preventDefault();
  });
});