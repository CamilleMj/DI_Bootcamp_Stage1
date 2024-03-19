//Exercise 1 : Checking The BMI

const firstObject = {
    fullName: "Hailey Barry",
    mass: "50",
    height: "1.7",
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    },
  };

const secondObject = {
    fullName: "Doug Barry",
    mass: "70",
    height: "1.8",
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    },
};

function bodyMassIndex(firstObject, secondObject) {
    const bmi1 = firstObject.calculateBMI();
    const bmi2 = secondObject.calculateBMI();

    if (bmi1 > bmi2) {
        return firstObject.fullName;
    } else if (bmi2 > bmi1) {
        return secondObject.fullName;
    }
}

const largestBMI = bodyMassIndex(firstObject, secondObject);
console.log(largestBMI);

//Exercise 2 : Grade Average

function findAvg(gradesList) {
    const sum = gradesList.reduce((acc, grade) => acc + grade, 0);

    const average = sum / gradesList.length;

    console.log("The average grade is:", average.toFixed(2));

    if (average >= 65) {
        console.log("Congratulations! You passed.");
    } else {
        console.log("Sorry, you failed and must repeat the course.");
    }
}

const gradesList = [75, 80, 60, 70, 85];

findAvg(gradesList);