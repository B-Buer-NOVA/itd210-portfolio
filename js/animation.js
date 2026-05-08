/* 
    Animation update for final milestone
    created by reference m10 assignment submitted previously for this course

    functions with index.html and about.html which have hero images

    .reveal makes elements transparent
    while .active 
*/

// elements
const heroElement = document.querySelector(".hero_image"); // hero image div
const heroText = heroElement.querySelector("h2"); // header child of .hero_image
const allSections = document.querySelectorAll("section"); // array of all sections
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches; // boolean variable

const revealPoint = 10;


let excludedAbout = Array();
for (i = 1; i < allSections.length; i++) {
    // creates array of elements not immediately in the window
    // used for about page
    excludedAbout.push(allSections[i]);
}

// animation classes are only added if motion is NOT reduced
// if reduceMotion is true, no animation is added
if (reduceMotion === false) {
    // animation classes added to hero elements
    heroElement.classList.add("load-hero");
    heroText.classList.add("load-animation");

    // reveal class added to section(s)
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.add("reveal");
    }

    window.addEventListener("load", function () {
        /* since about container is within the window, if else to animate it on page load instead
        for some reason, calling a named function wasn't working, so I made them anonymous
        */
        if (allSections[0].id === "about-container") {
            allSections[0].classList.add("active"); // top element from about page

            window.addEventListener("scroll", function () {
                const windowHeight = window.innerHeight; // fetches the height of the user's viewport
                let elements = [...excludedAbout]; // copied array for about.html

                for (let i = 0; i < elements.length; i++) {
                    const elementTop = elements[i].getBoundingClientRect().top;

                    if (elementTop < windowHeight - revealPoint) {
                        elements[i].classList.add("active");
                    }
                }
            });

        } else {
            // scroll animation for index.html
            window.addEventListener("scroll", function () {
                const windowHeight = window.innerHeight; // fetches the height of the user's viewport
                let elements = [...allSections]; // copy of sections

                for (let i = 0; i < elements.length; i++) {
                    const elementTop = elements[i].getBoundingClientRect().top;

                    if (elementTop < windowHeight - revealPoint) {
                        elements[i].classList.add("active");
                    }
                }
            });
        };
    })

}