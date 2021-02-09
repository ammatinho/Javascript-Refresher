// 12. Classes
// *** Defining classes
// syntax
class Person {
    // code goes here
}

// *** Class Instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.
//Let us create a person object from our Person class.

class Person {
  // code goes here
}
const person = new Person()
console.log(person); // Person {}

// *** Class constructor
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
}
const person = new Person('Asabeneh', 'Yetayeh')
console.log(person); // Person {firstName: "Asabeneh", lastName: "Yetayeh"}

// create many person objects using person class
const person2 = new Person('Lidiya', 'Tekle');
const person3 = new Person('Abraham', 'Yetayeh');

console.log(person2); // Person {firstName: "Lidiya", lastName: "Tekle"}
console.log(person3); // Person {firstName: "Abraham", lastName: "Yetayeh"}

// adding more properties to the class
class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
console.log(person1); // Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}

// *** Default values with constructor
class Person {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
}
const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1); // Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
console.log(person2); // Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}

// *** Class methods
// In a class we can create class methods. Methods are JavaScript functions inside the class.

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName()); // Asabeneh Yetayeh
console.log(person2.getFullName()); // Lidiya Tekle

// *** Properties with initial value
// So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
}
getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
}
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score); // 0
console.log(person2.score); // 0

console.log(person1.skills); // []
console.log(person2.skills); // []

// *** Getter
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore); // 0 // We do not need parenthesis to call a getter method
console.log(person2.getScore); // 0

console.log(person1.getSkills); // []
console.log(person2.getSkills); // []

// *** Setter
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score); // 1
console.log(person2.score); // 1

console.log(person1.skills); // ["HTML", "CSS", "JavaScript"]
console.log(person2.skills); // ["Planning", "Managing", "Organizing"]

// Let us add regular method called getPersonInfo in the Person class.
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
}
const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore); // 1
console.log(person2.getScore); // 1

console.log(person1.getSkills); // ["HTML", "CSS", "JavaScript"]
console.log(person2.getSkills); // ["Planning", "Managing", "Organizing"]
console.log(person3.getSkills); // []

console.log(person1.getPersonInfo()); // Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
console.log(person2.getPersonInfo()); // Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
console.log(person3.getPersonInfo()); // John Doe is 50. He lives Mars city, Mars.

// *** Static method
/* The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, 
they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example 
of static method is Date.now(). The now method is called directly from the class.*/
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
  
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
}
console.log(Person.favoriteSkill()); // React -> Random value
console.log(Person.showDateTime()); // 15.10.2020 12:11

// *** Inheritance
/* Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition 
of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.*/
// syntax
class ChildClassName extends {
    // code goes here
}

// Let us create a Student child class from Person parent class.
class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1); // Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
console.log(s1.saySomething()); // I am a child of the person class
console.log(s1.getFullName()); // Asabeneh Yetayeh
console.log(s1.getPersonInfo()); // Asabeneh Yetayeh is Finland. He lives Helsinki, 250.

// *** Overriding methods
/* We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to 
add extra properties, we need to use the constructor function the child class too. Inside the constructor function we call the super() 
function to access all the properties from the parent class.*/

/* The Person class didn't have gender but now let us give gender property for the child class, Student. If the SAME method name is used in 
the child class, the parent method will be OVERRIDDEN. -> So then the parent method will be the same defined for the child method.*/ 
class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki', 'Male')
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1); // Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}

console.log(s1.saySomething()); // I am a child of the person class
console.log(s1.getFullName()); // Asabeneh Yetayeh
console.log(s1.getPersonInfo()); // Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript

console.log(s2.saySomething()); // I am a child of the person class
console.log(s2.getFullName()); // Lidiya Tekle
console.log(s2.getPersonInfo()); // Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing



