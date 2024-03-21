//Exercise 2 : Work With Forms

const formRetrieve = document.getElementsById("#form");
console.log(formRetrieve);

const firstInput = document.getElementsById("#fname");
console.log(firstInput);

const secondInput = document.getElementsById("#lname");
console.log(secondInput);

const thirdInput = document.getElementsById("#submit");
console.log(thirdInput);

const inputElements = document.querySelectorAll('input');

inputElements.forEach((input) => {
  const nameAttribute = input.getAttribute('name');
  console.log(nameAttribute);
});

const userList = document.querySelector('.usersAnswer');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputValues = Array.from(inputFields).map((input) => input.value.trim());

  const nonEmptyValues = inputValues.filter((value) => value !== '');
  if (nonEmptyValues.length === 0) {
    alert('Please fill in at least one input field.');
    return;
  }

  nonEmptyValues.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    userList.appendChild(li);
  });

  inputFields.forEach((input) => (input.value = ''));
});