document.addEventListener('DOMContentLoaded', function() {

    let root = document.getElementById("root");
    let shoppingList = [];

    function formCreation() {

        let form = document.createElement("form");
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = 'itemInput';

        let button = document.createElement(button);
        button.textContent = 'Add Item';
        button.type = 'button';

        form.appendChild(inputField);
        form.appendChild(button);

       root.appendChild(form);
    }
});

function addItem() {

}