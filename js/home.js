import { isInViewport } from "./utils/in-view-port.js";

function autoSlide() {
  const slide = document.querySelector(".banner-list-img");

  if (!slide) return;

  let lists = slide.querySelectorAll(".item");

  if (!lists) return;

  slide.appendChild(lists[0]);
}

function counterUp(countUpItem) {
  if (!countUpItem) return;

  const listCharacter = ["K", "%", "+"];

  const text = countUpItem.textContent;

  const index = listCharacter.findIndex(
    (character) => text.indexOf(character) >= 0
  );

  let duration = 40;
  if (listCharacter[index] === listCharacter[0]) duration = 2000;

  let startCount = 0;
  let endCount = parseFloat(countUpItem.getAttribute("data-counter"));

  const idInterVal = setInterval(() => {
    startCount += 1;

    countUpItem.textContent = `${startCount}${listCharacter[index]}`;

    if (startCount === endCount) clearInterval(idInterVal);
  }, duration);
}

function initCouterUp() {
  const countUpSection = document.querySelector(".count-up");

  if (!countUpSection) return;

  const listCountUp = countUpSection.querySelectorAll(
    ".count-up__item [data-counter]"
  );

  if (!listCountUp) return;
  let counting = false;

  window.addEventListener("scroll", (e) => {
    if (isInViewport(countUpSection) && !counting) {
      counting = true;
      listCountUp.forEach((countUpItem) => counterUp(countUpItem));
    }
  });
}

function runPercent(percentItem) {
  if (!percentItem) return;

  const DURATION = 20;
  let start = 0;
  const targetPercent = percentItem.getAttribute("data-percent");

  const textPercent = percentItem.previousElementSibling.children[0];

  const idInterVal = setInterval(() => {
    start += 1;

    percentItem.children[0].style.width = `${start}%`;
    textPercent.textContent = `${start}%`;

    if (start == targetPercent) clearInterval(idInterVal);
  }, DURATION);
}

function initPercent() {
  let isRunPercent = false;

  const percentSection = document.querySelector(".about-us-6");

  if (!percentSection) return;

  const percentListItem = percentSection.querySelectorAll(".percent__skill");

  window.addEventListener("scroll", () => {
    if (isInViewport(percentSection) && !isRunPercent) {
      isRunPercent = true;
      percentListItem.forEach((percentItem) => runPercent(percentItem));
    }
  });
}

(() => {
  setInterval(autoSlide, 3500);
  initCouterUp();
  initPercent();
})();
