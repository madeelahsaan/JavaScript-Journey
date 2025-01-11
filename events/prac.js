let jsbtn = document.querySelector("#jsbtn");
let body = document.querySelector("body")

let currmode = "ligth";

// html and js
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