/* Exercise 1: Your Favorite Food*/

var favorite_food = "pasta";
var favorite_meal = "lunch"
    
var favorite = 'I eat ' + favorite_food + ' at every ' + favorite_meal;
    
console.log(favorite); I eat pasta at every lunch


/* Exercise 2 : Series PART I*/

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength = 3;
var myWatchedSeriesSentence = " black mirror, money heist and the big bang theory";

var series = 'I watched ' + myWatchedSeriesLength + " series " + myWatchedSeriesSentence;

console.log(series); I watched 3 series  black mirror, money heist and the big bang theory

/*Series PART II*/

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries.pop();

console.log(myWatchedSeries); [ 'black mirror', 'money heist' ]

myWatchedSeries.push("Seven Deadly Sins");
myWatchedSeries.unshift("Vampire Diaries");

console.log(myWatchedSeries); [
    'Vampire Diaries',
    'black mirror',
    'money heist',
    'Seven Deadly Sins'
  ]

delete myWatchedSeries[1];

const word = "money heist";
const thirdLetter = word[3];
console.log(`The third letter in "${word}" is: ${thirdLetter}`);

console.log(myWatchedSeries); The third letter in "money heist" is: e

/* Exercise 3 : The Temperature Converter*/

var temperature = 30 ;
var temperatureF = (temperature * 9) / 5 + 32;

console.log(temperature + '°C is ' + temperatureF + '°F'); 30°C is 86°F

/* Exercise 4 : Guess The Answers #1*/

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 - (very simple 34 + 21 = 55)
    // Actual: 55 

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 - (very simple 2 + 21 = 23)
    // Actual: 23

c = undefined

    console.log(3 + 4 + '5');
    // Prediction: 12 - (3+4 = 7 + 5)
    // Actual: 75 - It did not add 7+5 but combined them together to form 75

/* Exercise 5 : Guess The Answers #2*/

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: Not a Number
// Actual: number

typeof("hello")
// Prediction: String
// Actual: string

typeof(true)
// Prediction: Bollean
// Actual: boolean

typeof(1 != 2)
// Prediction: Bollean (True)
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 13 (number)
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: johnny
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: False
// Actual:false

1 == "1"
// Prediction: False
// Actual: True

1 === "1"
// Prediction: False
// Actual: False

/* Exercise 6 : Guess The Answers #3*/

5 + "34"
// Prediction: 534
// Actual:534

5 - "4"
// Prediction: 1
// Actual:1

10 % 5
// Prediction: 2
// Actual:0

5 % 10
// Prediction: 0,5
// Actual:5

"Java" + "Script"
// Prediction: JavaScript
// Actual:JavaScript

" " + " "
// Prediction: "  "
// Actual:  

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction: true
// Actual:2

true + false
// Prediction: false
// Actual:1

false + true
// Prediction: false
// Actual:1

false - true
// Prediction: false
// Actual:-1

!true
// Prediction: false
// Actual:false

3 - 4
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction: NaN
// Actual:NaN