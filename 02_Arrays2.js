
const marvel_heros = ["Hulk", "BlackWidow", "AntMan"]
const dc_heros = ["Superman", "Batman", "Flash"]

 // marvel_heros.push(dc_heros) // It changes in the existing array
// console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros) /* It returns the new array that's why when we log marvel_heros
it gives original marvel heros so we have to hold it in a variable to make it work */ 
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] /* It is the spread operator it is used instead of concat
as it spread all the elements in the array and they are not array anymore */
console.log(all_new_heros); // we can add many other array

const new_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
                           // depth 1       depth 2
console.log(new_array.flat(2));// 2 in bracket is depth we can also write infinity in depth
console.log(new_array.flat(Infinity));// 2 in bracket is depth we can also write infinity in depth

console.log(Array.isArray('deepak'));
console.log(Array.from('deepak'));
console.log(Array.from({name: "alok"})); /* It will give empty array as it can't convert object in array as it needs
clear indication what we want to convert array of key or value */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of returns a new array from a set of elements
