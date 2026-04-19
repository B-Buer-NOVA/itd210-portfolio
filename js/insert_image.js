/* 
    for module 12 gallery updates
    inserting images into crochet.html, digital_art.html, and physical_art.html

    the amount of strings in the arrays which hold alt text description control the number of images displayed
*/

// GLOBAL CONSTANTS
// variables for crochet.html
const crochetGrid = document.getElementById("crochet-grid"); // id attached to an article
const crochetAlts = ["a crocheted black cat head with a blue frill collar sitting a desk with a crocheted doll body in the background",
    "an unfinished crocheted doll body sitting on a desk with its head between its legs",
    "a crocheted, humanoid black cat doll in a blue clown costume sitting next to a crochet humanoid grey wolf doll",
    "an unfinished crocheted white bunny sitting on a desk with its limbs strewn around it",
    "a crocheted white bunny with its limb attached and the cut excess string to its side",
    "a crochet white bunny with blue overalls",
    "three finished crocheted humanoid dolls lined up next ot each other. From left to right: a black cat in a blue clown costume with fluffy light blue buttons and light blue frill collar, a grey wolf with large hands and white tummy in a green vest, and a white bunny with blue overalls that transition from a teal at the bottom, to a sky blue, to light blue straps", 
    "the same three finished crocheted humanoid dolls with different lighting.", 
    "three finished crocheted humanoid dolls with different lighting, again."];

// variables for physical_art.html
const physicalGrid = document.getElementById("physical-grid");
const physicalAlts = ["painting of a beta fish dividing into three sections with different color palettes",
    "colored pencil drawing of rolling hills", 
    "color pencil drawing a close up of the seed on a strawberry",
    "A drawing in black marked and pencil meant to mimic a meme format. Julius Caesar is depicted three times, reacting to the text to his left. He rejects the first text that states 'Listen to the soothsayer, my wife, and the priests about visiting the Capitol on the Ides of March' which he visibly rejects. The second panel state, 'totally get crowned king' to which Caesar dons sun glass and finger guns, elated at the idea. The final panel states 'get stabbed by everybody' is scraggly text to which Caesar reacts blankly distraught.", 
    "oil pastel of a pink face with glasses behind some green flower, standing in front of blue circles and a red swirly background", 
    "color pencil drawing of an asphalt path, grass, and treeline", 
    "picture of a page in a small dream journal with a penned sketch of a front-facing human figure with eight arm and eight legs. Words and the page read May 3rd, 2022; My dream was really graphic again. 8 armed, 8 legged creature", 
    "picture of the same notebook previously mentioned on a different page depicting the same eight armed and eight legged figure in side profile. The arms are all attached to the side of the torso; whereas, the legs are attached to an extended abdomen like that of a bug of which the legs extend from in a row. The notes on the page read 'side view' and 'long body' with an arrow pointing to the abdomen", 
    "another entry in the same dream journal, a hatched, sketchy bust of a humanoid drawn with a black and red pens, black marker, and red and orange highlighters and markers. The face is calm, bright red and fleshy, like a face missing its skin. The neck and shoulders have a similar fleshy texture except in black. Eyes are open wide and appear to be missing their eyelids. The irises are bright red with a note written beside the head stating 'eyes might have been blue'."];

//variable for digital_art.html
const digitalGrid = document.getElementById("digital-grid");
const digitalAlts = ["a cartoony drawing of a large, lit jack-o-lantern casting light onto the ground in front of it and the human skull beside it.", 
    "a cartoon drawing a red-orange figure in front of a pastel hill and sky looking wistfully or listlessly at the viewer.", 
    "a stylized drawing of space. On the right, is a purple planet where a figure in a dress sits beneath a purple tree. The figure looks out into space seeing to planets colliding; generating a large ring of fire between the planets from the force of their impact. Four other planets of various sizes and distances can also be seen in frame.", 
    "a black and white cartoon of a person looking at the left corner of the drawing dejectedly. The figure is light grey, and sits in front of a swirling background of darker greys and blacks.", 
    "a grayscale drawing a figure smoking in the left corner of the drawing on a light gray background. Their hands are in their pockets as they lean against a presumed wall with one leg propped up against it. A prominent and funny mistake in the drawing is the cigarette they smoke is backwards with the filter on the wrong end of the cigarette.", 
    "a simple drawing of a lemon next to some leaves in a pastel palette. The background is angled yellow and green stripes.", 
    "A monotone drawing in a bright shade of hot pink. The broken figure is a floating torso with geometric pieces floating around with and white strings coming out of it's arm and high sockets like an exposed nervous system. Its face is floating in several pieces near its head with only the figure's right eye and nose remaining on its head.", 
    "A portrait bust of a bald face with a note beside it stating 'drawn in grayscale'. The color palette is very bright, neon colors. The neck, lips, and irises are bright pink, the face is orange and green, the eyebrows, pupils, and eyelashes are a deep blue.", 
    "A portrait from the waist up depicting a figure in a trench coat and short hair reading from a book. Icons from the files types .pdf, .epub, and .cbx, are in the background of the figure."];

// functions, all able to access global constant for alt text reference and html elements
function imageCreation(altText, folderName, fileExtension) {
    // local variables
    let imageStrings = Array(); // hold each image string individually
    

    for (let i = 0; i < altText.length; i++) {
        // creating the <img> strings based of of all description array and adding them to an array
        let picture = i + 1; // image name go from 1 to 9
        imageStrings.push("<img src='images/" + folderName + "/" + picture + fileExtension + "' alt='" + altText[i] + "'>");
    }

    return imageStrings
}

function createGrid(imageList) {
    const addGrid = document.createElement("div"); // gets sent to html
    addGrid.classList.add("image-grid"); // adding the styling class

    addGrid.innerHTML = imageList; // adding all images to div
    return addGrid;
}

// functions that each page calls when they load
function crochet() {
    let sendString = ""; // single string to send to addGrid
    let crochetImages = imageCreation(crochetAlts, "CROCHET", ".jpg");
    
    for (i = 0; i < crochetImages.length; i++) {
        // creating a text string with the images from the images array
        sendString += crochetImages[i];
    }
    crochetGrid.appendChild(createGrid(sendString));
}

function traditional() {
    let physicalImages = imageCreation(physicalAlts, "TRADITIONAL", ".jpg");
    let spannedString = "";
    let tempString = "";
    for (i = 0; i < physicalImages.length; i++) {
        // creating a text string with the images from the images array
        tempString += physicalImages[i];
    }

    spannedString += "<span class='span-3'>" + physicalImages[0] + "</span>";
    spannedString += "<span class='span-2'>" + physicalImages[1] + "</span>";
    spannedString += physicalImages[2] + physicalImages[3];
    spannedString += "<span class='span-2'>" + physicalImages[4] + "</span>";
    spannedString += "<span class='span-3'>" + physicalImages[5] + "</span>";
    
    for (i = 6; i < physicalImages.length; i++) {
        // creating a text string with the images from the images array
        spannedString += physicalImages[i];
    }
    
    physicalGrid.appendChild(createGrid(spannedString));
}

function digital() {
    let digitalImages = imageCreation(digitalAlts, "DIGITAL", ".png");
    let spannedString = "";
    let tempString = "";
    
    for (i = 0; i < digitalImages.length; i++) {
        // creating a text string with the images from the images array
        tempString += digitalImages[i];
    }
    
    digitalGrid.appendChild(createGrid(tempString))
}