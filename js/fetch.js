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
    const infoRowList = ["prep time", "time to cook", "servings", "difficulty", "cuisine", "calories per serving"];
    const otherList = ["ingredients", "instructions"];
    const table = document.createElement("table");
    
    const tr = document.createElement("tr");
    const infoRow = document.createElement("tr"); // stores strings from infoRowList array for headers
    const imageRow = document.createElement("tr");
    const bottomRow = document.createElement("tr"); // stores data from the JSON
    const twoListsHeader = document.createElement("tr")
    const twoLists = document.createElement("tr");

    // cleaning up the data table
    let recipeName = recipe[1];
    
    let ingredients = recipe[2];
    let instructions = recipe[3];

    // creates top row information
    infoRowList.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        infoRow.appendChild(th);
    });
    

    
    

    

    for (let i = 4; i < 6; i++) {
        const info = document.createElement("td");
        info.textContent = recipe[i] + " minutes";
        bottomRow.appendChild(info);
    }
    for (let i = 6; i < 10; i++) {
        const info = document.createElement("td");
        info.textContent = recipe[i];
        bottomRow.appendChild(info);
    }
    
    // manual creation
    // top row, recipe name
    tr.innerHTML  = '<th colspan="6">' + recipeName + "</th>";
    // creates bottom row information
    let imageStore = '<img src="' + data.recipes[randIndex].image +
        '" alt="' + data.recipes[randIndex].name + ', ' + data.recipes[randIndex].cuisine + '">';
    imageRow.innerHTML = '<td colspan="6">' + imageStore + "</td>";
    // instructions and ingredients colspan
    twoListsHeader.innerHTML = '<th colspan="3">' + otherList[0] + "</th>" + '<th colspan="3">' + otherList[1] + "</th>";
    twoLists.innerHTML = '<td colspan="3">' + ingredients + '</td>' + '<td colspan="3">' + instructions + '</td>';

    table.appendChild(tr);
    table.appendChild(imageRow);
    table.appendChild(infoRow);
    table.appendChild(bottomRow);
    table.appendChild(twoListsHeader)
    table.appendChild(twoLists);
    dataContainer.appendChild(table); // sends to HTML
}

theButton.addEventListener("click", fetchRecipe); // code executes from user input