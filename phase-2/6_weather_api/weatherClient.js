const apiKey = require("./apiKey");
const { get } = require("callback-fetch");

class WeatherClient {
  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(apiUrl, (response) => {
      const weatherData = JSON.parse(response);
      callback(weatherData);
    });
  }
}

module.exports = WeatherClient;
