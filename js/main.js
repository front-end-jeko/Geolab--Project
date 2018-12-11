$(document).ready(function(){
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
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").className = 'header active';
  } else {
    document.querySelector(".header").className = 'header';
  }
}


// paralax effect
$('.banner').paroller();


// fancybox images popup
$(document).ready(function() {
  $(".fancybox").fancybox();
});


// Background Animation
setInterval(() => {
  document.querySelector('.cube-container').style.opacity = '0';
  document.querySelector('.cube-container').style.visibility = 'hidden';
}, 5000);



// scroll__top icon show
$(document).on( 'scroll', function(){
  if ($(window).scrollTop() > 100) {
      $('#scrollTop').css({"opacity": '1', "visibility": "visible"});
  } else {
      $('#scrollTop').css({"opacity": "0", "visibility": "hidden"});
  }
});