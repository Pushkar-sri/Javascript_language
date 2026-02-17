/*********** Arrays (Simple Explanation) ***********/
// Think of an array as a numbered list of values. Each item has a position
// starting from 0. Arrays can hold numbers, text, objects, or even other arrays.
//
// What you commonly do with arrays:
// - Create: make a list, e.g. [1, 2, 3] or ['a', 'b', 'c']
// - Read: get an item by its position, e.g. arr[0] is the first item
// - Change: replace an item, add or remove items
// - Loop: run the same action for every item (for, forEach, map)
// - Cut or copy parts: use `slice` to copy part of a list without changing the original
//   and `splice` to remove or add items and change the original list.
// - Combine and spread: use `...` to copy or merge lists easily.
//
// Simple examples:
// - Creation: let a = [1, 2, 3]
// - Access: a[0] // first item
// - Copy part: a.slice(1,3) // returns a new small list
// - Remove/insert: a.splice(1, 2) // changes the original list
//
// Why arrays matter for beginners and QA engineers:
// - Test data: keep many test inputs in one array and loop over them to run tests.
// - Fixtures: store example API responses or UI data as arrays of objects.
// - Test matrices: use arrays of arrays to combine browsers, OS, and versions.
// - DOM lists: convert element lists (NodeList) to arrays to use handy methods like map/filter.
//
// Helpful habits for testing:
// - Don’t change the original test data. Make a copy before modifying: `const copy = [...arr]`.
// - Use `slice` or spread `[...]` to avoid accidental changes.
// - Use `Object.freeze()` when you want to make test data read-only.
// - When comparing results, be explicit about whether order matters. If not, sort both lists first.
// - For binary or performance tests, use typed arrays like `Uint8Array`.

/******* Creating an array *******/
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

/******* Accessing array elements *******/
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"

/******* Modifying array elements *******/
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

/******* Adding elements to an array *******/
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

/******* Removing elements from an array *******/
fruits.pop();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

/******* Array length *******/
console.log(fruits.length); // Output: 3

/******* Iterating over an array *******/
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/******* Array methods *******/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.join(", ")); // Output: "1, 2, 3, 4, 5"
console.log(numbers.reverse()); // Output: [5, 4, 3, 2, 1]
console.log(numbers.sort()); // Output: [1, 2, 3, 4, 5]

/******* Multidimensional arrays *******/
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][1]); // Output: 5
console.log(matrix[2][2]); //
 Output: 9 

/******* Array of objects *******/
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 }
];
console.log(students[0].name); // Output: "Alice"
console.log(students[1].grade); // Output: 92
console.log(students[2].name); // Output: "Charlie"

/******* Array destructuring *******/
let [first, second, third] = fruits;
console.log(first); // Output: "Apple"
console.log(second); // Output: "Blueberry"
console.log(third); // Output: "Cherry"

/******* Spread operator with arrays *******/
let moreFruits = ["Elderberry", "Fig", "Grape"];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // Output: ["Apple", "Blueberry", "Cherry", "Elderberry", "Fig", "Grape"]

/******* Array slicing *******/

let slicedFruits = allFruits.slice(1, 4);
console.log(slicedFruits); // Output: ["Blueberry", "Cherry", "Elderberry"]
/******* Demonstration: slice (non-mutating) vs splice (mutating) *******/
// `slice` returns a new array and does NOT change the original
let sample = [1, 2, 3, 4];
let sampleSlice = sample.slice(1, 3);
console.log("slice returned:", sampleSlice);         // [2, 3]
console.log("original after slice:", sample);        // [1, 2, 3, 4]

// `splice` changes the original array and returns removed elements
let sample2 = [1, 2, 3, 4];
let removed = sample2.splice(1, 2, 9);
console.log("splice removed:", removed);             // [2, 3]
console.log("original after splice:", sample2);      // [1, 9, 4]

/******* Array concatenation *******/
let combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits); // Output: ["Apple", "Blueberry", "Cherry", "Elderberry", "Fig", "Grape"]

/******* Array indexOf *******/
console.log(fruits.indexOf("Cherry")); // Output: 2
console.log(fruits.indexOf("Date")); // Output: -1 (not found)

/******* Array includes *******/
console.log(fruits.includes("Banana")); // Output: false
console.log(fruits.includes("Blueberry")); // Output: true

/******* Array map *******/
let numbersSquared = numbers.map(num => num * num);
console.log(numbersSquared); // Output: [1, 4, 9, 16, 25]

/******* Array filter *******/
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/******* Array reduce *******/
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

/******* Array forEach *******/
numbers.forEach(num => console.log("Number: " + num));
 
/******* QA Automation Examples (for QA Automation Engineers) *******/
// These examples demonstrate common array patterns useful for test automation.

// 1) Parameterized tests (data-driven testing)
// Simple runner example (framework-agnostic):
const testCases = [
    { name: "adds positive numbers", input: [1, 2], expected: 3 },
    { name: "adds negatives", input: [-1, -2], expected: -3 },
    { name: "adds mixed", input: [5, -2], expected: 3 }
];

testCases.forEach(tc => {
    const result = tc.input[0] + tc.input[1];
    console.log(`${tc.name}:`, result === tc.expected ? "PASS" : "FAIL");
});

// Jest example (commented):
/*
test.each(testCases)('%s', (tc) => {
    expect(tc.input[0] + tc.input[1]).toBe(tc.expected);
});
*/

// 2) Shuffle (Fisher–Yates) — reveal order-dependent flakiness
function shuffle(array) {
    const a = [...array]; // keep original safe
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
console.log('shuffled sample:', shuffle([1,2,3,4,5]));

// 3) Chunking — batching large datasets for pagination or bulk requests
function chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}
console.log('chunks:', chunk([1,2,3,4,5,6,7], 3));

// 4) NodeList -> Array (DOM example; run in browser). Use Array.from or spread.
// const elems = document.querySelectorAll('.item');
// const elementsArray = Array.from(elems);

// 5) Typed arrays (binary / protocol / performance testing)
const buf = new Uint8Array([0, 255, 128, 64]);
console.log('typed array byte length:', buf.byteLength, 'values:', Array.from(buf));

// 6) Immutability: avoid mutating shared fixtures in tests
const fixture = ["a", "b", "c"];
const mutated = fixture.slice(); // or [...fixture]
mutated.push('d');
console.log('fixture original:', fixture, 'mutated copy:', mutated);

// If you want to enforce immutability:
const frozen = Object.freeze([...fixture]);
// frozen.push('x'); // throws in strict mode or silently fails

// 7) Comparing arrays in tests (order-sensitive vs order-insensitive)
function arraysEqual(a, b) {
    return a.length === b.length && a.every((v, i) => v === b[i]);
}
console.log('arraysEqual:', arraysEqual([1,2,3], [1,2,3]));

// For unordered comparisons:
function arraysEqualUnordered(a, b) {
    if (a.length !== b.length) return false;
    const sa = [...a].sort();
    const sb = [...b].sort();
    return arraysEqual(sa, sb);
}
console.log('unordered equal:', arraysEqualUnordered([3,1,2], [1,2,3]));

// 8) Example: chunk + batch request simulation (pseudo)
function simulateBatches(items, batchSize) {
    const batches = chunk(items, batchSize);
    batches.forEach((batch, idx) => {
        console.log(`sending batch ${idx + 1}/${batches.length}:`, batch);
        // simulate sending batch
    });
}
simulateBatches(Array.from({length:10}, (_,i) => i+1), 4);

// 9) Edge case tests to include in QA suites
// - Empty array: []
// - Single element: [x]
// - Large arrays: e.g., new Array(1000000).fill(0)
// - Sparse arrays: const s=[]; s[100]=1;

// Notes for QA automation engineers:
// - Prefer non-mutating helpers in shared fixtures; clone data before mutating.
// - Use typed arrays for binary/protocol testing.
// - Convert DOM NodeList to arrays before using map/filter.
// - Use deterministic sorting when comparing unordered results in assertions.
