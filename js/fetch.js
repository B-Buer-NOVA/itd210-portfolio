/* Fetch API JavaScript 
    Berry Buer
    Due Date: 3/30/2026

*/

// elements by ID, accessible to all functions
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const dataContainer = document.getElementById("dataContainer");
const theButton = document.getElementById("loadButton");
const tableButton = document.getElementById("loadSomething");
const arrayLength = document.getElementById("array");

async function fetchRecipe() {
    // text strings
    const meanToMe = "Something went wrong. :/ you suck at this";
    const printFailure = "Something went wrong, please try again";
    const printSuccess = "Data successfully loaded!";

    loadingMessage.style.display = "block";
    errorMessage.textContent = "";

    try { // error handling
        // fetch and make JSON file
        const response = await fetch('https://dummyjson.com/recipes');
        const recipes = await response.json();

        // check for HTTP errors
        if (!response.ok) { // if not okay
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        createTable(recipes); // sends to function that creates the table

    } catch (error) {
        errorMessage.innerHTML = meanToMe + `<p>Error: ${error.message}</p>`;
        return null;

    } finally {
        loadingMessage.style.display = "none";
    };
}

function createTable(data) {
    // variables for random generation 
    const keys = Object.keys(data.recipes);
    let randIndex = Math.floor(Math.random() * keys.length); // fifty total key, thirty limit
    let recipe = Object.values(data.recipes[randIndex]); // data from random recipe

    // variables for table
    const topRowList = ["", "name", "ingredients", "instructions", "prep time", "time to cook", "servings", "difficulty", "cuisine", "calories per serving"];
    const table = document.createElement("table");
    const td = document.createElement("td");
    const tr = document.createElement("td");
    let topRow = document.createElement("tr"); // stores strings from topRowList array for headers
    let bottomRow = document.createElement("tr"); // stores data from the JSON

    // creates top row information
    topRowList.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        topRow.appendChild(th);
    });
    table.appendChild(topRow);

    let imageStore = '<img src="' + data.recipes[randIndex].image +
        '" alt="' + data.recipes[randIndex].name + ', ' + data.recipes[randIndex].cuisine + '">';
    // image and alt text from JSON file
    td.innerHTML = imageStore;
    bottomRow.appendChild(td);

    for (let i = 1; i < 10; i++) {
        const info = document.createElement("td");
        info.textContent = recipe[i];
        bottomRow.appendChild(info);
    }

    table.appendChild(bottomRow);
    dataContainer.appendChild(table); // sends to HTML
}

theButton.addEventListener("click", fetchRecipe); // code executes from user input