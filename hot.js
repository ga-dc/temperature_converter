let fahrenheit;
let celsius;

fahrenheit = parseInt(prompt("whats the temp in Fahrenheit"));

// put in fahrenheit and get out celcius
function f2c(ftemp){

  celsius = (ftemp-32)*5/9;
  return celsius;
}

alert("the temp in C is " + f2c(fahrenheit));



celsius = parseInt(prompt("whats the temp in celsius"));
//put in celsius and get out fahrenheit
function c2f(ctemp){

  fahrenheit = ctemp * 9/5 + 32;
  return fahrenheit;
}

alert("the temp in F is " + c2f(celsius));
