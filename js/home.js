import { initPercent, wow, initCouterUp, splideSlide } from "./utils";

function autoSlide() {
  const slide = document.querySelector(".banner-list-img");

  if (!slide) return;

  let lists = slide.querySelectorAll(".item");

  if (!lists) return;

  slide.appendChild(lists[0]);
}

function dragSlider() {
  splideSlide.default("brand-slide");
}

(() => {
  setInterval(autoSlide, 3500);
  initCouterUp(".count-up");
  initCouterUp(".about-us-5");
  initPercent(".about-us-6");
  dragSlider();
  wow.init();
})();
