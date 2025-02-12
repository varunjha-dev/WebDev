"use strict";
// ! =====================================================
// ! TypeScript Variables & Data Types 🔥
// ! =====================================================
// * Explicitly defining a number type
let num = 10; // ✅ Only allows number values
// * Type inference (TypeScript automatically detects the type)
let x = 10; // ✅ Type inferred as number
let val = "Rohit"; // ✅ Type inferred as string
// ! =====================================================
// ! The 'any' Type 🚨 (Avoid using unless necessary)
// ! =====================================================
let money; // ✅ Can hold any data type (Not recommended)
// * Reassigning different types (Works with 'any')
money = "Rohit";
money = 20;
// console.log(money.toUpperCase()); // ❌ Error if 'money' is a number
// ! =====================================================
// ! The 'unknown' Type 🛑 (Safer alternative to 'any')
// ! =====================================================
let val2; // ✅ Can hold any type but requires type checking
val2 = "Rohit";
val2 = 10;
// * Type checking before using unknown type values
if (typeof val2 === 'string')
    console.log(val2.toUpperCase()); // ✅ Works only if 'val2' is a string
if (typeof val2 === 'number')
    console.log(val2.toFixed(2)); // ✅ Works only if 'val2' is a number
// ! =====================================================
// ! Non-Primitive Data Types (Arrays, Tuples, Objects) 📦
// ! =====================================================
// * Number array
let arr = [2, 4, 5, 7, 11]; // ✅ Array of numbers
// * Type inference (Automatically detected as number[])
let arr2 = [2, 1, 19, 10]; // ✅ Array of numbers
// * Mixed type array (Numbers & Strings)
let arr3 = ["Rohit", 20, 11, "Sohan"];
arr3.push(10); // ✅ Adding a number to the array
// * Mixed type array (Numbers, Strings, Boolean)
let arr4 = ["Rohit", 10, false, 11];
// ! =====================================================
// ! Tuples (Fixed-length, fixed-type array) 📌
// ! =====================================================
let tuple = ["Rohit", 10, 11]; // ✅ Tuple with fixed types
// ! =====================================================
// ! Objects in TypeScript 🏠
// ! =====================================================
// * Inline object type declaration
let obj1 = {
    name: "Rohit",
    age: 20,
    gender: "female",
};
// * Object with predefined structure
let person;
person = {
    name: "Rohit",
    age: 20,
    balance: 420,
};
let c1 = {
    name: "Rohit",
    age: 20,
    id: "fshfsd",
};
let obj3 = {
    names: "Rohit",
    age: 20,
    position: "manager",
    id: 210,
};
// ! =====================================================
// ! Interface vs Type (Key Differences) 🔥
// ! =====================================================
// * Type is more suitable for unions & primitives
// * Interface is better for objects & class-based structures
