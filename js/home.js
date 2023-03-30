import { initCouterUp } from "./utils/countUp.js";
import { initPercent } from "./utils/percent.js";
import WOW from "wow.js/src/WOW.js";

function autoSlide() {
  const slide = document.querySelector(".banner-list-img");

  if (!slide) return;

  let lists = slide.querySelectorAll(".item");

  if (!lists) return;

  slide.appendChild(lists[0]);
}

function dragSlide() {
  const slide = document.querySelector(".brand");

  let isDown = false;

  let statrX;

  let scrollLeft;

  slide.addEventListener("mousedown", (e) => {
    isDown = true;

    slide.classList.add("active");

    statrX = e.pageX;
  });

  slide.addEventListener("mouseleave", () => {
    isDown = false;
    slide.classList.remove("active");
  });

  slide.addEventListener("mouseup", () => {
    isDown = false;
    slide.classList.remove("active");
  });

  slide.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX;
    const walk = (x - statrX) * 3;

    slide.scrollLeft = walk;
  });
}

(() => {
  setInterval(autoSlide, 3500);
  initCouterUp(".count-up");
  initCouterUp(".about-us-5");
  initPercent(".about-us-6");
  dragSlide();
  new WOW().init();
})();
