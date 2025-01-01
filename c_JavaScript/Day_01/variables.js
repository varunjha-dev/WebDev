//* *****************************************************
//* Variables in JavaScript
//* *****************************************************

//? What is a variable?
//* A variable acts as a container for storing values or data. 
//* Think of it as a labeled box where you can place a number, 


//? How to declare variables in JavaScript?
//* In JavaScript, variables are declared using the keywords: `let`, `const`, and `var`.
//* - `let`: Introduced in modern JavaScript, it allows you to declare variables with block scope.
//* - `const`: Similar to `let`, but the value assigned to a `const` variable cannot be changed.
//* - `var`: An older way of declaring variables with functional or global scope. 

//! Important Note:
//! Avoid using `var` due to its inconsistent scoping behavior.
//! Instead, prefer `let` or `const`.

//? What is a value?
//* A value is the smallest unit of information stored inside a variable.
//* It can be a number, a string (text), or other data types.

//* Examples of variable declaration and usage:

let message; //* Declaring a variable named 'message' using the 'let' keyword.
message = "Hello"; //* Assigning the value "Hello" to the variable 'message'.

//* Declaring and initializing variables in one step:
let user = "Varun";
let age = 21;
let greet = "Good Morning";

const PI = 3.14; //* Declaring a constant variable named 'PI'. Its value cannot be changed later.

//* Putting the values of variables to the console:
console.log(message); //* Output: Hello
console.log(user);    //* Output: varun
console.log(age);     //* Output: 21
console.log(greet);   //* Output: Good Morning
console.log(PI);      //* Output: 3.14

//* Guidelines for Naming Variables:
//? 1. Variable names should begin with a letter, an underscore `_`, or a dollar sign `$`.
//   Examples of valid names: `myAge`, `_userName`, `$salary`.
//? 2. The first character of a variable name cannot be a digit.
//? 3. Variable names are case-sensitive, meaning `myAge` and `myage` are treated as two distinct variables.
//? 4. Always choose meaningful and descriptive names for your variables to make your code easier to understand.
//? 5. Use the `const` keyword for variables whose values should remain constant throughout the program.

