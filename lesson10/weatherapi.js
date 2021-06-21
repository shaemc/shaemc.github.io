const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=a5a58e084b9faac42b062f6e4dfc63ce'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     // temporary checking for valid response and data parsing
    
    const weather = jsonObject;

    console.table(jsonObject); 
    // for (let i = 0; i < weather.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    // let p2 = document.createElement('p')
    // let image = document.createElement('img')

    h2.textContent = weather.name;
    p.textContent = weather.[temp]; //THIS IS WRONG figure out the square bracketsok
        // p.textContent = 'Date of birth: ' + prophets[i].birthdate;
        // p2.textContent = 'Place of birth: ' + prophets[i].birthplace;
        // image.setAttribute('src', prophets[i].imageurl);
        // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);

    card.appendChild(h2);
    card.appendChild(p);
        // card.appendChild(p2);
        // card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
    });