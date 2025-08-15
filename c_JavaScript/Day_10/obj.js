//* ****************************************************
//* 📌 OBJECTS IN JAVASCRIPT
//* ****************************************************

//* 🔹 What is an Object?
// A collection of key-value pairs, where keys (properties) are strings/symbols,
// and values can be any data type (number, string, array, function, or another object).

//* 🔹 Key Characteristics:
// ✅ Unordered: Unlike arrays, object properties are not indexed.
// ✅ Key-Value Pairs: Properties store data as key-value pairs.

//* ****************************************************
//* 📌 OBJECT CREATION METHODS
//* ****************************************************

const obj = {
    0: 20,
    1: 50,
    2: 70,
    name: "Rohit",
    account_balance: 420,
    gender: "male",
    age: 30,
    "account number": 231230, //! Spaces in keys must be inside quotes
    undefined: 30,
    null: "mohan"
};

// KEYS IN OBJECTS ARE STORED AS STRINGS INTERNALLY
// You can define them with or without quotes; they will be treated the same

console.log(obj); // Print object
console.log(typeof obj); // "object" (type of every object)

//! ACCESSING OBJECT PROPERTIES

//* ✅ Using dot notation (Preferred if no spaces/special characters)
console.log(obj.name); 
console.log(obj.age); 
console.log(obj.gender);

//* ✅ Using bracket notation (required when using spaces or special characters)
console.log(obj["account number"]); 
console.log(obj["gender"]); 
console.log(obj["account_balance"]);

//* ✅ Accessing numeric keys (both ways work)
console.log(obj[0]);  // as an number normally
console.log(obj["0"]); // as a string 

//* ✅ Accessing undefined and null keys
console.log(obj.undefined);
console.log(obj["undefined"]);
console.log(obj.null);
console.log(obj["null"]);

//! OBJECTS CAN BE CREATED IN DIFFERENT WAYS
 
// ✅ Using 'new Object()'
const person = new Object();
person.name = "Rohit";
person.age = 80;
person.gender = "male";
console.log(person);

// DELETE, MODIFY, UPDATE OBJECT PROPERTIES
delete person.age; // Deletes 'age' from object
person.name = "Mohit"; // Updates or adds property
console.log(person);

// ✅ Using a Class (OOP approach)
class People {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

//* OOP allows us to create multiple instances without repeating code

let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 30, "Female");
let per3 = new People("Aman", 21, "Male");
console.log(per1, per2, per3);

//! COMMON OBJECT METHODS

let sampleObj = {
    name: "Rohit",
    age: 30,
    account_balance: 420,
    gender: "Male"
};

//* ✅ Get all keys of an object
console.log(Object.keys(sampleObj)); // ['name', 'age', 'account_balance', 'gender']

//* ✅ Get all values of an object
console.log(Object.values(sampleObj)); // ['Rohit', 30, 420, 'Male']

//* ✅ Get key-value pairs as an array
console.log(Object.entries(sampleObj));
/*
[
    ['name', 'Rohit'],
    ['age', 30],
    ['account_balance', 420],
    ['gender', 'Male']
]
*/

//! MERGING OBJECTS

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// ❌ This won't work: const obj3 = obj1 + obj2;

//* ✅ Using Object.assign()
const obj3 = Object.assign({}, obj1, obj2); // {} this act as target for changes then obj1, obj2, .... acts as source
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj1); // Unchanged: { a: 1, b: 2 }

//* ✅ Using Spread Operator (Better way)
const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }

// ✅ Multiple object merge
const obj5 = { e: 5, f: 6 };
const obj6 = { ...obj1, ...obj2, ...obj5 };
console.log(obj6); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// CHANGING A PROPERTY IN MERGED OBJECTS
obj6.a = 10;
console.log(obj1.a); // Still 1, because spread creates a new copy

// TODOs TOPICS
// 1. Deep Copy vs Shallow Copy
// 2. Object.freeze() vs Object.seal()
// 3. Read MDN documentation on objects, about Number, String objects when created using 'new'.