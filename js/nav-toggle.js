/* JavaScript for Nav Toggle */

const navButton = document.querySelector(".mobile-nav"); // check for click
const navMenu = document.querySelector("#menu-drawer"); // actual drawer
const backButton = document.querySelector("#back"); // closes drawer
const galleries = document.querySelector("#gallery-menu"); // check for click
const galleryDrop = document.querySelector("#galleries-drop") // dropdown menu

navButton.addEventListener("click", function () {
    navMenu.className = 'open-drawer'; // class added that opens drawer
})

backButton.addEventListener("click", function () {
    navMenu.className = '.'; // class name removed
})

galleries.addEventListener("click", function () {
    if (galleryDrop.style.display !== 'flex') {
        galleryDrop.style.display = 'flex';
    } else {
        galleryDrop.style.display = 'none';
    };
    // if the gallery menu isn't displayed as flex, it's is flexed
    // and if the gallery is flex, its display is set to non
})