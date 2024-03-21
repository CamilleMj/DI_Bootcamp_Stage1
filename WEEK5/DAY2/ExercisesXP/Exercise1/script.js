// /Exercise 1 : Change The Article

//1
const h1Element = document.getElementsByTagName("h1");
console.log(h1Element);

//2
const lastElement = document.removeChild("article p:nth-child(3)");
console.log(lastElement);

//3
const h2ColorChange = document.getElementById('colorChange');

    h2ColorChange.addEventListener('click', function() {

        this.style.backgroundColor = 'red';
    });

//4
const h3Hidden = document.getElementById('hidden');

    h3Hidden.addEventListener('click', function() {

        this.style.display = none;
    });

//5
const paragraphs = document.querySelectorAll('p');

    function makeTextBold() {
        paragraphs.forEach((p) => {
            p.style.fontWeight = 'bold';
        });
    }

const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', makeTextBold);