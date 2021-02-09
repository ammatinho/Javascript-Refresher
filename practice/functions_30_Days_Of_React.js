// 30 Days Of React
// *** JavaScript Refresher ***
/* 8. Functions */

// Exercises
// Exercises: Level 1

// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Ana', 'Matinho')); // Ana Matinho

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (parm1, parm2) {
    return parm1 + parm2
}
console.log(addNumbers(2, 2)); // 4

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
    return Math.round(Math.PI * r * r)
}
console.log(areaOfCircle(10)); // 314

/* 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
Write a function which convert oC to oF convertCelciusToFahrenheit. */
function convertCelciusToFahrenheit(celcius) {
    return ((celcius * (9/5)) + 32);
}
console.log(convertCelciusToFahrenheit(30))

/* 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a 
function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below. 
** The same groups apply to both men and women.
    * Underweight: BMI is less than 18.5
    * Normal weight: BMI is 18.5 to 24.9
    * Overweight: BMI is 25 to 29.9
    * Obese: BMI is 30 or more
*/
function bmi (weight, height) {
    let bmi = Math.round(weight / (height * height))
    if (bmi < 18.5) console.log('Underweight');
    else if (bmi > 18.5 && bmi < 24.9) console.log('Normal weight');
    else if (bmi > 25 && bmi < 29.9) console.log('OverWeight');
    else if (bmi > 30) console.log('Obese');
    // return bmi
}
//console.log(bmi(50, 1.70)); // Underweight | 17
bmi(65, 1.70); // Underweight -> if I dont want to return the parameters(weight and height) I dont need to console it. so I am just executing the function (checking the bmi)

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month) {
    if (month == 'September' || month == 'October' || month == 'November') {
        console.log('It\s Autumn.')
    
    } else if (month == 'December' || month == 'January' || month == 'February') {
        console.log('It\'s Winter.')
    
    } else if (month == 'March' || month == 'April' || month == 'May') {
        console.log('It\'s Spring.')
    
    } else if (month == 'June' || month == 'July' || month == 'August') {
        console.log('It\'s Summer.')
    }
}
checkSeason('May'); // It's Spring.

// *********************************************************************************************************************************************** //

// Exercises: Level 2

/* 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or 
values of a quadratic equation, solveQuadEquation. */
function solveQuadEquation(a, b, c) {
    let resultPositive = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);      
    let resultNegative = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a); 
    return resultPositive + ', ' + resultNegative;
}
console.log(solveQuadEquation(1, -1, -2)); // 2, -1

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray (array) {
    for (const element of array) {
        console.log(element)
    }
}
printArray(['A', 'B', 'C', 'D']); // A | B | C | D

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime () {

}
// ??? Which Date objetc

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    let t = x;
    x = y;
    y = t;
    return [x, y];
}
console.log(swapValues(3, 4)); // [4, 3]

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    let newArray = [];
    for(let i = array.length - 1; i >= 0; i --) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6])); // [6, 5, 4, 3, 2, 1]

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    let capitalizedarray = [];
    for (const element of array) {
        capitalizedarray.push(element.toUpperCase());
    }
    return capitalizedarray;
}
console.log(capitalizeArray(['Thailand', 'Laos', 'Korea', 'China'])); // ["THAILAND", "LAOS", "KOREA", "CHINA"]

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem (item) {
    let array = [1, 2, 3, 4];
    let newArray = array.concat(item);
    return newArray
}
console.log(addItem(5)); // [1, 2, 3, 4, 5]
// push will add the item to the end of the array but returns the new length of the array
// concat will add the item to the end of the array and returns the new array

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem (array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeItem([1, 2, 3, 4, 5], 2)); // [1, 2, 4, 5]

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// this function will sum up the even numbers and odd numbers separately 
function evensAndOdds (integer) {
    let digits = (""+integer).split("");
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
        sumEven+= parseInt(digits[i]);
        } else {
        sumOdd+= parseInt(digits[i]);
        }
    }
    console.log('Even: ' + sumEven, 'Odd: ' + sumOdd)
}
evensAndOdds(484516849815); // Even: 42 Odd: 21

// this function will count the odd and even numbers 
function countEvensAndOdds (integer) {
    let digits = (""+integer).split("");
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            evenArray.push(digits[i]);
        } else {
            oddArray.push(digits[i]);
        }
    }
    console.log('Even: ' + evenArray.length, 'Odd: ' + oddArray.length)
}
countEvensAndOdds(145); // Even: 1 Odd: 2

// 13. Write a function which takes any number of arguments and return the sum of the arguments
function sumUp (...arguments) {
    let sum = 0
    for (const element of arguments) {
      sum += element
    }
    return sum
}
console.log(sumUp(1, 2, 3, 4)); // 10

// 1. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(length = 7) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(userIdGenerator(7)); // tq9Hzs0
// console.log(userIdGenerator(2)); // en

// *********************************************************************************************************************************************** //

// Exercises: Level 3

/* 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.*/
// let lengthOfId = prompt('Length of the Id:');
// let numberOfIds = prompt('Number of Id\'s pretended:');

function userIdGeneratedByUser (length = lengthOfId, times = numberOfIds) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}
//console.log(userIdGeneratedByUser());
// ?????????????????????????? let numberOfIds = prompt('Number of Id\'s pretended:');

// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateHexColors(length = 6) {
    let result           = '#';
    let characters       = '0123456789ABCDEF';
    let charactersLength = characters.length; // 16
    for ( let i = 0; i < length; i++ ) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }
    return result
}
console.log(generateHexColors()); // #CZMHZW

function generateRgbColors() {
    // let o = Math.round, r = Math.random, s = 255;
    // return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';

    // or 

    return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
console.log(generateRgbColors()); // rgb(204,3,209)
// ???? Times :::: console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
// That somewhat works, because Math.random() - 0.5 is a random number that may be positive or negative, 
// so the sorting function reorders elements randomly.

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function fact(x) {
    if (x == 0 ) {
       return 1;
    }
    return x * fact(x-1);
}
console.log(fact(2)); // 2

// or 

function factorial(number){
    let answer = 1;
    if (number == 0 || number == 1){
        return answer;
    } else  {
        for(let i = number; i >= 1; i--){
        answer = answer * i;
        }
        return answer;
    }  
}
console.log(factorial(4)); // 24

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(x) {
    if (x !== undefined) {
        console.log('It\s not empty!')

    } else {
        console.log('It\s empty!')

    }
}
isEmpty(); // Its empty!

/* 6. Write a function called average, it takes an array parameter and returns the average of the items. 
Check if all the array items are number types. If not give return reasonable feedback. */
function avarage(array) {
    let sumUp = array.reduce((a, b) => a + b, 0);
    let avr = Math.round(sumUp / array.length);
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] != "number") {
           return "This is not an integers array!";
        } 
    }
    return avr;
    
}
console.log(avarage([5, 2, 5, 89])); // 25



