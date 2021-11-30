/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date();

// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let day;

day = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day >= 1 && day <= 5) {
    message1 = 'Hang in there!';
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (day >= 1 && day <= 5) {
    message1 = 'Hang in there!';
} else {
    message1 = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
    default:
    message2 = 'Unknown - ' + dayOfWeek;
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let list = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
const output = (temples) => {
    temples.forEach(
        temple => {
            // - Creates an HTML <article> element
            let article = document.createElement('article');

            // - Creates an HTML <h3> element and add the temple's templeName property to it
            let name = document.createElement('h3');
            name.textContent = temple.name;

            // - Creates an HTML <h4> element and add the temple's location property to it
            let location = document.createElement('h4');
            location.textContent = temple.location;

            // - Creates an HTML <h4> element and add the temple's dedicated property to it
            let dedicated = document.createElement('h4');
            dedicated.textContent = temple.dedicated;

            // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
            let image = document.createElement('img');
            image.setAttribute('src', temple.imageUrl);
            image.setAttribute('alt', temple.name);

            // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
            article.appendChild(name);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(image);

            // - Appends the <article> element to the HTML element with an ID of temples            
            document.querySelector('#temples').appendChild(article);

        }
    );
}


// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
    .then(response => response.json())
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
    .then(temples => {

        // Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
        list = temples;

        // Step 7: Finally, call the output function and pass it the list of temples
        output(list);
    });

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
    document.querySelector('#temples').innerHTML = '';
}

// Step 9: Declare a function named sortBy that does the following:
const sortby = () => {

    // - Calls the reset function    
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'templeNameAscending':
            // - Calls the output function passing in the sorted list of temples
            output(list.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.name.toLowerCase();
                    let templeName2 = temple2.name.toLowerCase();
                    if (templeName1 < templeName2) return -1;
                    else if (templeName1 > templeName2) return 1;
                    else return 0;
                }));
            break;
        case 'templeNameDescending':
            output(list.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.name.toLowerCase();
                    let templeName2 = temple2.name.toLowerCase();
                    if (templeName1 > templeName2) return -1;
                    else if (templeName1 < templeName2) return 1;
                    else return 0;
                }));
            break;
        default:
            // using ternary operators
            output(list.sort(
                (temple1, temple2) => 
                temple1.name.toLowerCase() > temple2.name.toLowerCase() ? 1 : 
                    temple2.name.toLowerCase() > temple1.name.toLowerCase() ? -1 : 0));
            break;
    }
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
