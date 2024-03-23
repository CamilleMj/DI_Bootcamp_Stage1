document.addEventListener('DOMContentLoaded', function() {

    const textInput = document.getElementById('text');

    textInput.addEventListener('input', function(event) {

        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
        event.target.value = inputValue;
    });
});