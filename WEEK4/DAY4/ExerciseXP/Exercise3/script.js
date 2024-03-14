function attributeDiv() {
    document.getElementById("navbar").setAttribute("class", "socialNetworkNavigation");
}

const newList = document.createElement("li");
const textNode = document.createTextNode("Logout");
newList.appendChild(textNode);
document.querySelector("ul").appendChild(newList);

const firstElement = document.querySelectorAll("ul li").firstElementChild;
const lastElement = document.querySelectorAll("ul li").lastElementChild;

let content = document.querySelectorAll("ul li").textContent;