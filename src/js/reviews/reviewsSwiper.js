import Swiper, { Navigation } from 'swiper';

new Swiper('.swiper2', {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
