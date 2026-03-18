/* JavaScript for Nav Toggle */

const navButton = document.querySelector(".mobile-nav");
const navMenu = document.querySelector("#menu-drawer");
const backButton = document.querySelector("#back");

navButton.addEventListener("click", function () {
    navMenu.className = 'open-drawer';
})

backButton.addEventListener("click", function () {
    navMenu.className = '.';
})

