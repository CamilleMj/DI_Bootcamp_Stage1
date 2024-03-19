//Exercise 1 : The World Translator

let user = prompt("Which language do you speak ? ");
let result = user.toLowerCase();

switch (user) {
    case "french":
      console.log("Bonjour");
      break;
    case "english":
      console.log("Hello");
      break;
    case "hebrew":
       console.log("Shalom");
      break;
    default:
       console.log("01110011 01101111 01110010 01110010 01111001");
      break;
}

//Exercise 2 : The Grade Assigner

let user = prompt("What are your grades ? ");
let result = user;

if (result > 90) {
    console.log("A");
  } else if (result >= 80 && result <= 90) {
    console.log("B");
  } else if (result >= 70 && result <= 80)  {
    console.log("C");
  } else (result < 70) {
    console.log("D");
  }

//Exercise 3 : Verbing

let user = prompt("Can you give a verb please? ");

if (user.length >= 3 && !user.endsWith("ing")) {
    console.log(user += "ing");
  } else if (user.length >= 3 && user.endsWith("ing")) {
    console.log(user += "ly");
  } else if (user.length < 3)  {
    console.log(user);
  }