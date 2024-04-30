let quotes = [
    {id: 0, author: "Buddha", quote: "All that we are is the result of what we have thought.", likes: 0},
    {id: 1, author: "Mahatma Gandhi", quote: "You must be the change you wish to see in the world.", likes: 0},
    {id: 2, author: "Coco Chanel", quote: "The most courageous act is still to think for yourself. Aloud.", likes: 0},
    {id: 3, author: "Walt Disney", quote: "It’s fun to do the impossible.", likes: 0},
    {id: 4, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", likes: 0},
    {id: 5, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0},
]

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener('click', generateQuote);
    document.getElementById("charCount").addEventListener('click', countCharactersWithSpaces);
    document.getElementById("charCountNoSpace").addEventListener('click', countCharactersWithoutSpaces);
    document.getElementById("wordCount").addEventListener('click', countWords);
    document.getElementById("likeButton").addEventListener('click', likeQuote);
    document.getElementById("addQuoteForm").addEventListener('submit', addQuote);
    document.getElementById("filterButton").addEventListener('click', filterQuotes);
    document.getElementById("prevButton").addEventListener('click', showPrevQuote);
    document.getElementById("nextButton").addEventListener('click', showNextQuote);
});

let lastQuoteIndex = -1;
let filteredQuotes = [];
let filteredIndex = 0;

function generateQuote() {
    let myIndex = Math.floor(Math.random() * quotes.length);

    while (myIndex === lastQuoteIndex) {
        myIndex = Math.floor(Math.random() * quotes.length);
    }

    let quote = quotes[myIndex];
    lastQuoteIndex = myIndex;

    let quoteSection = document.getElementById("quote-section");
    quoteSection.innerHTML = '';
    const quotePara = document.createElement("p");
    const authorPara = document.createElement("footer");
    quotePara.textContent = quote.quote;
    authorPara.textContent = `- ${quote.author}`;
    quoteSection.appendChild(quotePara);
    quoteSection.appendChild(authorPara);
}

function countCharactersWithSpaces() {
    let currentQuote = quotes[lastQuoteIndex].quote;
    let charCount = currentQuote.length;
    alert(`Number of characters (with spaces): ${charCount}`);
}

function countCharactersWithoutSpaces() {
    let currentQuote = quotes[lastQuoteIndex].quote;
    let charCount = currentQuote.replace(/\s/g, '').length;
    alert(`Number of characters (without spaces): ${charCount}`);
}

function countWords() {
    let currentQuote = quotes[lastQuoteIndex].quote;
    let wordCount = currentQuote.split(/\s+/).length;
    alert(`Number of words: ${wordCount}`);
}

function likeQuote() {
    let currentQuote = quotes[lastQuoteIndex];
    currentQuote.likes++;
}

function addQuote(event) {
    event.preventDefault();
    let newQuote = document.getElementById("quote").value;
    let newAuthor = document.getElementById("author").value;
    let newId = quotes.length;
    let newQuoteObject = {id: newId, author: newAuthor, quote: newQuote, likes: 0};
    quotes.push(newQuoteObject);
    document.getElementById("quote").value = '';
    document.getElementById("author").value = '';
    alert("Quote added successfully!");
}

function filterQuotes() {
    let authorFilter = document.getElementById("authorFilter").value;
    filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter.toLowerCase());
    filteredIndex = 0;
    if (filteredQuotes.length > 0) {
        displayFilteredQuote();
    } else {
        alert("No quotes found for the specified author.");
    }
}

function displayFilteredQuote() {
    let quoteSection = document.getElementById("quote-section");
    quoteSection.innerHTML = '';
    const quotePara = document.createElement("p");
    const authorPara = document.createElement("footer");
    quotePara.textContent = filteredQuotes[filteredIndex].quote;
    authorPara.textContent = `- ${filteredQuotes[filteredIndex].author}`;
    quoteSection.appendChild(quotePara);
    quoteSection.appendChild(authorPara);
}

function showPrevQuote() {
    if (filteredIndex > 0) {
        filteredIndex--;
        displayFilteredQuote();
    } else {
        alert("No previous quote available.");
    }
}

function showNextQuote() {
    if (filteredIndex < filteredQuotes.length - 1) {
        filteredIndex++;
        displayFilteredQuote();
    } else {
        alert("No next quote available.");
    }
}
