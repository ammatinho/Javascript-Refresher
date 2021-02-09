// 30 Days Of React
// *** JavaScript Refresher ***
/* 4. Conditionals */

// Exercises
// Exercises: Level 1

/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough 
to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. */
let userInput = prompt('Enter your age:');
let age = userInput;

switch (true) {
    case age > 18:
        console.log('You are old enough to drive.')
        break
    case age < 18:
        console.log(`You are left with ${18 - age} years to drive.`)
        break
    default: 
        console.log('We can not check your age.')
}

/* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to 
console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */
let yourAge = 30;
let myAge = prompt('Enter your age:');

if (myAge > yourAge) {
    console.log(`You are ${Math.abs(myAge - yourAge)} older than me.`)
} else {
    console.log(`You are ${Math.abs(myAge - yourAge)} younger than me.`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3

// *** using if else
if (a > b) {
    console.log(`${a} is greater than ${b}.`)
} else {
    console.log(`${a} is less than ${b}.`)
} // 4 is greater than 3.

// *** ternaty operator
a > b 
    ? console.log(`${a} is greater than ${b}.`) 
    : console.log(`${a} is less than ${b}.`)
// 4 is greater than 3.

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number:');

if (number % 2 == 0) {
    console.log(`The ${number} is even.`)
} else {
    console.log(`The ${number} is odd.`)
}

// *********************************************************************************************************************************************** //

// Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F 

let scores = prompt('Enter a score:');
switch (true) {
    case scores >= 80 && scores <= 100:
        console.log('Grade A')
        break
    case scores >= 70 && scores <= 89:
        console.log('Grade B')
        break
    case scores >= 60 && scores <= 69:
        console.log('Grade C')
        break
    case scores >= 50 && scores <= 59:
        console.log('Grade D')
        break
    case scores >= 40 && scores <= 49:
        console.log('Grade F')
        break
    default:
        console.log('Out of classification')
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let userInputForMonths = prompt('Check the season here. Enter month:');
let months = userInputForMonths;

if (months == 'September' || months == 'October' || months == 'November') {
    console.log('This season is Autumn.')

} else if (months == 'December' || months == 'January' || months == 'February') {
    console.log('This season is Winter.')

} else if (months == 'March' || months == 'April' || months == 'May') {
    console.log('This season is Spring.')

} else if (months == 'June' || months == 'July' || months == 'August') {
    console.log('This season is Summer.')
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let input = prompt('What is the day today?');
let day = input.toLowerCase();

switch (day) {
    case 'monday':
        console.log(`${day.toUpperCase()} is working day.`)
        break
    case 'tuesday':
        console.log(`${day.toUpperCase()} is working day.`)
        break
    case 'wednesday':
        console.log(`${day.toUpperCase()} is working day.`)
        break
    case 'thursday':
        console.log(`${day.toUpperCase()} is working day.`)
        break
    case 'friday':
        console.log(`${day.toUpperCase()} is working day.`)
        break
    case 'saturday':
        console.log(`${day.toUpperCase()} is weekend.`)
        break
    case 'sunday':
        console.log(`${day.toUpperCase()} is weekend.`)
        break
    default:
        console.log('It\'s not a week day')
}

if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {
    console.log(`${day.toUpperCase()} is working day.`)

} else if (day == 'saturday' || day == 'sunday') {
    console.log(`${day.toUpperCase()} is weekend.`)

} else {
    console.log('It\'s not a week day')
}

// *********************************************************************************************************************************************** //

// Exercises: Level 3

// 1. Write a program which tells the number of days in a month.
// let inputMonth = prompt('Enter a month:');
// let month = inputMonth.toLowerCase();

// switch (month) {
//     case 'january':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'february':
//         console.log(`${month.toUpperCase()} has 29 days.`)
//         break
//     case 'march':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'april':
//         console.log(`${month.toUpperCase()} has 30 days.`)
//         break
//     case 'may':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'june':
//         console.log(`${month.toUpperCase()} has 30 days.`)
//         break
//     case 'july':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'august':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'september':
//         console.log(`${month.toUpperCase()} has 30 days.`)
//         break
//     case 'october':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     case 'november':
//     console.log(`${month.toUpperCase()} has 30 days.`)
//         break
//     case 'december':
//         console.log(`${month.toUpperCase()} has 31 days.`)
//         break
//     default:
//         console.log('Impossible to check.')
// }

// 1. Write a program which tells the number of days in a month, now consider leap year.
let inputMonth = prompt('Enter a month:');
let month = inputMonth.toLowerCase();

let inputYear = prompt('Enter a year:');
let year = inputYear;

switch (month) {
    case 'january':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'february':
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            console.log(`${month.toUpperCase()} has 29 days.`)
        } else {
            console.log(`${month.toUpperCase()} has 28 days.`)
        }
        break
    case 'march':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'april':
        console.log(`${month.toUpperCase()} has 30 days.`)
        break
    case 'may':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'june':
        console.log(`${month.toUpperCase()} has 30 days.`)
        break
    case 'july':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'august':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'september':
        console.log(`${month.toUpperCase()} has 30 days.`)
        break
    case 'october':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    case 'november':
    console.log(`${month.toUpperCase()} has 30 days.`)
        break
    case 'december':
        console.log(`${month.toUpperCase()} has 31 days.`)
        break
    default:
        console.log('Impossible to check.')
}


