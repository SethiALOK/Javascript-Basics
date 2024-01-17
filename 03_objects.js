// Singleton:- When we declare objects as literals then singleton doesn't get formed.
// object.create:- It is a method to declare object through which singleton get formed.


// object literals

/* Write a symbol in object?
Ans. To write a symbol in object first declare a var then in object enter the var name in square bracket and give 
a value and that's it */
// for example : 
const mySym = Symbol("Key1")

const jsUser = {    // This was a Object Literal way
    name: "Alok",
    [mySym]: "Key1",
    age: 22,
    email: "sethialok.com",
    isLoggedIn: true,
    loggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser)
// console.log(jsUser[mySym])

jsUser.email = "aloksethi.com" // To change a key value pair in an object.
// console.log(jsUser.email)

// Object.freeze(jsUser) // It freezes the object so that we can't change anything in the object
jsUser.email = "alok@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){ // We can add anything using dot(.) and then a variable or function or array.
    console.log("hello World");
}

jsUser.greetingTwo = function(){ 
    console.log(`Hello JS User ${this.name}`); // To reference(go inside) same object use this
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());