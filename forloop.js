/******* For loop *********/
// for loop is used to repeat a block of code a certain number of times
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

/******* For loop with an array *********/
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/******* For loop with a string *********/
let str = "Hello";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

/******* For loop with a step *********/
for (let i = 0; i < 10; i += 2) {
    console.log("Even number: " + i);
}

/******* For loop with a decrement *********/
for (let i = 5; i > 0; i--) {
    console.log("Countdown: " + i);
}   

/******* For loop with a break statement *********/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Number: " + i);
}

/******* For loop with a continue statement *********/
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip the rest of the loop for even numbers
    }
    console.log("Odd number: " + i);
}       

/******* For loop with nested loops *********/
for (let i = 1; i <= 3; i++) {
    console.log("Outer loop iteration: " + i);
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration: " + j);
    }
}

/******* For loop with an array of objects *********/
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].grade);
}

/******* For loop with a function call *********/
function greet(name) {
    console.log("Hello, " + name + "!");
}

let names = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < names.length; i++) {
    greet(names[i]);
}   

/******* For loop with a nested function call *********/
function outerFunction() {
    console.log("This is the outer function.");
    
    function innerFunction() {
        console.log("This is the inner function.");
    }
    
    for (let i = 0; i < 3; i++) {
        console.log("Outer loop iteration: " + i);
        innerFunction();
    }
}

outerFunction();    

/******* For loop with a labeled statement *********/
outerLoop: for (let i = 0; i < 3; i++) {
    console.log("Outer loop iteration: " + i);
    
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Exit the outer loop when i is 1 and j is 1
        }
        console.log("  Inner loop iteration: " + j);
    }
}   

/******* For loop with a for...of statement *********/
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log("Color: " + color);
}   

/******* For loop with a for...in statement *********/
console.log("For loop with a for...in statement");
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

/******* For loop with a forEach method *********/
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log("Number: " + number);
}); 

/******* For loop with a map method *********/
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});

console.log("Squared Numbers: " + squaredNumbers);  

/******* For loop with a filter method *********/
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers: " + evenNumbers);    

/******* For loop with a reduce method *********/
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Sum of Numbers: " + sum);  

/******* For loop with a for...of statement and destructuring *********/
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

for (let { name, age } of people) {
    console.log(name + ": " + age);
}

/******* For loop with a for...in statement and destructuring *********/
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

for (let key in car) {
    let value = car[key];
    console.log(key + ": " + value);
}

/******* For loop with a forEach method and arrow function *********/
numbers.forEach(number => {
    console.log("Number: " + number);
});

/******* For loop with a map method and arrow function *********/
let cubedNumbers = numbers.map(number => number * number * number);

console.log("Cubed Numbers: " + cubedNumbers);

/******* For loop with a filter method and arrow function *********/
let oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log("Odd Numbers: " + oddNumbers);

/******* For loop with a reduce method and arrow function *********/
let product = numbers.reduce((total, number) => total * number, 1);

console.log("Product of Numbers: " + product);  

/******* For loop with a for...of statement and template literals *********/
for (let color of colors) {
    console.log(`Color: ${color}`);
}   

/******* For loop with a for...in statement and template literals *********/
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

/******* For loop with a forEach method and template literals *********/
numbers.forEach(number => {
    console.log(`Number: ${number}`);
});

/******* For loop with a map method and template literals *********/
let squaredNumbersWithTemplate = numbers.map(number => `Squared: ${number * number}`);

console.log(squaredNumbersWithTemplate);

/******* For loop with a filter method and template literals *********/
let evenNumbersWithTemplate = numbers.filter(number => number % 2 === 0).map(number => `Even: ${number}`);

console.log(evenNumbersWithTemplate);

/******* For loop with a reduce method and template literals *********/
let sumWithTemplate = numbers.reduce((total, number) => total + number, 0);

console.log(`Sum of Numbers: ${sumWithTemplate}`);  

