import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function hottestProductsInit() {

  const swiperElement = document.querySelector(".hottestProductsSwiper");

  if (!swiperElement) {
    return;
  }


  new Swiper(".hottestProductsSwiper", {

    modules: [Navigation],

    rtl: true,


    slidesPerView: 1.5,

    spaceBetween: 8,


    navigation: {
      nextEl: ".hottestProducts-prev",

      prevEl: ".hottestProducts-next",
    },


    breakpoints: {

      320: {

        slidesPerView: 1.5,

        spaceBetween: 8,

      },


      480: {

        slidesPerView: 2,

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

        spaceBetween: 10,

      },


    },

  });

}