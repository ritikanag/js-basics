const prompt = require('prompt-sync')();

let input = prompt("Enter a number: ")
let num = parseInt(input)
//console.log(typeof(num))
if(num > 0){
    console.log(`the entered number ${num} is a positive number`);
}