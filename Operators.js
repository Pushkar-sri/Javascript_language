/********** Arithmetic Operators **********/
console.log("********* Arithmetic Operators **********");
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0

/********** Assignment Operators **********/
console.log("********* Assignment Operators **********");
let c = 20;

c += 5; // Equivalent to c = c + 5
console.log(c); // Output: 25

c -= 10; // Equivalent to c = c - 10
console.log(c); // Output: 15

c *= 2; // Equivalent to c = c * 2
console.log(c); // Output: 30

c /= 3; // Equivalent to c = c / 3
console.log(c); // Output: 10

c %= 4; // Equivalent to c = c % 4
console.log(c); // Output: 2

/********** Comparison Operators **********/
console.log("********* Comparison Operators **********");
let x = 10;
let y = 20;

console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y); // Greater than: false
console.log(x < y); // Less than: true
console.log(x >= y); // Greater than or equal to: false
console.log(x <= y); // Less than or equal to: true

/********** Logical Operators **********/
console.log("********* Logical Operators **********");
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // Logical AND: false
console.log(isAdult || hasID); // Logical OR: true
console.log(!isAdult); // Logical NOT: false    

/********** Increment and Decrement Operators **********/
console.log("********* Increment and Decrement Operators **********");
let count = 0;

count++; // Increment: count is now 1
console.log(count); // Output: 1

count--; // Decrement: count is now 0
console.log(count); // Output: 0       

/********** Ternary Operator **********/
console.log("********* Ternary Operator **********");
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes    

/********** Typeof Operator **********/
console.log("********* Typeof Operator **********");
console.log(typeof a); // Output: number
console.log(typeof isAdult); // Output: boolean
console.log(typeof greeting); // Output: string

/********** instanceof Operator **********/
console.log("********* instanceof Operator **********");
let arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true 

/********** Bitwise Operators **********/
console.log("********* Bitwise Operators **********");
let num1 = 5; // In binary: 0101
let num2 = 3; // In binary: 0011

console.log(num1 & num2); // Bitwise AND: 1 (0001)
console.log(num1 | num2); // Bitwise OR: 7 (0111)
console.log(num1 ^ num2); // Bitwise XOR: 6 (0110)
console.log(~num1); // Bitwise NOT: -6 (inverts bits)
console.log(num1 << 1); // Left shift: 10 (1010)
console.log(num1 >> 1); // Right shift: 2 (0010)

/********** Delete Operator **********/   
console.log("********* Delete Operator **********");      
let obj = { name: "Alice", age: 30 };
delete obj.age; // Deletes the age property from the object
console.log(obj); // Output: { name: "Alice" }

/********** Void Operator **********/
console.log("********* Void Operator **********");
function myFunction() {
    console.log("This function does not return anything.");
}
console.log(void myFunction()); // Output: undefined

/********** Type Conversion Operators **********/
console.log("********* Type Conversion Operators **********");
let num = "123";
let convertedNum = Number(num);
console.log(convertedNum); // Output: 123

let str = 456;
let convertedStr = String(str);
console.log(convertedStr); // Output: "456"

let bool = 0;
let convertedBool = Boolean(bool);
console.log(convertedBool); // Output: false    

/********** Spread Operator **********/
console.log("********* Spread Operator **********");
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

let obj1 = { name: "Alice", age: 30 };
let obj2 = { ...obj1, city: "New York" };
console.log(obj2); // Output: { name: "Alice", age: 30, city: "New York" }  

/********** Rest Operator **********/
console.log("********* Rest Operator **********");
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6 

/********** Nullish Coalescing Operator **********/
let value = null;
let defaultValue = "Default";
let result = value ?? defaultValue;
console.log(result); // Output: Default

/********** Optional Chaining Operator **********/
console.log("********* Optional Chaining Operator **********");
let user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};
console.log(user?.address?.city); // Output: New York
console.log(user?.contact?.email); // Output: undefined
