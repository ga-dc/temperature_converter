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
    temperatureInFahr = (temperature).toFixed(2);
    temperatureInCelcius = ((temperature - 32) * 5 / 9).toFixed(2);
    temperatureInKelvin = (temperatureInCelcius + 273.15).toFixed(2);
} else if (temperatureUnit === "Celcius") {
    temperatureInFahr = ((temperature * 9 / 5) + 32).toFixed(2);
    temperatureInCelcius = (temperature).toFixed(2);
    temperatureInKelvin = (temperatureInCelcius - 273.15).toFixed(2);
} else {  // Temperature unit is Kelvin
    temperatureInFahr = ((temperature + 459.67) * 5/9).toFixed(2);
    temperatureInCelcius = (temperature + 273.15).toFixed(2);
    temperatureInKelvin = (temperature).toFixed(2);
}
console.log("Temperature in Fahrenheit : ", temperatureInFahr);
console.log("Temperature in Celcius : ", temperatureInCelcius);
console.log("Temperature in Kelvin : ", temperatureInKelvin);