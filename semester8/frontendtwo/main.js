/* 
On page load:
    Find and get data from api
    Filter and remove shadow and unknonw from list
    Display the type name and URL
    Attach an event listener to the list

On Click:
    Get the data-url from the clicked type
    Get the Pokemon list
    Display list

*/

//objects are key value pairs so they can be written like this
//const course = {
//     name: "web frontend two",
//     code: "WDD 330",
// }

function convertToJson(res){ //res stands from response
    if(res.ok){
        return res.json();
    }
    else{
        console.log("Something went wrong.");
    }
}

function filterResults(list) {
    return list.filter(
        (item) => item.name != "unknown" && item.name != "shadow"
    );
}

function getDataAndDoSomething(url, action){ // can also be written this way -- const getData = funciton(url){} -- const getData = (url) => {}
    fetch(url)
        .then(convertToJson)
        .then((data) => {//no parenthesis after convertToJson because that would execute the function immediately, instead of when it is ready to fetch
        //do stuff
        action(data);
    });
}

function renderTypeList(list){
    list = list.results;
    console.log(list)

    const typeListElement = document.querySelector('#typeList');
    
    const newList = filterResults(list);
    console.log(newList);
    
    console.dir(typeListElement) //dir is like log but shows you more info in your console
    newList.forEach((item) => {
        const newLi = document.createElement('li');
        newLi.innerText = item.name;
        newLi.setAttribute('data-url', item.url);
        typeListElement.appendChild(newLi);
    });

    const htmlList = newList.map(
        (item) => `<li data-url="${item.url}">${item.name}</li>`
    );
    typeListElement.innerHTML = htmlList.join("");
    typeListElement.addEventListener('click', handleTypeClick);
       
}

function handleTypeClick(event){
    // console.log(event.currentTarget);
    console.dir(event.target);
    const url = event.target.dataset.url;
    console.log(url);
    getDataAndDoSomething(url, renderPokemonList);
}
getDataAndDoSomething("https://pokeapi.co/api/v2/type/", renderTypeList);