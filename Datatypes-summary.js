// Kis tarah se data ko memory me rakha jata hai aur acces kiya jata hai uss basis pe data ka 2 categorization hai
// Primitive:- These are call by value datatype

// 7 types : String, Number, Boolean, Symbol, BigInt, null(means Empty not 0), undefined

const score = 100 // This is a number type variable but in Js we don't have to define it

const a = "Hello" // string
const b = 63873 // Number
let isLoggedIn = true // Boolean
let outsideTemp = null // Null
let myName;// undefined

let bigNumber = 6876729853628768296n // BigInt

const id = Symbol('123')
const playerId = Symbol('123')

console.log(id === playerId)

// Reference(Non Primitive)

// Arrays, objects, functions

let villians = ["Rolex", "Gabbar Singh"]
let myObj = {
    name:"alok",
    age:22,
}
let myFunc = function(){
    console.log("Hello");
}

// Note:- All non primitive data types will retuen typeof as functions and function will return object function but after console log it will show function hi

// console.log(typeof id)


// **************************************************************************************************************

// Stack Memory(Primitive):- value agar change kare toh original mei change nhi hoga par ek copy milegi usmei change hoga  
// Heap Memory(Non Primitive):- value agar change karna hai toh original mei change hoga (ismei referance milta hai means original value milti hai)