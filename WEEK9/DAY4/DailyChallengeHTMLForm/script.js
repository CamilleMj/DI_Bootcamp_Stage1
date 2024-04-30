document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    
    const myForm = {
        fname: fname,
        lname: lname
    };
    
    const jsonData = JSON.stringify(myForm);
    
    const jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.textContent = jsonData;
});