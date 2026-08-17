import Swiper from "swiper";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function flashSaleInit() {
  new Swiper(".flashSwiper", {
    modules: [Navigation],

    slidesPerView: 2,

    spaceBetween: 8,

    navigation: {
      nextEl: ".flash-next",

      prevEl: ".flash-prev",
    },
          watchOverflow: false,
    breakpoints: {

      480: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      1024: {
        slidesPerView: 5,
      },

      1280: {
        slidesPerView: 6,
      },

    },
  });
}