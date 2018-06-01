var toCelsius = function(temperatureInFahr) {
	return ((temperatureInFahr-32)*(5/9)) ;};

	var temperatureInFahr = prompt("Enter temperature in fahrenheit degrees");

	var result = toCelsius(temperatureInFahr);

alert(result+ " Celsius");