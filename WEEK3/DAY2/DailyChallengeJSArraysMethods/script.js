/* Exercise 1:*/

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();

console.log(fruits); [ 'Apples', 'Oranges', 'Blueberries' ]

fruits.sort();
console.log(fruits); [ 'Apples', 'Blueberries', 'Oranges' ]

fruits.push('Kiwi');
console.log(fruits); [ 'Apples', 'Blueberries', 'Oranges', 'Kiwi' ]

delete fruits[0];
fruits.reverse();
console.log(fruits); [ 'Kiwi', 'Oranges', 'Blueberries', <1 empty item> ]

/* Exercise 2:*/

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

moreFruits[2];
 
console.log(moreFruits); [ 'Banana', [ 'Apples', [ 'Oranges' ], 'Blueberries' ] ]
