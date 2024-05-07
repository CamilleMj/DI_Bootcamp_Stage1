//1rst Daily Challenge
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words)) {
            const allStrings = words.every(word => typeof word === 'string');
            if (allStrings) {
                const uppercasedWords = words.map(word => word.toUpperCase());
                resolve(uppercasedWords);
            } else {
                reject('Not all elements in the array are strings.');
            }
        } else {
            reject('Input is not an array.');
        }
    });
}

function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(uppercasedWords)) {
            if (uppercasedWords.length > 4) {
                const sortedWords = uppercasedWords.sort();
                resolve(sortedWords);
            } else {
                reject('Array length is not bigger than 4.');
            }
    }
})};

//2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs() {
    return new Promise((resolve, reject) => {
        const jsonObject = JSON.parse(jsonString);
            if (newString) {
                const newString = (morse => typeof morse === '');
                reject("Error");
            } else {
                resolve(jsonObject);
            }
    });
}

function toMorse(morseJS) {
    const user = prompt("Give a word or a sentence")
    const sanitizedInput = userInput.toLowerCase();

    const morseArray = [];
    for (const char of sanitizedInput) {
        if (morseJS[char]) {
            morseArray.push(morseJS[char]);
        } else {
            throw new Error(`Character "${char}" is not valid in Morse code.`);
        }
    }

    return morseArray;
}

function joinWords(morseTranslation) {
    const morseDisplayElement = document.getElementById("morseDisplay");
    const morseText = morseTranslation.join("\n");
    morseDisplayElement.textContent = morseText;
}

const morseTranslationArray = ["--", ".-", "-..", ".---", "---", "-.", "..."];
joinWords(morseTranslationArray);
