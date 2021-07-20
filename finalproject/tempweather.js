const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83646&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'
const requestURL1 = 'https://api.openweathermap.org/data/2.5/weather?zip=83301&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'
const requestURL2 = 'https://api.openweathermap.org/data/2.5/weather?zip=83201&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'
const requestURL3 = 'https://api.openweathermap.org/data/2.5/weather?zip=83713&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card = document.createElement('section');
    let p2 = document.createElement('p');
    p2.id = 'temp';

    p2.textContent = `Current Temperature for Meridian: ${data.main.temp} °F`;

    card.appendChild(p2);

    document.querySelector('section.cards').appendChild(card);
    });

fetch(requestURL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card1 = document.createElement('section');
    let p2 = document.createElement('p');
    p2.id = 'temp';

    p2.textContent = `Current Temperature for Twin Falls: ${data.main.temp} °F`;

    card1.appendChild(p2);

    document.querySelector('section.cards1').appendChild(card1);
    });

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card2 = document.createElement('section');
    let p2 = document.createElement('p');
    p2.id = 'temp';

    p2.textContent = `Current Temperature for Pocatello: ${data.main.temp} °F`;

    card2.appendChild(p2);

    document.querySelector('section.cards2').appendChild(card2);
    });

fetch(requestURL3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card3 = document.createElement('section');
    let p2 = document.createElement('p');
    p2.id = 'temp';

    p2.textContent = `Current Temperature for Boise: ${data.main.temp} °F`;

    card3.appendChild(p2);

    document.querySelector('section.cards3').appendChild(card3);
    });