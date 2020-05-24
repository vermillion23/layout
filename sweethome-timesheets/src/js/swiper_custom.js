import Swiper from 'swiper';

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: -30,
        },
        650: {
            slidesPerView: 3,
            spaceBetween: -70,
        },
        488: {
            slidesPerView: 3,
            spaceBetween: -50,
        }
    }
})