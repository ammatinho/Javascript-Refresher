// *** Unlimited number of parameters in regular function 
function sumAllNums() {
    console.log(arguments)
   }
   
//sumAllNums(1, 2, 3, 4) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration - return
function sumAllNums1() {
    let sum = 0
    // for (let i = 0; i < arguments.length; i++) {
    //   sum += arguments[i]
    // }
    for (const element of arguments) {
        sum += element
      }
    return sum
    // return arguments // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  }
  
console.log(sumAllNums1(1, 2, 3, 4)) // 10

// *** Unlimited number of parameters in arrow function
const sumAllNums2 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use an a parameter followed by spread operator
    console.log(args)
   }
   
//sumAllNums2(1, 2, 3, 4) // (4) [1, 2, 3, 4]

// function declaration - return 
const sumAllNums3 = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
//console.log(sumAllNums3(1, 2, 3, 4)) // 10



// const changeToUpperCase = (...arr) => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }
//     return newArr
//   }
  
// console.log(changeToUpperCase('Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland')) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"] arrow function with the spread operactor accesses unlimited parameters as an arraw in the arrow function

const changeToUpperCase = (arr) => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
console.log(changeToUpperCase('Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland')) // ["F", "I", "N", "L", "A", "N", "D"] //arrow function without spread operactor - only takes the 1st parameter

//////////////////////////////////

const original = ['🦊'];
let newArray;

newArray = original.concat('🦄');
newArray = [...original, '🦄'];

//////////////////////////////////

// ************************************ high order functions ************************************ //

// *** a callback function, the function could be any name
// const callback = (n) => {
//     return n ** 2
// }
//   ​
// // function take other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
//   ​
// console.log(cube(callback, 3));

// *** Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//   ​
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10));

// *** call back functions.For instance the forEach method uses call back.
const numbers = [1, 2, 3, 4]
const sumArray = arr => {
    // let sum = 0
    // for (const number of numbers) {
    //     sum += number
    // }
    // return sum

    // or

    let sum = 0
    const callback = function(element) {
    sum += element
    }

    arr.forEach(callback) // for each value we get from the arr, we do the forEach (loop) and the callback function is doing the sumUp. forEach goes over the array and the callback function executes what we define in there. after we return it (like we always do after the loop!
    return sum

}
console.log(sumArray(numbers)); // 10

/////// this is the same than this:::: 
// const numbers = [1, 2, 3, 4]
// ​
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum

// }
// console.log(sumArray(numbers)); // 10

