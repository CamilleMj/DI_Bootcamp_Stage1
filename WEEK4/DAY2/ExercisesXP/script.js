//Exercise 1 : Information

function infoAboutMe() {
    console.log("Camille, 24, video games")
  }

infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    let sentence = "You name is " + personName + " you are " + personAge + " years old " + " your favorite color is " + personFavoriteColor; 
    console.log(sentence);
  }
  
  infoAboutPerson("David", 45, "blue");
  infoAboutPerson("Josh", 12, "yellow");

//Exercise 2 : Tips

function calculateTip() {
    let bill = prompt("How much is the bill? ");

    if (bill < 50) {
        tipAmount = (20 / 100 * bill);
        console.log(tipAmount + bill);
    }  else if (bill = 50 || 200) {
        tipAmount = (15 / 100 * bill);
        console.log(tipAmount + bill);
    }   else (bill > 200) 
        tipAmount =(10 / 100 * bill);
        console.log(tipAmount + bill);
    
}

calculateTip();

//Exercise 3 : Find The Numbers Divisible By 23

function isDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}   

isDivisible();

//Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalCost = 0;
    for (const item of shoppingList) {
      if (item in stock) {
        totalCost += stock[item] * prices[item];
      }
    }
    return totalCost;
  }
  
  const total = myBill();
  console.log(total.toFixed(2));


//Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
    const totalChange = amountOfChange.reduce((acc, curr) => acc + curr, 0);

    return totalChange >= itemPrice;
}

const itemPrice = 4.25; 
const changeInPocket = [25, 20, 5, 0]; 

const canAffordItem = changeEnough(itemPrice, changeInPocket);
console.log(canAffordItem);

changeEnough(4.25, [25, 20, 5, 0]);

//Exercise 6 : Vacations Costs

function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay? ");
        nights = parseInt(nights);
    } while (isNaN(nights));

    const costPerNight = 140;
    const totalPrice = nights * costPerNight;
    return totalPrice;
}

const totalAmount = hotelCost();
console.log(totalAmount);


function planeRideCost() {
    let destination;
    do {
        destination = prompt("Please enter your destination: ");
    } while (!destination || typeof destination !== "string");

    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

const userCost = planeRideCost();
console.log(userCost);


function rentalCarCost() {
    let rental = prompt("How many days would you like to rent the car? ");

    while (isNaN(rental) || rental === "") {
        rental = prompt("Please enter a valid number of days: ");
    } 

    const costPerDay = 40;
    const totalCost = rental * costPerDay;

    if (rental > 10) {
        discount= totalCost * 0.05;
        totalCost -= discount;
    }

    return totalCost;
}

const totalRentalCost = rentalCarCost();
console.log(totalRentalCost);


function totalVacationCost() {
    const totalHotelCost = hotelCost();
    const totalPlaneCost = planeRideCost();
    const totalCarCost = rentalCarCost();

    const totalCost = totalHotelCost + totalPlaneCost + totalCarCost;
    return totalCost;
}

const vacationTotal = totalVacationCost();
console.log(vacationTotal);
