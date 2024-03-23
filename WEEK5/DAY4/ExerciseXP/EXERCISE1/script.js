let timeOut = setTimeout(timeoutFunction, 2000)

function timeoutFunction() {
    alert("Hello World");
}

let addElement = setTimeout(newPara, 2000)

function newPara() {
    let newParagraph = document.createElement("p");
    let textNode = document.createTextNode("Hello World");
    newParagraph.appendChild(textNode);
    document.getElementById("container").appendChild(newParagraph);
}

let interVal = setInterval(intervalFunction, 2000)

function intervalFunction() {
    let newParagraph = document.createElement("p");
    let textNode = document.createTextNode("Hello World");
    newParagraph.appendChild(textNode);
    document.getElementById("container").appendChild(newParagraph);

    if (document.getElementsByTagName('p').length === 5) {
        clearInterval(interVal);
        console.log("Interval stopped.");
    }
}
//Interval stops after 5 paragragh

let stopButton = document.getElementById("clear").addEventListener("click", function() {
    clearInterval(interVal);
    console.log("Interval stopped.");
});
//Can still stop the interval before 5 paragraph by clicking the button