// 5604473

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83276&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

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

const requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?zip=83276&appid=a5a58e084b9faac42b062f6e4dfc63ce&units=imperial'

fetch(requestURL2)
    .then(function (response) {
        return response.json();
    })
    .then(function (five) {
        console.table(five); 
        console.log(five.list[6].dt_txt);

        let filter = five.list.filter(time => time.dt_txt.split(' ')[1] == '18:00:00');

        let splitday = filter[0].dt_txt.split(' ')[0].split('-');
        let splitday1 = filter[1].dt_txt.split(' ')[0].split('-');
        let splitday2 = filter[2].dt_txt.split(' ')[0].split('-');
        let splitday3 = filter[3].dt_txt.split(' ')[0].split('-');
        let splitday4 = filter[4].dt_txt.split(' ')[0].split('-');

        let date1 = `${splitday[1]}/${splitday[2]}`;
        let date2 = `${splitday1[1]}/${splitday1[2]}`;
        let date3 = `${splitday2[1]}/${splitday2[2]}`;
        let date4 = `${splitday3[1]}/${splitday3[2]}`;
        let date5 = `${splitday4[1]}/${splitday4[2]}`;

        document.querySelector('#day1').textContent = date1;
        document.querySelector('#day2').textContent = date2;
        document.querySelector('#day3').textContent = date3;
        document.querySelector('#day4').textContent = date4;
        document.querySelector('#day5').textContent = date5;

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

        temp1.textContent = filter[0].main.temp;
        temp2.textContent = filter[1].main.temp;
        temp3.textContent = filter[2].main.temp;
        temp4.textContent = filter[3].main.temp;
        temp5.textContent = filter[4].main.temp;

        icon1.setAttribute('src', `https://openweathermap.org/img/wn/${filter[0].weather[0].icon}@2x.png`);
        icon2.setAttribute('src', `https://openweathermap.org/img/wn/${filter[1].weather[0].icon}@2x.png`);
        icon3.setAttribute('src', `https://openweathermap.org/img/wn/${filter[2].weather[0].icon}@2x.png`);
        icon4.setAttribute('src', `https://openweathermap.org/img/wn/${filter[3].weather[0].icon}@2x.png`);
        icon5.setAttribute('src', `https://openweathermap.org/img/wn/${filter[4].weather[0].icon}@2x.png`);
    });