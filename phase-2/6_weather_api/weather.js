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
}

module.exports = Weather;

// const Weather = require("./weather");
// const WeatherClient = require("./weatherClient");

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.fetch("Bristol");

// console.log(weather.getWeatherData());
