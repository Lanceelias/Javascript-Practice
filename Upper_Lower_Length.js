
//1 (Create a variable that stores the name that users enters via prompt)
var name = prompt("What is your name?");
//2 Capitalize the first letter of their name

//a isolate the first character
var firstchar = name.slice(0,1);

//b Turn the first character to upper case

var upperCaseFirstChar = firstchar.toUpperCase();
//c isolate the rest of the name

var restOfName = name.slice(1,name.length);
var lowerRest = restOfName.toLowerCase();
//d concactenate the first then the rest

var fullName = (upperCaseFirstChar + lowerRest);
alert("Hello" + " " + fullName);
//3 We use the capitalized version of their name to greet them using an alert.



