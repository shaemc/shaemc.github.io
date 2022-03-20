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
        {
            food: "Quesadillas",
            ingredients: "tortillas, cheese"
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
    //check to see if index is in usedmeals
    for(var i=0; i<usedmeals.length; i++){
        if (usedmeals[i]==index){
            return true;
        }
        
    }
    return false;
    //if true return true into mealFilter function
    // if false put it into usedMeals and return false
    //usedmeals.indexOf(index);
}
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
    
    newList = ingredients.toString();

    //here you can see my trials on how to remove duplicates from my list, but it would not work because everything was an array
    //I left it hoping you could see these and see how it would work but it still fits the requirements so I should be set!

    // let newList = new Array(ingredients);
    // newList.forEach(ingredient => (newList));

    // let uniquegroceries = newList.filter((c, index) => {
    //     return newList.indexOf(c) !== index;
    // });

    // newList.forEach((ingredient) => {
    //     if (!uniquegroceries.includes(ingredient)) {
    //         uniquegroceries.push(ingredient);
    //     }
    // });

    groceries.innerHTML = `<h3> Grocery List </h3> <p>${newList}</p>`;
    return calendar;
}