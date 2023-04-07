//**started by fetching but still currently working on db.json
// fetch("http://localhost:3000/cities")
// .then((r) => r.json())
// .then((cityData) => {
// cityData.forEach(city => {
//     console.log(city)
// })
// });
function myFunction() {
  const x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
// !
feather.replace();
// ! feather icon^
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !

// !
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
  // .then(console.log("hello"));
};
const results = document.querySelector("#results");

//console.log(results);
function displayData(wetData) {
  //debugger;
  //console.log(wetData);
  results.textContent = `
    On the date ${wetData.daily.time} it is at max temperature ${wetData.daily.temperature_2m_max}
    `;
  console.log(results.textContent);
}
const moreResults = document.querySelector("#moreData");
function hoverData(wetData) {
  moreData.textContent = `I should be hidden for the most part${wetData}`;
}

// ^^^ Why am I not able to see the data? is it because of the wrong syntax?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", getLocation);

const submitBtn = document.addEventListener("click", () => {
  const submitClick = document.querySelector("submitBtn");
});
//  ^ click
// const submitForm = document.addEventListener("submit", (e) => {
//   preventDefault();
//   console.log(e);
//   const inputVal = e.target.submitBtn.value;

// });
// const inputBar = document.querySelector("inputbar");
// e.target.inputbar.value;

const hoverData = document.addEventListener("onmouseenter", (e) => {
  document.querySelector("moreData");
  const title = document.createElement(h5);
  title.textContent = "Extra Information";
  if (hoverData) {
    document.getElementById("moreData").hidden = true;
  } else {
    document.getElementById("moreData").hidden = false;
  }
});
// onmouseover = (e) => {};
