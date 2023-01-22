const menu_btn = document.querySelector(".burger-menu");
const mobile_menu = document.querySelector(".header-mobile-nav__list");
const mobile_menu_link = document.querySelector(".header-mobile-nav__list");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("burger-menu--active");
  mobile_menu.classList.toggle("header-mobile-nav__list--active");
});

function hideMenu() {
  menu_btn.classList.remove("burger-menu--active");
  mobile_menu.classList.remove("header-mobile-nav__list--active");
}

// for (const element of mobile_menu_link.children) {
//   element.addEventListener("click", hideMenu);
// }

window.addEventListener("click", function (clickOutsideMenu) {
  if (
    !document.querySelector(".burger-menu").contains(clickOutsideMenu.target) &&
    !document
      .querySelector(".header-mobile-nav__list")
      .contains(clickOutsideMenu.target)
  ) {
    menu_btn.classList.remove("burger-menu--active");
    mobile_menu.classList.remove("header-mobile-nav__list--active");
  }
});