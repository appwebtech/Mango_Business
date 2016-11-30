
$(document).ready(function(){

// Code for sticky nav 
$('.js-josembi-sec_features').waypoint(function(direction){
	if (direction == "down") {
		$('nav').addClass('sticky');
	}else {
		$('nav').removeClass('sticky');
	}
}, {
   offset: '60px'
 })

// Scroll on buttons

$('.js-josembi-scroller-to-ksh').click(function(){
	$('html, body').animate({scrollTop: $('.js-josembi-pricing').offset().top}, 1000)
})

$('.js-josembi-scroller-to-start').click(function(){
	$('html, body').animate({scrollTop: $('.js-josembi-sec_features ').offset().top}, 1000)
})

// Navigation scroll (smoothifying)

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Animations on scroll

$('.js-josembi-wp1').waypoint(function(direction){
  $('.js-josembi-wp1').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.js-josembi-wp2').waypoint(function(direction){
  $('.js-josembi-wp2').addClass('animated fadeInUp');
}, {
  offset: '50%'
});

$('.js-josembi-wp3').waypoint(function(direction){
  $('.js-josembi-wp3').addClass('animated fadeIn');
}, {
  offset: '60%'
});

$('.js-josembi-wp4').waypoint(function(direction){
  $('.js-josembi-wp4').addClass('animated pulse');
}, {
  offset: '50%'
});




});





