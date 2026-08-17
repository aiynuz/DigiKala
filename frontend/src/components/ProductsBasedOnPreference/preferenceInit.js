import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function preferenceInit() {
  new Swiper(".preferenceSwiper", {
    modules: [Navigation],

    rtl: true,

    slidesPerView: 6.5,

    spaceBetween: 8,

    navigation: {
      nextEl: ".preference-prev",
      prevEl: ".preference-next",
    },

    breakpoints: {
      1280: {
        slidesPerView: 6.5,
      },

      1024: {
        slidesPerView: 5.5,
      },

      768: {
        slidesPerView: 4,
      },

      480: {
        slidesPerView: 2.2,
      },

      0: {
        slidesPerView: 1.5,
      },
    },
  });
}