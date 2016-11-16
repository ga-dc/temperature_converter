//Temperature Converter
let fahrenheit;
let celsius;

fahrenheit = parseInt(prompt("Please enter the temperature in Fahrenheit"));


//convert fahrenheit to celsius
function fToC (fTemp) {
  celsius = (fTemp - 32) * 5/9;
  return celsius;
}
alert("This is the temperature in Celsius: " + fToC(fahrenheit));

//convert celsius to fahrenheit
celsius = parseInt(prompt("Please enter the temperature in Celsius"));

function cToF(cTemp) {
  fahrenheit = cTemp * 9/5 + 32;
  return fahrenheit;
}
alert("This is the temperature in Fahrenheit: " + cToF(celsius));
