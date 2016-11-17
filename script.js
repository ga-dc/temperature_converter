

let temp = [];

var temperature = prompt("what is the temperature");
var temperature_unit = prompt("what is the temperature unit? F for farenheit, C for celsius, K for kelvin");

if (temperature_unit == "F"){
 celsius = ((temperature -32)*5/9);
 kelvin = ((temperature -32)*5/9 +273 + "K");
 console.log("your kelvin temperature is " + kelvin);
 console.log("your celsius temperature is " + celsius);
 }
else if (temperature_unit == "C"){
  fahrenheit = ((temperature + 273));
  kelvin = ((temperature * 9/5)+ 32);
  console.log("your fahrenheit is " + fahrenheit);
  console.log("your kelvin is " + kelvin);
}
else {
  fahrenheit = ((temperature -273)*9/5 +32);
  celsius = ((temperature - 273));
  console.log("your fahrenheit is " + fahrenheit);
  console.log("your celsius is " + celsius);
}
