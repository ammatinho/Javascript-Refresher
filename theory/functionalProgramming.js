// 11. Functional Programming
// ******************************************************************* forEach *******************************************************************
// We use forEach when we like to iterate through an array of items. The forEach is a higher-order function and it takes call-back as a parameter. 
// The forEach method is used ONLY with array and we use forEach if you are interested in each item or index or both.

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(item, index, arr) {}
array.forEach(callback)

// or syntax in an arrow function
const callback = (item, i, arr) => {}
array.forEach(callback)


// as function declaration
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach(function (country, index, arr) {
  console.log(i, country.toUpperCase())
})
// forEach takes the callback function

// as arro function
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
countries.forEach((country, i) => console.log(i, country.toUpperCase())); // 0 "FINLAND" | 1 "ESTONIA" | 2 "SWEDEN" | 3 "NORWAY"

// *******************************************************************************************************************************8

// output as array
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []
countries.forEach((country) => newCountries.push(country))

console.log(newCountries) // ["Finland", "Estonia", "Sweden", "Norway"]

// sumUp with forEach 
const numbers = [1, 2, 3, 4, 5]
let sum = 0
numbers.forEach((n) => (sum += n))

console.log(sum); // 15

// ******************************************************************* map *******************************************************************
// We use the map method whenever we like to modify an array. We use the map method ONLY with arrays and it always returns an array. Returns array!

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(item, i) {
    return // code goes here
}  
const modifiedArray = array.map(callback)
  
// or syntax in an arrow function
const callback = (item, i) => {
    return // code goes here
}
const modifiedArray = array.map(callback)


// Using function declaration
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']

const newCountries = countries.map(function (country) {
  return country.toUpperCase()
})
console.log(newCountries)

// map using an arrow function call back
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = countries.map((country) => country.toUpperCase())
console.log(newCountries) // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]
// As you can see that map is very handy to modify an array and to get an array back.

// *******************************************************************************************************************************8

// get an array with the length of each country from the countries array
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength); // [7, 7, 6, 6]

// change the values of the array by *2
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map((n) => n ** 2)
console.log(squares); // [1, 4, 9, 16, 25]

// ******************************************************************* filter *******************************************************************
// As you may understand from the literal meaning of filter, it filters out items based on some criteria. The filter method 
// like forEach and map is used with an array and it returns an array of the filtered items. Returns array!

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(item) {
    return // boolean
}
  const filteredArray = array.filter(callback)
  
// or syntax in an arrow function
const callback = (item) => {
return // boolean
}
const filteredArray = array.filter(callback)


const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesWithLand); // ["Finland", "Iceland"]

// *******************************************************************************************************************************8

// example how to use filter method 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter((n) => n % 2 === 0)
const odds = numbers.filter((n) => n % 2 !== 0)
console.log(evens); // [0, 2, 4, 6, 8, 10]
console.log(odds); // [1, 3, 5, 7, 9]

// ******************************************************************* reduce *******************************************************************
// Like forEach, map, and filter, reduce is ALSO USED WITH AN ARRAY and it returns a single value. You can associate reduce with a blender. 
// You put different fruits to a blend and you get a mix of fruit juice. The juice is the output from the reduction process. We use the reduce method to 
// sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array. Returns single value!

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(acc, cur) {
    return // code goes here
}
const reduced = array.reduce(callback, optionalInitialValue)

// or syntax in an arrow function
// const reduced =  callback(acc, cur) => {
//     return // code goes here
// }
// const reduced = array.reduce(callback)

// *******************************************************************************************************************************8

// add all items from the array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum); // 55

// add all items but defining the initial value as 5 (the default initial value is 0)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur, 5)
console.log(sum); // 60

// concatenate strings using reduce
const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld); // "Hello world !"

// multiply items of an array using reduce and we will return the value.
const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur)
console.log(value); // 120

// same multiplication with an initial value
const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur, 10)
console.log(value); // 1200

// ******************************************************************* find *******************************************************************
// If we are interested in the first occurrence of a certain item or element in an array we can use find method. Unlike map and filter, 
// find just return the first occurrence of an item instead of an array. Returns a single value!

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(item) {
return // code goes here
}
const item = array.find(callback)

// or syntax in an arrow function
// const reduced =  callback(item) => {
// return // code goes here
// }
// const item = array.find(callback)

// *******************************************************************************************************************************8

// find the first even number and the first odd number in the numbers array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum); // 0
console.log(firstOddNum); // 1

// find the first country which contains a substring way
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countryWithWay = countries.find((country) => country.includes('way'))
console.log(countriesWithWay); // Norway

// find the first country which has only six characters
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const sixCharsCountry = countries.find((country) => country.length === 6)
console.log(sixCharsCountry); // Sweden

// find the first country in the array which has the letter 'o'
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.find((country) => country.includes('o'))
console.log(index); // Estonia

// ******************************************************************* findIndex *******************************************************************
// The findIndex method works like find but findIndex returns the index of the item. If we are interested in the index of a certain item 
// or element IN ARRAY we can use findIndex. The findIndex return the index of the first occurrence of an item. Returns a single value - the 1st index!

// *******************************************************************************************************************************8
// syntax in a normal or a function declaration
function callback(item) {
    return // code goes here
}
const index = array.findIndex(callback)

// or syntax in an arrow function
// const reduced =  callback(item) => {
// return // code goes here
// }
// const index = array.findIndex(callback)

// *******************************************************************************************************************************8

// find the index of the first even number and the index of the first odd number in the numbers array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex); // 0
console.log(firstOddIndex); // 1

// find the index of the first country in the array which has exactly six characters
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.findIndex((country) => country.length === 6)
console.log(index); //2

// find the index of the first country in the array which has the letter 'o'.
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries.findIndex((country) => country.includes('o'))
console.log(index); // 1

// ******************************************************************* some *******************************************************************
// The some method is USED WITH ARRAY and RETURN a BOOLEAN. If ONE or SOME of the items satisfy the criteria the result will be true else 
// it will be false.

// In the following array some numbers are even and some are odd, so if I ask you a question, are there even numbers in the array then your 
// answer will be yes. If I ask you also another question, are there odd numbers in the array then your answer will be yes. On the contrary, 
// if I ask you, are all the numbers even or odd then your answer will be no because all the numbers are not even or odd.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someAreEvens = numbers.some((n) => n % 2 === 0)
const someAreOdds = numbers.some((n) => n % 2 !== 0)
console.log(someAreEvens); // true
console.log(someAreOdds); // true

// array of even numbers === true
const evens = [0, 2, 4, 6, 8, 10]
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)
console.log(someAreEvens); // true
console.log(someAreOdds); // false

// ******************************************************************* every *******************************************************************
// The method every is somehow SIMILAR TO SOME BUT EVERY ITEM MUST SATISFY THE CRITERIA. The method every like some RETURNS A BOOLEAN!
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // even and odd numbers
const allAreEvens = numbers.every((n) => n % 2 === 0)
const allAreOdds = numbers.every((n) => n % 2 !== 0)

console.log(allAreEven); // false
console.log(allAreOdd);  // false

const evens = [0, 2, 4, 6, 8, 10] // even numbers
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)

console.log(someAreEvens); // true
console.log(someAreOdds);  // false

