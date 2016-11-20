
var STARTING_TEMP = prompt("what is the temperature");
var temperature_unit = prompt("what is the temperature unit? F for farenheit, C for celsius, K for kelvin");

if (temperature_unit == "F"){
 let temp=[];
 celsius = ((STARTING_TEMP -32)*5/9);
 let CONVERTED_TEMP_1 = (celsius + "C");
 kelvin = ((STARTING_TEMP -32)*5/9 +273);
 let CONVERTED_TEMP_2 = (kelvin + "K");
 temp.push(STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2);
 console.log(temp);
 //console.log("your kelvin temperature is " + kelvin);
 //console.log("your celsius temperature is " + celsius);
 }
else if (temperature_unit == "C"){
  let temp=[];
  fahrenheit = ((STARTING_TEMP * 9/5)+ 32);
  let CONVERTED_TEMP_1 = (fahrenheit + "F");
  kelvin = ((STARTING_TEMP + 273));
  let CONVERTED_TEMP_2 = (kelvin + "K");
  temp.push(STARTING_TEMP,CONVERTED_TEMP_1,CONVERTED_TEMP_2);
  console.log(temp);
}
else {
  let temp=[];
  fahrenheit = ((STARTING_TEMP -273)*9/5 +32);
  let CONVERTED_TEMP_1=fahrenheit+"F";
  celsius = ((STARTING_TEMP - 273));
  let CONVERTED_TEMP_2=celsius+"K";
  temp.push(STARTING_TEMP,CONVERTED_TEMP_1,CONVERTED_TEMP_2);
  console.log(temp);
}
