// ✅ FOR...OF LOOP (Iterate Over Iterable Values)
// - Works with arrays, strings, maps, and sets
// - ❌ NOT for objects (throws an error)

// ✅ Example with Arrays:
const arr = [10, 20, 11, 18, 13];
for (const value of arr) {
    console.log(value);  // ✅ Outputs array values
}
// ✅ Example with Strings:
let str = "Rohit is Good Boy";
for (const char of str) {
    console.log(char);  // ✅ Outputs each character
}

// ❌ FOR...OF DOESN’T WORK ON OBJECTS (Objects Are Not Iterable)
const user = { name: "Chhavi", age: 22, gender: "female" };

// for (const value of user) { //! ❌ TypeError: user is not iterable
//     console.log(value);
// }

// ✅ HOW TO ITERATE OVER AN OBJECT
for (let value of Object.keys(user)) { // Object.values(user) gives arrays of values of obj
    console.log(value, user[value]);  // ✅ Outputs: name Chhavi age 22 gender female
}

// ✅ FOREACH() (Loop Over Arrays Without Creating a New One)
// - Executes a callback function for each element (No return value)

const arr2 = [10, 20, 30, 40, 50];
arr2.forEach((num, index) => console.log(num, index));

// ✅ Modify Original Array
arr2.forEach((num, index, a) => { // (number, index, array)
    a[index] = num * 2;
});
console.log(arr2);  // ✅ Array modified in-place

// ✅ Using Named Function
function greet(num) {
    console.log(num);
}
arr2.forEach(greet);

//! forEach() Does Not Return a New Array

//* It only modifies the original array.
// *If you need a new array, use .map().

//* ✅ FILTER() (Creates a New Array with Elements That Match / Pass a Condition)
// - Returns elements where the callback returns true

// ✅ Example: Keep Even Numbers
const numbers = [10, 22, 33, 41, 50];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);  // ✅ [10, 22, 50]

// ✅ Example: Filter Students with Marks > 50
const students = [
    { name: "Rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 20, marks: 90 }
];

// Using destructuring
const passedStudents = students.filter(({ marks }) => marks > 50); // { marks } destructure
console.log(passedStudents);

//* ✅ MAP() (Transforms Each Element in an Array)
// - Returns a new array with modified values, It does NOT modify the original array.

// ✅ Example: Square Each Element
const arr3 = [1, 2, 4, 5,6];
const squared = arr3.map((num) => num * num);
console.log(squared);  // ✅ [1, 4, 16, 25]

// ✅ Filter + Map (Chain Methods)
// Get squares of even numbers
const evenSquares = arr3.filter((num) => num % 2 === 0).map((num) => num * num);
console.log(evenSquares);  // ✅ [4, 16]
