//Exercise 1 : Comparison
let newPromise = 10;

let compareToTen = new Promise(function (resolve, reject) {
    if (newPromise <= 10) {
        resolve("It is less or equal to 10");
    } else {
        reject("It is greater than 10");
    }
});

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//Exercise 2 : Promises
let newPromise = true;

let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (newPromise) {
            resolve("Success");
        } else {
            reject("Error. Rejected.");
        }
    }, 4000);
});
console.log(myPromise);

//Exercise 3 : Resolve & Reject
Promise.resolve(3).then((result) => {
    console.log(result); // Output: 3
  });
Promise.reject("Boo!").catch((reason) => {
  console.error(reason); // Output: Boo!
});
  