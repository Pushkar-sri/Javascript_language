/********** JavaScript Function Types and Use Cases **********/

/*
 * 1. FUNCTION DECLARATION
 * Use case: Define reusable functions that are hoisted. Best for regular functions that are called multiple times.
 * Advantages: Hoisted (can be called before declaration), readable, traditional approach.
 */
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: "Hello, Alice!"


/*
 * 2. FUNCTION EXPRESSION
 * Use case: Assign functions to variables. Used when you need flexibility, closures, or conditional function creation.
 * Advantages: Not hoisted, can be stored in variables, can be passed as arguments.
 */
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // Output: 8


/*
 * 3. NAMED FUNCTION EXPRESSION
 * Use case: Like function expression but with a name. Useful for recursive functions or debugging (better stack traces).
 * Advantages: Has a name for debugging, can call itself recursively, not hoisted.
 */
const factorial = function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // Output: 120


/*
 * 4. ARROW FUNCTION
 * Use case: Shorter syntax for simple functions. Best for callbacks, array methods, and when you don't need 'this' binding.
 * Advantages: Concise syntax, lexically binds 'this', great for functional programming.
 */
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // Output: 12

// Arrow function with multiple statements
const subtract = (a, b) => {
  const result = a - b;
  return result;
};
console.log(subtract(10, 4)); // Output: 6


/*
 * 5. ANONYMOUS FUNCTION
 * Use case: Functions without a name. Used as callbacks, in event listeners, or setTimeout/setInterval.
 * Advantages: Useful for one-time use, reduces namespace pollution, common in modern JavaScript.
 */
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

[1, 2, 3].forEach(function(num) {
  console.log("Number: " + num);
});


/*
 * 6. IIFE (Immediately Invoked Function Expression)
 * Use case: Execute code immediately without polluting global scope. Creates private variables/closures.
 * Advantages: Isolates variables, creates private scope, useful for module patterns.
 */
(function() {
  const privateVar = "I'm private!";
  console.log(privateVar);
})();
// privateVar is not accessible here


/*
 * 7. CONSTRUCTOR FUNCTION
 * Use case: Create objects with shared properties and methods. Used before ES6 classes.
 * Advantages: Creates multiple instances with the same structure, uses 'this' and 'new' keyword.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return "Hi, I'm " + this.name;
  };
}
const person1 = new Person("Bob", 30);
console.log(person1.greet()); // Output: "Hi, I'm Bob"


/*
 * 8. CALLBACK FUNCTION
 * Use case: Pass functions as arguments to other functions. Common in event handling, timers, array methods.
 * Advantages: Enables asynchronous operations, functional programming patterns.
 */
function processData(data, callback) {
  console.log("Processing: " + data);
  callback();
}
processData("Important data", function() {
  console.log("Processing complete!");
});


/*
 * 9. HIGHER-ORDER FUNCTION
 * Use case: Functions that take or return other functions. Used in functional programming, decorators, and abstraction.
 * Advantages: Enables composition, reusability, abstraction of logic.
 */
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


/*
 * 10. CLOSURE
 * Use case: Function that "remembers" variables from its outer scope. Creates data privacy and state management.
 * Advantages: Encapsulation, data privacy, maintains state between calls.
 */
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2


/*
 * 11. ASYNC FUNCTION
 * Use case: Asynchronous operations like API calls, file reading. Returns a Promise.
 * Advantages: Cleaner syntax than Promises, uses 'await' keyword, better error handling with try/catch.
 */
async function fetchData() {
  try {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    console.log("Fetching data...");
  } catch (error) {
    console.log("Error: " + error);
  }
}
// fetchData();


/*
 * 12. GENERATOR FUNCTION
 * Use case: Functions that can pause and resume execution. Used for iterators, lazy evaluation, state machines.
 * Advantages: Memory efficient, can yield multiple values, pauseable execution.
 */
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2


/*
 * 13. REST PARAMETERS
 * Use case: Accept variable number of arguments. Replaces the old 'arguments' object.
 * Advantages: More readable, works with arrow functions, easier to handle multiple parameters.
 */
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


/*
 * 14. DEFAULT PARAMETERS
 * Use case: Set default values for parameters. Used when parameters might be undefined.
 * Advantages: Cleaner code, no need for manual checks, improves readability.
 */
function greetUser(name = "Guest", greeting = "Hello") {
  return greeting + ", " + name + "!";
}
console.log(greetUser()); // Output: "Hello, Guest!"
console.log(greetUser("Charlie", "Hi")); // Output: "Hi, Charlie!"


/*
 * 15. PURE FUNCTION
 * Use case: Functions with no side effects that return same output for same input. Essential for functional programming.
 * Advantages: Predictable, testable, easier to debug, no unexpected side effects.
 */
// Pure function
const square = (num) => num * num;
console.log(square(5)); // Always outputs 25

// Not a pure function (modifies external state)
let globalVar = 10;
function impureAdd(x) {
  globalVar += x; // Side effect: modifies global state
  return globalVar;
}
