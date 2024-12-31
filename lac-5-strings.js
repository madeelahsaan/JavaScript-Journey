let string = "hi I am String";
let string2 = 'hi I am String';
// console.log(string);
// console.log(string2);


// INBUILT PROPERTIES

// string.length
// console.log("length : ",string.length);


// String Indices : use for print a single char of string
/*
console.log(string[1]);//way one

let strIndices = string[6];//way second
console.log(strIndices);
*/


//TEMPLATE LITERALS : it use for place variable in strings
/*
let username = "Unknown";
let age = 20;
console.log("I am ", username ," i am ", age, "year old.");//using common way

console.log(`I am ${username} and I am ${age} year old.`);//using template literal
*/


// STRING METHODS

//1. charAt() use to show single character
let str = "Hi these are String method.";
console.log(str.charAt(5))

//toUpperCase
str = str.toUpperCase();//console.log(str.toUpperCase());
console.log(str);

//toLowerCase
str = str.toLowerCase();//console.log(str.toLowerCase());
console.log(str);

//trim : to remove starting and ending space.
let str2 = "   i am U   nknown.      ";
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

//concat : to join or combine two strings together
console.log(str.concat(str2));
console.log(str2.concat(str));

//replace : use to replace the character of string
console.log(str2.replace("n","p")); //it replace the first n of string
console.log(str2.replaceAll("n","p")); //it replace the All n of string