// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["Shaktimaan", "Doga"]

const myArr2 = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArr2);

// Array methods

myArr.push(6)
myArr.push(9) // It adds value in last

myArr.pop() // It removed last value
myArr.unshift(7) // It adds value in first position
myArr.shift() // It removes value from first position

// console.log(myArr.includes(9)); // It asks question whether 9 is present or not 
// console.log(myArr.indexOf(9)); // It asks question whether 9 is present in which index

const newArr = myArr.join() // It joins arrays to strings and then converts arrays to string
// console.log(newArr);

const myn1 = myArr.slice(1, 3) // It prints from index 1 to 2 and last index 3 is not included
console.log(myn1);
console.log("A", myArr);

const myn2 = myArr.splice(1, 3) // It prints from index 1 to 3
console.log(myn2);
console.log("B", myArr);

/* Interview Question

Difference between slice and splice

Slice = It doesn't change original array and just print index we have given in between parenthesis.

Splice = It changes in the original array and print index we have given in between parenthesis.

*/


