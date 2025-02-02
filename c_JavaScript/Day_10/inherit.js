//* ****************************************************
//* 🔹 PROTOTYPE CHAINING (Common Interview Concept)
//* ****************************************************

//* ✅ Understanding __proto__ (Prototype Inheritance)

//* Creating two separate objects
let user1 = {
    name: "Rohit",
    age: 20
};

let user2 = {
    amount: 20,
    money: 50
};

//* 🔹 By default, user2 **CANNOT** access user1's properties
console.log(user2.name);  // ❌ undefined

//* 🔹 Now, we set user1 as the prototype of user2
user2.__proto__ = user1;

//* ✅ user2 can now access user1's properties (inherits from user1)
console.log(user2.name);  // "Rohit" ✅


//* ****************************************************
//* 🔹 UNDERSTANDING PROTOTYPES IN JAVASCRIPT
//* ****************************************************

//* ✅ JavaScript has built-in prototype objects that provide properties and methods
//* Example: Arrays have access to push(), pop(), indexOf(), includes(), etc.

//* 🔹 How does this work?
//* Every array in JavaScript inherits from **Array.prototype**
let arr = [10, 20, 30];

console.log(arr.__proto__ === Array.prototype);  // ✅ true

//* 🔹 Array.prototype itself **inherits** from Object.prototype
console.log(arr.__proto__.__proto__ === Object.prototype);  // ✅ true

//* 🔹 Object.prototype has properties like toString(), valueOf(), etc.
console.log(arr.toString());  // "10,20,30" ✅ from Object.prototype

//* 🔹 Object.prototype.__proto__ is null (End of Prototype Chain)
console.log(Object.prototype.__proto__ === null);  // ✅ true

//* ✅ Prototype Chain Summary:
// 1️⃣ arr.__proto__ == Array.prototype
// 2️⃣ Array.prototype.__proto__ == Object.prototype
// 3️⃣ Object.prototype.__proto__ == null

//* This is why `typeof arr` returns "object":
console.log(typeof arr);  // "object" ✅


//* ****************************************************
//* 🔹 KEY TAKEAWAYS
//* ****************************************************
// - `__proto__` links an object to its prototype.
// - Objects inherit properties/methods from their prototype.
// - Arrays inherit from `Array.prototype`.
// - `Array.prototype` itself inherits from `Object.prototype`.
// - `Object.prototype` is the final prototype in the chain (null).
// - This is why `typeof []` returns `"object"`.

//* ✅ Now, you can easily explain **Prototype Chaining** in interviews! 💪
