$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
	
	$('.js--wp-2a').waypoint(function(direction) {
        $('.js--wp-2a').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
	
	$('.js--wp-3a').waypoint(function(direction) {
        $('.js--wp-3a').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            nav.css("display", "none");
            nav.addClass('vis');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.removeClass('vis');
        }        
    });
	
	
	//This works basically like a media query for jQuery, where we can take different actions depending on the screen width

$(window).resize(function(){

var nav = $('.js--main-nav');

var icon = $('.js--nav-icon i');

if ($(window).width() > 767){

nav.css("display", "block");
nav.removeClass('vis');

icon.addClass('ion-close-round');

icon.removeClass('ion-navicon-round');

} else {

nav.css("display", "none");

icon.addClass('ion-navicon-round');

icon.removeClass('ion-close-round');

}

});
    
/*=================================================================*/
                          //image slider
/*=================================================================*/

    
    
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }
  });
    
    
    });
