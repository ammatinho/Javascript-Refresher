// 30 Days Of React
// *** JavaScript Refresher ***
/*  0. Adding JavaScript to a Web Page
    1. Variables
    2. Data Types
    3. Arrays
*/

// Exercise 
// Exercise: Level 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]   

// 1. Declare an empty array

let arr = Array();
console.log(arr) // []

// 2. Declare an array with more than 5 number of elements

let array = [1, 2, 3, 4, 5, 6];
console.log(array) // [1, 2, 3, 4, 5, 6]

// 3. Find the length of your array
console.log(array.length); // 6

// 4. Get the first item, the middle item and the last item of the array
console.log(array[0]); // 1 -> FIRST item

console.log(array[Math.floor((array.length - 1) / 2)]) // 3 -> MIDDLE item

let lastIndex = array.length -1
console.log(lastIndex); // 5 -> last index
console.log(array[lastIndex]); //6 -> LAST item of the array

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [];
mixedDataTypes = [
    true,
    'Names',
    ['Avocado', 'Mango', 'Lemon'],
    { Frontend : ['CSS', 'HTML', 'Js', 'React'], Backend : ['Node', 'MongoDB']},
    { country : 'Japan', city: 'Tokyo'},
    [[0, 2, 4, 6], [1, 3, 5, 7]]
];
console.log(mixedDataTypes);

console.log(mixedDataTypes.length); // 6

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
let numberOfCompanies = console.log(itCompanies.length); // 7 companies

// 9. Print the first company, middle and last company
let firstCompany = console.log(itCompanies[0]); // Facebook

let lastIndx = itCompanies.length - 1
console.log(lastIndx); // 6
let middleCompany = console.log(itCompanies[Math.floor(lastIndx / 2)]); // Apple

let lastCompany = console.log(itCompanies[itCompanies.length - 1]); // Amazon

// 10. Print out each company
let beAString = itCompanies.toString();
console.log(beAString); // Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon

// 11. Change each company name to uppercase one by one and print them out
let upperCase = beAString.toUpperCase();
console.log(upperCase); // FACEBOOK,GOOGLE,MICROSOFT,APPLE,IBM,ORACLE,AMAZON

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(beAString + ' are big IT companies.')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('Amazon');

if (index != -1) {
    console.log(itCompanies[index] + ' does exist!')
} else {
    console.log(itCompanies[index] + ' does not exist!')
} 
// Amazon does exist!

// 14. Filter out companies which have more than one 'o' without the filter method
// ??????????

// 15. Sort the array using sort() method
console.log(itCompanies.sort()); // ["Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle"]

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse()); // ["Oracle", "Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3)); // ["Oracle", "Microsoft", "IBM"]

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice((itCompanies.length - 3), (itCompanies.length))); // "Facebook", "Apple", "Amazon"]

// 19. Slice out the middle IT company or companies from the array
let middleInd = (itCompanies.length - 1) / 2;
console.log(itCompanies[middleInd]); // Google

// 20. Remove the first IT company from the array
let removeFirst = console.log(itCompanies.shift()); // Oracle
console.log(itCompanies); // output: ["Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,2));
console.log(itCompanies); // output: ["Microsoft", "IBM", "Apple", "Amazon"]

// 22. Remove the last IT company from the array
console.log(itCompanies.pop()); // Amazon
console.log(itCompanies); // output: ["Microsoft", "IBM", "Apple"]

// 23. Remove all IT companies
console.log(itCompanies.splice()); // []

// *********************************************************************************************************************************************** //

// Exercise: Level 2

/* 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and 
store the webTechs array into this file. Access both file in main.js file */

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let textWithoutPunctuations = text.replace(/[^\w\s]/gi, "").split(" ");
console.log(textWithoutPunctuations); // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(textWithoutPunctuations.length); // 13

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// *** add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Tea", "Honey"]

// *** add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Tea", "Honey", "Sugar"]

// *** remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Tea", "Sugar"]

// *** modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart); // ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let checkIndex = countries.indexOf('Ethiopia');
console.log(checkIndex); // 4

if (checkIndex != -1) {
    countries[4] = 'ETHIOPIA';
    console.log(countries) // to print the array
} else {
    countries.push('Ethiopia')
    console.log(countries) // to print the array
}

/* 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array. */

let checkForSass = webTechs.indexOf('Sass');
console.log(checkForSass); // -1 (does not exist!)

if (checkForSass != -1) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// *********************************************************************************************************************************************** //

// Exercise: Level 3

/* 1. The following is an array of 10 students ages: 
js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
- Sort the array and find the min and max age 
- Find the median age(one middle item or two middle items divided by two) 
- Find the average age(all items divided by number of items) 
- Find the range of the ages(max minus min) 
- Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// *** Sort the array and find the min and max age 
ages.sort();
console.log(ages); // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

let minAge = console.log(ages[0]); // 19
let lastIndexForAges = ages.length - 1; 
let maxIndex = console.log(ages[lastIndexForAges]); // 26

// *** Find the median age(one middle item or two middle items divided by two) 
let middleIndexForAges = Math.floor((ages.length - 1) / 2); 
console.log(middleIndexForAges); // 4
let middleAge = console.log(ages[middleIndexForAges]); // 24

// *** Find the average age(all items divided by number of items) 
let sumOfAges = ages.reduce((a, b) => a + b, 0); 
console.log(sumOfAges); // 228
let average = Math.floor(sumOfAges / ages.length);
console.log(average); // 22

// *** Find the range of the ages(max minus min) 
let rangeMax = console.log(Math.max(...ages)); // 26
// MINUS ??????????????
let rangeMin = console.log(Math.min(...ages)); // 19

// *** Compare the value of (min - average) and (max - average), use abs() method
// ???????

// *** 1. Slice the first ten countries from the countriesArray

const countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

console.log(countriesArray.slice(0, 10)); // ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria"]

// *** 2. Find the middle country(ies) in the countries array
let middleIndexForCountries = Math.floor(countriesArray.length - 1) / 2;
console.log(countriesArray.length); //193
console.log(middleIndexForCountries); // 96
console.log(countriesArray[middleIndexForCountries])

// *** 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let firstArray = countriesArray.slice(0,97); 
console.log(firstArray); // 97
/* ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
"Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", 
"Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombi", "Comoros", "Congo (Brazzaville)", "Congo", "Costa Rica", 
"Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor Timur)", 
"Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia, The", 
"Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", 
"India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", 
"Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho"] */

let secondArray = countriesArray.slice(97, 193); 
console.log(secondArray); //96 (even)
/* ["Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
"Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Morocco", "Mozambique", 
"Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", 
"Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
"Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", 
"Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", 
"Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", 
"Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
"Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"] */

secondArray.push('Other Country');
console.log(secondArray); // 97
