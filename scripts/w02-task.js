/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const full_name = "Ian Kazembe";

// Step 2: place the value of the name variable into the HTML file 
document.querySelector('#name').innerHTML = full_name;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const profileImage = "images/IMG_3803-Edit.jpg";

// Step 7: place the value of the picture variable into the HTML file 
document.querySelector('img').setAttribute('src', profileImage);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoods = ['Hotdogs', 'Rice & roast chicken', 'Braai pork'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavFood = "Salads";

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(anotherFavFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favFoods;
