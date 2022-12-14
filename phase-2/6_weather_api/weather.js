class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData;
  }

  fetch(city) {
    this.client.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
    });
  }

  getWeatherData() {
    return this.weatherData;
  }

  displayWeather() {
    console.log("City: ".padEnd(14) + `${this.weatherData.name}`);
    console.log("Weather: ".padEnd(14) + `${this.weatherData.weather[0].main}`);
    console.log(
      "Temperature: ".padEnd(14) + `${this.weatherData.main.temp.toFixed(1)}`
    );
    console.log(
      "Feels like: ".padEnd(14) +
        `${this.weatherData.main.feels_like.toFixed(1)}`
    );
    console.log("Humidity: ".padEnd(14) + `${this.weatherData.main.humidity}%`);
  }
}

module.exports = Weather;

// const Weather = require("./weather");
// const WeatherClient = require("./weatherClient");

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.fetch("Bristol");

// console.log(weather.getWeatherData());

// weather.displayWeather();
