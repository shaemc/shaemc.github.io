/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
const info = {
    name: 'Shae',

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: '/images/placeholder.png',

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: [
        'bagels', ' ramen', ' kitkats'
    ],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [
        'reading', 'sewing', 'movies'
    ],

// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
        {
            place: 'Boise, Idaho',
            length: '20 years',
        },
        {
            place: 'Dallas, Texas',
            length: '1.5 years',
        },
        {
            place: 'Rexburg, Idaho',
            length: '4 years',
        }
    ],
}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').textContent = info.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', info.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', info.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood = document.createElement('li');
favoriteFood.textContent = info.favoriteFoods[0];

let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = info.favoriteFoods[1];

let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = info.favoriteFoods[2];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorite-foods').appendChild(favoriteFood);
document.querySelector('#favorite-foods').appendChild(favoriteFood2);
document.querySelector('#favorite-foods').appendChild(favoriteFood3);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobby = document.createElement('li');
hobby.textContent = info.hobbies[0];

let hobby1 = document.createElement('li');
hobby1.textContent = info.hobbies[1];

let hobby2 = document.createElement('li');
hobby2.textContent = info.hobbies[2];

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').appendChild(hobby);
document.querySelector('#hobbies').appendChild(hobby1);
document.querySelector('#hobbies').appendChild(hobby2);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let places = document.createElement('dt');
places.textContent = info.placesLived[0].place;

let lengths = document.createElement('dd');
lengths.textContent = info.placesLived[0].length;

let places1 = document.createElement('dt');
places1.textContent = info.placesLived[1].place;

let lengths1 = document.createElement('dd');
lengths1.textContent = info.placesLived[1].length;

let places2 = document.createElement('dt');
places2.textContent = info.placesLived[2].place;

let lengths2 = document.createElement('dd');
lengths2.textContent = info.placesLived[2].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').appendChild(places);
document.querySelector('#places-lived').appendChild(lengths);
document.querySelector('#places-lived').appendChild(places1);
document.querySelector('#places-lived').appendChild(lengths1);
document.querySelector('#places-lived').appendChild(places2);
document.querySelector('#places-lived').appendChild(lengths2);
