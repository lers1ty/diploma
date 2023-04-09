$('.header__row').slick({
  responsive: [
    {
      breakpoint: 2048,
      settings: "unslick"
    },
    {
      breakpoint: 870,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.reviews__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  waitForAnimate: true,
  appendArrows: ('.reviews__arrows'),
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
});
