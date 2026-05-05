/*
    sticky header shrink on scroll
    add ids to each header on the webpage

    reference: https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
*/

// html elements
const header = document.getElementById("sticky_shrink");
const h1 = document.getElementsByTagName("h1"); // array, fetches element without id

window.onscroll = function () {
    // anonymous function that changes header size
    const change = header.style; // header's style
    const title = h1[0].style; // selected element from array
    const normal = "clamp(2em, 4vw, 2.5em)"; // normal size
    const halfPint = "clamp(1.5em, 4vw, 1.8em)"; // matches h2 font clamp
    const little = "clamp(16px, 4vw, 18px)" // matches nav li size

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        change.padding = "0.1em 1em"; // shrinks header horizontally
        title.fontSize = halfPint;
    } else {
        change.padding = "1em"; // normal padding
        title.fontSize = normal; // normal size
    }
}