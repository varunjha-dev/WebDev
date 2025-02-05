//* 🔹 JavaScript is a SINGLE-THREADED & SYNCHRONOUS programming language.
// *    ➤ **Single-threaded**: Executes one instruction at a time.
//  *   ➤ **Synchronous**: Executes code in a step-by-step manner.


// 🛑 Hoisting & Execution Context

console.log(x); // ✅ Output: undefined (due to hoisting)
var x = 10;

// console.log(y); ❌ ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// console.log(z); ❌ ReferenceError: z is not defined

// 🔹 Execution Context is created in **two phases**:
//  1️⃣ **Memory Creation Phase** (Hoisting):
//     - `var x` is stored as `undefined` (hoisted).
//     - `let y` is stored but left **uninitialized** (inside TDZ).
//  2️⃣ **Code Execution Phase**:
//     - `x` gets assigned `10`
//     - `y` gets assigned `20`
//     - Accessing `y` before initialization throws an error (TDZ).


// 🔹 Temporal Dead Zone (TDZ) 🚫
// TDZ is the period between entering the block scope and initializing the variable.
let a = 5;
{
    // console.log(a); ❌ ReferenceError: Cannot access 'a' before initialization
    let a = 10; // Now it gets initialized
    console.log(a); // ✅ Output: 10
}

// 🔹 Hoisting ➡️ Lifting variable & function declarations to the top
console.log(b); // ✅ Output: undefined (because of hoisting)
var b = 20;

// JavaScript **hoists** variables, but only `var` gets `undefined`.
// `let` & `const` stay in **Temporal Dead Zone (TDZ)** and throw errors.


// 🔹 Function Hoisting 🆙
greet(); // ✅ Output: "Hello World" (Function is hoisted with its definition)

function greet() {
    console.log("Hello World");
}

// ❌ Function Expression Hoisting (Throws Error)
// meet(); // TypeError: meet is not a function in case of var
// meet(); // ❌ ReferenceError: Cannot access 'meet' before initialization
let meet = function () {
    console.log("Hello Meet");
};

// 🔥 What happened?
// - `var meet` is **hoisted as undefined**, so calling it before assignment causes an error.
// - Function expressions **are not hoisted like function declarations**.

//Todo 🔥 Summary (Answer in One Go)
// 1️⃣ JS is a synchronous, single-threaded language (executes one instruction at a time).
// 2️⃣ Execution Context has two phases:

// Memory Creation Phase (Hoisting: var → undefined, let/const → uninitialized in TDZ).
// Code Execution Phase (Assignments happen, errors occur if TDZ is accessed).
// 3️⃣ Hoisting moves function and variable declarations to the top.
// 4️⃣ var is hoisted with undefined, but let & const stay in TDZ (throws ReferenceError).
// 5️⃣ Function declarations are hoisted, but function expressions (var/let) are not.
// 6️⃣ Temporal Dead Zone (TDZ) is the phase where let & const exist but are uninitialized.