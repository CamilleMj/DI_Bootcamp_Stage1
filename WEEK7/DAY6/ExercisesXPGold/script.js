//Exercise 1: Sum Elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(array));

//Exercise 2 : Remove Duplicates
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log("Duplicates removed:", uniqueArray);

//Exercise 3 : Remove Certain Values
function removeFalsyValues(arr) {
    return arr.filter(item => {
        return item !== null && item !== 0 && item !== "" && item !== false && item !== undefined && !Number.isNaN(item);
    });
}
const array = [0, 1, null, "", true, false, undefined, NaN, "Hello"];
const cleanedArray = removeFalsyValues(array);
console.log("Array with falsy values removed:", cleanedArray);

//Exercise 4 : Repeat Please !
function repeatString(str, n = 1) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
const str = "Hello ";
const repeatedStr = repeatString(str, 3);
console.log("Repeated string:", repeatedStr);

//Exercise 5 : Turtle & Rabbit


