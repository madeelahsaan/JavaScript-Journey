let num = [0, 1, 2, 3, 4, 5];

// apply all adding method

//use push : push method add element at the last elemnt of array
// console.log(num);
//num.push(10);


//use unshift : unshift method add element a start of array.
// console.log(num);
// num.unshift(28);


//use splice to add element at any index (indexvalue , deleteValue=0, addingElement);
// console.log(num);
// num.splice(3, 0, 28);


//apply the method that can delete element
//pop() delete the last element of array
// console.log(num);
// let deletedValue = num.pop();
// console.log(`element that is deleted by pop() method : ${deletedValue}`);


//apply the method that can delete element
//shift() method delete the starting element of array and return it.
// console.log(num);
// let deletedValue = num.shift();
// console.log(`element that is deleted by Shift() method : ${deletedValue}`);


//apply the method that can delete element
//splice(indexvalue , delCount) method delete the element from any palce in array.
// console.log(num);
// num.splice(1 , 2);//it remove two value (index 1 and 2)


//method the use for replace
// console.log(num);
// num.splice(2, 1, 28);// (replaceingINdex, delElement, newElement);


//method the use for convert array into single string
// console.log(num);
// let str = num.toString();
// console.log(str);


//Array.concat(sencondArray) USE TO JOIN MULTIPLE ARRAY AND RETURN.
let marvel = ["Ironman", "Thor", "Hulk"];
let dc = ["Superman", "Batman"];

// let heros = marvel.concat(dc);
// console.log(heros);

// heros = dc.concat(marvel);
// console.log(heros);

// heros = num.concat(dc, marvel);
// console.log(heros);




console.log(num);