//Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//ANS : I am John Doe from Vancouver, Canada, Latitude 49.2827, Longitute -123.1207

//Exercise 2: Display Student Info
function displayStudentInfo({ first, last }){
    return (`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }
const persons = Object.keys(users);
console.log(persons);

for (const person of persons) {
    users[person] *= 2;
}

console.log(users);

//Exercise 4 : Person Class
class Person {
    constructor(name) {
      this.name = name;
    }
}
  
const member = new Person('John');
console.log(typeof member);//object

//Exercise 5 : Dog Class
class Dog {
    constructor(name) {
      this.name = name;
    }
};

  // 1
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

    // 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };

    // 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };
//NONE OF THE CODE ABOVE

//Exercise 6 : Challenges
[2] === [2] //TRUE
{} === {} //UNDEFINED

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5 - const object4 = { number: 5};

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
        let farmerCow = [name = "Lily", type = "Fish", color = "blue", sound = "pop"];
      }
    sound(sound) {
      return this.name + this.type + this.color + this.present();
    }
}

