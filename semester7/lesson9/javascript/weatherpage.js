window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");
  const dateFooter = document.querySelector(".date");
  const banner = document.querySelector(".banner");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayWeek = date.getDay();

  dateFooter.innerHTML = `${days[dayWeek]}, ${day} ${months[month]} ${year}`;

  // if (dayWeek !== 5) {
  //   banner.style.display = "none";
  // } else {
  //   banner.style.display = "flex";
  // }

  hamButton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );

});

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
            section.id = 'town' + towns[i].name[0];

            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('h3');
            let list = document.createElement('ul');

            h2.textContent = towns[i].name;
            p.textContent = towns[i].motto;
            p1.textContent = 'Year founded: ' + towns[i].yearFounded;
            p2.textContent = 'Current population: '+ towns[i].currentPopulation;
            p3.textContent = 'Average rainfall: ' + towns[i].averageRainfall;
            p4.textContent = 'Events: ';
            var townevents = towns[i].events;
              for (var j = 0; j < townevents.length; j++){
                  var listitem = document.createElement('ul');
                  listitem.textContent = townevents[j];
                  list.appendChild(listitem);
              }

            let image = document.createElement('img');
            image.setAttribute('src', 'images/' + towns[i]['photo']);

            section.appendChild(h2);
            section.appendChild(p);
            section.appendChild(p1);
            section.appendChild(p2);
            section.appendChild(p3);
            section.appendChild(p4);
            section.appendChild(list);
            section.appendChild(image);


            document.querySelector('section.info').appendChild(section);
        }
    }
  });


