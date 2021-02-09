// 30 Days Of React
// *** JavaScript Refresher ***
/* 12. Classes */

// Exercises
// Exercises: Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
    }
    getNameAndColor() {
        const nameAndColor = `${this.name} is ${this.color}.`
        return nameAndColor
    }
    getAnimalInfo() {
        const animalInfo = `${this.getNameAndColor()}. It's an animal of ${this.legs} legs with ${this.age} years old.`
        return animalInfo
    }
}
const animal1 = new Animal('Bobi', 4, 'black', 4);
const animal2 = new Animal('Kitty', 7, 'white', 4);

console.log(animal1); // Animal {name: "Bobi", age: 4, color: "black", legs: 4}
console.log(animal2); // Animal {name: "Kitty", age: 7, color: "white", legs: 4}

console.log(animal1.getNameAndColor()); // Bobi is black
console.log(animal1.getAnimalInfo()); // Bobi is black. It's an animal of 4 legs with 4 years old.

console.log(animal2.getNameAndColor()); // Kitty is white
console.log(animal2.getAnimalInfo()); // Kitty is white. It's an animal of 4 legs with 7 years old.

//  2. Create a Dog and Cat child class from the Animal Class.
class Dogs extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs, gender)
        this.gender = gender
    }
}
const dog1 = new Dogs('Bobii', 4, 'black', 4, 'male');
console.log(dog1); // Dogs {name: "Bobii", age: 4, color: "black", legs: 4, gender: "male"}

class Cats extends Animal {
    constructor(name, color, gender) {
        super(name, color, gender)
        this.gender = gender
    }
    getNameAndColor() {
        const nameAndColor = `${this.name} is ${this.color} and ${this.gender}.`
        return nameAndColor
    }
}
const cat1 = new Cats('Kittyyyyy');
cat1.color = 'yellow';
cat1.gender = 'female';
console.log(cat1.getNameAndColor()); // Kittyyyyy is yellow and female
console.log(cat1); // Cats {name: "Kittyyyyy", age: undefined, color: "yellow", legs: undefined, gender: "female"}

// *********************************************************************************************************************************************** //

// Exercises: Level 2

// 1. Override the method you created in Animal class
class AnimalUpdated extends Animal {
    constructor(name, age, color, legs, gender, dateOfBirth) {
        super(name, age, color, legs, gender, dateOfBirth)
        this.gender = gender
        this.dateOfBirth = dateOfBirth
    }
    getNameAndColorAndGender() {
        super.getNameAndColor()
        const nameAndColor = `${this.name} is ${this.color} and ${this.gender}.`
        return nameAndColor
    }
    getAnimalInfo() {
        super.getAnimalInfo()
        const animalInfo = `${this.getNameAndColor()}. It's an animal of ${this.legs} legs with ${this.age} years old that was born at ${this.dateOfBirth}.`
        return animalInfo
    }
}
const animalUpdated = new AnimalUpdated('Lurke', 5, 'brown', 4, 'male', '12.02.2016');
console.log(animalUpdated); // AnimalUpdated {name: "Lurke", age: 5, color: "brown", legs: 4, gender: "male", …}
console.log(animalUpdated.getNameAndColorAndGender()); // Lurke is brown and male
console.log(animalUpdated.getAnimalInfo()); // Lurke is brown. It's an animal of 4 legs with 5 years old that was born at 12.02.2016.

// *********************************************************************************************************************************************** //

// Exercises: Level 3

/* 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, 
variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
Check the output below.*/
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
    constructor(ages) {
        this.ages = ages
    }
    static count() {
        // * The "count" is the "length" you're used to.
        const count = ages.length
        return count
    }
    static sum() {
      let sumUp =0;
      ages.forEach(age => { sumUp += age })
        return sumUp
    }
    static min() {
      const min = Math.min(...ages)
      return min
    }
    static max() {
      const max = Math.max(...ages)
      return max
    }
    static range() {
        //  * The "range" of a list a numbers is the difference between the largest and smallest values.
        let range = this.max() - this.min()
        return range
    }
    static mean() {
        // * The "mean" is the "average" you're used to, where you add up all the numbers and then divide by the number of numbers.
      const mean = Math.round(this.sum() / this.count())
      return mean
    }
    static median() {
        // * The "median" is the "middle" value in the list of numbers.
        const sort = ages.sort();
        if (sort.length % 2 === 0) { // array with even number elements
          return (sort[sort.length / 2] + sort[(sort.length / 2) - 1]) / 2;
        }
        else {
          return sort[(sort.length - 1) / 2]; // array with odd number elements
        }
    }
    static mode() {
        //  * The "mode" is the number that is repeated most often.
        let modes = [], count = [], i, maxIndex = 0;
 
        for (i = 0; i < ages.length; i += 1) {
            let age = ages[i];
            count[age] = (count[age] || 0) + 1;
            if (count[age] > maxIndex) {
                maxIndex = count[age];
            }
        }
    
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i), maxIndex);
                }
            }
    
        return modes;
    }
    static var() {
        let len = 0;
        let sum = 0;
        for(let i = 0; i < ages.length; i++)
        {
            if (ages[i] == ""){}
            else if (!Number(ages[i]))
            {
                alert(ages[i] + " is not number, Variance Calculation failed!");
                return 0;
            }
            else
            {
                len = len + 1;
                sum = sum + parseFloat(ages[i]);
            }
        }
        let v = 0;
        if (len > 1)
        {
            for(let i = 0; i < ages.length; i++)
            {
                if (ages[i] == ""){}
                else { v = v + (ages[i] - this.mean()) * (ages[i] - this.mean()); }
            }
            return v / len;
        }
        else { return 0; }
    }
    static std() {
        // * The "standard deviations" is defined as the square root of the variance.
        const std = Math.sqrt(this.var(ages));
        return std
    }
    static freqDist() {
        // * The "Frequency Distribution" should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
        const map = {};
        for(let i = 0; i < ages.length; i++){
            map[ages[i]] = (map[ages[i]] || 0) + 1;
        };
        return map;
    }
}
const statictics = new Statistics(ages);
console.log("Count: ", Statistics.count()); // 25
console.log("Sum: ", Statistics.sum()); // 744
console.log("Min: ", Statistics.min()); // 24
console.log("Max: ", Statistics.max()); // 38
console.log("Range: ", Statistics.range()); // 14
console.log("Mean: ", Statistics.mean()); // 30
console.log("Meadian: ", Statistics.median()); // 29
console.log("Mode: ", Statistics.mode()); // mode: 26, count: 5
console.log("Variance: ", Statistics.var()); // 17.5424 -> 17.5
console.log("Standard Deviation: ", Statistics.std()); // 4.188364836066696 -> 4.2
console.log("Frequency Distribution: ", Statistics.freqDist()); // {24: 2, 25: 1, 26: 5, 27: 4, 29: 1, 31: 2, 32: 3, 33: 2, 34: 2, 37: 2, 38: 1}





