import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export const splideSlide = {
  default(selector) {
    new Splide(`#${selector}`, {
      type: "loop",
      perPage: 1,
      arrows: false,
      mediaQuery: "min",
      pagination: false,
      gap: "15px",
      breakpoints: {
        380: {
          perPage: 2,
        },

        500: {
          perPage: 3,
        },

        650: {
          perPage: 4,
        },

        768: {
          perPage: 3,
        },

        992: {
          perPage: 4,
        },
      },
    }).mount();
  },
};
