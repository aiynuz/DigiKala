import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function bestSellingProductsInit() {
  const swiperElement = document.querySelector(
    ".bestSellingProductsSwiper"
  );

  if (!swiperElement) {
    return;
  }

  new Swiper(".bestSellingProductsSwiper", {
    modules: [Navigation],

    rtl: true,

    slidesPerView: 5,

    spaceBetween: 0,

    navigation: {
      nextEl: ".bestSellingProducts-prev",
      prevEl: ".bestSellingProducts-next",
    },

    breakpoints: {

      1280: {
        slidesPerView: 5,
        spaceBetween: 0,
      },


      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },


      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },


      480: {
        slidesPerView: 2,
        spaceBetween: 8,
      },


      320: {
        slidesPerView: 1.3,
        spaceBetween: 8,
      },

    },
  });
}