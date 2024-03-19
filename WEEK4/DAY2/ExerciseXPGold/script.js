//Exercise 1 : Is_Blank

let str = "";  
  
if (!str) {  
console.log("true");  
} else {  
console.log("false");  
}

//Exercise 2 : Abbrev_name

abbrevName = function (str1) {
    
    var split_names = str1.trim().split(" ");
    
    if (split_names.length > 1) {
        
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    
    return split_names[0];
};
console.log(abbrevName("Robin Singh"));

//Exercise 3 : SwapCase

function swapCase(str) {
    
    let result = '';

    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

const originalString = "Hello My Dear Friend";
const swappedString = swapCase(originalString);
console.log(swappedString);

//Exercise 4 : Omnipresent Value

function isOmnipresent(arr, value) {
    
    for (let subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }
    return true;
}

const array = [[1, 2], [3, 4], [5, 6]];
const value = 2;
console.log(isOmnipresent(array, value));

const array2 = [[1, 2], [2, 4], [5, 6]];
console.log(isOmnipresent(array2, value));