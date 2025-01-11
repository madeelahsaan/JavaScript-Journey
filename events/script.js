let btn=document.querySelector("button");


// we can use only one event handler by using this method
// btn.onclick = ()=>{
//     console.log("you click one time");
// }


// EVENTLISTENER
btn.addEventListener("click",()=>{//in event arrow func known by callback
    console.log("you click on btn")
    alert("you click on button")
})

//we use multiple handler on event by using eventlisnner
const handler2=(evt)=>{
    console.log("Event handler -2")
}

btn.addEventListener("click",handler2)

btn.addEventListener("click",(evt)=>{
    console.log("Event handler -3")
})

btn.addEventListener("click",(evt)=>{
    console.log("Event handler -4")
})

//remove and handler
btn.removeEventListener("click",handler2);  