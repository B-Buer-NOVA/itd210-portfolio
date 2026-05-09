/*
    Animation update for final milestone

    Functions with the rest of webpages that don't have a hero image
    other webpages only have one section    

    since these sections are within the viewport, I have 
    them animate on loading instead of scrolling
*/

const oneSection = document.querySelector("section") // html element
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches; // boolean variable

// animation is not applied if reduceMotion === true
if (reduceMotion === false) {
    window.addEventListener("load", function () {
        /* adding animation classes */
        oneSection.classList.add("reveal");
        oneSection.classList.add("active");
    })
}