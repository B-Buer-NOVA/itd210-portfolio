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
    // selection of random recipe
    const keys = Object.keys(data.recipes);
    let randIndex = Math.floor(Math.random() * keys.length); // fifty total key, thirty limit
    let recipe = Object.values(data.recipes[randIndex]); // data from random recipe
    let recipeName = recipe[1]; // name of recipe from recipe array
    let ingredients = Object.values(data.recipes[randIndex].ingredients); // creates proper array for ul creation
    let instructions = Object.values(data.recipes[randIndex].instructions); // creates proper array for ol creation

    // title for th rows
    const infoRowList = ["prep time", "time to cook", "servings", "difficulty", "cuisine", "calories per serving"];
    const otherList = ["ingredients", "instructions"];

    // table elements
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const infoRow = document.createElement("tr"); // stores strings from infoRowList array for headers
    const imageRow = document.createElement("tr");
    const dataRow = document.createElement("tr"); // stores data from the JSON
    const twoListsHeader = document.createElement("tr")
    const twoLists = document.createElement("tr");  

    // creates title row information
    infoRowList.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        infoRow.appendChild(th);
    });

    // appends 'minutes' to prep time and time to cook
    for (let i = 4; i < 6; i++) {
        const info = document.createElement("td");
        info.textContent = recipe[i] + " minutes";
        dataRow.appendChild(info);
    }

    // appends rest of the data to the row
    for (let i = 6; i < 10; i++) {
        const info = document.createElement("td");
        info.textContent = recipe[i];
        dataRow.appendChild(info);
    }
       
    tr.innerHTML  = '<th colspan="6">' + recipeName + "</th>"; // name of recipe spans table
    // creation of <img>
    let imageStore = '<img src="' + data.recipes[randIndex].image +
        '" alt="' + data.recipes[randIndex].name + ', ' + data.recipes[randIndex].cuisine + '">';
    imageRow.innerHTML = '<td colspan="6">' + imageStore + "</td>"; // image spans table
    
    // unordered ingredients list
    let ul = "";
    ul += "<ul>";
    for (let i = 0; i < ingredients.length; i++) {
        ul += "<li>" + ingredients[i] + "</li>";
    };
    ul += "</ul>";
    
    // ordered ingredients list
    let ol = "";
    ol += "<ol>";
    for (let i = 0; i < instructions.length; i++) {
        ol += "<li>" + instructions[i] + "</li>";
    }
    ol += "</ol>";

    // instructions and ingredients colspan
    twoListsHeader.innerHTML = '<th colspan="3">' + otherList[0] + "</th>" + '<th colspan="3">' + otherList[1] + "</th>";
    twoLists.innerHTML = '<td colspan="3">' + ul + '</td>' + '<td colspan="3">' + ol + '</td>';

    // table creation
    table.appendChild(tr); // name of the recipe spans the top
    table.appendChild(imageRow); // image of the recipe spans the top
    table.appendChild(infoRow); // title row
    table.appendChild(dataRow); // data information
    table.appendChild(twoListsHeader) // ingredients and instructions title
    table.appendChild(twoLists); // ingredients and instructions list
    dataContainer.appendChild(table); // sends to HTML
}

theButton.addEventListener("click", fetchRecipe); // code executes from user input