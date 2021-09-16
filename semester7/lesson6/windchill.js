window.addEventListener("load", () => {

    var temp = parseFloat(document.getElementById('temp').textContent);
    var speed = parseFloat(document.getElementById('windspeed').textContent);
    var windchillfactor = (35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))).toFixed(0);
    document.querySelector('#windchill').innerHTML = `${Number(windchillfactor)} °F`;
    console.log(temp)
    console.log(speed)
    console.log(windchillfactor)
    console.log(document.querySelector('#windchill'))
});