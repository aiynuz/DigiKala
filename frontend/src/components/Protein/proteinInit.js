import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export default function proteinInit() {
  const swiperElement = document.querySelector(".proteinSwiper");

  if (!swiperElement) {
    return;
  }

  new Swiper(".proteinSwiper", {
    modules: [Navigation],

    slidesPerView: 6,
    spaceBetween: 10,

    navigation: {
      nextEl: ".protein-prev",
      prevEl: ".protein-next",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
      },

      1536: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
}