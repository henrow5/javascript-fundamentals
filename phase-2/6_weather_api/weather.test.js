const Weather = require("./weather");

describe(Weather, () => {
  it("gets the weather data by the WeatherClient class", () => {
    const mockedClient = {
      fetchWeatherData: (city, callback) => {
        callback({
          coord: { lon: -0.1257, lat: 51.5085 },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
        });
      },
    };

    const weather = new Weather(mockedClient);
    weather.fetch("Bristol");

    expect(weather.getWeatherData()).toEqual({
      coord: { lon: -0.1257, lat: 51.5085 },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    });
  });
});
