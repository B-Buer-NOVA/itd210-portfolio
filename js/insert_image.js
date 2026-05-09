/* 
    for module 12 gallery updates
    inserting images into crochet.html, digital_art.html, and traditional_art.html

    the amount of strings in the arrays which hold alt text description controls
    the number of images displayed
    html documents call their respective pages upon loading at which the javascript
    then creates and delivers the elements
    
    I've been wanting to make image handling like this for awhile, and I'm really satisfied
    with how it turned out!
*/

/* GLOBAL CONSTANTS, all functions can call and access them */
// variables for crochet.html
const crochetGrid = document.getElementById("crochet-grid"); // id attached to an article, for sending to crochet.html
const crochetAlts = ["a crocheted black cat head with a blue frill collar sitting a desk with a crocheted doll body in the background",
    "an unfinished crocheted doll body sitting on a desk with its head between its legs",
    "a crocheted, humanoid black cat doll in a blue clown costume sitting next to a crochet humanoid grey wolf doll",
    "an unfinished crocheted white bunny sitting on a desk with its limbs strewn around it",
    "a crocheted white bunny with its limb attached and the cut excess string to its side",
    "a crochet white bunny with blue overalls",
    "three finished crocheted humanoid dolls lined up next ot each other. From left to right: a black cat in a blue clown costume with fluffy light blue buttons and light blue frill collar, a grey wolf with large hands and white tummy in a green vest, and a white bunny with blue overalls that transition from a teal at the bottom, to a sky blue, to light blue straps", 
    "the same three finished crocheted humanoid dolls with different lighting.", 
    "three finished crocheted humanoid dolls with different lighting, again."];

// variables for traditional_art.html
const traditionalGrid = document.getElementById("traditional-grid"); // id attached to an article, for sending to traditional_art.html
const traditionalAlts = ["painting of a beta fish dividing into three sections with different color palettes",
    "colored pencil drawing of rolling hills", 
    "color pencil drawing a close up of the seed on a strawberry",
    "A drawing in black marked and pencil meant to mimic a meme format. Julius Caesar is depicted three times, reacting to the text to his left. He rejects the first text that states 'Listen to the soothsayer, my wife, and the priests about visiting the Capitol on the Ides of March' which he visibly rejects. The second panel state, 'totally get crowned king' to which Caesar dons sun glass and finger guns, elated at the idea. The final panel states 'get stabbed by everybody' is scraggly text to which Caesar reacts blankly distraught.", 
    "oil pastel of a pink face with glasses behind some green flower, standing in front of blue circles and a red swirly background", 
    "color pencil drawing of an asphalt path, grass, and treeline"];

//variable for digital_art.html
const digitalGrid = document.getElementById("digital-grid"); // id attached to an article, for sending to digital_art.html
const digitalAlts = ["a cartoony drawing of a large, lit jack-o-lantern casting light onto the ground in front of it and the human skull beside it.", 
    "a cartoon drawing a red-orange figure in front of a pastel hill and sky looking wistfully or listlessly at the viewer.", 
    "a stylized drawing of space. On the right, is a purple planet where a figure in a dress sits beneath a purple tree. The figure looks out into space seeing to planets colliding; generating a large ring of fire between the planets from the force of their impact. Four other planets of various sizes and distances can also be seen in frame.", 
    "a grayscale drawing a figure smoking in the left corner of the drawing on a light gray background. Their hands are in their pockets as they lean against a presumed wall with one leg propped up against it. A prominent and funny mistake in the drawing is the cigarette they smoke is backwards with the filter on the wrong end of the cigarette.", 
    "a simple drawing of a lemon next to some leaves in a pastel palette. The background is angled yellow and green stripes.", 
    "A portrait bust of a bald face with a note beside it stating 'drawn in grayscale'. The color palette is very bright, neon colors. The neck, lips, and irises are bright pink, the face is orange and green, the eyebrows, pupils, and eyelashes are a deep blue."]
    

// lightbox class, for sending images to the lightbox
const lightbox = document.querySelector(".lightbox")


/* functions, all able to access global constant for alt text reference and html elements */
function imageCreation(altText, folderName, fileExtension) {
    // separate function for crochet.html because it doesn't have overlay elements
    // local variables
    let imageStrings = Array(); // hold each image string individually

    // creating the <img> strings based of of all description array and adding them to an array
    for (let i = 0; i < altText.length; i++) {
        let picture = i + 1; // image name go from 1 to 9
        imageStrings.push("<img src='images/" + folderName + "/" + picture + fileExtension + "' loading='lazy' alt='" + altText[i] + "'>");
    }

    return imageStrings // sends an array filled with the images strings
}

function imageClicks(altText, folderName, fileExtension) {
    // separate function for digital and traditional art galleries for their extra functionality (styling class, tab index, and onclick function)
    // local variables
    let imageStrings = Array(); // hold each image string individually
    
    // creating the <img> strings based of of all description array and adding them to an array
    for (let i = 0; i < altText.length; i++) {
        let picture = i + 1; // image name go from 1 to 9
        imageStrings.push("<img src='images/" + folderName + "/" + picture + fileExtension + "' loading='lazy' class='clickMe' tabindex='0' alt='" + altText[i] + "' onclick='openBox();currentSlide(" + i + ")'>");
    }

    return imageStrings // sends an array filled with the images strings
}

function createGrid(imageList) {
    // creation of the grid that houses the images
    const addGrid = document.createElement("div"); // gets sent to html
    addGrid.classList.add("image-grid"); // adding the styling class

    addGrid.innerHTML = imageList; // adding all images to div
    return addGrid; // sends grid to be appended to called grid
}

/* functions that each page calls when they load */
function crochet() {
    // crochet.html calls this function upon loading
    let sendString = ""; // single string to send to addGrid
    let crochetImages = imageCreation(crochetAlts, "CROCHET", ".jpg"); // folder name and proper file extension
    
    for (let i = 0; i < crochetImages.length; i++) {
        // creating a text string with the images from the images array
        sendString += crochetImages[i];
    }

    crochetGrid.appendChild(createGrid(sendString)); // sends div grid to article
}

function traditional() {
    // traditional_art.html calls this function upon loading
    let traditionalImages = imageClicks(traditionalAlts, "TRADITIONAL", ".jpg");
    let spannedString = "";

    // custom organization for the grid
    spannedString += "<span class='span-3'>" + traditionalImages[0] + "</span>";
    spannedString += "<span class='span-2'>" + traditionalImages[1] + "</span>";
    spannedString += traditionalImages[2] + traditionalImages[3];
    spannedString += "<span class='span-2'>" + traditionalImages[4] + "</span>";
    spannedString += "<span class='span-3'>" + traditionalImages[5] + "</span>";
    
    traditionalGrid.appendChild(createGrid(spannedString)); // appended spannedString to div grid and sends to article
}

function digital() {
    // digital_art.html calls this function upon loading
    let digitalImages = imageClicks(digitalAlts, "DIGITAL", ".png");
    let sendString = "";
    
    for (let i = 0; i < digitalImages.length; i++) {
        // creating a text string with the images from the images array
        sendString += digitalImages[i];
    }
    
    digitalGrid.appendChild(createGrid(sendString)) // sends div grid to article
}

/* functions that create and send content for lightbox/overlay */
function digitalLightbox() {
    // digital_art.html calls function upon loading
    // descriptionArray in the same order as images; sent to html for lightbox.js to use
    const descriptionArray = ["I drew this around Halloween 2020 when I was around 14 years old. I was fiddling around with FireAlpaca and drawing on my computer. It's nothing spectacular, and I still find it cute.", 
        "This was probably drawn when I was 15 when I was still very early in developing my art style. I struggled with drawing noses and ears, and keeping eyes within the face, so I just left out noses and ears altogether and let eyes slip out of the face. I don't draw like that anymore, but the style still holds a very special place in my heart. Sorry for anyone with red-greed color blindness; the character is a bright red-orange on a pastel green and blue background.", 
        "The (original)  file name for this is \"Silent Destruction\" (none of these drawings retain their original file names for the purposes of this project), and I drew it around 2020 or 2021. I spent a good chunk of time making it, and I was really proud of how it turned out. The meaning behind the name is simple since sound doesn't travel in the void of space the collision of the planet would be silent.",
        "I love this one so much because the cigarette is backwards. It's such a silly little mistake to me and it just brings me so much joy. I shaded with the hatching brush a lot at this time; for some pieces I blended or blurred it out for a smooth finish and for other I left it un-blended.", 
        "This another one of my very quick drawings I did probably for the sake of doodling. This little lemon is really simple with not a lot so it. I still like it.", 
        "This was drawing I did in IbisPaint, a mobile art app: I selected a color palette of bright neon color and changed my tablet to grayscale to draw this. I don't think it looks better or worse with or without the grayscale filter; it was mostly just a fun activity for myself."]
    // descriptionArray variable name reused in traditionalLightbox() because of local scope

    const light = document.createElement("div"); // div element
    light.classList.add("light"); // div class "light" that holds all the images and descriptions
    let digitalImages = Array(); // array that holds a separate image strings for lightbox with slides class

    for (let i = 0; i < digitalAlts.length; i++) {
        // creating images strings for lightbox
        let picture = i + 1
        digitalImages.push("<img src='images/DIGITAL/" + picture + ".png' alt='" + digitalAlts[i] + "' loading='lazy' class='slides'>");
    }

    for (let i = 0; i < descriptionArray.length; i++) {
        // sending descriptions to light div
        const description = document.createElement("p");
        description.classList.add("caption"); // adding the caption class to p elements
        description.textContent = descriptionArray[i]; // adding description content
        lightbox.appendChild(description) // appending the description to the light div
    }

    for (let i = 0; i < digitalImages.length; i++) {
        // sending images to light div
        light.innerHTML += digitalImages[i];
    };

    lightbox.appendChild(light); // appends to light div
}

function traditionalLightbox() {
    // traditional_art.html calls function upon loading
    // descriptionArray in the same order as images; sent to html for lightbox.js to use; captions for the traditional_art.html image overlays
    const descriptionArray = ["This silly little fish in was a color scheme project for my art class in my freshman year of high school. From left to right the color schemes are, monochromatic in red, analogous in blue, and triadic in some red-orange, yellow, and orange. We had to select one of four images to reference and copy, and I chose a line art drawing of a betta fish; however, the big eyeball I drew was my own creative embellishment. I still have the old acrylic painting somewhere in my closet.", 
        "This was another art project for school; this time a color pencil drawing from my sophomore year. I believe we reference a tutorial from YouTube that used this picture as reference which we also subsequently all referenced for the assignment. I was really proud of the texture I developed in the forefront elements of the drawing. The hills and clouds in the back I wasn't very fond of however. This was a fun project since we got to draw on black paper!",
        "I believe this was from my freshman year: the assignment was to pick between two examples of macro-photography, either a close of of pineapple skin or strawberry. I chose the strawberry photo as a reference and used color pencils to make it. I remember having a lot of fun blending and shading!", 
        "This drawing is from my junior year; this time for an english course! We were studying Shakespeare's play, Julius Caesar, at the time and as a fun option project we were tasked to make meme from play. I decided to reference Julius Caesar ignoring all the warning he was given leading to his attendance at the Capitol where we was stabbed to death. I had a lot of fun making it! Especially with the little calligraphy changes as the panels progressed.", 
        "This a project from the beginning of my senior year. We were given creative freedom to draw whatever we liked in any medium, so I drew this random assortment of items and texture in oil pastel. This was a photo of it after I was done drawing it; the latter part of the assignment had us cut up what we drew and turn it into a 3D art piece.",
        "This was a project from my sophomore year where we got to reference any photo we liked and use any medium we liked, so I reference a photo I took and redrew in colored pencil! It isn't a one to one creation since the original photo also include houses, but I decided to replace them with more path and trees like because I didn't want to try draw them."]

    const light = document.createElement("div");
    light.classList.add("light");
    let traditionalImages = Array();

    for (let i = 0; i < traditionalAlts.length; i++) {
        picture = i + 1;
        traditionalImages.push("<img src='images/TRADITIONAL/" + picture + ".jpg' alt='" + traditionalAlts[i] + "' loading='lazy' class='slides'>");
    };

    for (let i = 0; i < descriptionArray.length; i++) {
        // sending descriptions to light div
        const description = document.createElement("p");
        description.classList.add("caption");
        description.textContent = descriptionArray[i];
        lightbox.appendChild(description)
    }
    
    for (let i = 0; i < traditionalImages.length; i++) {
        // images are sent to light div
        light.innerHTML += traditionalImages[i];
    };

    lightbox.appendChild(light); // appended light div
}