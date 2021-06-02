window.addEventListener("load", () => {

    var temp = parseFloat(document.getElementById('temp').value);
    var speed = parseFloat(document.getElementById('windspeed').value);
    var windchillfactor = (35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))).toFixed(0);
    document.querySelector('#windchill').innerHTML = `${Number(windchillfactor)} °F`;

});