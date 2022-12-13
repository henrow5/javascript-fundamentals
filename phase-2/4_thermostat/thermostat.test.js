const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("returns an initial temperature of 20 degrees and power saving mode is on", () => {
    expect(thermostat.temp).toBe(20);
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it("returns an initial temperature of 20 degrees using a getter", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("increases the temperature by 2 degrees", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("decreases the temperature by 1 degree", () => {
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("limits the max temperature to 25 degrees with power saving mode on", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("limits the max temperature to 32 degrees with power saving mode off", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it("limits the min temperature to 15 degrees", () => {
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(15);
  });

  it("resets the temperature to 20 degrees", () => {
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns the current energy usage at 20 degrees", () => {
    expect(thermostat.getCurrentEnergyUsage()).toBe("Medium-usage");
  });

  it("returns the current energy usage at 32 degrees", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentEnergyUsage()).toBe("High-usage");
  });

  it("returns the current energy usage at 15 degrees", () => {
    for (let i = 0; i < 5; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentEnergyUsage()).toBe("Low-usage");
  });
});
