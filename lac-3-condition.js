//odd or even
/*
let num = 3;

if (num % 2 == 1) {
    console.log(num,' : this number is odd');
}else{
    console.log(num," : it is even number");
}
    */


// color according to mode

let mode = "dark";

if (mode == "dark") {
    console.log("Black");
} else if (mode == "pink"){
    console.log("Pink");
} else{
    console.log("white");
}
    


// Second syntax of IF what we have one line in block of statement for exitution
if (mode=="dark") console.log(mode);


// Ternary Operators

let age =15;
/*
let result = age >= 18 ? "adult" : "not Adult";
console.log(result);
*/
let result = age>=18 ? console.log("Adult") : console.log("Not Adult");


// Problem no 1
//take input fron user and check number is multiple of 5 or not
/*
let userInput = prompt("Enter a number : ");
if (userInput % 5 === 0) {
    console.log(userInput," : divide by 5");
} else {
    console.log(userInput, " : isn't divide by 5");
}
*/



//problem no 2
//write a code which can give the grades
let score = 50;
if (score >=80) {
    console.log('A Grade');
} else if(score>=70 && score<80){
    console.log('B Grade');
}else if(score>=60 && score<70){
    console.log('c Grade');
}else{
    console.log("Fail");
}