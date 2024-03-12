//Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people.shift());

console.log(people.pop() , people.push("Jason"));

console.log(people.push("Camille"));

console.log(people.indexOf("Mary"));

console.log(people.slice(1 , 3));

console.log(people.indexOf("Foo")); //it returns -1 if the item is not found

console.log(people.slice(-1)); 
const last = people.slice(-1);

console.log(last);

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

let i, len, text;
for (i = 0, len = people.length, text = ""; i < len; i++) {
    if (i === "Devon" ) { break; 
    }
    console.log(people);
  }

//Exercise 2 : Your Favorite Colors

const colors = ["Lavender", "Black", "Rosewood", "Sapphire", "Cherry"];

function Ordinal(i) {
    let suffix = ["th", "st", "nd", "rd"],
        x = i % 100;
    
    return x + (suffix[(x - 20) % 10] || suffix[x] || suffix[0]);
  }

  for (i = 0; i < colors.length; i++) {
    let ordinal = i + 1;

    let output = " My " + (Ordinal(ordinal) + " choice is " + colors[i] + ".");

  console.log(output);

  }

//Exercise 3 : Repeat The Question

do {
    user = prompt("Enter a number:");
    user = parseFloat(user);

} while (user < 10);

//Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1] + " " + building.numberOfRoomsAndRent.dan[0]);

var sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]

if (sum > building.numberOfRoomsAndRent.dan[1]) {
  console.log((building.numberOfRoomsAndRent.dan[1]) + 1200)
}

//Exercise 5 : Family

const Family = {firstName:"Jane ", lastName:"Dane ", age:30};

let familyName = "";
for (let x in Family) {
  familyName += Family[x];
}

console.log(familyName);

//Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let result = '';
  for (let x in details) {
    result += x + " " + details[x] + " ";
  }

  console.log(result);

//Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let sorted = names.sort();
let society = sorted.map(name => name[0]);

const secretSociety = society.join('');

console.log(secretSociety);