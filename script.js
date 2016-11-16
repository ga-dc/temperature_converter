let fahrenheit;
let celsius;


fahrenheit = parseInt(prompt("What's the temperature in fahrenheit?"));


//convert fahrenheit to celsius
function fToC(ftemp){
  celsius = (ftemp - 32) * 5/9;
  return celsius;
}

alert("The temp in celsius is " + fToC(fahrenheit))


celsius = parseInt(prompt("What's the temperature in celsius?"));

function cToF(ctemp){
  fahrenheit = ctemp * 9/5 + 32;
  return fahrenheit;
  }

alert("the temp in fahrenheit is " + cToF(celsius))
