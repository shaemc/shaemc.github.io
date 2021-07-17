window.addEventListener('load',()=>{
    const requestURL = '/finalproject/temples.json'
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple])=>{
                buildTempleCard(temple);
            });
        });
});
function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement('section');
    card.classList.add('temple');

    


    card.innerHTML = `<h2 id='name'>${temple.name}</h2>
                      <img src="${temple.imageurl}" alt="${temple.name}">
                      <h3 class='info'>Temple information: </h3>
                      <p class='info'>Phone number: <p>${temple.phone}</p></p>
                      <p class='info'>Address: <p>${temple.address1} - ${temple.city}, ${temple.state} ${temple.zip}</p></p>
                      <p class='info'>Ordinance schedule: <p>${temple.ordinancesched}</p></p>
                      <p class='info'>Session schedule: <p>${temple.sessionsched}</p></p>
                      <p class='info'>Temple services: <p>${temple.services}</p></p>
                      <p class='info'>Temple history: <p>${temple.history[0]}</p></p>
                      <p class='info'>Temple closures: <p>${temple.templeclosures} </p></p>
                      
                      <p class='info'>Current temperature: <p id="temp"></p></p>

                    

                      `
                      
                      ;
    document.querySelector("#temples").appendChild(card);
    
    
    const requestURL = `${temple.weather}`
    // 'https://api.openweathermap.org/data/2.5/weather?zip=83646&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.table(data); 

        let temp = document.querySelector('#temp');
        
        temp.textContent = `${data.main.temp} °F`;

        temp.setAttribute('src', `https://openweathermap.org/img/wn/${filter[0].weather[0].icon}@2x.png`);
        
        });
}