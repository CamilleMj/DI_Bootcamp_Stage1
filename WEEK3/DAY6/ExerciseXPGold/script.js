//Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7]

numbers.forEach(number => {
    const loopingArray = number % 3 === 0;
    console.log(loopingArray);
});

//Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let student = prompt("Please enter your name: ");

  if (guestList.hasOwnProperty(student)) {
    console.log(Hi! I'm ${student}, and I'm from ${guestList[student]}.);
} else {
    console.log(Hi! I'm a guest.);
}

//Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = 0;

for (let i = 0; i < age.length; i++) {
    sum += age[i];
  }

console.log(sum);

age.sort(function(a, b){return a - b});
console.log(age[age.length-1]);