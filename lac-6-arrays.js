/*
let student = ["Ali", "Azeem", "Faraz", "Sarmad"];
let rollNum = [31, 0o3, 18, 37];
let info = ["Ali", 31, "NWS"];
console.log(info);
console.log(rollNum);
console.log(student);
*/


/*
let array = ["Ali", "Azeem", "Faraz", "Sarmad", "hamza"];
console.log("length of array is : ",array.length);

console.log(`the value/element at index 3 : ${array[3]}`);

array[4] = "Noman"
console.log(array);
*/

// way to change the case of element in Arrays.
/*
for(let student of array){
    console.log(student.toUpperCase());
}
*/


// PRACTICE QUESTION NO: 1
//for a given array with the mask of student find the average mask of entire class [85, 97, 44, 37, 76, 60]
/*
let marks = [85, 97, 44, 37, 76, 60];
let sum =0;
for(let num of marks){
    sum += num;
}
let avg = sum/(marks.length);
console.log(avg);
*/

// let num = 300;
// let offer = (num/100)*90;
// console.log(offer);

//PRACTICE QUESTION NO: 2
//FOR A GIVEN ARRAY with the price of item -> [250, 645, 300, 900, 50]. All item have an offer of 10% off on them. Change the array to store the final price after applying offer.

//using for loop
/*
let price = [250, 645, 300, 900, 50];
for(let i=0; i<price.length; i++){
    let offer = price[i]/10;
    price[i] -= offer;
}
console.log(price);
*/

//Using for-of
/*
let price = [250, 645, 300, 900, 50];
let i =0;
for (let val of price){
    let offer = val/10;
    price[i] -= offer;
    i++;
}
console.log(`List of price after offer : ${price}`);
*/