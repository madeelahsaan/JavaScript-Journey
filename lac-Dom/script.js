//Access ID by Using document.getElementById

// let idVar = document.getElementById("first-para");
// console.log(idVar);
// console.dir(idVar);


//Access Class by Using document.getElementsByClass

// let classVar = document.getElementsByClassName("text");
// console.log(classVar);
// console.dir(classVar);

//Access Tag by Using document.getElementsByTagNAme

// let tagVar = document.getElementsByTagName("h1");
// console.log(tagVar);
// console.dir(tagVar);

//Access Tag/class/Id by Using document.qureySlector

//access id
// let idVar = document.querySelector("#first-para");
// console.dir(idVar);



// let singleClassVar = document.querySelector(".text");//use to access first class element of this name of html body
// console.dir(singleClassVar);

//access the All elements of html that have this Class name
// let classVar = document.querySelectorAll(".text");
// console.dir(classVar);


//access the first element of html that has this Tag name
console.log("it access the first element that has P Tag")
let singleTagVar = document.querySelector("p");
console.dir(singleTagVar);

// access the All elements of html that have this Tag name
console.log("it access all element of html that have P Tag")
let classVar = document.querySelectorAll("p");
console.log(classVar);