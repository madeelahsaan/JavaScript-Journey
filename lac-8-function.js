//-----ARRAOW FUNCTION-----

//--sum arrow func
// const sum = (a,b) => {
//     console.log(a+b);
// }
// console.log(sum(5,10));

//--Multiple arraow func
// const multiple = (a,b)=>{
//     console.log(a*b);
// }
// console.log(multiple(3,2));

//--Print arrow function;
// const printHello = () => {
//     console.log("hello World");
// }
// console.log(printHello());

// --SINGLE LINE FUNCTION
// const printHello = () => console.log("HELLO WORLD");

// console.log(printHello());//call func

function numOfVowel(str) {
    let num=0 ;
    for (let i of str) {
        
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            num++;
            console.log(num)
        }
    }
}
console.log(numOfVowel("adeel"));