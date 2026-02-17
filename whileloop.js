/******** While Loop **********/
// While loop is used to execute a block of code repeatedly as long as a specified condition is true.
let count = 0;

while (count < 5) {
    console.log("Count: " + count);
    count++;
}

/******** While loop with an array *********/
let numbers = [1, 2, 3, 4, 5];
let index = 0;

while (index < numbers.length) {
    console.log("Number: " + numbers[index]);
    index++;
}

/******** While loop with a string *********/
let message = "Hello, World!";
let charIndex = 0;

while (charIndex < message.length) {
    console.log("Character: " + message[charIndex]);
    charIndex++;
}

/******** While loop with a break statement *********/
let i = 0;

while (i < 10) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("i: " + i);
    i++;
}

/******** While loop with a continue statement *********/
let j = 0;

while (j < 10) {
    j++;
    if (j % 2 === 0) {
        continue; // Skip the rest of the loop for even numbers
    }
    console.log("Odd number: " + j);
}

/******** While loop with nested loops *********/
let outer = 1;

while (outer <= 3) {
    console.log("Outer loop iteration: " + outer);
    let inner = 1;
    while (inner <= 2) {
        console.log("  Inner loop iteration: " + inner);
        inner++;
    }
    outer++;
}

/******** While loop with a function call *********/
function greet(name) {
    console.log("Hello, " + name + "!");
}

let names = ["Alice", "Bob", "Charlie"];
let nameIndex = 0;

while (nameIndex < names.length) {
    greet(names[nameIndex]);
    nameIndex++;
}

/******** While loop with a nested function call *********/
function outerFunction() {
    console.log("This is the outer function.");
    
    function innerFunction() {
        console.log("This is the inner function.");
    }
    
    let i = 0;
    while (i < 3) {
        console.log("Outer loop iteration: " + i);
        innerFunction();
        i++;
    }
}

outerFunction();

/********** Do While Loop **********/
// Do while loop is similar to while loop but guarantees that the block of code will be executed at least once.
let k = 0;

do {
    console.log("k: " + k);
    k++;
} while (k < 5);    
