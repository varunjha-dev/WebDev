//! Primitive Data Types:
//? Immutable (cannot be modified) and stored in the stack.

const num = 10;  //! Constant primitive value.
console.log(num); //* 10

// num = 20; //! Error: Cannot reassign a constant primitive value.

//! Non-Primitive Data Types:
//? Mutable (can be modified) and stored in the heap.

const obj = { id: 10, balance: 200 }; //! Reference stored in stack, object in heap.
obj.id = 11; //* Allowed: Modifying the object, not its address.
console.log(obj);

// obj = { id: 20 }; //! Error: Changing the reference (address) is not allowed.

let obj2 = { id: 20, money: 300 };
// obj = obj2; //! Error: Reassignment of a constant object.

//* ****************************************************
//* Strings in JavaScript
//* ****************************************************

//! What is a String?
// A string is a sequence of characters enclosed in quotes (' " `).
// Strings are immutable, meaning they cannot be changed once created.

//* ****************************************************
//* Creating Strings
//* ****************************************************

//! Using String Literals:
let singleQuote = 'hello world!';
let doubleQuote = "hello world!";
let backTick = `hello world!`; //* Template literal.

console.log(singleQuote, doubleQuote, backTick); //* Output -> hello world! hello world! hello world!

//? Using Template Literals:
let price = 80;
console.log(`Price of the tomato is ${price}`);

//! String Concatenation:
let s1 = "hello ";
let s2 = "coder army";
let s3 = s1 + s2; //* Concatenates strings.
console.log(s3);

//! String Length
// The `length` property gives the number of characters in a string.
console.log(s1.length); //* Length of a string.

const fullName = "Varun jha";
console.log(`Length: ${fullName.length}`); //* Output -> Length: 9

//! Printing Strings with Quotattion:
console.log('"hello coder army"');
console.log(`"hello coder army"`);
console.log("'hello coder army'");


//! Escape Characters:
let msg = "Rohit bhaiya bahut bade badmaash hain. \nWo bahut gande insaan hain"; //* \n for a new line.
console.log(msg);

let comment = "Rohit bhaiya bahut bade badmaash hain. \\nWo bahut gande insaan hain"; //* \ to escape characters , print next character as it is.
console.log(comment);

//* ****************************************************
//* Accessing Characters in a String
//* ****************************************************

//! charAt(index) and Square Brackets:
const firstChar = fullName.charAt(0); //* First character
const lastChar = fullName.charAt(fullName.length - 1); //* Last character
console.log(`First: ${firstChar}, Last: ${lastChar}`); //* Output -> First: S, Last: i

//! Using Square Brackets:
console.log(`First: ${fullName[0]}, Last: ${fullName[fullName.length - 1]}`); //* Same Output

//* ****************************************************
//* Changing Case
//* ****************************************************

//! toUpperCase() and toLowerCase():
const upper = fullName.toUpperCase(); //* Converts to UPPERCASE
const lower = fullName.toLowerCase(); //* Converts to lowercase
console.log(upper, lower); //* Output -> VARUN JHA varun jha

//* ****************************************************
//* Searching in String
//* ****************************************************

//! indexOf(substring):
// Finds the first occurrence of a substring (case-sensitive).
const airline = "ANA Airlines Japan";
console.log(airline.indexOf("Japan")); //* Output -> 13
console.log(airline.indexOf("i"));    //* Output -> 5
console.log(airline.indexOf("japan")); //* Output -> -1 (not found)

//! lastIndexOf(substring):
// Finds the last occurrence of a substring.
const message = "Good Morning! Good Afternoon!";
console.log(message.lastIndexOf("Good")); //* Output -> 14
console.log(message.lastIndexOf("r"));   //* Output -> 24

//! includes(substring):
// Checks if a substring exists in the string (returns true/false).
const plane = "Airbus A320neo";
console.log(plane.includes("Airbus")); //* Output -> true
console.log(plane.includes("Boeing")); //* Output -> false

//! Extracting Substrings:
//! 1. slice(start, end)
// Extracts part of a string (end not included, works with negative indices).
const text = "Good to see you";

console.log(text.slice(0, 4));  //* Output -> Good
console.log(text.slice(5));     //* Output -> to see you
console.log(text.slice(-3));    //* Output -> you
console.log(text.slice(1, -1)); //* Output -> ood to see yo

//! 2. substring(start, end)
// Similar to slice, but does NOT accept negative indices.
const msgs = "Good to see you!";
console.log(msgs.substring(8, 16)); //* Output -> see you!
console.log(msgs.substring(8));     //* Output -> see you!
// Starting index must before ending index in slice and substring both.

//! Replacing Contents:
let str10 = "hello ji kaise ho ji";
console.log(str10.replace("ji", "money"));      //* Replaces first occurrence.
console.log(str10.replaceAll("ji", "money")); //* Replaces all occurrences.

//! Replace(searchValue, replaceValue)
// Replaces the first occurrence of `searchValue` with `replaceValue`.
const currency = "288,97£";
const dollar = currency.replace("£", "$").replace(",", ".");
console.log(dollar); //* Output -> 288.97$

//! To replace all occurrences, use `replaceAll()` or a global regex.
const announcement = "Boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate")); //* Output -> Boarding gate 23. Boarding gate 23!
// OR using regex:
console.log(announcement.replace(/door/g, "gate"));   //* Same Output

//! Splitting Strings: split (delimiter)
// Splits a string into an array based on the `separator`.
let str11 = "Money! Honey! Sunny! Funny";
console.log(str11.split("!"));    //* Splits string into an array at "!".
console.log(str11.split("! "));   //* Includes space in split.

//! Trimming Strings: Removes Whitespace
// Removes whitespace from the beginning and end of a string.
let str12 = "     hello ji     ";
console.log(str12.trim());        //* Removes spaces at both ends.
console.log(str12.trimStart());   //* Removes leading spaces.
console.log(str12.trimEnd());     //* Removes trailing spaces.

//* ****************************************************
//* new String Creation method
//* ****************************************************

//! Using the `new` Keyword: String Constructor
let latestString = new String("Hello Coder Army");
console.log(latestString);       //* Object representation.
console.log(typeof latestString); //* "object"

let myName = new String("Varun jha");
console.log(myName); //* Output -> [String: 'Varun jha']
//? Note: Strings created with `new` are stored in the heap, not the stack.

