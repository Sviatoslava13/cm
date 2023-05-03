import Swiper, { Pagination, Autoplay } from 'swiper';
const metaAnimationRef = document.querySelectorAll('.tours__meta');
new Swiper('.swiper1', {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 2000,
  autoplay: {
    delay: 7000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: (index, className) =>
      `<div class='${className}'><span class='day'>${
        index + 1
      } день</span></div>`,
  },
  on: {
    slideChangeTransitionEnd: () => {
      metaAnimationRef.forEach(item => item.classList.add('is-active'));
    },
    slideChangeTransitionStart: () => {
      metaAnimationRef.forEach(item => item.classList.remove('is-active'));
    },
  },
});
