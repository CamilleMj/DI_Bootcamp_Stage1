//Exercise 1 : Analyzing
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//ANS : [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
------2------
const country = "USA";
console.log([...country]);
//ANS : USA
//ANS : [ 'U', 'S', 'A' ]

------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//ANS : [ ',' ',']
//ANS ; [ undefined, undefined ]

//Exercise 2 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');

console.log(fullStackResidents);

//Exercise 3 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reduceString = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
  }, '');

console.log(reduceString);

//Exercise 4 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(user => user.isPassed == true);

console.log(passedStudents);
