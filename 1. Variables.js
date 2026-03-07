/* 1. Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let Admin;
let Name = "John";
Admin = Name;
console.log(Admin);

//2. what will be the output
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof [])
console.log(typeof {})

/* 3. Create a variable storing:
name
age
isLoggedIn

Print them.
*/
let user = {
    username : "John",
    age : 31,
    isLoggedIn : false
}
console.log(user.username);

// 4. Create an array of 5 numbers and print the first and last element.
let arr = [10,20,30,40,50]
console.log(arr[0]);
console.log(arr[4]);

// 5. predict output
let x
console.log(x)
console.log(typeof x)

// 6. predict output. ---- will give error
const a = 10
a = 20
console.log(a)
