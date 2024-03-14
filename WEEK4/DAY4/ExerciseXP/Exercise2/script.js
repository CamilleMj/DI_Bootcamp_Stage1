function background() {
    document.querySelector("div").style.backgroundColor = "lightblue";
    document.querySelector("div").style.padding = "15px 10px 15px 10px";
}

function hideElement() {
    document.querySelector("ul li:first-of-type").style.display = "none";
}

function addBorder() {
    document.querySelector("ul:last-of-type").style.border = "2px solid #0000FF";
}

function addFontSize() {
    document.body.style.fontSize = "large";
  }

if (document.querySelector("div").style.backgroundColor = "lightblue") {
    alert("Hello John and Pete");
}

background();
hideElement();
addBorder();
addFontSize();