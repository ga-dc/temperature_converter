"use strict";

const fahrToCelsius = function(fahr) {
  return (fahr - 32) / 1.8;
};

const fahrToKelvin = function(fahr) {
  return (5/9) * (fahr - 32) + 273;
};

const celsiusToFahr = function(cel) {
  return 9/5 * cel + 32;
};

const celsiusToKelvin = function(cel) {
  return cel + 273;
};

const kelvinToFahr = function(kel) {
  return (9/5) * (kel - 273) + 32;
};

const kelvinToCel = function(kel) {
  return kel - 273.15;
};

let temp = prompt("What is the temperature?");
let unit = prompt("What is the unit? [(F)ahrenheit, (C)elsius or (K)elvin]").toUpperCase();
let tempConversions = {
  startingUnit: '',
  fahr: '',
  cel: '',
  kel: '',
};

switch(unit) {
  case 'F':
    tempConversions.startingUnit = unit;
    tempConversions.fahr = temp;
    tempConversions.cel = fahrToCelsius(temp);
    tempConversions.kel = fahrToKelvin(temp);
    break;
  case 'C':
    tempConversions.startingUnit = unit;
    tempConversions.cel = temp;
    tempConversions.fahr = celsiusToFahr(temp);
    tempConversions.kel = celsiusToKelvin(temp);
    break;
  case 'k':
    tempConversions.startingUnit = unit;
    tempConversions.kel = temp;
    tempConversions.fahr = fahrToKelvin(temp);
    tempConversions.cel = fahrToCelsius(temp);
    break;
}

console.log(tempConversions);
