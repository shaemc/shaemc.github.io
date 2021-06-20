const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    for (var i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
            let section = document.createElement('section');

            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let list = document.createElement('ul');

            h2.textContent = towns[i].name;
            p.textContent = towns[i].motto;
            p1.textContent = 'Year founded: ' + towns[i].yearFounded;
            p2.textContent = 'Current population: '+ towns[i].currentPopulation;
            p3.textContent = 'Average rainfall: ' + towns[i].averageRainfall;
            // p4.textContent = 'Events: ';

            // var townevents = towns[i].events;
            // for (var j = 0; j < townevents.length; j++){
            //     var listitem = document.createElement('ul');
            //     listitem.textContent = townevents[j];
            //     list.appendChild(listitem);
            // }

            let image = document.createElement('img');
            image.setAttribute('src', 'images/' + towns[i]['photo']);

            section.appendChild(h2);
            section.appendChild(p);
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(p3);
            // section.appendChild(p4);
            section.appendChild(list);
            section.appendChild(image);


            document.querySelector('section.info').appendChild(section);
        }
    }
  });