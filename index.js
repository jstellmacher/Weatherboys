//**started by fetching but still currently working on db.json
// fetch("http://localhost:3000/cities")
// .then((r) => r.json())
// .then((cityData) => {
// cityData.forEach(city => {
//     console.log(city)
// })
// });
// function myFunction() {
//   const x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// !
feather.replace();
// ! feather icon^
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    error.textContent = "Geolocation is not supported by this browser.";
  }
}
// ! note -> showPosition
function showPosition(position) {
  error.textContent =
    // rome-ignore lint/style/useTemplate: <explanation>
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  fetchWeather(position.coords.latitude, position.coords.longitude);
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fetchWeather = (lat, long) => {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&forecast_days=1&timezone=America%2FDenver`
  )
    .then((r) => r.json())
    .then(displayData);
};

function displayData(wetData){
    debugger
    results.textContent = `
    wetData.
    `
}
document.addEventListener("DOMContentLoaded", getLocation)