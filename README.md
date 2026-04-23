# itd210-portfolio
Capstone Project GitHub Repository for ITD 210
created by Berry Buer for ITD 210 Web Design 2

My portfolio topic is a portfolio of my artwork I've created in various mediums going back to 2020 at the earliest. As of March 18th, 2026, about.html is the most completed page (requiring a little touch up here and there), index.html has mostly placeholders for its content, and the html pages for crochet, digital art, and physical art have placeholder text for their content. I coded the project in VSCode studio operating on Windows 10 while using FireFox as a primary browser and Google Chrome as a secondary.

## Milestone 3 Update
April 20th, 2026

I've finally add images to the crochet, physical/traditional art, and digital art webpages! The assignment was to add a gallery with at least nine images, and I had three galleries that need an update! I've created two new JavaScript files that help accomplish the task of updating each of the galleries. 

'insert_image.js' as array that hold the alt image text of all of the files, and through several for loops, it creates the images and sends them to the html documents! Each of the html documents call their own functions in insert_image.js which fetch the correct alt texts arrays and creates the image string to send to the correct html file. 

'lightbox.js' is a simply overlay despite the name being lightbox. It only interacts with digital_art.html and physical_art.html; however, crochet.html does also have the onclick element in its images but they don't do anything because its not connected to 'lightbox.js.' 'lightbox.js' interacts with elements created by 'insert_image.js' by referencing their class names. When an image is clicked, it send an integer to the currentSlide(n) function which allows for the proper corresponding caption and slide from the hidden lightbox to be summoned. 

In addition, there have also been some minor updates regarding the validation of all of the html documents and the CSS. The overlays also have a tiny bit of animation to them which can be removed with 'prefer-reduced-motion: reduce' applied.