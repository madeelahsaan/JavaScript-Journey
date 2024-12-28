let num1 = 2;
let num2 = 5;

// arithmatic Operators
console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);

num1++;     //INCREMENT OPERATOR
console.log(num1); //num1 = 2 + 1 = 3

num2--;     //DECREMENT OPERATOR
console.log(num2);

num1 = num1**2; //num1 = 3
console.log("num1 power 2 : ", num1);


// ASSIGNMENT OPERATORS
let a = 2; // = assign the value to variable

a += 4; // += to increment the 4 in a
console.log("a += 4 :", a);

a -= 4; // -= to increment the 4 in a
console.log("a -= 4 :", a);

a *= 4; // *= to increment the 4 in a
console.log("a *= 4 :", a);

a /= 4; // /= to increment the 4 in a
console.log("a /= 4 :", a);

a %= 4; // %= to increment the 4 in a
console.log("a %= 4 :", a);

a **= 4; // **= to increment the 4 in a
console.log("a **= 4 :", a);


// Compartion Operators

// == equal to
console.log("a == 2 :", a==2);

// == equal to
console.log("a != 2 :", a!=2);

// == equal to
console.log("a === 2 :", a===2);

// == equal to
console.log("a !== 2 :", a!==2);


// lOGICAL OPERATOR
// &&   And     if both are ture so answer is ture
// ||   or      if any one is ture so answer is ture
// !    not     opposite to value

let x = 2;
let y = 4;

let cond1 = x < y;// ture
let cond2 = x!=y;// ture
let cond3 = x==y;// false

console.log("cond1 && cond2 : ", cond1 && cond2);

console.log("cond1 || cond3",cond1 || cond3);

let b = true;
console.log("!b : ",!b);