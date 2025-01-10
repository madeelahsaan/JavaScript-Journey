let div = document.querySelector("div");//access the div where new element will add;
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li");

let newBtn = document.createElement("button");//it create the new element but don't show on webpage
newBtn.innerText="newButton"
console.log(newBtn.innerText);

// div.append(newBtn);//add the new button in the last of div element

// div.prepend(newBtn);//add at starting of div

// div.before(newBtn);//add new element before the div/ given element

div.after(newBtn);//add new element after the div/ given element

ul.remove();

let h1 = document.createElement("h1");
h1.innerText="I'm new heading at the before of div";
div.before(h1);

let h2 = document.createElement("h2");
h2.innerText="I'm new heading at the after of newBtn";
newBtn.after(h2);
