let weather = {
    apikey: "013ed9337a05a26b5a282f6eeaa44117",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humdity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + " m/s";
        console.log(name, icon, description, temp, humidity, speed)
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }


};
document.querySelector(".search").addEventListener("click", function() {
    weather.search();

});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {

        if (event.key == "Enter") {
            weather.search();
        }

    })