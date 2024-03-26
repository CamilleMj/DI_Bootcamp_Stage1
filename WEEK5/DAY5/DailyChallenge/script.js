const tasks = [];

document.getElementById("SubmitButton").addEventListener("click", function(event) {

    let inputCheck = document.getElementById("textField").value;
    
    if (inputCheck.trim() === "") {
        alert("Invalid input");
        return;
    }

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox_" + tasks.length;
    checkbox.classList.add("task-checkbox");

    const label = document.createElement("label");
    label.textContent = inputCheck;
    label.setAttribute("for", checkbox.id);
    label.classList.add("task-label");

    const deleteButton = document.createElement("i");
    deleteButton.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';

    deleteButton.addEventListener("click", function() {
        taskContainer.remove();
    });

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);
    taskContainer.appendChild(deleteButton);

    document.querySelector(".listTasks").appendChild(taskContainer);

    tasks.push(inputCheck);
    console.log("Task added:", inputCheck);

    event.preventDefault();
});