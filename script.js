// var temperature = prompt("Enter a temp");
const STARTING_TEMPERATURE = prompt("Enter a temp");
var temperatureUnit = prompt("Enter a unit");

var temps = [];
temps.push(STARTING_TEMPERATURE);


// temps.push(variableOrValue);

// var conversionC;
// var conversionF;
// var conversionK;

if (temperatureUnit == "C") {
    const CONVERTED_TEMP_1 = STARTING_TEMPERATURE * 9 / 5 + 32;
    const CONVERTED_TEMP_2 = STARTING_TEMPERATURE + 273;
    temps.push(CONVERTED_TEMP_1);
    temps.push(CONVERTED_TEMP_2);

    // for(i=0; i<temps.length; i++) {
    //     console.log(temps[i]);
    // }

    console.log(temps[0] + "C " + temps[1] + "F " + temps[2] + "K");
}

else if (temperatureUnit == "F") {
    const CONVERTED_TEMP_1 = (parseInt(STARTING_TEMPERATURE) - 32) * 5 / 9;
    const CONVERTED_TEMP_2 = parseInt(STARTING_TEMPERATURE) + 273;
    temps.push(CONVERTED_TEMP_1);
    temps.push(CONVERTED_TEMP_2);

    console.log(temps[0] + "F " + temps[1] + "C " + temps[2] + "K");
}

else if (temperatureUnit == "K") {
    const CONVERTED_TEMP_1 = (STARTING_TEMPERATURE - 273);
    const CONVERTED_TEMP_2 = STARTING_TEMPERATURE * 9 / 5 - 32;
    temps.push(CONVERTED_TEMP_1);
    temps.push(CONVERTED_TEMP_2);

    console.log(temps[0] + "K " + temps[1] + "C " + temps[2] + "F");
};

