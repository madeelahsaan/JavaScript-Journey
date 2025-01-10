let btn = document.createElement("button");
btn.innerText="CLick Me";
btn.style.color="white";
btn.style.backgroundColor="red";
document.querySelector("body").prepend(btn)// it's a second way to access html element without variable

// let body = document.querySelector("body");
// body.prepend(btn);
let p = document.querySelector("p");
// p.setAttribute("class", "content")
p.classList.add("content");