// *** Destructuring 
// *** ARRAYS
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3, rest); // 1 2 3 (7) [4, 5, 6, 7, 8, 9, 10]

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  
for (const [country, city] of countries) {
console.log(country, city)
}

const fullStack = [
['HTML', 'CSS', 'JS', 'React'],
['Node', 'Express', 'MongoDB'],
]

for (const [first, second, third, fourth] of fullStack) {
console.log(first, second, third, fourth)
}

// ***************************************
// OBJECTS
const rectangle = {
    width: 20,
    height: 10,
  }
  
let { width, height, perimeter = 200 } = rectangle
console.log(width, height, perimeter) // 20, 10, 200

// *** rename variable name
let { width: w, height: h } = rectangle
console.log(w); // 20

// *** destructuring nested objects
const props = {
    user:{
      firstName:'Asabeneh',
      lastName:'Yetayeh',
      age:250
    },
    post:{
      title:'Destructuring and Spread',
      subtitle:'ES6',
      year:2020
  },
  skills:['JS', 'React', 'Redux', 'Node', 'Python'] 
}

const {user, post, skills} = props
const {firstName, lastName, age} = user
const {title, subtitle, year} = post
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills
console.log('kiiiii', user); 

// destructure in one step
const props = {
    user:{
      firstName:'Asabeneh',
      lastName:'Yetayeh',
      age:250
    },
    post:{
      title:'Destructuring and Spread',
      subtitle:'ES6',
      year:2020
  },
  skills:['JS', 'React', 'Redux', 'Node', 'Python']
}

const {user:{firstName, lastName, age}, post:{title, subtitle, year}, skills:[skillOne, skillTwo, skillThree, skillFour, skillFive]} = props

// Destructuring during loop through an array
const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]
  
for (const { lang, count } of languages) {
console.log(`The ${lang} is spoken in ${count} countries.`)
}

// another way to destructuring array of objects ??????????????????????????????????????????????????????
// these 2 destructuring steps
const [ obj1, obj2, obj3 ] = someArray // step 1
const { data: array0 } = obj1 // step 2
const { data: array1 } = obj2 // step 2
const { data: array2 } = obj3 // step 2

// written together give
const [
  { data: array0 },
  { data: array1 },
  { data: array2 }
] = someArray

// Destructuring function parameter
const rectangle = { width: 20, height: 10 }
const calcualteArea = ({ width, height }) => width * height
const calculatePerimeter = ({ width, height } = 2 * (width + height))

// *** /// Spread operator - Objects /// ***
// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers); // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers); // [1, 3, 5, 7, 9]
console.log(wholeNumbers); // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// Spread operator to copy object
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
}

const copiedUser = { ...user }
console.log(copiedUser); // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

// Modifying or changing the object while copying
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
}

const copiedUser = { ...user, title: 'instructor' }
console.log(copiedUser); // {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

// Spread operator with arrow function
const sumAllNums = (...args) => {
  console.log(args)
}
sumAllNums(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5)); // 15




