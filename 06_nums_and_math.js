const score = 100
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // 

const otherNumber = 45.678
// console.log(otherNumber.toPrecision(2)); // 


const hundreds = 1000000000000000
// console.log(hundreds.toLocaleString('en-US')); // iT CONVERTS LARGE AMOUNT OF NUMBERS IN READABLE NUMBER SYSTEM OF VARIOUS COUNTRIES

// console.log(Math);
// console.log(Math.round(4.5)); // It will round off the values
// console.log(Math.ceil(4.2)); // It will give the upper value
// console.log(Math.floor(4.6)); // It will always give the lower value
// console.log(Math.abs(-5)); // It only convert negative to positive 

// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);
/* 1. Sometimes Math.random() gives 0.02466 and when we multiply it by 10 
then it becomes 0.2466 and it is still closest to zero and if we do Math.round it will give zero 
2. To avoid this we add 1 so that it becomes 1.2466 which is greater than 1 and to avoid complex bodmas we wrap
that code in brackets like at LINE 22 
3. And more thing it will give values between 1 to 9 */

// Sometimes we are given to set range 

const max = 10.1
const min = 10

let number = Math.random()

console.log((Math.random() * (max - min) + 1) + min); // Most important formula for generating number in range.

