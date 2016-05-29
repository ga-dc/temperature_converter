"user strict";

(function() {

  /**
   * Prompt the user for a numerical value of temperature.
   * @return {Number} a numerical value of temperature.
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

  /**
   * @param  {Number}  a numeric value of temperature.
   * @return {Boolean} true if the temperature is valid, else false.
   */
  function isValidTemperature( temperature ) {
    return Number( temperature ); // True if it's not NaN.
  }

  /**
   * Prompt the user for a unit of temperature.
   * @return {String} a unit of temperature.
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
    } // endwhile

    // Standardize on lowercase letter.
    return unit.toLowerCase();
  }

  /**
   * @param  {String}  a unit of temperature.
   * @return {Boolean} true if the unit is valid, else false.
   */
  function isValidUnit( unit ) {
    return unit.length === 1 && /^[FCK]$/i.test( unit )
  }

  // conversion table
  // http://www.allmeasures.com/temperature.html
  // F => C | (F - 32) * 5/9
  // F => K | (F - 32) * 5/9 + 273.15
  // C => F | (C * 9/5) + 32
  // C => K | C + 273.15
  // K => F | (K - 273.15) * 9/5 + 32
  // K => C | K - 273.15
  var converters = {
    'f': {
      'c': function(T) { return (T - 32) * 5/9; },
      'k': function(T) { return (T - 32) * 5/9 + 273.15; }
    },
    'c': {
      'f': function(T) { return (T * 9/5) + 32; },
      'k': function(T) { return T + 273.15; }
    },
    'k': {
      'f': function(T) { return (T - 273.15) * 9/5 + 32; },
      'c': function(T) { return T - 273.15; }
    }
  }

  /**
   * @param  {[Number]} numericalValue
   * @param  {[String]} fromUnit
   * @param  {[String]} toUnit
   * @return {[Number]} a numerical value of the conversion result.
   */
  function convertTemperature( numericalValue, fromUnit, toUnit ) {
    return converters[ fromUnit ][ toUnit ]( numericalValue );
  }

  /**
   * @param  {[Number]} numericalValue
   * @param  {[String]} fromUnit
   * @return {[Array]}
   */
  function getTemperatureList( numericalValue, fromUnit ) {

    var units = [ 'f', 'c', 'k' ];

    return units.map( function( unit ) {
      var tmp = [];
      if ( unit === fromUnit ) {
        tmp.push( numericalValue );
        tmp.push( unit );
        return tmp;
      } else {
        tmp.push( convertTemperature( numericalValue, fromUnit, unit ) );
        tmp.push( unit );
        return tmp;
      }
    });
  }

  // Execute the program.
  var temperatureList = getTemperatureList( propmtTemperature(), propmtUnit() );
  temperatureList.forEach( function( item ) {
    console.log( item[ 0 ] + item[ 1 ] );
  });

})();
