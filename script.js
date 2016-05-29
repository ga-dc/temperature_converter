"user strict";

(function(){

  /**
   * Prompt the user for a starting temperatureInFahr.
   * This should be a numerical value that represents degrees in fahrenheit.
   */
  function propmtFahrenheit() {

    var promptMsg = "Please enter a temperature in Fahrenheit";
    var isValid   = false;

    while ( ! isValid ) {
      var temperatureInFahr = prompt( promptMsg );

      // Convert the String input into a number
      temperatureInFahr = Number( temperatureInFahr );

      // Repeat if it is `NaN`.
      if ( Number( temperatureInFahr ) ) {
        isValid = true;
      } else {
        promptMsg = "The temperature value must be a number."
      }
    }

    return temperatureInFahr;
  }

  /**
   * Convert temperature from fahrenheit to kelvin.
   * @param  {Number} temparature in fahrenheit
   * @return {Number} temparature in kelvin
   */
  function fahrenheit2kelvin( fahrenheit ) {
    return ( fahrenheit + 459.67 ) * 5 / 9;
  }

  /**
   * Log the specified temperature in both kelvin and fahrenheit.
   * @param  {Number} temparature in fahrenheit
   */
  function logTemperature( fahrenheit ) {
    console.log( 'Fahrenheit: ', fahrenheit );
    console.log( 'Kelvin:     ', fahrenheit2kelvin( fahrenheit ));
  }

  // Execute the program.
  logTemperature( propmtFahrenheit() );
})();
