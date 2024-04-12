const buttonOpen = document.getElementById("mobMenuButtonOpen");
const buttonClose = document.getElementById("mobMenuButtonClose");
const menu = document.querySelector(".header__mobile");

buttonOpen.addEventListener("click", () => {
  menu.classList.add("showMobMenu");
  menu.classList.remove("hideMobMenu");
});

buttonClose.addEventListener("click", () => {
  menu.classList.remove("showMobMenu");
  menu.classList.add("hideMobMenu");
});
