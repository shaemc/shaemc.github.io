// Requirements:
// 1.  Create html, css, and js files for final project
// 2.	Create a json file with different meals
// 3.	Create a button to click and filter through the json file and randomly select a meal for one day
// 4.	Place that meal into a calendar (weekly?) for that day, within the js file add it by using innerHTML?
// 5.	Go back and click the button for each of the rest of the 7 days

const json = {
    meals: [
        {
            food: "Chicken salad",
            ingredients: "chicken, salad"
        },
        {
            food: "Tacos",
            ingredients: "chicken, lettuce, tortillas, beans"
        },
        {
            food: "Fajitas",
            ingredients: "chicken, lettuce, tortillas, peppers"
        },
        {
            food: "Pancakes",
            ingredients: "bacon, pancake mix"
        }, 
        {
            food: "Spaghetti",
            ingredients: "chicken, alfredo, breadsticks"
        },
        {
            food: "Stir fry",
            ingredients: "chicken, broccoli, rice"
        },
        {
            food: "Pizza",
            ingredients: "pepperoni, sauce, crust, cheese"
        },
        {
            food: "Brownies",
            ingredients: "brownie mix"
        },
    ]   
}
let usedmeals = [];
let ingredients = [];
let uniquegroceries = [];

const button = document.querySelector(".button").addEventListener("click", fillCalendar);

function mealFilter(){
    // this function should grab the food names from our json file and filter through them to pick a random one to place in the calendar
    //add an if statement to see if the day is full already
   // url.this.meals.filter(random);

   do {
    numberofmeals = Math.floor(Math.random() * json.meals.length);
   } while(checkDuplicate(numberofmeals, usedmeals))
    meal = json.meals[numberofmeals];
    neededingredients = meal.ingredients.split(',');
    ingredients += neededingredients + ', ';
    console.log(ingredients)
    usedmeals.push(numberofmeals);
    return meal;
}
function checkDuplicate(index, usedmeals){
    //FINISH THIS FUNCTION
    //check to see if index is in usedmeals
    for(var i=0; i<usedmeals.length; i++){
        if (usedmeals[i]==index){
            return true;
        }
        
    }
    return false;
    // //if true return true into mealFilter function
    // if false put it into usedMeals and return false
    //usedmeals.indexOf(index);

}
// mealFilter();
function fillCalendar(calendar) {
    usedmeals = [];
    ingredients = [];

    const sunday = document.querySelector(".sunday");
    const monday = document.querySelector(".monday");
    const tuesday = document.querySelector(".tuesday");
    const wednesday = document.querySelector(".wednesday");
    const thursday = document.querySelector(".thursday");
    const friday = document.querySelector(".friday");
    const saturday = document.querySelector(".saturday");

    sunday.innerHTML = `<h2>Sunday</h2> <p>${mealFilter().food}</p>`;
    monday.innerHTML = `<h2>Monday</h2> <p>${mealFilter().food}</p>`;
    tuesday.innerHTML = `<h2>Tuesday</h2> <p>${mealFilter().food}</p>`;
    wednesday.innerHTML = `<h2>Wednesday</h2> <p>${mealFilter().food}</p>`;
    thursday.innerHTML = `<h2>Thursday</h2> <p>${mealFilter().food}</p>`;
    friday.innerHTML = `<h2>Friday</h2> <p>${mealFilter().food}</p>`;
    saturday.innerHTML = `<h2>Saturday</h2> <p>${mealFilter().food}</p>`;

    const groceries = document.querySelector(".grocerylist");
    
    newList = ingredients.toString()
    // let newList = new Array(ingredients);
    // newList.forEach(ingredient => (newList));
    
    // console.log(ingredient);

    // console.log(newList);
    // let uniquegroceries = newList.filter((c, index) => {
    //     return newList.indexOf(c) !== index;
    // });

    // console.log(newList);
    // newList.forEach((ingredient) => {
    //     if (!uniquegroceries.includes(ingredient)) {
    //         uniquegroceries.push(ingredient);
    //     }
    // });
    // console.log(uniquegroceries);


    groceries.innerHTML = `<h3> Grocery List </h3> <p>${newList}</p>`; //filter through this ingredients to remove duplicates
    // console.log(groceries.innerHTML);

    return calendar;
}

// function addToGroceryList(list){
//     const groceries = document.querySelector(".grocerylist");

//     groceries.innerHTML = `<h3> Grocery List </h3> <p>${mealFilter().ingredients}</p>`
    
//     console.log(mealFilter().ingredients)

//     return list;
// }



// Stretch challenge:
// 1.	Connect your json file with the usda food api (https://fdc.nal.usda.gov/api-guide.html ) and write down all of the ingredients that you would need for each meal
// 2.	Place those ingredients in the calendar under the meal (or possibly create a grocery list on the side of the calendar to show what you would need to buy in order to make that meal!)

// Your project should include application of most of the topics introduced in the course. 
// ***If you want to show your prowess in pulling JSON data from a remote site, like you did in week 5, a good choice would be to use mocky.io to store your JSON data and serve it up. The mocky.io service stores your JSON data and provides you with a URL that you can use to retrieve it in your code.
// 1.	It should be written in Javascript! (With some HTML/CSS for the user interface)
// 2.	It should show some level of organization: at a minimum it should have more than one function.
// 3.	It should include DOM interaction: select an element, modify it, and listen for and react to events
// 4.	It should show examples of conditional branching
// 5.	At least one of the following should be used:
//          Fetch
//          Objects
//          Modules
//          Arrays and array method usage (forEach, map, reduce, filter, etc)
