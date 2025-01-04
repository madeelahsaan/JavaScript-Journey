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

// function numOfVowel(str) {
//     let num=0 ;
//     str = str.toLowerCase();
//     for (let i of str) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
//             num++;
//         }
//     }
//     console.log(num)
// }
// console.log(numOfVowel("Adeel"));

// function vowelCount(str){
//     let vowel = ["a","e","i","o","u"];
//     let count = 0;
//     for(let char of str){
//         for(let ele of vowel){
//             if(ele === char.toLowerCase()){
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }
// console.log(vowelCount("Adeel"));

// const vowelCount = (str)=>{
//     let count=0;
//     for(let char of str){
//         if( char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// console.log(vowelCount("adeel"))

let marks = {
    adeel :45,
    arbaz :0o5,
    azaeem :55,
    ali :15
}
for (let i=0; i<Object.keys(marks).length;i++){
    // console.log(marks[Object.keys(marks)[i]]);// it's for value of keys
    console.log(Object.keys(marks)[i]);//it's for keys
}

//for-in
for(let key in marks){
    console.log(key);//its for keys
    console.log(marks[key]);//it's for value of keys
}