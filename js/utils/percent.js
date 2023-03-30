import { isInViewport } from "./in-view-port";

function runPercent(percentItem) {
  if (!percentItem) return;

  const DURATION = 40;
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

export function initPercent(parentElement) {
  const percentSection = document.querySelector(parentElement);

  if (!percentSection) return;

  const percentListItem = percentSection.querySelectorAll(".percent__skill");

  let isRunPercent = false;

  const callback = (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isRunPercent) {
        percentListItem.forEach((percentItem) => runPercent(percentItem));
        isRunPercent = true;
      }
    });
  };

  isInViewport(callback, percentSection);
}
