class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.powerSavingMode === true) {
      if (this.temp < 25) this.temp++;
    } else {
      if (this.temp < 32) this.temp++;
    }
  }

  down() {
    if (this.temp > 15) this.temp--;
  }

  setPowerSavingMode(mode) {
    this.powerSavingMode = mode;
  }

  reset() {
    this.temp = 20;
  }

  getCurrentEnergyUsage() {
    if (this.temp < 18) {
      return "Low-usage";
    } else if (this.temp <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    }
  }
}

module.exports = Thermostat;
