//* ****************************************************
//* Operators In JavaScript
//* ****************************************************


//! Arithmetic Operators:
//? Perform basic math operations.
let num1 = 5, num2 = 3;

console.log(num1 + num2);  //* Addition -> 8
console.log(num1 - num2);  //* Subtraction -> 2
console.log(num1 * num2);  //* Multiplication -> 15
console.log(num1 / num2);  //* Division -> 1.67
console.log(num1 % num2);  //* Modulus -> 2 (Remainder)
console.log(num1 ** num2); //* Exponentiation -> 125 (5^3)


//! Assignment Operators:
//? Assign values to variables.
let value = 10;
value += 5;  //* Add and assign -> 15
value -= 3;  //* Subtract and assign -> 12
value *= 2;  //* Multiply and assign -> 24
value /= 4;  //* Divide and assign -> 6
value %= 5;  //* Modulus and assign -> 1
console.log(value);


//! Unary Operators:
//? Perform operations on a single operand.
let str = "5";
console.log(+str);         //* Unary Plus -> Converts to number (5)
console.log(-num1);        //* Unary Minus -> Negates value (-5)

//? Increment (++) & Decrement (--):
let x = 3, y = x++;        //* Postfix: Use, then increment
console.log(x, y);         //* Output -> 4, 3

let a = 3, b = ++a;        //* Prefix: Increment, then use
console.log(a, b);         //* Output -> 4, 4


//! ++(++x); SyntaxError : Invalid left-hand side expression in prefix operation.


//! String Concatenation:
let greeting = "Hello ", name = "Rohit";
console.log(greeting + name);  //* "Hello Rohit"

//? Tricky cases:
console.log("1" + 2);       //* "12" -> (First operand is string, hence all are considered as strings and concatenated.)
console.log(1 + "2");       //* "12"
console.log("1" + 2 + 3);   //* "123"

console.log(1 + 2 + "3");   //* output => "33" -> 33 (First : 1 + 2 => 3, Then : 3 + "3" => 33)
//* If the last operand is a string, then all the operations before the string are performed and concatenated.

//* Typeof Operator In JavaScript

//* What is typeof ?
//? The typeof operator in JavaScript is used to determine the type of a given value. It helps us identify whether a value is a string, number, boolean, object, function, etc.

//! Type Conversion with typeof:
//? The `typeof` operator determines a value's type.
console.log(typeof 30);         //* "number"
console.log(typeof "Hello");    //* "string"
console.log(typeof true);       //* "boolean"
console.log(typeof undefined);  //* "undefined"
console.log(typeof null);       //* "object" (known bug)
console.log(typeof Symbol());   //* "symbol"

//! Key Notes:
//? `typeof null` -> "object" (legacy issue in JavaScript).
//? `typeof` is useful for debugging and type checks.

//! Summary:
//? Arithmetic: Perform calculations.
//? Assignment: Modify variable values.
//? Unary: Operate on single values.
//? Typeof: Identify variable data types.