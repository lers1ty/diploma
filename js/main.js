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