
/************ If-Else Statements ***********/
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

/************ Else If Statements ***********/
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

/************ Nested If Statements ***********/
let num = 10;

if (num > 0) {
    console.log("The number is positive.");
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}       
