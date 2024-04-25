//////////Exercise 1 : Scope//////////

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

funcOne()
// PREDICTION : a is not defined
// ANS : inside the funcOne function 3
// ANS : Using CONST = ERROR!

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()
funcTwo()
funcThree()
// PREDICTION funcThree() : inside the funcThree function 0
// ANS : funcThree() : inside the funcThree function 0
// PREDICTION funcTwo() : a is not defined
// ANS : funcTwo() : (blank in the console)
// ANS : Using CONST = ERROR!


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour()
funcFive()
// PREDICTION funcFour() : hello
// ANS : funcFour() : ERROR!
// PREDICTION funcFive() : a is not defined
// ANS : funcFive() : ERROR!

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix()
// PREDICTION funcSix() : inside the funcSix function test
// ANS : funcSix() : inside the funcSix function test
//Using CONST inside the function, the answer remain the same

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
// PREDICTION : outside of the if block 5
// ANS : in the if block 5, outside of the if block 2
//Using CONST inside the function, the answer remain the same


//////////Exercise 2 : Ternary Operator//////////
function winBattle(){
    return true;
}

// Transform the winBattle() function to an arrow function.
ANS : const winBattle = () => {
    return true
}
  
winBattle();

let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); //10


//////////Exercise 3 : Is It A String ?//////////
const isString = value => typeof value === 'string' 

console.log(isString('hello')); //true
console.log(isString([1, 2, 4, 0])); //false


//////////Exercise 4 : Colors//////////
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${color[i]}`)
}

colors.some((value)=> { return (value === "Violet"); });


//////////Exercise 5 : Colors #2//////////
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {
    let myColors = i + 1;
    let suffix = ordinal[myColors] || ordinal[0];
    console.log(`${myColors}${suffix} choice is ${colors[i]}`)
}


//////////Exercise 6 : Bank Details//////////
let bankAmount = 1000;
let vatAmount = 0.1;
let expenses = ["+20", "-5", "-10", "20", "-5"];

function modifiedTaxExpenses(expense) {
    if (expense >= 0) {
        return expense * (1 + vatAmount);
    } else {
        return expense * (1 - vatAmount);
    }
}

const modifiedExpenses = expenses.map(modifiedTaxExpenses);
console.log(modifiedExpenses); //[ 22, -4.5, -9, 22, -4.5 ]

