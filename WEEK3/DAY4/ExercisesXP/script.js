/*Exercise 1: Simple If/Else Statement*/

var num1 = 12;
var num2 = 38;

if (num1 > num2) {
    express = "num1 is the biggest number";
  } else {
    express = "num1 is not the biggest number";
}

console.log(express);

/*Exercise 2: Chihuahua*/

const newDog = "Chihuahua";
newDog.length;

console.log(newDog.length); 9

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
    display = "I love Chihuahuas, it's my favorite dog breed";
}   else {
    display("I dont care, I prefer cats");
}

console.log(display);

/*Exercise 3: Even Or Odd*/

const number = prompt("Enter a Value:", "12");

if (number % 2 === 0 ) {
    console.log(number , "is an even number");
}   else {
    console.log(number , "is an odd number");
}

/*Exercise 4: Group Chat*/

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length = 0) {
    console.log("no one is online");
  } else if (users.length = 1) {
    console.log(users.length [1] , "is online");
  } else if (users.length = 2) {
    console.log(users.length [2], "are online");
  } else (users.length > 2) {
      console.log(users.length, "are online");
  }

  