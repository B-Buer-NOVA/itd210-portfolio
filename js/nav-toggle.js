/*
    Script for gallery dropdown and mobile navigation toggles across the website
*/

/* variables constants */

// mobile navigation toggle elements
const navButton = document.querySelector(".mobile-nav"); // check for click
const navMenu = document.querySelector("#menu-drawer"); // actual drawer
const backButton = document.querySelector("#back"); // closes drawer

// gallery dropdown elements
const galleries = document.querySelector("#gallery-menu"); // check for click
const galleryDrop = document.querySelector("#galleries-drop") // dropdown menu

/* mobile navigation click functionality */
navButton.addEventListener("click", function () {
    navMenu.className = 'open-drawer'; // class added that opens drawer
})

backButton.addEventListener("click", function () {
    navMenu.className = '.'; // class name removed
})

/* gallery dropdown click functionality */
galleries.addEventListener("click", function () {
    /* if the gallery menu isn't displayed as flex, it's is flexed
    and if the gallery is flex, its display is set to none */
    if (galleryDrop.style.display !== 'flex') {
        galleryDrop.style.display = 'flex';
    } else {
        galleryDrop.style.display = 'none';
    };

})