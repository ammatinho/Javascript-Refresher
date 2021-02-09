// Objects 

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  console.log(person.skills); //["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python", "D3.js", "Meteor", "SasS"]
  
  person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1) // ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python", "D3.js", "Meteor"]
      .join(', ') // transform the array into a string
      console.log(skillsWithoutLastSkill); // HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor

    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    console.log(lastSkill); // SasS

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    console.log(skills); // HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS

    let fullName = this.getFullName()
    console.log(fullName); // Asabeneh Yetayeh

    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    console.log(statement); 
    /* 
    Asabeneh Yetayeh is a teacher. 
    He lives in Finland.
    He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS. 
    */

    return statement
  }
  console.log('PERSON', person) // {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
  console.log('PERSON GETPERSON', person.getPersonInfo()) 
  /* 
  Asabeneh Yetayeh is a teacher.
  He lives in Finland.
  He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS. 
  */



