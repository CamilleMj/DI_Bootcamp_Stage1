let allBoldItems;

function getBoldItems() {
    var paragraph = document.getElementById("myParagraph");
    var boldItems = paragraph.getElementsByTagName("strong");
    allBoldItems = boldItems;
}

function highlight() {
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
    }
}

function returnItemsToDefault() {
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}

let paragraph = document.getElementById("myParagraph");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);