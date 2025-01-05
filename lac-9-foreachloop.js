// for a given array of number print the square of each value using the foreachloop
let num = [1, 2, 3, 4];
// num.forEach((val) => {
//     console.log(val**2);
// });

// let calSquare = (val) => {
//     console.log(val ** 2);
// }
// num.forEach(calSquare);

//  PRACTICE QUESTIONS No: 1
//we are given array of marks of student. find out the marks of student that scored 90+.
// let marks = [87, 93, 64, 99 , 86,103];
// let newMarks = marks.filter((mark)=>{
//     return mark>=90;
// })
// console.log(newMarks);


//Question No: 2
//take a number n as input from user. Create an array of 1 to n;
let userInp = prompt("Enter a number");
let arrNum =[];
for(let i=1;i<=userInp;i++){
    arrNum[i-1]= i;
}
console.log(arrNum);
/*use reduse method to calculate sum of arrNum;*/
let sumArr = arrNum.reduce((previous, current)=>{
    return previous + current;
})
console.log("the sum of array element is : ",sumArr);

/*use reduse method to calculate sum of arrNum;*/
let productArr = arrNum.reduce((previous, current)=>{
    return previous * current;
})
console.log("the product of array element is : ",productArr);


/*Question No: 3
use filter for number divisible by 10 from a given number*/
// let givenNum = [10, 13, 55, 30, 6, 25, 70];
// let multipleTen = givenNum.filter((num)=>{
//     return num%10==0;
// })
// console.log("the array of the that divisible by 10",multipleTen);

/*Question No: 3
use filter for number divisible by 10 from a given number*/
// let givNum = [10, 13, 55, 30, 6, 25, 70];
// let square = givNum.map((num)=>{
//     return num**2;
// })
// console.log("the array of the square of array",square);