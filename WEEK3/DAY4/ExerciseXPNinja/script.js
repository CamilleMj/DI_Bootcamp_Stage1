//Exercise 1 : Age Difference

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const person1BirthYear = 1990;
const person2BirthYear = 1980;

const person1Age = calculateAge(person1BirthYear);
const person2Age = calculateAge(person2BirthYear);

let youngerDate;
if (person1Age < person2Age) {
    youngerDate = new Date(person1BirthYear + person2Age / 2, 0, 1);
} else {
    youngerDate = new Date(person2BirthYear + person1Age / 2, 0, 1);
}

console.log(youngerDate.toDateString());

//Exercise 2 : Zip Codes

let client = prompt("Please enter your zip code: ");

if (!isNaN(client) && client.length === 5 && !client.includes(" ")) {
    console.log("Success");
} else {
    console.log("Error");
}

//Exercise 3 : Secret Word

let user = prompt("Please enter a word: ");

console.log(user.replace(/[aeiou]/gi, ''));