// 1. Write a program that performs all arithmetic operations on two numbers.
let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


// 2. Check Even or Odd
let num = 7
if (num % 2 === 0) {
  console.log("Even")
} else {
  console.log("Odd")
}

// 3. Predict the output.
let x = 5
console.log(x++)
console.log(x)

let x1 = 5
console.log(++x1)

// 4. predict output
console.log("5" + 3)
console.log("5" - 3)
console.log(5 + true)
console.log(5 + false)

// 5. logical or
let username = ""
let defaultName = "Guest"

console.log(username || defaultName)

// 6. Combine Logical Conditions
let age = 22
let hasID = true

if (age >= 18 && hasID) {
  console.log("Allowed")
} else {
  console.log("Not allowed")
}

// 7. logical nott
let isLoggedIn = false
console.log(!isLoggedIn)

// 8. assignment operator
let x2 = 10

x2 += 5
x2 *= 2
x2 -= 4

console.log(x2)

// 9. comparison operator
console.log(10 > 5)
console.log(10 < 5)
console.log(10 == "10")
console.log(10 === "10")
