// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText+" From Apna Collage Student";
// console.dir(h2)

let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText = "I'm Adeel.";
// divs[1].innerText = "I'm Faizi.";
// divs[2].innerText = "I'm Bux.";

let i=1;
for(let div of divs){
    div.innerText = `the unique value i ${i}`;
    i++;
}