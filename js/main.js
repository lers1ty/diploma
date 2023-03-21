new Swiper('.reviews__slider', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

