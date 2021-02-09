// *** Window Scope **********************************************************************************************************************************
//scope.js

a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible (the a and b available in the window before the function)

// *** Global Scope **********************************************************************************************************************************
//scope.js

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b) // JavaScript 10
}
letsLearnScope() // (JavaScript 10 | Python 10 | JavaScript 10)
console.log(a, b) // JavaScript 10, accessible

// *** Local Scope **********************************************************************************************************************************
//scope.js

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let c = 30
  if (true) {
    // we can access from the function and outside the function but
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b) // JavaScript 10
}
letsLearnScope() // (JavaScript 10 | Python 20 30 | JavaScript 10)
console.log(a, b) // JavaScript 10, accessible

// *** Check VAR **********************************************************************************************************************************
//scope.js

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined

  if (true) {
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity) // 9.81
  
  for (var i = 0; i < 3; i++) {
    console.log(i) // 1, 2, 3
  }
  console.log(i)

// *** Check LET or CONST **********************************************************************************************************************************
//scope.js

function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true) {
    const gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for (let i = 0; i < 3; i++) {
    console.log(i) // 1, 2, 3
  }
  // console.log(i), Uncaught ReferenceError: gravity is not defined

//   NOTES::::
// A variable declared with var only scoped to function but variable declared with let or 
// const is block scope(function block, if block, loop etc). Block in JavaScript is a code in between two curly brackets ({}).

// In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our 
// variable is block scoped and it will not infect other parts of our code.

// The scope let and const is the same. The difference is only reassigning. We can not change or reassign the value of const 
// variable. I would strongly suggest you to use let and const, by using let and const you will writ clean code and avoid hard 
// to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for array, 
// object, arrow function and function expression.