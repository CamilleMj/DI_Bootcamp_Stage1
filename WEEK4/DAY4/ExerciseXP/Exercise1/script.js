const containerDiv = document.getElementById("container");
console.log(containerDiv);

const peteElement = document.querySelector("ul.list:first-of-type li:nth-child(2)");
peteElement.textContent = "Richard";

const sarahElement = document.querySelector("ul.list:last-of-type li:nth-child(2)");
sarahElement.remove();

const allLists = document.querySelectorAll("ul.list");
const myName = "Camille";

allLists.forEach(list => {
    const firstLi = list.querySelector("li");
    firstLi.textContent = myName;
  });


function changeClass() {
    const listElement = document.querySelectorAll("ul.list");
    element.classList.replace("list", "student_list");
}

function changeClassAgain() {
    const SecondListElement = document.querySelector("ul.list:first-of-type");
    element.classList.add("university", "attendance");
}