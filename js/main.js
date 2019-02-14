// smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#section4__first"]')
  .not('[href="#section4__second"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  
  $(".js-scroll-trigger").click(function() {
    $(".header__navbar").removeClass("active")
  })



// open navbar
document.getElementById('burger-menu').addEventListener('click', function(e){
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');

  e.stopPropagation();
})



document.addEventListener('click', function(){
  var navbar = document.getElementById('navbar').className = 'header__navbar';

  if(navbar.className = 'header__navbar active'){
      navbar.className = 'header__navbar';
  }
})



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var header = document.querySelector(".header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.className = 'header active';
  } else {
    header.className = 'header';
  }
}


// Background Animation
$(window).on('load', function  () {
  $(".cube-container").fadeOut();
});



// scroll__top icon show
$(document).on( 'scroll', function(){
  if ($(window).scrollTop() > 100) {
      $('#scrollTop').css({
        "opacity": '1', 
        "visibility": "visible"
      });
  } else {
      $('#scrollTop').css({
        "opacity": "0", 
        "visibility": "hidden"
      });
  }
});


// paralax effect
$('.banner').paroller();



// wow.js
new WOW().init();



// popup images
$('.popup-img').magnificPopup({
  type: 'image',
  removalDelay: 200,
  mainClass: 'mfp-fade',
});