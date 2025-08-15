//* ****************************************************
//* Stack and Heap Memory in JavaScript
//* ****************************************************

//! 1. Stack Memory:
//? A structured, fixed-size memory area used for storing:
//? - Primitive data types (numbers, strings, booleans, undefined, null).
//? - Function calls (execution contexts).
//? Operates in a Last In, First Out (LIFO) manner.

//* Example:
function add(a, b) {
    let sum = a + b;    //! `a`, `b`, and `sum` are in the stack.
    return sum;
}

let result = add(5, 10); //! `result` is stored in the stack.
console.log(result);     //* Output: 15

//? How it works:
// 1. Function call -> Execution context is pushed onto the stack.
// 2. Local variables (a, b, sum) -> Stored in the stack.
// 3. Return value -> Once the function completes, execution context is removed.

//! 2. Heap Memory:
//? A large, unstructured memory area used for storing:
//? - Objects, arrays, and other non-primitive data types.
//? Memory is dynamically allocated and does not follow LIFO.

//* Example:
let person = { name: "Alice", age: 25 }; //! Stored in the heap.
let hobbies = ["Reading", "Traveling"];  //! Stored in the heap.

console.log(person.name); //* "Alice"
console.log(hobbies[1]);  //* "Traveling"

//? How it works:
// 1. Non-primitive values -> Stored in the heap.
// 2. References (pointers) -> Stored in the stack, pointing to the data in the heap.

//! ****************************************************
//! Memory Management in JS:
//* How JS stores data based on type.

//? Primitive Values (Stack):
// Stored directly in the stack. Immutable (cannot be changed).

let age = 25;        //! Stored in the stack.
let name = "Alice";  //! Stored in the stack.

let x = 10;          //! Primitive, stored in the stack.
let y = x;           //* `y` gets a copy of `x`.
y = 20;

console.log(x);      //* 10 (unchanged)
console.log(y);      //* 20

//? Primitive values are **call by value**. hence Changing `y` doesn’t affect `x`.


//? Non-Primitive Values (Heap):
// Stored in the heap, references stored in the stack. Mutable (can be changed).

let user = { name: "Bob", age: 30 }; //! Object in heap, reference in stack.
let numbers = [1, 2, 3];            //! Array in heap, reference in stack.

let obj1 = { name: "Alice" }; //! Reference in stack, object in heap.
let obj2 = obj1;              //* Copies the reference (not the object).

obj2.name = "Bob";            //! Updates the object.

console.log(obj1.name); //* "Bob"
console.log(obj2.name); //* "Bob"

//? Non-primitive values are **call by reference**.hence Both `obj1` and `obj2` point to the same object in the heap.

//! ****************************************************
//! Key Differences:

//? Primitive Values:
//* Immutable.
//* Stored directly in the stack.
//* call by value.

//? Non-Primitive Values:
//* Mutable.
//* Stored in the heap (references in the stack).
//* call by reference.
