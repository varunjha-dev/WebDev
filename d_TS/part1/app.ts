// ! =====================================================
// ! TypeScript Basic Data Types & Concepts 🔥
// ! =====================================================

// * Example of incorrect type assignment 
// a = "Rohit"; // ❌ Error: 'a' is not declared with a type

// ! =====================================================
// ! Primitive Data Types in TypeScript 🎯
// ! =====================================================

// * Number Type 🔢
let a: number = 10;  // ✅ Storing a numeric value
let b: number = 20;  // ✅ Another numeric value

// * String Type 📝
let str: string = "Rohit";  // ✅ Storing a text value

// * Boolean Type ✅❌
let isExist: boolean = true; // ✅ Boolean can hold 'true' or 'false'
isExist = false; // ✅ Reassigning another boolean value

// * BigInt Type 🔢 (ES2020 Feature - For very large numbers)
// let bigNumber: bigint = 132143292183n;  // ✅ Uncomment if using ES2020+

// * Null & Undefined 🤷‍♂️
let abc: null = null;  // ✅ Explicitly assigned null value
let bcd: undefined = undefined;  // ✅ Undefined value

// * Type Assignment Restriction 🚫
// bcd = "Mohan";  // ❌ Error: Cannot assign a string to type 'undefined'

// ! =====================================================
// ! TypeScript Enforces Type Safety 🛑
// ! =====================================================

let names: string = "Mohan";  // ✅ Only accepts string values
let honey: number = 20;  // ✅ Only accepts number values

const ho: number = 17;  // ✅ Constant variable with number type (Cannot be changed)

// ! =====================================================
// ! Understanding TypeScript Compilation 🔄
// ! =====================================================

// * TypeScript is a Compile-Time Language ✅
// ? It checks for errors be
