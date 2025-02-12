// ! =====================================================
// ! TypeScript Variables & Data Types 🔥
// ! =====================================================

// * Explicitly defining a number type
let num: number = 10;  // ✅ Only allows number values

// * Type inference (TypeScript automatically detects the type)
let x = 10;  // ✅ Type inferred as number
let val = "Rohit";  // ✅ Type inferred as string

// ! =====================================================
// ! The 'any' Type 🚨 (Avoid using unless necessary)
// ! =====================================================

let money: any;  // ✅ Can hold any data type (Not recommended)

// * Reassigning different types (Works with 'any')
money = "Rohit";
money = 20;

// console.log(money.toUpperCase()); // ❌ Error if 'money' is a number

// ! =====================================================
// ! The 'unknown' Type 🛑 (Safer alternative to 'any')
// ! =====================================================

let val2: unknown;  // ✅ Can hold any type but requires type checking

val2 = "Rohit";
val2 = 10;

// * Type checking before using unknown type values
if (typeof val2 === 'string') console.log(val2.toUpperCase());  // ✅ Works only if 'val2' is a string
if (typeof val2 === 'number') console.log(val2.toFixed(2));  // ✅ Works only if 'val2' is a number

// ! =====================================================
// ! Non-Primitive Data Types (Arrays, Tuples, Objects) 📦
// ! =====================================================

// * Number array
let arr: number[] = [2, 4, 5, 7, 11];  // ✅ Array of numbers

// * Type inference (Automatically detected as number[])
let arr2 = [2, 1, 19, 10];  // ✅ Array of numbers

// * Mixed type array (Numbers & Strings)
let arr3: (string | number)[] = ["Rohit", 20, 11, "Sohan"];
arr3.push(10);  // ✅ Adding a number to the array

// * Mixed type array (Numbers, Strings, Boolean)
let arr4: (string | number | boolean)[] = ["Rohit", 10, false, 11];

// ! =====================================================
// ! Tuples (Fixed-length, fixed-type array) 📌
// ! =====================================================

let tuple: [string, number, number] = ["Rohit", 10, 11];  // ✅ Tuple with fixed types

// ! =====================================================
// ! Objects in TypeScript 🏠
// ! =====================================================

// * Inline object type declaration
let obj1: { name: string; age: number; gender: string } = {
  name: "Rohit",
  age: 20,
  gender: "female",
};

// * Object with predefined structure
let person: { name: string; age: number; balance: number };

person = {
  name: "Rohit",
  age: 20,
  balance: 420,
};

// ! =====================================================
// ! Type Aliases 📌 (Reusable object structures)
// ! =====================================================

type Customer = {
  name: string;
  age: number;
  id: string;
};

let c1: Customer = {
  name: "Rohit",
  age: 20,
  id: "fshfsd",
};

// ! =====================================================
// ! Interfaces 🛠 (More flexible object structures)
// ! =====================================================

interface Admin {
  names: string;
  age: number;
  position: string;
}

// * Extending an interface (Merging multiple definitions)
interface Admin {
  id: number;
}

let obj3: Admin = {
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

