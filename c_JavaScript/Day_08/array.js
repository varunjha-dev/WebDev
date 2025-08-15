//* ****************************************************
//* Arrays in JavaScript 
//* ****************************************************

//! What is an Array?
//* An array is a special data structure used to store multiple values in a single variable.

//* ****************************************************

//! Array Creation

const arr = [2, 3, 4, 1, 8, 9, "rohit", true];
console.log(arr); //* [2, 3, 4, 1, 8, 9, "rohit", true]

//* Using Array Literal (Recommended)
const fruits = ['Apple', 'Banana', 'Orange'];
const numbers = [10, 20, 30, 40, 50];

console.log(fruits);   //* [ 'Apple', 'Banana', 'Orange' ]
console.log(numbers);  //* [ 10, 20, 30, 40, 50 ]

//* Using Array Constructor (Less Preferred)
const names = new Array('Michael', 'John', 'David');
const numArray = new Array(10, 20, 30, 40, 50);

let ac = new Array(2, 3, 12321, 432);
console.log(ac); //* [2, 3, 12321, 432]

let acd = new Array(10); //* Creates an empty array of size 10
console.log(acd); //* [ <10 empty slots> ]

console.log(names);    //* [ 'Michael', 'John', 'David' ]
console.log(numArray); //* [ 10, 20, 30, 40, 50 ]

//* ****************************************************

//! Accessing Array Elements (Zero-Indexed)
console.log(fruits[0]);  //* Apple
console.log(fruits[1]);  //* Banana
console.log(fruits[2]);  //* Orange

console.log(numbers[3]);  //* 40
console.log(numbers[4]);  //* 50

//* ****************************************************

//! Using at() Method (latest, Supports Negative Indexing)
console.log(fruits.at(0));   //* Apple  (Same as fruits[0])
console.log(fruits.at(-1));  //* Orange (Last element)
console.log(fruits.at(-2));  //* Banana (Second-to-last element)

//* Equivalent:
console.log(fruits[fruits.length - 1]); //* Orange

//* ****************************************************

//! Array Length (Total Elements)
console.log(`Array length: ${fruits.length}`);  //* Output: 3
console.log(arr.length); //* 8 (Total elements)

//* ****************************************************

//! Accessing Last Element
console.log(`Last element: ${fruits[fruits.length - 1]}`);  //* Orange

//* ****************************************************

//! Modifying Array Elements
const friends = ['John', 'Jackson', 'David', 'Alex'];
friends[2] = 'Peter';  //* Change 'David' to 'Peter'

console.log(friends);  //* ["John", "Jackson", "Peter", "Alex"]

//* ****************************************************

//! Copying Arrays (Reference vs Deep Copy)
const newArr = arr; //* Both refer to the same memory address
console.log(newArr == arr); //* true

const newArr1 = structuredClone(arr); //* Creates a deep copy (New memory allocation)
console.log(newArr1 == arr); //* false

//* ****************************************************

//! Adding & Removing Elements


//* 1. push() - Adds elements at the end
// Syntax: array.push(element)

arr.push(30, 50);
console.log(arr);

//* 2. pop() - Removes the last element
// Syntax: array.pop()
arr.pop();
console.log(arr);

//* 3. unshift() - Adds elements at the start
// Syntax: array.unshift(element)
arr.unshift(100, 10);
console.log(arr);

//* 4. shift() - Removes the first element
// Syntax: array.shift()
arr.shift();
console.log(arr);

//! Deleting a Specific Index (Creates a hole means space will be reserved)
delete arr[0];  
console.log(arr); //* [ <empty>, 3, 4, 1, 8, 9, 'rohit', true]
console.log(arr[0]); //* undefined


//* ****************************************************

//!  Searching in Arrays
console.log(arr.indexOf(8));  //* Returns first index of element
console.log(arr.lastIndexOf(8));  //* Returns last index of element
console.log(arr.includes(1));  //* true (Checks if element exists)

//* ****************************************************

//! Extracting & Modifying Arrays

//* slice() (Extracts part of an array, doesn't modify original)
// Syntax: arrayName.slice(startIndex, endIndex);
console.log(arr.slice(2, 5)); //* Returns elements from index 2 to 4

//* What happen when we pass only one argument in slice() method?
// It will return all the elements from the starting index to the end of the array.

console.log(arr.slice(2));

//* splice() (Modifies original array, Returns an array of the removed elements)
console.log(arr);
console.log(arr.splice(2, 3)); //* Removes 3 elements starting from index 2
console.log(arr);

// Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex: The index at which to start removing elements.
// deleteCount: The number of elements to remove (starting from the startIndex).
// item1, item2, ... (optional): Elements to add to the array at the startIndex.

//* splice() (Replace elements)
arr.splice(2, 3, "money", 90); 
console.log(arr); //* Elements replaced

//* ****************************************************

//! Converting Arrays

console.log(arr.toString()); //* Converts array to string
console.log(typeof arr.toString()); //* "string"
console.log(arr.join(" ")); //* Joins all elements of an array into a string, separated by the specified separator. here it is space

//* ****************************************************

//! Merging Arrays

let arr1 = [2, 3, 5, 6, 11];
let arr2 = [5, 12, 19, 20];
let arr4 = [23, 432, 1123, 31];

let arr3 = arr1.concat(arr2, arr4);
console.log(arr3); //* Merged array

//* Push a whole array (Creates a nested array)
arr1.push(arr4);
console.log(arr1); //* [2, 3, 5, 6, 11, [23, 432, 1123, 31]]

//* ****************************************************

//! 2D & 3D Arrays

//* 2D Array
let arr2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.table(arr2D);
console.log(arr2D[0][0]); //* 1
console.log(arr2D[2][1]); //* 8

//! What is flat()?
// The flat() method removes nesting (flattens an array) up to a given depth level.
//* Syntax: array.flat(depth)
//* - depth (optional): Specifies how deep to flatten (default = 1).

//! Key Points:
// Removes one or more levels of nesting in an array.
// Default depth is 1 if not specified.
// Use Infinity to flatten completely.

//* Convert 2D to 1D
let flatArr = arr2D.flat();
console.log(flatArr); //* [1,2,3,4,5,6,7,8,9]

//* Convert 3D to 1D
let arr3D = [[1, 2, 3, [12, 14, 19]], [4, 5, 6], [7, 8, 9]];
console.log(arr3D.flat(Infinity)); //* Flattens all levels 3d/4d/5d...

//* ****************************************************

//! Checking & Creating Arrays

console.log(Array.isArray(arr)); //* true (Checks if a variable is an array)
