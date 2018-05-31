var STARTING_TEMP, tempValue, temperatureUnit, tempUnit, CONVERTED_TEMP_1, CONVERTED_TEMP_2, arrayUnits, cont, contValue;

//ask for temperature value
function askValue() {
	STARTING_TEMP = prompt("Please enter a temperature value (numerical value only):");
	tempValue = parseFloat(STARTING_TEMP);
}

//ask for temperature unit
function askUnit() {
	temperatureUnit = prompt("Please enter a temperature unit ('C' for degrees Celsius, 'F' for degrees Fahrenheit, or 'K' for degrees Kelvin):");
	tempUnit = temperatureUnit.toUpperCase();
}

//convert C to F and K
function convertC(temp) {
	CONVERTED_TEMP_1 = temp * 1.8 + 32;
	CONVERTED_TEMP_2 = temp + 273.15;
	arrayUnits = ["\xB0C", "\xB0F", "K"];
}

//convert F to C and K
function convertF(temp) {
	CONVERTED_TEMP_1 = (temp - 32) / 1.8;
	CONVERTED_TEMP_2 = CONVERTED_TEMP_1 + 273.15;
	arrayUnits = ["\xB0F", "\xB0C", "K"];
}

//convert K to C and F
function convertK(temp) {
	CONVERTED_TEMP_1 = temp - 273.15;
	CONVERTED_TEMP_2 = CONVERTED_TEMP_1 * 1.8 + 32;
	arrayUnits = ["K", "\xB0C", "\xB0F"];
}

while (true) {
	
	var result = "";
	
	askValue();
	while (isNaN(tempValue)) {
		askValue();
	}
	
	askUnit();
	while (tempUnit !== 'C' && tempUnit !== 'F' && tempUnit !== 'K') {
		askUnit();
	}

	switch(tempUnit) {
		case "C":
			convertC(tempValue);
			break;
		case "F":
			convertF(tempValue);
			break;
		case "K":
			convertK(tempValue);
			break;
	}

	temps = [STARTING_TEMP, CONVERTED_TEMP_1.toFixed(2), CONVERTED_TEMP_2.toFixed(2)];

	for (var i = 0; i < 3; i++) {
		result += temps[i] + arrayUnits[i];
		if (i < 2) {
			result += " = ";
		}
	}

	console.log(result);
	
	cont = prompt(result + "\nDo you wish to continue (Y/N)?");
	contValue = cont.toUpperCase();

	if (contValue === "N") {
		break;
	}
}