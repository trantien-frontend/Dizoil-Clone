import { isInViewport } from "./in-view-port.js";

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

export function initCouterUp(parentElement) {
  const countUpSection = document.querySelector(parentElement);

  if (!countUpSection) return;

  const listCountUp = countUpSection.querySelectorAll("[data-counter]");

  if (!listCountUp) return;

  let counting = false;

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1 && !counting) {
        listCountUp.forEach((countUpItem) => counterUp(countUpItem));
        counting = true;
      }
    });
  };

  isInViewport(callback, countUpSection);
}
