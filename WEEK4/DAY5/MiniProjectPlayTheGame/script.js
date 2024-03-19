function playTheGame() {

    if (confirm("Would you like to play a game ?")) {
        let userNumber = prompt("Please enter a number:");

        if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye");
        } else if (userNumber >= 0 && userNumber <= 10) {
            let computerNumber = Math.floor(Math.random() * 11);
            console.log(computerNumber);
        } else {
            alert("Sorry it’s not a good number, Goodbye");
        }

      } else {
        alert("No problem, Goodbye");
      }
}

function compareNumbers(userNumber,computerNumber) {

    let attempts = 0;

    if (userNumber === computerNumber) {
        alert("WINNER");
        return;
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again");
        prompt("Enter a new number: ");
    } else if (userNumber < computerNumber) {
        alert("Your number is smaller then the computer’s, guess again");
        prompt("Enter a new number: ");
    }

    attempts++;
    while (attempts < 3);
    alert("Out of chances!");
    return;
}

playTheGame();
compareNumbers(userNumber,computerNumber);