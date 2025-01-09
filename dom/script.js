let body = document.querySelector("body");
let div = document.querySelectorAll(".box");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

// /* find the value of class attribute in div*/
// let classVal =div.getAttribute("class");
// console.log(classVal);

// /*find the value of style attribute of p*/
// let pAttr = p.getAttribute("style");
// console.log(pAttr);

// /* find the value of src attribute of script.*/
// let scriptEle = document.querySelector("script");
// let scriptAttr = scriptEle.getAttribute("src");
// console.log(scriptAttr)

/*---CHANGE THE VALUE OF ATTRIBUTES---*/

// div.setAttribute("class","box1");
// let classVal =div.getAttribute("class");
// console.log("it's a new class tha have different style & it name : ",classVal);


// p.setAttribute("style","color : green")
// let pAttr = p.getAttribute("style");
// console.log(pAttr);

/*--- CHANGE AND ADD NEW STYLING USING JAVASCRIPT NOT CSS ---*/
body.style.backgroundColor="purple";
console.log(p.style);
p.style.backgroundColor="black";
p.style.color= " blue"
p.style.padding="10px"
p.style.border="3px solid green"