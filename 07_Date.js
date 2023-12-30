// Date
const myDate = new Date(2023, 0, 23) // 0 in the middle represents jan as in js everyting starts with 0
const newDate = new Date(2023, 0, 23, 5, 4)  
console.log(newDate.toDateString());
console.log(newDate.toISOString())

const myNewDate = new Date("02-12-2012") // but in double digits format month starts with 01 in js
console.log(myNewDate.toLocaleString());
console.log(myNewDate.getTime());

let myTimeStamp = Date.now() // It will tell what's the date now(Abhi ki date)
console.log(Math.floor(Date.now()/1000)); // Math.floor will remove values in decimal 

const originalDate = new Date()
console.log(originalDate.toLocaleString("default"));


