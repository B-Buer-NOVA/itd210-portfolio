# itd210-portfolio
Capstone Project GitHub Repository for ITD 210

created by Berry Buer for ITD 210 Web Design 2

link to webpage: https://b-buer-nova.github.io/itd210-portfolio/index.html

My portfolio topic is a portfolio of my artwork I've created in various mediums going back to 2020 at the earliest. It hosts three galleries of three mediums with art piece mostly from high school as I have a bigger digital archive of pieces from back then. 

As of March 18th, 2026, about.html is the most completed page (requiring a little touch up here and there), index.html has mostly placeholders for its content, and the html pages for crochet, digital art, and physical art have placeholder text for their content. 

### Technologies Used
I coded the project in VSCode studio operating on Windows 10 while using FireFox as a primary browser and Google Chrome as a secondary. The art programs I've used include FireAlpaca on desktop and IbisPaint on mobile. I created the video on media.html using OpenShot Video Editor to stitch together speed paint exports from IbisPaint. 

### Features
- images and their alt descriptions inserted via JavaScript for easy editing (addiction of onclick features or other tags, etc.)
- overlay descriptions onclick for digital and traditional art galleries
- fetch API demo
- mobile navigation toggle & navigation created by JavaScript for easy editing
- contact form using Formspree as a backend

### Third-Party assets
Gabriela-Regular from Google Fonts: https://fonts.google.com/specimen/Gabriela?query=Gabr

## Milestone 1 - Proposal and Basic Structure
January 30th, 2026: 
Proposal of website topic and upon acceptance, creation of five basic html webpages and CSS styling.

## Milestones 2 - steps stones prior to gallery

### About page update
March 9th, 2026:
Added content to about.html. 

### Push project to GitHub
March 18th, 2026:
Uploaded project to GitHub. 

### fetch API demo
March 30th, 2026:
Created data.html and fetch.js to practice with public APIs. 

April 3rd, 2026:
Updated table organization on fetch.js. Updated table CSS to be more responsive for smaller screens

## Milestone 3 Update
April 20th, 2026

I've finally add images to the crochet, traditional art, and digital art webpages! The assignment was to add a gallery with at least nine images, and I had three galleries that need an update! I've created two new JavaScript files that help accomplish the task of updating each of the galleries. 

'insert_image.js' as array that hold the alt image text of all of the files, and through several for loops, it creates the images and sends them to the html documents! Each of the html documents call their own functions in insert_image.js which fetch the correct alt texts arrays and creates the image string to send to the correct html file. 

'lightbox.js' is a simply overlay despite the name being lightbox. It only interacts with digital_art.html and physical_art.html; however, crochet.html does also have the onclick element in its images but they don't do anything because its not connected to 'lightbox.js.' 'lightbox.js' interacts with elements created by 'insert_image.js' by referencing their class names. When an image is clicked, it send an integer to the currentSlide(n) function which allows for the proper corresponding caption and slide from the hidden lightbox to be summoned. 

In addition, there have also been some minor updates regarding the validation of all of the html documents and the CSS. The overlays also have a tiny bit of animation to them which can be removed with 'prefer-reduced-motion: reduce' applied.

### Navigation and file name update
April 22nd, 2026

Created navigation.js to create the header navigation for each webpage. Allows for easy editing of the navigation without having to go to teach individual webpage. #nav-toggle and #back changed to button for proper accessibility and interactivity. 

physical_art.html renamed to traditional_art.html, and subsequent ids, classes, and JavaScript variables that reference this renamed accordingly.

April 23rd, 2026

Added more interactivity via :hover and :focus to interactive elements such as the index.html cards and images in the digital and traditional art galleries. 

About page hero gif changes to static on prefers-reduced-motion: reduce.

## Milestone 4 - Media page
April 27th, 2026: 
Media page to practice with video and audio elements/controls. Added video and audio tab section.

## Milestone 5 - Contact Page
May 4th, 2026

Created a contact.html which houses a form utilizing Formspree for backend functionality. I usually prefer to make separate files for Javascript; however, I decided to keep all the Javascript in the html file for this project. The first inline is the JavaScript for validating and sending the form to Formspree, and the second script counts the number of characters in the textarea. Since thanks.html is a 'special' document, it doesn't have a header, and it only had a button that connects it to the home page. 

## Final Milestone - Final Additions and Project Reflection
May 8th, 2026

I finally added some scrolling animations to the website! The new Javascript files, scroll_animation.js and animation.js, add the animation classes to the indicated elements, but only if the user doesn't have a preference for reduced motion. The variable 'reduceMotion' is a boolean variable that tracks this: if it's false, animation is applied, if it's true, no animation classes are applied. 

For a previous assignment that wasn't pushed to GitHub, I had animation applied first with JavaScript removing it if reduced motion was preferred. I think this new method of applying animation is a lot simpler and more intuitive. 

### Project Reflection

- What is the strongest part of your final site and why?
I suppose the JavaScript I've written is the strongest part of my website. It's the back bone of a lot of processes within my website: adding images to my galleries, creating and editing navigation content, and adding animation to my webpages. I'm quite surprised at how much JavaScript take up my website since I was doubtful in my abilities to properly implement it at the beginning of the semester.

- What did you learn about responsive design and interactivity this semester?
I learned a lot about color contrast and making a website properly navigable via tab and tab-shift! It was quite satisfying to make sure elements were able to be properly navigated to with tab, especially the elements that weren't actually buttons or links (the cards on index.html for instance). I also really enjoyed properly implementing reduction of motion with JavaScript.

- Which piece of feedback changed your approach the most?
The feedback I got on accessibly contrast and colors changed my approach to color palettes and design. I completely changed my color palette at the about page milestone since I found purple and yellow to be nice colors and contrast adequately. I also did my best to ensure words and titles that weren't simple black on white background had good contrast against their backdrop.

- If you had another month, what would you add or refine next?
I think I would condense scroll_animation.js and animation.js into one file with two or more functions for the webpages to call from, similar to the gallery webpages relationship with insert_image.js. In general, I believe I would play around with JavaScript a lot more, but I can also do that in my free time. 