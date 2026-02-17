/********* Comments *********/ 

// This is a single-line comment

/*
 This is a multi-line comment
 It can span multiple lines
*/

/********* Variables *********/

// Declaring a variable using var
var name = "Alice";

// Declaring a variable using let
let age = 30;

// Declaring a constant using const
const PI = 3.14;

// Variables can be reassigned (except for constants)
name = "Bob";
age = 25;

// Constants cannot be reassigned
// PI = 3.14159; // This will cause an error

// Variables can hold different types of data
let isStudent = true; // Boolean
let score = 95.5; // Number
let greeting = "Hello"; // String

// Variable names are case-sensitive
let myVariable = "This is a variable";
let MyVariable = "This is a different variable";

console.log(name); // Output: Bob
console.log(age); // Output: 25
console.log(PI); // Output: 3.14
console.log(isStudent); // Output: true
console.log(score); // Output: 95.5
console.log(greeting); // Output: Hello
console.log(myVariable); // Output: This is a variable
console.log(MyVariable); // Output: This is a different variable 

/********* Variable Scope *********/

// Global scope
var globalVar = "I am a global variable";

function myFunction() {
    // Local scope
    let localVar = "I am a local variable";
    console.log(globalVar); // Output: I am a global variable
    console.log(localVar); // Output: I am a local variable
}

myFunction();
// console.log(localVar); // This will cause an error because localVar is not defined in the global scope

/********* Variable Hoisting *********/

console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = "I am hoisted";

// console.log(notHoistedVar); // This will cause an error because let and const are not hoisted
let notHoistedVar = "I am not hoisted"; 

/********* Variable Shadowing *********/

let shadowedVar = "I am the outer variable";

function shadowingFunction() {
    let shadowedVar = "I am the inner variable";
    console.log(shadowedVar); // Output: I am the inner variable
}

shadowingFunction();
console.log(shadowedVar); // Output: I am the outer variable    

/********* Variable Naming Conventions *********/

// Camel case (common convention in JavaScript)
let myVariableName = "This is a variable";

// Snake case
let my_variable_name = "This is also a variable";

// Pascal case (often used for classes)
class MyClass {
    constructor() {
        this.property = "This is a property";
    }
}

// Avoid using reserved keywords as variable names
// let class = "This will cause an error"; // 'class' is a reserved keyword