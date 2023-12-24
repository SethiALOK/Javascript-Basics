console.log(2 < 1);
console.log(2 > 1);
console.log(2 <= 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

// These conversions are good as both sides have same datatypes

// But during conversion when datatypes are different then it gets confusing as what datatypes are converted into what we don't know 

console.log("2" < 1);

console.log(null < 0);
console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);

/* 
The reason is that an equality check == and comparisons >,<,>=,<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. 
*/


// Note:- Don't compare differnt datatypes as it will confusing results so avoid it.

