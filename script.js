"user strict";

(function() {

  // /**
  //  * Prompt the user for a numerical value of temperature.
  //  * @return {Number} a numerical value of temperature.
  //  */
  // function propmtTemperature() {
  //
  //   var promptMsg = "Please enter a numerical value of temperature";
  //
  //   // Repeat until we get a valid value.
  //   var isValid = false;
  //   while ( ! isValid ) {
  //
  //     // Obtain the temperature from the user.
  //     var temperature = prompt( promptMsg );
  //
  //     // Convert the String input into a number.
  //     temperature = Number( temperature );
  //
  //     // Validate the input.
  //     // Invalid if it is `NaN`.
  //     if ( isValidTemperature( temperature ) ) {
  //       isValid = true;
  //     } else {
  //       promptMsg = "The temperature value must be a number."
  //     }
  //   }
  //
  //   return temperature;
  // }

  /**
   * @param  {Number}  a numeric value of temperature.
   * @return {Boolean} true if the temperature is valid, else false.
   */
  function isValidTemperature( temperature ) {
    return Number( temperature ) || temperature === '0'; // True if it's not NaN.
  }

  // /**
  //  * Prompt the user for a unit of temperature.
  //  * @return {String} a unit of temperature.
  //  */
  // function propmtUnit() {
  //
  //   var promptMsg = "Please enter the unit of temperature,\nF (Fahrenheit), C (Celsius) or K (Kelvin)";
  //
  //   var isValid = false;
  //   while ( ! isValid ) {
  //
  //     // Obtain the temperature from the user.
  //     var unit = prompt( promptMsg );
  //
  //     // Validate the input.
  //     if ( isValidUnit( unit ) ) {
  //       isValid = true;
  //     } else {
  //       promptMsg = "The unit must be F (Fahrenheit), C (Celsius) or K (Kelvin)."
  //     }
  //   } // endwhile
  //
  //   // Standardize on lowercase letter.
  //   return unit.toLowerCase();
  // }

  // /**
  //  * @param  {String}  a unit of temperature.
  //  * @return {Boolean} true if the unit is valid, else false.
  //  */
  // function isValidUnit( unit ) {
  //   return unit.length === 1 && /^[FCK]$/i.test( unit )
  // }

  // Get references to elements.
  var tempeatureElem    = document.querySelector('#temperature-input');
  var unitElem          = document.querySelector('#units>select');
  var submitButton      = document.querySelector('#convert-button');
  var resultTable = document.querySelector('#conversion-results tbody');

  // Conversion table.
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
   * Rounds the number to 2 decimal places.
   * @param  {[Number]} number
   * @return {[Number]}
   */
  function formatNumber( number ) {
    return parseFloat( Math.round( number * 100 ) / 100 ).toFixed( 2 );
  }

  /**
   * @param  {[Number]} numericalValue
   * @param  {[String]} fromUnit
   * @return {[Array]}
   */
  function getTemperatureList( numericalValue, fromUnit ) {

    var units = [ 'f', 'c', 'k' ];

    return units.map( function( unit ) {
        var list = [];
        if ( unit === fromUnit ) {
          list.push( formatNumber( numericalValue) );
        } else {
          list.push( formatNumber(
            convertTemperature( numericalValue, fromUnit, unit )
          ));
        }
        list.push( unit );
        return list;
    });
  }

  // Listen for clicks on the submit button.
  submitButton.addEventListener( 'click', function() {

    var temperatureVal = tempeatureElem.value;
    var unitVal        = unitElem.value;

    if ( isValidTemperature( tempeatureElem.value ) ) {

      // Create a new table row to the table.
      var tableRow = document.createElement('tr');

      // Get a list of conversion results and append data to the table row.
      getTemperatureList( tempeatureElem.value, unitElem.value )
        .forEach( function( item ) {
          console.log( item[ 0 ] + item[ 1 ] );

          // Create a new table data element.
          var tableData = document.createElement('td');
          tableData.textContent = item[ 0 ] + item[ 1 ];
          tableRow.appendChild( tableData );
        });

        // Append the row to the table.
        resultTable.appendChild( tableRow );
    } else {
      alert( 'Invalid temperature!' );
    }

    // Clear the temperature input field.
    tempeatureElem.value = '';
  });

  // Execute the program.
  // var temperatureList = getTemperatureList( propmtTemperature(), propmtUnit() );
  // temperatureList.forEach( function( item ) {
  //   console.log( item[ 0 ] + item[ 1 ] );
  // });
})();
