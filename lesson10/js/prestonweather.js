// 5604473

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

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

const requestURL2 = 'https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

fetch(requestURL2)
    .then(function (response) {
        return response.json();
    })
    .then(function (five) {
        console.table(five); 

        // const days = [
        //   "Saturday",
        //   "Sunday",
        //   "Monday",
        //   "Tuesday",
        //   "Wednesday",
        //   "Thursday",
        //   "Friday",
        // ];

        let temp1 = document.querySelector('#temp1');
        let temp2 = document.querySelector('#temp2');
        let temp3 = document.querySelector('#temp3');
        let temp4 = document.querySelector('#temp4');
        let temp5 = document.querySelector('#temp5');

        let icon1 = document.querySelector('#icon1');
        let icon2 = document.querySelector('#icon2');
        let icon3 = document.querySelector('#icon3');
        let icon4 = document.querySelector('#icon4');
        let icon5 = document.querySelector('#icon5');

        // temp1.textContent = five.day[0].weather[0].main.temp;
        // temp2.textContent = five.weather[1].main.temp;
        // temp3.textContent = five.weather[2].main.temp;
        // temp4.textContent = five.weather[3].main.temp;
        // temp5.textContent = five.weather[4].main.temp;

        icon1.setAttribute('src', `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`);
        icon2.setAttribute('src', `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`);
        icon3.setAttribute('src', `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`);
        icon4.setAttribute('src', `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`);
        icon5.setAttribute('src', `https://openweathermap.org/img/wn/${five.weather[0].icon}@2x.png`);
        
        // let fiveday = document.createElement('section');
        // let h2 = document.createElement('h2');
        // let p = document.createElement('p');
        // let icon = document.createElement('img');
         
        // h2.textContent = five.name;
        // p.textContent = five.main.temp;   
         // fiveday.appendChild(h2);
        // fiveday.appendChild(p);
        // fiveday.appendChild(icon);
        // document.querySelector('div.fiveday').appendChild(fiveday);
    });