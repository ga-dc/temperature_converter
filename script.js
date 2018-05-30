while (true) {
    // while true loop to keep prompting user for temperature

    var temps = []
    // temps array to hold all 3 temperatures, intial temperature and 2 calculated temprature

    var startingTemp = prompt("Please enter a temperature in Degrees, or enter STOP to quit the program");

    if (startingTemp == "STOP") {
      break;
      // if user inputs STOP, it ends the while loop
    }

    startingTemp = parseInt(startingTemp);
    // parsing user input to pick up invalid inputs

    if (!startingTemp) {

      alert("You have entered an invalid value");
      continue;
      // invalid inputs are NaN
      // this restarts the loop and prompts the user
      // for a new number

    } else {
      temps.push(startingTemp);

      var tempUnit = prompt("Please enter C for Celcius, F for Farenheit, or K for Kelvin in CAPITAL LETTERS");

      switch(tempUnit) {

        case "C":
          var kelvinTemp = startingTemp + 273.15;
          temps.push(kelvinTemp);

          var farenheitTemp = (startingTemp * 9/5) + 32;
          temps.push(farenheitTemp);

          console.log("Your temperatures are: " + temps[0] + "C, " + temps[1] + "K, " + temps[2] + "F");

          break;

        case "F":
          var celciusTemp = (startingTemp - 32) * 5/9;
          temps.push(celciusTemp);

          var kelvinTemp = (startingTemp + 459.67) * 5/9;
          temps.push(kelvinTemp)

          console.log("Your temperatures are: " + temps[0] + "F, " + temps[1] + "C, " + temps[2] + "K");

          break;

        case "K":
          var farenheitTemp = (startingTemp * 9/5) - 459.67;
          temps.push(farenheitTemp);

          var celciusTemp = startingTemp - 273.15;
          temps.push(celciusTemp);

          console.log("Your temperatures are: " + temps[0] + "K, " + temps[1] + "F, " + temps[2] + "C");

          break;

        default:
          alert("You have entered an invalid value");
          break;
      }
    }
}
