function allTruthy(myArray) {
    return myArray.every(x => x);
}
  
console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
