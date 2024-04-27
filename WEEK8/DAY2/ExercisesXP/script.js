//Exercise 1 : Find The Sum

let theSum = (x, y) => x + y;

theSum(2, 3);

//Exercise 2 : Kg And Grams

function results(myConverter) {
    let grams = myConverter * 1000;
    return grams;
}

let results = myConverter => myConverter * 1000;
//Function declaration can be executed later
//Function expression can be stored in a variable

//Exercise 3 : Fortune Teller

(function theTeller(a,b,c,d) {
    console.log(`You will be a ${d} in ${c}, and married to ${b} with ${a} kids.`)
}) ("Software Engineer", "Tokyo", "Alice", 2);;

//Exercise 5 : Juice Bar

function makeJuice(a, c, d, f) {
    let ingredients = [];
    let cupSize = a;
    function addIngredients() {
        for (let i = 0; i < 2; i++);
        const newIngredients = "berry" + "lemon" + "apple";
        addMix.push(newIngredients);
        console.log(`The client wants a ${a} juice, containing ${c}, ${d}, ${f}`);
    }
    addIngredients();

    function displayJuice() {
        console.log(`The client wants a ${a} juice, containing ${c}, ${d}, ${f}`);
    }

    addIngredients();
    displayJuice();
}

makeJuice("Large", "Pineapple", "Mango", "Banana");


  
