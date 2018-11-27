// var temperatureInFahr = prompt("Please enter a temperature  in Fahrenheit: ");

// var temperatureInCelcius = (temperatureInFahr - 32) * 5 / 9;

// console.log("Temperature in Fahrenheit : ", temperatureInFahr);
// console.log("Temperature in Celcius : ", temperatureInCelcius);

var temperature = prompt("Please enter a temperature: ");
var temperatureUnit = prompt("Please enter a temperature unit: ");

var temperatureInCelcius = 0;
var temperatureInFahr = 0;
var temperatureInKelvin = 0;

temperature = parseInt(temperature);

if (temperatureUnit === "Fahrenheit") {
    temperatureInFahr = temperature;
    temperatureInCelcius = (temperature - 32) * 5 / 9;
    temperatureInKelvin = temperatureInCelcius + 273.15;
} else if (temperatureUnit === "Celcius") {
    temperatureInFahr = (temperature * 9 / 5) + 32;
    temperatureInCelcius = temperature;
    temperatureInKelvin = temperatureInCelcius - 273.15;
} else {  // Temperature unit is Kelvin
    temperatureInFahr = (temperature + 459.67) * 5/9;
    temperatureInCelcius = temperature + 273.15;
    temperatureInKelvin = temperature;
}
console.log("Temperature in Fahrenheit : ", temperatureInFahr);
console.log("Temperature in Celcius : ", temperatureInCelcius);
console.log("Temperature in Kelvin : ", temperatureInKelvin);