function displayClock() {
    let d = new Date();
    let hour = String(d.getHours()).padStart(2, '0');
    let minute = String(d.getMinutes()).padStart(2, '0');
    document.getElementById("clock").innerHTML = `${hour}:${minute}`;
}

setInterval(displayClock, 1000);

function displayDate() {
    let d = new Date();
    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];

    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    document.getElementById("date").innerHTML = `${day} ${date}th ${month}, ${year}`;
}
setInterval(displayDate, 1000);

const apiKey = '1ce2f08027f59995ba4b700f0c7b7150';
// const city = "London";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);

    document.getElementById("location").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = Math.round(data.main.temp) ;
    document.getElementById("humidity").innerHTML = data.main.humidity+"%";
    document.getElementById("visibility").innerHTML = (data.visibility)/1000 + " km";
    document.getElementById("airPressure").innerHTML = data.main.pressure + " hPa"; 
    document.getElementById("wind").innerHTML = data.wind.speed + " m/s";

}

searchBtn.addEventListener("click",()=>{
    getWeather(searchBox.value);

})

