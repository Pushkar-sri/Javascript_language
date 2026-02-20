
/*************** Object-Oriented Programming (OOP) ******************/
/*
 * 1. CLASS
 * Use case: Blueprint for creating objects with shared properties and methods. Common in OOP.
 * Advantages: Encapsulation, inheritance, and polymorphism.
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound.";
  }
}
const dog = new Animal("Dog");
console.log(dog.speak()); // Output: "Dog makes a sound."

/*
 * 2. INHERITANCE
 * Use case: Creating a new class that inherits properties and methods from an existing class. Promotes code reuse.
 * Advantages: Code reuse, hierarchical classification, and method overriding.
 */
class Dog extends Animal {
  speak() {
    return this.name + " barks.";
  }
}
const myDog = new Dog("Buddy");
console.log(myDog.speak()); // Output: "Buddy barks."

/*
 * 3. POLYMORPHISM
 * Use case: Ability of different classes to be treated as instances of the same class through inheritance. Allows for method overriding.
 * Advantages: Flexibility, code reuse, and dynamic method resolution.
 */
class Cat extends Animal {
  speak() {
    return this.name + " meows.";
  }
}
const myCat = new Cat("Whiskers");
console.log(myCat.speak()); // Output: "Whiskers meows."

/*
 * 4. ABSTRACTION
 * Use case: Hiding complex implementation details and showing only the necessary features of an object. Promotes simplicity.
 * Advantages: Simplifies code, reduces complexity, and enhances maintainability.
 */
class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    return "Area calculation not implemented.";
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const myCircle = new Circle(5);
console.log(myCircle.area()); // Output: Area of the circle with radius 5

/*
 * 5. ENCAPSULATION
 * Use case: Bundling data and methods that operate on that data within a single unit (object). Common in OOP.
 * Advantages: Data hiding, modularity, maintainability, and abstraction.
 */
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.getInfo = function() {
    return this.make + " " + this.model;
  };
}
const car1 = new Car("Toyota", "Corolla");
console.log(car1.getInfo()); // Output: "Toyota Corolla"

/*
 * 6. INTERFACES (Using Abstract Classes)
 * Use case: Define a contract for classes to implement specific methods. Promotes consistency and design patterns.
 * Advantages: Ensures certain methods are implemented, promotes code consistency, and supports polymorphism.
 */
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}
class Motorcycle extends Vehicle {
  start() {
    return this.name + " starts with a kick.";
  }
}
const myMotorcycle = new Motorcycle("Harley");
console.log(myMotorcycle.start()); // Output: "Harley starts with a kick."

/****** Types of objects in JavaScript ***** */
/*
 * 1. Object Literals: Simple key-value pairs.
 * 2. Arrays: Ordered collections of values.
 * 3. Functions: First-class objects that can be called and passed around.
 * 4. Classes: Blueprints for creating objects with shared properties and methods.
 * 5. Prototypes: Objects from which other objects inherit properties and methods.
 * 6. Built-in Objects: Predefined objects like Date, Math, etc.
 * 7. Custom Objects: User-defined objects created using constructors or classes.
 */ 

/******** async & await *********/
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();

/******** Promises *********/
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
fetchDataWithPromise()
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

/******** Callbacks *********/
function fetchDataWithCallback(callback) {
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}
fetchDataWithCallback((error, data) => {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log(data);
  }
});
