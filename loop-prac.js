// let num = Math.random(1)*10;
// console.log(num);

let number = 25;
let userNum = prompt('Guess the number');

while(number != userNum){
    userNum=prompt("you enter wrong number , guess again");
}

console.log('you guess correct number : ',userNum);