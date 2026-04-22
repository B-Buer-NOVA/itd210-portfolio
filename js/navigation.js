/*
    Updated navigation, so i don't have to update each page
    every time i add a new page
*/
// basic 
const navContent = document.getElementById("navigation");
const navigation = document.getElementsByTagName("nav"); // where to insert

// variables
const ul = document.createElement("ul");
const homePage = document.createElement("li");
const linksArray = ['<a href="index.html">Home Page</a>',
    '<a href="about.html">About Page</a>', 
    '<a href="crochet.html">Crochet</a>', 
    '<a href="digital_art.html">Digital Art</a>', 
    '<a href="traditional_art.html">Traditional Art</a>', 
    '<a href="data.html">Date Demo</a>', 
    '<a href="media.html">Media</a>' ];

const navToggle = document.createElement("li");
const menuDrawer = document.createElement("li");
const links = document.createElement("div");
const back = '<a id="back">&#8592; Back</a>';

navToggle.id = 'nav-toggle';
navToggle.classList.add('mobile-nav');
navToggle.innerHTML = "&#9776;";
menuDrawer.id = 'menu-drawer';
links.className = 'links';
links.innerHTML += back;

// desktop additions
homePage.innerHTML = linksArray[0]; // home page / index.html
ul.appendChild(homePage);

for (let i = 1; i < linksArray.length; i++) {
    // skips index.html
    const li = document.createElement("li");
    li.classList.add("desktop")

    li.innerHTML = linksArray[i];
    ul.appendChild(li);
}

ul.appendChild(navToggle)

// links in div
for (let i = 1; linksArray[i]; i++) {
    links.innerHTML += linksArray[i];
}

menuDrawer.appendChild(links);

ul.appendChild(menuDrawer);

navContent.appendChild(ul)