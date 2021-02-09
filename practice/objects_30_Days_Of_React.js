// 30 Days Of React
// *** JavaScript Refresher ***
/* 7. Objects */

// Exercises
// Exercises: Level 1

// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog); // {}

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Boris';
dog.legs = 4;
dog.color = 'black';
dog.age = 6;
dog.bark = function () {
    return 'woof woof'
};
console.log(dog); // {name: "Boris", legs: 4, color: "black", age: 6, bark: ƒ}

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name); // Boris
console.log(dog.legs); // 4
console.log(dog.color); // black
console.log(dog.age); // 6
console.log(dog.bark()); // woof woof

// 5. Set new properties the dog object: breed, getDogInfo
dog['breed'] = 'Y';
dog['getDogInfo'] = function () {
    return `${this.name} is a dog with ${age} years old.`
};
console.log(dog); // {name: "Boris", legs: 4, color: "black", age: 6, bark: ƒ, breed: "Y", getDogInfo: ƒ}

// *********************************************************************************************************************************************** //

// Exercises: Level 2

// 1. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

for (const key in users) {
    console.log(key, users[key].skills.length); 
}

// Alex 3
// Asab 8
// Brook 5
// Daniel 4
// John 6
// Thomas 4
// Paul 7

const entries = Object.entries(users);
for (let i = 0; i < entries[i].length; i++) {
  console.log(entries[i])
}
// ????

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.

// *** Count logged users
let countLogged = 0;
for (const key in users) {
    if (users[key].isLoggedIn === true) {
        // console.log(key); // Brook | John -> these are the users logged
        countLogged++
    } 
} 
console.log(countLogged); // 2 -> number of users logged

// *** Count users having greater than equal to 50 points
let count50Points = 0;
for (const key in users) {
    if (users[key].points >= 50) {
        // console.log(key); // Asab | Brook | John -> these are the users having greater than equal to 50 points
        count50Points++
    } 
} 
console.log(count50Points); // 3 -> number of users having greater than equal to 50 points

// 3. Find people who are MERN stack developer from the users object
for (const key in users) {
    if(users[key].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
        console.log(key)
    }
} // Asab | Paul

// 4. Set your name in the users object without modifying the original users object
users.Ana = {};
console.log(users); 

// 5. Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys); // ["Alex", "Asab", "Brook", "Daniel", "John", "Thomas", "Paul", "Ana"]

// 6. Get all the values of users object
const values = Object.values(users);
console.log(values);
// [
//     {email: "alex@alex.com", skills: Array(3), age: 20, isLoggedIn: false, points: 30},
//     {email: "asab@asab.com", skills: Array(8), age: 25, isLoggedIn: false, points: 50},
//     {email: "daniel@daniel.com", skills: Array(5), age: 30, isLoggedIn: true, points: 50},
//     {email: "daniel@alex.com", skills: Array(4), age: 20, isLoggedIn: false, points: 40},
//     {email: "john@john.com", skills: Array(6), age: 20, isLoggedIn: true, points: 50},
//     {email: "thomas@thomas.com", skills: Array(4), age: 20, isLoggedIn: false, points: 40},
//     {email: "paul@paul.com", skills: Array(7), age: 20, isLoggedIn: false, points: 40},
//     {}
// ]

// 7. Use the countries object to print a country name, capital, populations and languages.
// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const printValues = Object.values(countries);
// console.log("COUNTRIES", printValues);

let newArray = [];
countries.forEach((country) => {
    newArray.push({name : country.name, capital : country.capital, languages : country.languages, population : country.population});
})
console.log(newArray)
/*
[
    {name: "Afghanistan", capital: "Kabul", languages: Array(3), population: 27657145},
    {name: "Åland Islands", capital: "Mariehamn", languages: Array(1), population: 28875}
    ...
]
*/

// *********************************************************************************************************************************************** //

// Exercises: Level 3

/* 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its 
description and expenses is a set of incomes and its description. */

const personAccount = {
    firstName : 'John',
    lastName : 'Doe',
    incomes : [
        { income : 4000, description : 'Jan' },
        { income : 4000, description : 'Fev' },
        { income : 4000, description : 'Mar' },
        { income : 4000, description : 'Apr' },
        { income : 4000, description : 'May' },
        { income : 4000, description : 'Jun' },
        { income : 4000, description : 'Jul' },
        { income : 4000, description : 'Aug' },
        { income : 4000, description : 'Sep' },
        { income : 4000, description : 'Oct' },
        { income : 4000, description : 'Nov' },
        { income : 4000, description : 'Dec' },
        { income : 4000, description : '13rd' }
    ],
    expenses : [
        { expense : 2500, description : 'Jan' },
        { expense : 3746, description : 'Fev' },
        { expense : 2847, description : 'Mar' },
        { expense : 3894, description : 'Apr' },
        { expense : 4390, description : 'May' },
        { expense : 2938, description : 'Jun' },
        { expense : 3940, description : 'Jul' },
        { expense : 4895, description : 'Aug' },
        { expense : 3049, description : 'Sep' },
        { expense : 3957, description : 'Oct' },
        { expense : 2989, description : 'Nov' },
        { expense : 4300, description : 'Dec' }
    ],
    totalIncome : function () {
        return this.incomes[0].income * this.incomes.length // 52 000
    },
    totalExpense : function () {
        let sum = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            sum += this.expenses[i].expense
        }
        return sum // 43 445
    },
    accountInfo : function () {
        return `${this.firstName} ${this.lastName}`
    },
    addIncome : function () {
        return personAccount.incomes.push({ income : 4500, description : 'Bonus++'})
    },
    addExpense : function () {
        return personAccount.expenses.push({ expense : 5000, description : 'Building Remodelation' })
    },
    accountBalance : function () {
        return personAccount.totalIncome() - personAccount.totalExpense()
    }
}
console.log(
    `My name is ${personAccount.firstName} ${personAccount.lastName}. 
     My income on ${personAccount.incomes[1].description} was ${personAccount.incomes[1].income }. My expenses on ${personAccount.expenses[1].description}
     were ${personAccount.expenses[1].expense}.
     My total income was ${personAccount.totalIncome()} and my total expenses were ${personAccount.totalIncome()}. 
     TOTAL BALANCE: ${personAccount.accountBalance()}.
     To check my account information look for ${personAccount.accountInfo()}.
     I had a bonus and an extra expense. So now, my total income is ${personAccount.totalIncome()}
     and my total expenses are ${personAccount.totalExpense()}. 
     My account balance right now is ${personAccount.accountBalance()}.`
     )

// console.log(personAccount.incomes)

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users1 = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    }
  ]

  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

// Imagine you are getting the above users collection from a MongoDB database. 
// *** a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(users1, name) {
    const { length } = users1;
    const _id = length + 1; // because we are checking a new user
    const found = users1.some(user => user.username === name);
    if (found) console.log('User already found.');
    else if (!found) users1.push({ _id, username: name });
    return users1;
}

console.table(signUp(users1, 'Alexx'))

// *** b. Create a function called signIn which allows user to sign in to the application
function signIn(users1, name, password) {
    const match = users1.some(user => user.username === name && user.password === password)
    console.log(match) // ????
        if (match) {
            console.log('User logged In.');
            match.isLoggedIn 
            
        } else if (!match) {
            console.log('User not logged In.');
            match.isLoggedIn = false
        }
        return users1;
}

console.table(signIn(users1, 'Martha', '123222'))

// 3. The products array has three elements and each of them has six properties. 
// *** a. Create a function called rateProduct which rates the product 
function rateProduct (products, productName) {
    for (const key in products){
        const name = products[key].name;
        const ratings = products[key].ratings;
        if (name === productName) {
            ratings.forEach(rating => {
                console.log("Rate: " + rating.rate)
            })
        } else {
            console.log("Product not found!")
        }
    }
}
rateProduct(products, "TV");

// *** b. Create a function called averageRating which calculate the average rating of a product
function averageRating (products, productName) {
    for (const key in products){
        const name = products[key].name;
        const ratings = products[key].ratings;
        if (name === productName) {
            const rates = [];
            ratings.forEach(rating => {
                rates.push(rating.rate);
            })
                let sumOfRates = rates.reduce((a, b) => a + b, 0);
                let avr = Math.round(sumOfRates / rates.length);
                console.log("Avr", avr);
        } else {
            console.log('This product doens\'t have rate.')
        }  
    }
}
averageRating(products, "mobile phone");

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct (products, productName) {
    const found = products.some(product => product.name === productName && product.likes === ['fg12cy'])
    if (found) products.likes.replace(['fg12cy'], ' ');
    else if (!found) products.push({ likes: ['fg12cy'] });
    return products;
}
console.log(likeProduct(products, 'mobile phone'));

// ????????

