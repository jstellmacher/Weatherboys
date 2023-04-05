
//**started by fetching but still currently working on db.json 
fetch("http://localhost:3000/cities")
.then((r) => r.json())
.then((cityData) => {
cityData.forEach(city => {
    console.log(city)
})
});


