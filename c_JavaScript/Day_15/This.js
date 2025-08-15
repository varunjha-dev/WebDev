//! 🔹 Global Object (varies by environment)
//* - Browser: `window`
//* - Node.js: `global`
//* - Universal: `globalThis` (works in all environments)

console.log(globalThis); // ✅ Output: global object based on environment

//* `console.log`, `setInterval`, `Math.random()` come from the global object
console.log(globalThis.Math.random()); // ✅ Works in all environments

//* 1: Global Context (Outside Any Function)
// In browsers: window
// In Node.js: Module's exports object {}

//! 🔹 `this` Keyword (Global Scope)
//* In the global scope, `this` refers to the global object.
console.log(this === globalThis); // ✅ Output: true (in browser: `window`)

//* `var` variables become part of the global object, `let` & `const` do not.
var c = 30;
let a = 10;
const b = 20;
console.log(globalThis.c); // ✅ 30
console.log(globalThis.a); // ❌ undefined (because `let` & `const` are not attached)

//* 2: Inside a Function
// i: (Non—Strict Mode)
// When this is used inside a regular function,it refers to the global object
// ii: Strict Mode
// this will be undefined inside a function.

//! 🔹 `this` Inside a Function
function greet() {
    console.log(this); // ✅ Refers to global object (non-strict mode)
}
greet();

//* Strict mode changes behavior
"use strict";
function meet() {
    console.log(this); // ❌ `undefined` in strict mode
}
meet();

//* 3: Inside a Method (Object Context)
// When this is used inside an object's method, it refers to the object that owns the method.

//! 🔹 `this` Inside an Object Method
const obj = {
    name: "Rohit",
    age: 20,
    greet: function() {
        console.log(this); // ✅ Refers to `obj`
        console.log(this.name); // ✅ "Rohit"
    }
};
obj.greet(); // ✅ Works as expected as obj act as context for the greet

//! 🔹 Arrow Functions & `this` (Lexical Scope)
//* Arrow functions do NOT have their own `this`, they inherit from the surrounding (lexical) scope.
let obj1 = {
    name: "Rohit",
    greet: () => {
        console.log(this); // ✅ Inherits `this` from global scope
    }
};
obj1.greet(); // ❌ `this` refers to `globalThis`, not `obj1`

//* Nested Arrow Function (Inherits from the nearest function)
let obj2 = {
    name: "Saurav",
    greet: function() {
        let ab = () => {
            console.log(this); // ✅ `this` refers to `obj2`
        };
        ab();
    }
};
obj2.greet(); // ✅ Works correctly

//! 🔹 `this` Inside a Constructor/Class
// In constructors and classes, this refers to the instance of the object being created.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person("rohit", 20);
console.log(person1); // ✅ Creates a new object with `this` referring to the instance

//todo 🔥 Answer in One Go
// 1️⃣ Global Object depends on the environment (window, global, globalThis).
// 2️⃣ this in Global Scope:

// In browsers → window
// In Node.js → {} (empty object)
// 3️⃣ this in Functions:
// Non-strict mode → global object
// Strict mode → undefined
// 4️⃣ this in Object Methods: Refers to the calling object.
// 5️⃣ Arrow Functions: Don't have their own this, they inherit from the surrounding function.
// 6️⃣ this in Constructor/Class: Refers to the instance being created.