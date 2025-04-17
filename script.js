const apiKey="ed489ea3687f180745640675af10285e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}`+ `&q=${city}`);
    var data = await response.json();

    if (data.cod === "404") {
        alert("City not found. Please enter a correct city name.");
        return;
    }

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "° C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".speed").innerHTML =data.wind.speed + " Km/H";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/humid.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/sunny.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rainy.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main =="Storm"){
        weatherIcon.src = "images/stormy.png";
    }
    document.querySelector(".weather-card").style.display = "block";


}

document.getElementById('searchBtn').addEventListener('click', function() {
    const cityInput = document.getElementById('cityInput').value.trim();

    if (cityInput == "") {
        alert('Please enter the city name');
        return;
    }
    else {
            checkWeather(searchBox.value)
        }
});
searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});

