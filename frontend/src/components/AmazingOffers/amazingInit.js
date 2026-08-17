import Swiper from "swiper";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function amazingInit() {
  new Swiper(".amazingSwiper", {
    modules: [Navigation],
    rtl: true,

    slidesPerView: 1.2,

    spaceBetween: 8,

    navigation: {
      nextEl: ".amazing-prev",

      prevEl: ".amazing-next",
    },

    breakpoints: {

  480: {
    slidesPerView: 1.5,
    spaceBetween: 8,
  },


  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },


  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },


  1280: {
    slidesPerView: 5,
    spaceBetween: 12,
  },

},
  });
}