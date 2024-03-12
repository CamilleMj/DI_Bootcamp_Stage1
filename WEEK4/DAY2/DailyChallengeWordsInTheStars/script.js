const user = prompt("Enter a series of words:");
const wordArray = user.split(" ");

for (const word of wordArray) {
    console.log(word);
}

function stars (sentence) {
    const stars = "*";
    return `${stars} ${sentence} ${stars}`;
}

const wrap = stars(user);
console.log(wrap);


// words used - Doodle, June, Fries, Cheese