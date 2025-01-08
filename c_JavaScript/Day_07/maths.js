//* ****************************************************
//* Working with Numbers in JavaScript
//* ****************************************************

//! Primitive vs Object Representation:
let num1 = 231; //* Primitive Number.
let num2 = new Number(231); //! Object created using `new` keyword. stored in heap

console.log(num2); //* Object representation of number.
console.log(typeof num2); //* "object"

//! Comparing Numbers:
let num3 = new Number(231);

console.log(num1 == num2); //* Compares after converting `num2` to primitive.
console.log(num2 == num3); //* Compares object references (different heap memory address).

//* ****************************************************
//* Number Methods
//* ****************************************************

let num = 231.68;

//! Rounding and Formatting:
console.log(num.toFixed(1));      //* Rounds to 1 decimal place: "231.7".
console.log(num.toPrecision(4));  //* Formats with 4 significant digits: "231.7".
console.log(num.toExponential(2)); //* Scientific notation with 2 decimals: "2.32e+2".
console.log(num.toString());      //* Converts to string: "231.68".
console.log(num.valueOf());       //* Returns the primitive value: 231.68.

//! Math.max()
// Returns the largest value.
console.log(Math.max(5, 18, 23, 11, 2));        //* Output -> 23
console.log(Math.max(5, 18, "23", 11, 2));      //* Output -> 23 (converts string)

//! Math.min()
// Returns the smallest value.
console.log(Math.min(5, 18, 23, 11, 2));        //* Output -> 2
console.log(Math.min(5, 18, "23", 11, 2));      //* Output -> 2 (converts string)

//! Math.pow(base, exponent)
// Returns `base` raised to the power of `exponent`.
console.log(Math.pow(2, 3));                    //* Output -> 8
console.log(Math.pow(3, 2));                    //* Output -> 9

//! Math.sqrt(number)
// Returns the square root of a number.
console.log(Math.sqrt(64));                     //* Output -> 8
console.log(Math.sqrt(81));                     //* Output -> 9

//* ****************************************************
//* Math Object
//* ****************************************************

console.log(Math.E);   //* Euler's number: ~2.71.
console.log(Math.LN10); //* Natural log of 10 (means log 10 base e).
console.log(Math.PI);  //* Pi value: ~3.14.

let num4 = 23.6;

//! Rounding Numbers:
console.log(Math.floor(num4)); //* Rounds down: 23.
console.log(Math.ceil(num4));  //* Rounds up: 24.

//! Math.round()
// Rounds to the nearest integer.
console.log(Math.round(4.5));                   //* Output -> 5
console.log(Math.round(4.4));                   //* Output -> 4
console.log(Math.round(-2.5));                  //* Output -> -2 (rounds towards zero)
console.log(Math.round(-2.6));                  //* Output -> -3

//! Math.trunc()
// Removes the decimal part (no rounding).
console.log(Math.trunc(4.8));                   //* Output -> 4
console.log(Math.trunc(-2.9));                  //* Output -> -2
console.log(Math.trunc("23.9"));                //* Output -> 23 (converts string)

//! Generating Random Numbers:
console.log(Math.random());           //* Random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random() * 10);      //* Between 0 and 9 (decimal).
console.log(Math.floor(Math.random() * 10));       //* Integer between 0 and 9.
console.log(Math.floor(Math.random() * 10) + 1);   //* Integer between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 11);  //* Integer between 11 and 20.

//! General Formula for Random Numbers:
//? Random integer between min and max (inclusive):
// Math.floor(Math.random() * (max - min + 1)) + min
//(max - min + 1) = means different types of number in a range 
// + min in last helps to shift the number forward
console.log(Math.floor(Math.random() * (40 - 30 + 1)) + 30); //* Random integer between 30 and 40.
