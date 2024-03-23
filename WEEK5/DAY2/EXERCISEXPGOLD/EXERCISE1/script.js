document.addEventListener('DOMContentLoaded', function() {

    const element = document.getElementById("genres");
    const selectedOptionValueDiv = document.getElementById('selectedOptionValue');
    
    element.addEventListener('change', function(event) {
    
        const selectedValue = event.target.value;
    });
    
    selectedOptionValueDiv.textContent = 'Selected Option Value: ' + element.value;
    });
    
    function additionalOption() {
        let newOption = document.createElement("option");
        newOption.value = 'classic';
        newOption.selected = true;
        let textNode = document.createTextNode("Classic");
        newOption.appendChild(textNode);
        document.getElementById("genres").appendChild(newOption);
    }
    
    additionalOption();
    
    button = document.getElementById("removeButton").addEventListener("click", function() {
    
        function removecolor() {
            var x = document.getElementById("colorSelect");  
            x.remove(x.selectedIndex);  
        }
    });