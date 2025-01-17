let jsbtn = document.querySelector("#jsbtn");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");

let currmode = "ligth";

// /*html and js*/
jsbtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        currmode = "light"
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    console.log(currmode);
})

// html, css and js
btn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light")
        bodyR.classList.remove("dark");
    }
    console.log(currmode);
});