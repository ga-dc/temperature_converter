"user strict";

(function() {

  /**
   * Prompt the user for a numerical value of temperature.
   */
  function propmtTemperature() {

    var promptMsg = "Please enter a numerical value of temperature";

    // Repeat until we get a valid value.
    var isValid = false;
    while ( ! isValid ) {

      // Obtain the temperature from the user.
      var temperature = prompt( promptMsg );

      // Convert the String input into a number.
      temperature = Number( temperature );

      // Validate the input.
      // Invalid if it is `NaN`.
      if ( isValidTemperature( temperature ) ) {
        isValid = true;
      } else {
        promptMsg = "The temperature value must be a number."
      }
    }

    return temperature;
  }

  function isValidTemperature( temperature ) {
    return Number( temperature ); // True if it's not NaN.
  }

  /**
   * Prompt the user for a unit of temperature.
   */
  function propmtUnit() {

    var promptMsg = "Please enter the unit of temperature,\nF (Fahrenheit), C (Celsius) or K (Kelvin)";

    var isValid = false;
    while ( ! isValid ) {

      // Obtain the temperature from the user.
      var unit = prompt( promptMsg );

      // Validate the input.
      if ( isValidUnit( unit ) ) {
        isValid = true;
      } else {
        promptMsg = "The unit must be F (Fahrenheit), C (Celsius) or K (Kelvin)."
      }
    }

    return unit;
  }

  function isValidUnit( unit ) {
    return unit.length === 1 && /^[FCK]$/i.test( unit )
  }

  var temperature = propmtTemperature();
  var unit = propmtUnit();

  console.log('Temperature:', temperature);
  console.log('Unit:', unit);

  // /**
  //  * Convert temperature from fahrenheit to kelvin.
  //  * @param  {Number} temparature in fahrenheit
  //  * @return {Number} temparature in kelvin
  //  */
  // function fahrenheit2kelvin( fahrenheit ) {
  //   return ( fahrenheit + 459.67 ) * 5 / 9;
  // }
  //
  // /**
  //  * Log the specified temperature in both kelvin and fahrenheit.
  //  * @param  {Number} temparature in fahrenheit
  //  */
  // function logTemperature( fahrenheit ) {
  //   console.log( 'Fahrenheit: ', fahrenheit );
  //   console.log( 'Kelvin:     ', fahrenheit2kelvin( fahrenheit ));
  // }
  //
  // // Execute the program.
  // logTemperature( propmtFahrenheit() );
})();
