// 5604473

const requestURL = ' https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data); 

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    p2.id = 'temp';
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    p4.id = 'windspeed';
    let windChill = document.createElement('p')
    windChill.id = 'windchill';

    h2.textContent = data.name;
    p.textContent = 'Currently: ' + data.weather[0].description;
    p2.textContent = `${data.main.temp} °F`;
    // data.main.temp;
    p3.textContent = 'Humidity: ' + data.main.humidity;
    p4.textContent = `${data.wind.speed} mph`;
    // 'Current temperature: ' +
    // 'Windspeed: ' + 

    const temperatureSplit = Number(p2.textContent.split("°")[0]);
    const windSpeedSplit = Number(p4.textContent.split("m")[0]);

    const windChillFactor = (
      35.74 +
      0.6215 * temperatureSplit -
      35.75 * windSpeedSplit ** 0.16 +
      0.4275 * temperatureSplit * windSpeedSplit ** 0.16
    ).toFixed(0);

    windChill.textContent = `${Number(windChillFactor)}°F`;

    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(windChill);

    document.querySelector('div.cards').appendChild(card);
    });

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (five) {
        console.table(five); 

        let fiveday = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let icon = document.createElement('img');
            

        h2.textContent = five.name;
        p.textContent = five.main.temp;
        icon.setAttribute('src', `https://openweathermap.org/img/${five.weather[0].icon}.jpg`); //this is wrong
        

        fiveday.appendChild(h2);
        fiveday.appendChild(p);
        fiveday.appendChild(icon);

        document.querySelector('div.fiveday').appendChild(fiveday);
    });