import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay
} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function sliderInit() {

  new Swiper(".heroSwiper", {

  modules: [
    Navigation,
    Pagination,
    Autoplay
  ],

  loop: true,

  autoplay: {
    delay: 3000,
  },


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },


});

}