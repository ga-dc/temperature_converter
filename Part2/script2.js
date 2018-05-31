var startingTempDeg = prompt("What is the starting temperature(Degrees)?");
var startingTempUnit = prompt("Please choose a starting temperature unit. Fahrenheit, Celsius, or Kelvin.(Case-sensitive)");

var startingTemp = "startingTempUnit" ;
	 if (startingTempUnit === "Fahrenheit") {
	 	console.log( (startingTempDeg + " " + startingTempUnit) + " = " + ( ( ( startingTempDeg - 32 ) / ( 9 / 5 ) ) + " " + "Celsius") + " = " +  ( ( ( startingTempDeg + 459.67 ) * ( 5 / 9 ) ) + " " + "Kelvin") )  
	 }
	 else if (startingTempUnit === "Celsius") {
	 	console.log( (startingTempDeg + " " + startingTempUnit) + " = " + ( ( ( startingTempDeg * (9 / 5) ) + 32 ) + " " + "Fahrenheit") + " = " + ( ( startingTempDeg + 237.15 ) + " " + "Kelvin") )
	 }
	 else {
	 	console.log( (startingTempDeg + " " + startingTempUnit) + " = " + ( ( startingTempDeg - 273.15 ) + " " + "Celsius") + " = " +  ( ( ( startingTempDeg * ( 9 / 5 ) ) - 459.67 ) + " " + "Fahrenheit") ) 
	 }; 