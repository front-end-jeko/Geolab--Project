-$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  
  $(".js-scroll-trigger").click(function() {
    $(".header__navbar").removeClass("active")
  })



// open navbar
document.getElementById('burger-menu').addEventListener('click', function(e){
  var navbar = document.getElementById('navbar');
  if(navbar.className === 'header__navbar'){
    navbar.className += ' active'
  }else {
    navbar.className = 'header__navbar';
  }
  e.stopPropagation();
})



document.addEventListener('click', function(){
  var navbar = document.getElementById('navbar');
  navbar.className = 'header__navbar';

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
      $('#scrollTop').css({"opacity": '1', "visibility": "visible"});
  } else {
      $('#scrollTop').css({"opacity": "0", "visibility": "hidden"});
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