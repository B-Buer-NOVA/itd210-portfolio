/*
    Updated navigation, so I don't have to update each page every time I add a new page
*/

// basic variables for creation and sending to HTML
const navContent = document.getElementById("navigation");
const ul = document.createElement("ul");
const linksArray = ['<a href="index.html">Home Page</a>',
    '<a href="about.html">About Page</a>',
    '<a href="data.html">Data Demo</a>',
    '<a href="media.html">Media</a>',
    '<a href="contact.html">Contact</a>'];
const gallery = ['<a href="crochet.html">Crochet</a>',
    '<a href="digital_art.html">Digital Art</a>',
    '<a href="traditional_art.html">Traditional Art</a>']
// linksArray holds links of every webpage

// special buttons and links that hav specific tasks
const homePage = document.createElement("li"); // home page link displayed at all times (no classes added)
const menuDrawer = document.createElement("li"); // menuDrawer overlay, holds .links
const links = document.createElement("div"); // holds links
const navToggle = document.createElement("button"); // appears on smaller screens, summons .links
const galleryMenu = document.createElement("li"); // holds and toggles (other js file) dropdown menu for three galleries to declutter header navigation
const dropdown = document.createElement("div"); // holds gallery links
const back = '<button id="back">&#8592; Back</button>';

/* set up of class, id, and content to special nav functions */

// mobile nav toggle creation
navToggle.classList.add('mobile-nav');
navToggle.id = 'nav-toggle';
navToggle.innerHTML = "&#9776;";

// gallery menu creation
galleryMenu.id = 'gallery-menu';
galleryMenu.classList.add("desktop");
galleryMenu.tabIndex = "0";
galleryMenu.style.textDecoration = 'underline';
galleryMenu.innerHTML += 'galleries';

// id for styling added to dropdown
dropdown.id = 'galleries-drop';

// menu drawer and links creation
menuDrawer.id = 'menu-drawer';
links.className = 'links';
links.innerHTML += back; // back button at the top

/* creation of navigation bar */
homePage.innerHTML = linksArray[0]; // home page or index.html
ul.appendChild(homePage); // first link in nav

for (let i = 1; i < linksArray.length; i++) {
    // skips index.html
    const li = document.createElement("li");
    li.classList.add("desktop") // adds desktop class to each li

    // added linksArray content to li and appending it to ul
    li.innerHTML = linksArray[i];
    ul.appendChild(li);
}

for (let i = 0; i < gallery.length; i++) {
    // adding galleries to dropdown menu
    dropdown.innerHTML += gallery[i];
}

galleryMenu.appendChild(dropdown); // dropdown menu appended to the galleries link
ul.appendChild(galleryMenu); // galleries link appended to ul
ul.appendChild(navToggle); // navToggle appended

// links for menuDrawer
for (let i = 1; linksArray[i]; i++) {
    // appending links
    links.innerHTML += linksArray[i];
}
for (let i = 0; gallery[i]; i++) {
    // appending galleries to the end of the list
    links.innerHTML += gallery[i];
}

menuDrawer.appendChild(links); // menuDrawer's contents appended
ul.appendChild(menuDrawer); // appended to ul
navContent.appendChild(ul); // ul is finished and sent to nav via id