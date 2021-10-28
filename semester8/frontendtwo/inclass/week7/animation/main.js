/* 
    create element to hold pokemon list
    create element to hold pokemon details
    place elements side by side (flex)
    hide details element 

    get list of pokemon by type
    display list in list element
    add event listener ... when a pokemon is clicked:
        get details for selected pokemon
        display details
        slide details into view and slide list out of view

    add back button to details with event listener
        slide details out of view 
        slide list in to view

*/

async function getJson(url) {
    const res = await fetch(url);
    if(res.ok) {
        return await res.json();
    }
}

async function showDetails(e) {
    const details = await getJson(e.target.dataset.url);
    const detailsElement = document.querySelector('#detailsElement');
    const listElement = document.querySelector('#listElement');
    detailsElement.style.transform = 'translatex(-100vw)';
    listElement.style.transform = 'translatex(-100vw)';

    console.log(e.target);
}

async function getAndDisplayList() {
    const list = await getJson('https://pokeapi.co/api/v2/type/3');
    const listelement = document.querySelector('#list');
    const typeH2 = document.querySelector('#listElement > h2');
    typeH2.textContent = list.name;
    const listHtml = list.pokemon.map((item) => `<li data-url="${item.pokemon.url}">${item.pokemon.name}</li>`);
    listelement.innerHTML = listHtml.join('');
    listelement.addEventListener('click', showDetails);

    console.log(list);
}

getAndDisplayList();