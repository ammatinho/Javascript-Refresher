// 30 Days Of React
// *** JavaScript Refresher ***
/* 11. Functional Programming */

// Exercises

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1. Print the price of each product using forEach
products.forEach(product => {
    console.log(product.price);
}) // 3 | 6 |  | 8 | 10 |  |

// 2. Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.

products.forEach(product => {
    if (typeof product.price != 'number') {
        console.log(`The price of ${product.product} is unknown euros.`);
    } else {
        console.log(`The price of ${product.product} is ${product.price} euros.`);
    }
}) // The price of banana is 3 euros. (...)

// 3. Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(product => {
    if (typeof product.price === 'number') {
        sum += product.price
    } 
})
console.log(sum); // 27 

// 4. Create an array of prices using map and store it in a variable prices
let prices = [];
products.map(product => {
    prices.push(product.price);
})
console.log(prices); // [3, 6, " ", 8, 10, ""]

// 5. Filter products with prices
const evenPrices = products.filter((product) => product.price % 2 === 0)
console.log(evenPrices);

const oddPrices = products.filter((product) => product.price % 2 != 0)
console.log(oddPrices); // [{product: "banana", price: 3}]

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
// const productPrices = products.map(product => product.price);
// const priceNum = productPrices.filter(element => typeof element === 'number');
// const sumUp = priceNum.reduce((a, b) => a + b);
// console.log(sumUp); // 27

const productPrices = products
    .map(product => product.price) // [3, 6, " ", 8, 10, ""]
    .filter(element => typeof element === 'number') // [3, 6, 8, 10]
    .reduce((a, b) => a + b) // 27
console.log(productPrices); // 27 

// 7. Calculate the sum of all the prices using reduce only
// const dogs = [
//     {name: 'dog1', age: 25}, //  a = dog[0] -> dogs.age // because reduce only arrays
//     {name: 'dog2', age: 3}, //   b = dog[1] -> dogs.age
//     {name: 'dog3', age: 2}
// ]
// let { age } = dogs
// console.log(dogs)
// const sumWithReduce = dogs.reduce((a, b) => ({age: a.age + b.age})); // -> dogs.age
// console.log(sumWithReduce)

const sumWithReduce = products.reduce((a, b) => ({price: parseInt(a.price + b.price)}));
console.log(sumWithReduce); // 27

// 8. Find the first product which doesn't have a price value
const findFirstUnknownPrice = products.find(product => typeof product.price != 'number')
// console.log(findFirstUnknownPrice); // {product: "potato", price: " "}
console.log(findFirstUnknownPrice.product); // potato

// 9. Find the index of the first product which does not have price value
const findIndexOfTheFirstUnknownPrice = products.findIndex(product => typeof product.price != 'number')
console.log(findIndexOfTheFirstUnknownPrice); // 2

// 10. Check if some products do not have a price value
const anyUnknownPrice = products.some(product => typeof product.price != 'number')
console.log(anyUnknownPrice); // true

// 11. Check if all the products have price value
const allProductsPriced = products.every(product => typeof product.price === 'number')
console.log(allProductsPriced); // false

// 12. Explain the difference between forEach, map, filter and reduce
/* forEach - Used when we like to iterate through an array of items. Used ONLY with array and we use forEach if you are interested in each item 
            or index or both. Doesn't not return the array!*/

/* map - Used when we like to modify an array. Used ONLY with arrays. It always returns array!*/

/* filter - Filters out items based on some criteria. Like forEach and map is used with an array. It returns an array of the filtered items!*/

/* reduce - Like forEach, map, and filter, reduce is ALSO USED WITH AN ARRAY. USed the reduce method to sum all numbers in an array together, 
            or to multiply items in an array or to concatenate items in an array. It returns a single value!*/

// 13. Explain the difference between filter, find and findIndex
/* filter - filters out items based on some criteria. Like forEach and map is used with an array. It returns an array of the filtered items!*/

/* find - Used when we are interested in the first occurrence of a certain item/element in an array. Unlike map and filter, 
        find JUST RETURN THE FIRST OCCURENCE of an item instead of an array. It returns a single value!*/

/* findIndex - Works like find but returns the index of the item. Used when we are interested in the index of a certain item/element IN AN ARRAY. 
            It returns a single value - the index of the 1st occurrence of an item!*/

// 14. Explain the difference between some and every
/* some - USED WITH ARRAY and RETURN a BOOLEAN. If ONE or SOME of the items satisfy the criteria the result will be true else it will be false.*/

/* every - Is somehow SIMILAR TO SOME BUT EVERY ITEM MUST SATISFY THE CRITERIA. Like some RETURNS A BOOLEAN!*/
