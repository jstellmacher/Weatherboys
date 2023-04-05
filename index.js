//**started by fetching but still currently working on db.json
// fetch("http://localhost:3000/cities")
// .then((r) => r.json())
// .then((cityData) => {
// cityData.forEach(city => {
//     console.log(city)
// })
// });
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// !
// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
// )
//   .then((r) => r.json())
//   .then((data) => {
//     console.log(data);
//   });
