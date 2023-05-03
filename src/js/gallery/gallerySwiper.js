import Swiper, { Navigation } from "swiper";
new Swiper('.swiper3', {
    modules: [Navigation ],
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
        slidesPerView: 5
        }
    },
    autoHeight: false,
    
})