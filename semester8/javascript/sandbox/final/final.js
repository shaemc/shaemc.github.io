// Requirements:
// 1.  Create html, css, and js files for final project
// 2.	Create a json file with different meals
// 3.	Create a button to click and filter through the json file and randomly select a meal for one day
// 4.	Place that meal into a calendar (weekly?) for that day, within the js file add it by using innerHTML?
// 5.	Go back and click the button for each of the rest of the 7 days


//const url = "/sandbox/final/final.json";

const json = {
    meals: [
        {
            food: "chicken salad",
            ingredients: "chicken, salad"
        
        },
        {
            food: "tacos",
            ingredients: "chicken, lettuce, tortillas, beans"

        },
        {
            food: "fajitas",
            ingredients: "chicken, lettuce, tortillas, peppers"

        }
    ],
    init: function() {
        fillCalendar(this);
        renderSections(this.meals);
    },    
}
// const result = fetch(url) // .then(function);

// console.log(result);

const button = document.querySelector(".button").addEventListener("click", mealFilter());



// function mealButton(){
//     if (sunday == ''){
//         newmeal = url.this(mealFilter());
//     }
//     else if (monday == ''){

//     }
//     else if (tuesday == ''){
        
//     }
//     else if (wednesday == ''){
        
//     }
//     else if (thursday == ''){
        
//     }
//     else if (friday == ''){
        
//     }
//     else if (saturday == ''){
        
//     }
// }

function mealFilter(){
    // this function should grab the food names from our json file and filter through them to pick a random one to place in the calendar
    //add an if statement to see if the day is full already
   // url.this.meals.filter(random);
}

function renderSections(sections) {
    const html = url.map(
      (section) => `<tr>
      <td>${section.meal.food}</td>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

  function fillCalendar(calendar) {
    const sunday = document.querySelector(".sunday");
    const monday = document.querySelector(".monday");
    const tuesday = document.querySelector(".tuesday");
    const wednesday = document.querySelector(".wednesday");
    const thursday = document.querySelector(".thursday");
    const friday = document.querySelector(".friday");
    const saturday = document.querySelector(".saturday");
    sunday.textContent = json.meals[0].food;
    monday.textContent = json.meals[1].food;
    tuesday.textContent = json.meals[2].food;
    wednesday.textContent = json.meals;
    thursday.textContent = json.meals;
    friday.textContent = json.meals;
    saturday.textContent = json.meals;

    return calendar;
  }

fillCalendar();

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
