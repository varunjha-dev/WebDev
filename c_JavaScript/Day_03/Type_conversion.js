//* ****************************************************
//* Type Conversion in JavaScript
//* ****************************************************

//! What is Type Conversion?
//? It refers to changing the data type of a value. This can happen:
//? - **Implicitly**: JavaScript does it automatically.
//? - **Explicitly**: You manually convert it using built-in functions.

//! Explicit Conversion

//* ****************************************************
//* 1. Convert String to Number
let str = "100";                   //* A numeric string
console.log(typeof str);           //* Output: string

let strToNum = Number(str);        //* Convert to number
console.log(typeof strToNum);      //* Output: number

//? Example: Invalid numeric string
let invalidStr = "100xs";
let invalidNum = Number(invalidStr);
console.log(invalidNum);           //* Output: NaN (Not a Number)
// console.log( typeof invalidNum);  

//* ****************************************************
//* 2.  Convert Boolean to Number
let isLoggedIn = true;             //* Boolean value
console.log(typeof isLoggedIn);    //* Output: boolean

let boolToNum = Number(isLoggedIn);//* Convert to number
console.log(boolToNum);            //* Output: 1

//* ****************************************************
//* 3. Convert Null to Number
let nullValue = null;              //* Null type
console.log(typeof nullValue);     //* Output: object

let nullToNum = Number(nullValue); //* Convert to number
console.log(nullToNum);            //* Output: 0

//* ****************************************************
//* 4. Convert Undefined to Number
let undefinedValue;                //* Undefined type
console.log(typeof undefinedValue);//* Output: undefined

let undefinedToNum = Number(undefinedValue);
console.log(undefinedToNum);       //* Output: NaN

//* ****************************************************
//* 5. Convert Number to String
let num = 100;                     //* A number
console.log(typeof num);           //* Output: number

let numToStr = String(num);        //* Convert to string
console.log(typeof numToStr);      //* Output: string

//* ****************************************************
//* 6. Convert Boolean to string
let ax = true;
console.log(String(ax));            //* Output: "true"

//* ****************************************************
//* 7. Convert String to Boolean
let emptyStr = "";                 //* Empty string
console.log(Boolean(emptyStr));    //* Output: false

let nonEmptyStr = "Rohit";         //* Non-empty string
console.log(Boolean(nonEmptyStr)); //* Output: true

//* ****************************************************
//* 8. Convert Number to Boolean
let isSignedIn = 1;                //* A number
console.log(typeof isSignedIn);    //* Output: number

let numToBool = Boolean(isSignedIn);
console.log(numToBool);            //* Output: true

//* ****************************************************
//* Key Points:
//? - Implicit conversion happens automatically.
//? - Explicit conversion uses functions like:
//?   - `String()` to convert to string
//?   - `Number()` to convert to number
//?   - `Boolean()` to convert to boolean
//? - `NaN` stands for "Not a Number" and occurs when conversion fails.
