// 1. even odd
let num = 7

if (num % 2 === 0) {
  console.log("Even")
} else {
  console.log("Odd")
}


// 2. Check Positive, Negative, or Zero
let numm = -5

if (numm > 0) {
  console.log("Positive")
} else if (numm < 0) {
  console.log("Negative")
} else {
  console.log("Zero")
}

//3. Largest of Two Numbers
let a = 10
let b = 20

if (a > b) {
  console.log("A is greater")
} else {
  console.log("B is greater")
}

// 4. Largest of Three Numbers
let a1 = 10
let b1 = 30
let c1 = 20

if (a1 > b1 && a1 > c1) {
  console.log("A1 is largest")
} else if (b1 > a1 && b1 > c1) {
  console.log("B1 is largest")
} else {
  console.log("C1 is largest")
}


// 5. Grade Calculator
let marks = 75

if (marks >= 90) {
  console.log("Grade A")
} else if (marks >= 70) {
  console.log("Grade B")
} else if (marks >= 50) {
  console.log("Grade C")
} else {
  console.log("Fail")
}