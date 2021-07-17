const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83646&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card = document.createElement('section');
    let p2 = document.createElement('p');
    p2.id = 'temp';

    p2.textContent = `Current Temperature: ${data.main.temp} °F`;

    card.appendChild(p2);

    document.querySelector('div.cards').appendChild(card);
    });