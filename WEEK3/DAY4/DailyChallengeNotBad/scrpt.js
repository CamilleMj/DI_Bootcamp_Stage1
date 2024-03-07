var sentence = "The weather forecast for the weekend is not bad at all"
var wordNot = "not";

console.log(sentence.search("not"));

var wordBad = "bad";

console.log(sentence.search("bad"));

if (wordNot > wordBad) {
    console.log("The weather forecast for the weekend is good");
} else if (wordBad > wordNot) {
    console.log ("The weather forecast for the weekend is not bad at all");
}