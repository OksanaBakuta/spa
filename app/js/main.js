$(function(){
  
  $('.slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay:true,
    autoplaySpeed: 3000
  });

  $('.team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

});