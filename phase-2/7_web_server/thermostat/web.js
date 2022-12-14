const express = require("express");
const app = express();
const port = 3000;

const Thermostat = require("./thermostat");
const thermostat = new Thermostat();

app.get("/temperature", (req, res) => {
  res.send(`Current temperature is ${thermostat.getTemperature()}°C`);
});

app.post("/up", (req, res) => {
  thermostat.up();
  if (thermostat.getTemperature() === 25) {
    res.send("Maximum temperature reached");
  } else {
    res.send(`Temperature increased by 1 to ${thermostat.getTemperature()}°C`);
  }
});

app.post("/down", (req, res) => {
  thermostat.down();
  if (thermostat.getTemperature() === 15) {
    res.send("Minimum temperature reached");
  } else {
    res.send(`Temperature decreased by 1 to ${thermostat.getTemperature()}°C`);
  }
});

app.delete("/temperature", (req, res) => {
  thermostat.reset();
  res.send(`Temperature reset to ${thermostat.getTemperature()}°C`);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
