$(function(){

  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.menu-btn').toggleClass('menu-btn--active');
  });

  $('.tabs__btn').on('click', function(e){
    e.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');

    $('.services__slider').removeClass('services__slider--active');
    $($(this).attr('href')).addClass('services__slider--active');

    $('.services__slider').slick('setPosition');
  });
  
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
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.services__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3.5,
          infinite: false
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3,
          infinite: false
        }
      },
      {
        breakpoint: 655,
        settings: {
          slidesToShow: 2.5,
          infinite: false
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          infinite: false
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
          infinite: false
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          infinite: false,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
    ]
  });

  $('.gallery__slider').slick({
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    arrows: false
  });


});