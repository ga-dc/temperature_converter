(function() {
  "user strict";

  // Get references to elements.
  var tempeatureElem = document.querySelector('#temperature-input');
  var unitElem       = document.querySelector('#units>select');
  var submitButton   = document.querySelector('#convert-button');
  var resultTable    = document.querySelector('#conversion-results tbody');

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
   * @param  {String}  a string of a numeric value of temperature.
   * @return {Boolean} true if the temperature is valid, else false.
   */
  function isValidTemperature( temperature ) {
    return Number( temperature ) || temperature === '0'; // True if it's not NaN.
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

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
   * https://codepen.io/felquis/pen/damDA
   * @param  {Object} elem  the target element.
   * @param  {String} event the type of the event (e.g. 'click').
   */
  function triggerEvent( elem, event ) {

    // Create the event.
    var clickEvent = new Event( event );

    // Dispatch the event.
    elem.dispatchEvent( clickEvent );
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
          // console.log( item[ 0 ] + item[ 1 ] );

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

  // Listen for the enter key press.
  document.body.addEventListener( 'keyup', function (e) {
    if ( e.keyCode == 13 ) {
      // Simulate clicking on the submit button.
      // triggerEvent( submitButton, 'click' );
      submitButton.click();
    }
  });

})();
