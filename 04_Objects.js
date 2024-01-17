// const tinderUser = new Object() //=> This is a singleton object
const tinderUser = {} // Non-Singleton object

tinderUser.id = "108shiva"
tinderUser.name = "Albert"
tinderUser.isLoggedIn = true
tinderUser.age = 23

// console.log(tinderUser);

const regularUser = {
    name: {
        fullname: {
            userfullname: {
                firstname: "Alok",
                lastname: "sethi"
            }
        }
    }
}

// console.log(regularUser.name.fullname.userfullname.firstname);

// To merge objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {obj1, obj2} // 1st method to merge objects which is not good
const obj5 = Object.assign({}, obj1, obj2) 
/* 2nd method to merge and here first thing is target and other 
things are sources which gets into the target */

const obj3 = {...obj1, ...obj2} /*This is best method THis is spreading method and it is also used in arrays we
 spread everthing and join them */

// When information comes from database then it will come in from of arrays

const users = [
    {
        id: 1,
        email: "sim@mail.com"
    },
    {
        id: 2,
        email: "sim@mail.com"
    },    
    {
        id: 3,
        email: "sim@mail.com"
    }    
]

// Suppose we want id from array1 then

console.log(users[1].email) /* As it is a array and to access it we need square bracket and then as it comes 
inside array then dot(.) is used to access key value pair */

console.log(Object.keys(tinderUser)); /* When we use Object. to get various properties then we have to tell him which object we are going
to target */
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // It's properties is it prints every key value pair in form of arrays.

/* When you are loop throw an object and finding an value and sometimes an value doesn't exist then you can 
check whether the value is present or not-present */

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Destructuring objects

 const course = {
    courseName: "js course",
    courseType: "online",
    price: "999",
    courseInstructor: "hitesh sir"
} 

// To access it we write course.then its key like price for ex. course.price and log(print) it on console.

// There is a method to make destructure code and it's syntax is:-

const {courseInstructor: instructor} = course /* We write in curly braces the key we want to access and then
 in equals to we write the object and also we can write to make key name shorter for ex. courseInstructor: Instructor */

console.log(instructor);

// Api which now comes in json
/* Ex. When we login in google we doesn't have headache how will google verify user and whether the email is 
registered */

{
    "name": "Alok",// This is like a object but objects have name and it doesn't have and all values are in string. 
    "class": 12,// Tis is the syntax
    "roll no": 03
}

// Sometimes api comes in the form of array which inside contains object
[
    {},
    {},
    {}
]