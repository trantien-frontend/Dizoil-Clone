function initShowNav() {
  const buttonShowMenu = document.getElementById("open-menu");

  if (!buttonShowMenu) return;

  buttonShowMenu.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  const nav = document.querySelector("nav");

  if (!nav) return;

  nav.classList.toggle("show");
}

function initShowSubMenu() {
  const menu = document.getElementById("menu");

  if (!menu) return;

  const listButtonShowSubMenu = menu.querySelectorAll(".menu__item--sub a");

  if (!listButtonShowSubMenu) return;

  listButtonShowSubMenu.forEach((button) => {
    button.addEventListener("click", () => toggleSubMenu(button.parentElement));
  });
}

function toggleSubMenu(parentSubMenu) {
  const subMenu = parentSubMenu.querySelector(".sub-menu");

  if (!subMenu) return;

  subMenu.classList.toggle("show-sub-menu");
}

function handleEventHideMenu() {
  const buttonHideMenu = document.getElementById("close-menu");

  if (!buttonHideMenu) return;

  buttonHideMenu.addEventListener("click", hideMenu);
}

function hideMenu() {
  const nav = document.querySelector("nav");

  if (!nav) return;

  nav.classList.remove("show");
}

(() => {
  initShowNav();
  initShowSubMenu();
  handleEventHideMenu();
})();
