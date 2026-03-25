const prompt = require("prompt-sync")();

let input = prompt("Enter your age")
let age = parseInt(input)

if(age>=18){
    console.log("You are eligible to vote")
}