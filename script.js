// Temperature Conversion
var startingScale = prompt("Please provide a temperature scale", "fahrenheit, celsius, or kelvin");
  if (startingScale == "fahrenheit") {
    var startingTemp = prompt("Please provide a temperature in fahrenheit");
    var fahrenheitToCelsius = function(startingTemp) {
      return ((startingTemp - 32) * (5 / 9));
    }
    var fahrenheitToKelvin = function(startingTemp) {
      return (fahrenheitToCelsius(startingTemp) + 273.16);
    }
    console.log(startingTemp + " " + "F");
    console.log( "Converted to Celsius: " + fahrenheitToCelsius(startingTemp) + "C" );
    console.log( "Converted to Kelvin: " + fahrenheitToKelvin(startingTemp) + "K" );
  } else if (startingScale == "celsius") {
    var startingTemp = prompt("Please provide a temperature in celsius");
    var celsiusToFahrenheit = function(startingTemp) {
      return ((startingTemp * 1.8) + 32);
    }
    var celsiusToKelvin = function(startingTemp) {
      return ((startingTemp * 1) + 273.16);
    }
    console.log(startingTemp + " " + "C");
    console.log( "Converted to Fahrenheit: " + celsiusToFahrenheit(startingTemp) + "F" );
    console.log( "Converted to Kelvin: " + celsiusToKelvin(startingTemp) + "K" );
  } else if (startingScale == "kelvin") {
    var startingTemp = prompt("Please provide a temperature in kelvin");
    var kelvinToCelsius = function(startingTemp){
      return ((startingTemp * 1) - 273.16);
    }
    var kelvinToFahrenheit = function(startingTemp) {
      return ((kelvinToCelsius(startingTemp) * 1.8) + 32);
    }
    console.log(startingTemp + " " + "K");
    console.log( "Converted to Celsius: " + kelvinToCelsius(startingTemp) + "C" );
    console.log( "Converted to Fahrenheit: " + kelvinToFahrenheit(startingTemp) + "F" );
  } else console.log("invalid temperature scale");
