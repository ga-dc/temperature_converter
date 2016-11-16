//prompt user for temp and temprature degree type
let temp = prompt("What is the temp?");
let unit = prompt("Fahrenheit, Celsius or Kelvin?")

//convert functions for c
function cTemp(temp, unit) {
  if (unit === "fahrenheit" || unit === "F°") {
    return math.round((temp - 32) * 5/9)+ "°C";
  } else {
    return math.round(temp + 273.15) + "°C";
  }
}

function kTemp(temp, unit) {
  if (unit === "fahrenheit" || unit === "F°") {
    return (5/9 * (temp - 32) + 273) + "K";
  } else {
    return (temp + 273.15);
  }
}

function fTemp(temp) {
  if (unit === "celsius" || unit === "C°") {
    return () + "C°";
  } else {
    return ();
  }
}


text 32° F = 0°C = 273.15K

/*prompt user for temp and temp type
conditionals
if unit = fahr
  conversion temp 1()

  conversion temp 2()

  consolelog "text 32° F = conversion temp 1()°C = conversion temp 2 (273.15)K "
if else celc... text 32 c = 0fahr = kelvin()
else kelvin..

f()
cel func ()
kelv func()?8*/
