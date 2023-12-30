const gameName = new String('alokkumarsethi') /* this syntax converts a string in index value pair 
for ex: 0: a, 1: l, etc */

console.log(gameName.__proto__);
console.log(gameName[5]); /* This is not array these are objects as we defined key value pairs in object just 
like that with new String() syntax we can print every letter in index */

console.log(gameName.charAt(6)) // we can see characters at this position with these syntax.
console.log(gameName.indexOf('h')); // we can see which index is at h
console.log(gameName.substring(3, 6)); // we can print letters from 3 to 6
console.log(gameName.slice(-8, 4)); // we can print letters in reverse order

const char = "    Alok    "
console.log(char);
console.log(char.trim()); // It removes the spaces from right and left.

const url = "https://alok.com/alok%20sethi" /* %20 arrives in browser when we have a space between 2 words in url
like here between alok and sethi */
console.log(url.replace('%20', '_')); // It replaces %20 with _

console.log(url.includes('hello')); // It checks whether the thing inside url is present or not.

const we = "deepak-de-co"
console.log(we.split('-')); /* It converts the string in array but on the basis of - and sometimes we can 
convert on basis of ' ' space */

const dev = new String("Alok")
console.log(dev.__proto__);
console.log(dev.anchor("hello"));
console.log(dev.codePointAt(3));
console.log(dev.big());
console.log(dev.blink())
console.log(dev.bold())
console.log(dev.constructor())
console.log(dev.italics());



