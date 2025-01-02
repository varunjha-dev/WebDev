//* *****************************************************
//* JavaScript Datatypes
//* *****************************************************

//? What are Datatypes?
//* Datatypes define the kind of values a variable can hold.

//! Note: A JavaScript variable can hold any type of data.

//? Two Categories of Data Types in JavaScript:
//* 1. Primitive Data Types
//* 2. Object Data Types


//! Primitive Data Types:
//? 1. Number:
//* For numbers (integer or floating-point).
//* Example: let age = 30; or let temp  = 98.6;

//? 2. String:
//* For text, wrapped in quotes (' ' or " ") or backticks (` ` for templates).
//* Example: let name = "varun"; let greeting = 'Hello';

//? 3. Boolean:
//* Represents a Logical values - true or false.
//* Example: let isLoggedIn = true;

//? 4. Undefined:
//* Represents A variable declared but not assigned a value.
//* Example: let sum; // Value is undefined

//? 5. Null:
//* Represents no value or an empty object.
//* Example: let user = null; // Explicitly empty

//? 6. Symbol (ES6):
//* Unique and immutable identifiers (ES6).
//* Example: let uniqueId = Symbol('id') or let id = Symbol('unique');

//? 7. BigInt (ES11):
//* For very large integers (ES11).
//* Example: let bigNumber = 12345678901234567890n; //n in the last, triggers to notify js to store big int.


//! Object Data Types (Complex and Mutable):
//* 1. Object: Stores key-value pairs.
//* 2. Array: A collection of values.
//* 3. Function: A block of code designed to perform a task.


//* Key Points:
// Primitive = Simple, immutable values.
// Object = Complex, mutable, and stores multiple values.

//* Examples:

//? Numbers
let age = 25;           // An integer
let price = 19.99;      // A floating-point number

//? String
let message = "Hi there!";               // A string enclosed in double quotes
let greeting = 'Good Morning';           // A string enclosed in single quotes

//? Booleans
let isLoggedOut = true;
let isLoggedIn = false;

//? Undefined
let result;             // result is undefined

//? Null
let user = null;        // user is explicitly set to null


//* Printing Value of variable:

console.log(age);           // Output -> 25
console.log(price);         // Output -> 19.99
console.log(message);       // Output -> Welcome to JavaScript!
console.log(greeting);      // Output -> Good Morning
console.log(isLoggedOut);   // Output -> true
console.log(isLoggedIn);    // Output -> false
console.log(result);        // Output -> undefined
console.log(user);          // Output -> null