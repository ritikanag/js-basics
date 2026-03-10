// 1. identify data types
function getType(value){
  return typeof value
}

console.log(getType("Hello"))
console.log(getType(100))
console.log(getType(true))

// 2. check if value is array
function isArray(value){
  return Array.isArray(value)
}

console.log(isArray([1,2,3]))
console.log(isArray("Hello"))

// 3. Convert String to Number
let str = "10"
let num = Number(str)
console.log(typeof(num));

// 4. Convert Number to String
let numm = 10
let strr = String(numm)
console.log(typeof(strr));

// 5. Check if Value is Boolean
function isBoolean(value){
  return typeof value === "boolean"
}
console.log(isBoolean(true))
console.log(isBoolean("true"))

// 6. Detect Null
let value = null
if(value === null){
  console.log("Value is null")
}
 
// 7. Detect Undefined
let value1 = undefined
if(value1 === undefined){
  console.log("Value is undefined")
}

// 8. Print Data Types of Object Properties
// for in - loops through key values and for of - loops through object values
let user = {
  name: "Ritika",
  id: 122,
  isAdmin: true
}
for(let key in user){
  console.log(key, typeof user[key])
}

// 9. Boolean Conversion
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("JavaScript"))

// 10. Check NaN
let val = "Hello"
console.log(isNaN(val))

//11. this returns object which is a kindof a bug
console.log(typeof null)

// 12. NaN is not equal to anything, including itself.
console.log(NaN == NaN)

//13. Arrays are technically objects in JavaScript.
console.log(typeof [])

//14. Functions are actually objects, but typeof returns "function".
console.log(typeof function(){})

//15. The + operator performs string concatenation when one operand is a string.
console.log("5" + 3)

//16. The - operator only works with numbers, so JavaScript converts "5" to 5.
console.log("5" - 3) // 2

//17. Equality vs Strict Equality
console.log(5 == "5") //true
console.log(5 === "5") // false

//18. Array Addition = Both arrays convert to empty strings.
/*When the + operator is used, JavaScript tries type coercion.
// Step 1 — arrays convert to string
// [].toString() → ""
// Step 2 — addition becomes string concatenation
// "" + "" → ""
So the result is an empty string.
*/
console.log([] + [])

/* 19. Step 1 — array converts to string
[].toString() → ""
Step 2 — object converts to string
{}.toString() → "[object Object]"
Step 3 — string concatenation
"" + "[object Object]"
Final result = "[object Object]"
*/ 
console.log([] + {})