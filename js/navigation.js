/*
    Updated navigation, so i don't have to update each page
    every time i add a new page
*/
// basic 
const navContent = document.getElementById("navigation");
const navigation = document.getElementsByTagName("nav"); // where to insert

// variables
const ul = document.createElement("ul");
const linksArray = ['<a href="index.html">Home Page</a>',
    '<a href="about.html">About Page</a>', 
    '<a href="crochet.html">Crochet</a>', 
    '<a href="digital_art.html">Digital Art</a>', 
    '<a href="traditional_art.html">Traditional Art</a>', 
    '<a href="data.html">Data Demo</a>', 
    '<a href="media.html">Media</a>' ];
// linksArray holds links of every webpage

// specific buttons and links
const homePage = document.createElement("li"); // home page link displayed at all times
const menuDrawer = document.createElement("li"); // menuDrawer overlay, holds .links
const links = document.createElement("div"); // holds links
const navToggle = document.createElement("button"); // appears on smaller screens, summons .links
const back = '<button id="back">&#8592; Back</button>';

// application of class, id, and content to specific buttons 
navToggle.id = 'nav-toggle';
navToggle.classList.add('mobile-nav');
navToggle.innerHTML = "&#9776;";
menuDrawer.id = 'menu-drawer';
links.className = 'links';
links.innerHTML += back; // back button at the top

// desktop additions
homePage.innerHTML = linksArray[0]; // home page / index.html
ul.appendChild(homePage); // first link in nav

for (let i = 1; i < linksArray.length; i++) {
    // skips index.html
    const li = document.createElement("li");
    li.classList.add("desktop") // adds desktop class to each li

    // added linksArray content to li and appending it to ul
    li.innerHTML = linksArray[i];
    ul.appendChild(li);
}

ul.appendChild(navToggle)

// links in links div
for (let i = 1; linksArray[i]; i++) {
    links.innerHTML += linksArray[i];
}

menuDrawer.appendChild(links); // menuDrawer has contents
ul.appendChild(menuDrawer); // appended to ul
navContent.appendChild(ul); // ul is sent to nav via id