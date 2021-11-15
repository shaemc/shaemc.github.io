const firstname = 'Shae';
document.querySelector('#name').textContent = firstname;

const currentyear = document.querySelector('#year');
currentyear.innerText = '2021';
document.body.appendChild(currentyear);

const image = document.createElement('img');
image.src = '/images/mission.jpg';
document.body.appendChild(image);

const favfoods = ['bagels', ' ramen', ' kitkats', ' popcorn'];
document.querySelector('#food').innerText = favfoods;

const favfourth = ' chicken';
favfoods.push(favfourth);

document.querySelector('#food').innerText = favfoods;

favfoods.shift();

document.querySelector('#food').innerText = favfoods;

favfoods.pop();

document.querySelector('#food').innerText = favfoods;