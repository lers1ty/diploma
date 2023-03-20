new Swiper('.reviews__slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  loopedSlides: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

