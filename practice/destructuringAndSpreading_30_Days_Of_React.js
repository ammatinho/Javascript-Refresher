// 30 Days Of React
// *** JavaScript Refresher ***
/* 10. Destructuring And Spreading */

// Exercises

/* Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the 
output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. 
If you want to compare your solution with my solution, check this link. */

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
// const { firstName, lastName, age, country, job, skills, languages } = person
// console.log(person)

// destructuring
const getPersonInfo = ({ firstName, lastName, age, country, job, skills, languages } = person) => 
    `My name is ${firstName} ${lastName}. I am ${age} years old. I live in ${country} and I am a ${job}. My skills are ${skills} and I speak ${languages}.`
console.log(getPersonInfo());

// regular way
function getPersonInfo1 (person) {
    console.log(`My name is ${person.firstName} ${person.lastName}. I am ${person.age} years old. I live in ${person.country} and I am a ${person.job}. My skills are ${person.skills} and I speak ${person.languages}.`)
}
getPersonInfo1(person);


