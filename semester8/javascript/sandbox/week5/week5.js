// main.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

const outputElement = document.querySelector("#output");

// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  
  const html = `<h2>${results.name}</h2>
  <p>${results.weight}</p>
  <p>${results.height}</p>
  <img src='${results.sprites.front_default}' alt='Ditto picture'>`
  
  outputElement.innerHTML = html;

}
// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
fetch(url).then(convertToJson).then(doStuff);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);

//another way to write 'fetches'
// async function fetchPokemon(url) {
//     const res = await fetch(url);
//     const data = await convertToJson(res);
//     doStuff(data);

//     console.log('second', results);
// }