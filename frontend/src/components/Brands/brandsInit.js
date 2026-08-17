import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const brandsInit = () => {
  new Swiper(".brandsSwiper", {

    modules: [Navigation],

    slidesPerView: 2,

    spaceBetween: 8,

    navigation: {
      nextEl: ".brands-next",
      prevEl: ".brands-prev",
    },

    breakpoints: {

      640: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 6,
      },

      1024: {
        slidesPerView: 9,
      },

      1280: {
        slidesPerView: 10,
      },

    },

  });
};

export default brandsInit;