//* ****************************************************
//* 🔹 SHALLOW COPY vs DEEP COPY
//* ****************************************************

//* 🔹 Shallow Copy (Same Memory Reference) as reference to addresses are copied
let obj1 = { a: 1 , b: 2};
let obj2 = obj1;  // Both share the same memory address

obj2.a = 10;  // Modifying obj2 also affects obj1
console.log(obj2, obj1);  // { a: 10, b: 2 } { a: 10, b: 2 }

//* 🔹 Deep Copy (Separate Memory Address)
let obj3 = structuredClone(obj1);  // Creates an independent copy
obj3.a = 20;  // Modifying obj3 does NOT affect obj1
console.log(obj3, obj1);  // { a: 20, b: 2 } { a: 10, b: 2 }


//* ****************************************************
//* 🔹 NESTED OBJECT SHALLOW COPY (Using Object.assign())
//* ****************************************************

const user = {
    name: "Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
};

console.log(user.address.pincode);  // 246149

const user2 = Object.assign({}, user);
console.log(user2);  // ✅ Looks like a copy, but...

user2.address.pincode = 341503;  // ❌ Changes pincode in BOTH user and user2
console.log(user.address.pincode);  // 341503 ❌ Affected!

user2.name = "Mohit";  // ✅ Changing top-level property does NOT affect original
console.log(user.name);  // "Rohit"

//* 🔹 Key Takeaway:
// - Object.assign() creates a shallow copy of NESTED OBJECT.
// - **Nested objects are copied by reference, not by value**. (Shallow copy)
// - **Not Nested objects are copied by value (deep copy)
// - ✅ To prevent this, **use structuredClone() for deep copying.**


//* ****************************************************
//* 🔹 OBJECT DESTRUCTURING
//* ****************************************************

let obj = {
    name: "Rohit",
    money: 420,
    balance: 30,
    age: 20,
    aadhar: "46968564"
};

//* ✅ Basic Destructuring
const { name, balance, age } = obj;
console.log(name, balance, age);  // "Rohit", 30, 20

//* ✅ Renaming Variables
const { name: full_name, balance: amount, age: Umar } = obj;
console.log(full_name, amount, Umar);  // "Rohit", 30, 20

//* ✅ Rest Operator
const { name: userName, age: userAge, ...rest } = obj;
console.log(userName, userAge);  // "Rohit", 20
console.log(rest);  // { money: 420, balance: 30, aadhar: "46968564" }


//* ****************************************************
//* 🔹 ARRAY DESTRUCTURING
//* ****************************************************

const arr = [3, 2, 1, 5, 10];

const [first, second] = arr;
console.log(first, second);  // 3, 2

const [firstElement, , thirdElement] = arr;
console.log(firstElement, thirdElement);  // 3, 1

const [start, ...remaining] = arr;
console.log(start);  // 3
console.log(remaining);  // [2, 1, 5, 10]


//* ****************************************************
//* 🔹 DESTRUCTURING NESTED OBJECTS
//* ****************************************************

let userInfo = {
    name: "Rohit",
    age: 20,
    address: {
        pincode: 246149,
        city: "kotdwar",
        state: "UK"
    }
};

//* ✅ Extract City
const { address: { city } } = userInfo;
console.log(city);  // "kotdwar"

//* ✅ Extract Pincode and State
const { address: { pincode, state } } = userInfo;
console.log(pincode, state);  // 246149 UK


//* ****************************************************
//* 🔹 ACCESSING ARRAY INSIDE OBJECT USING DESTRUCTURING
//* ****************************************************

let hw = {
    name: "Rohit",
    age: 20,
    arr: [90, 40, 60, 80]
};

//* ✅ Extract first element of the array
const { arr: [firstItem] } = hw;
console.log(firstItem);  // 90


//* ****************************************************
//* 🔹 OBJECT METHODS
//* ****************************************************

let user1 = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        console.log("Hello Coder Army");
    }, 
    meet: function () {
        return 20;
    }
};

user1.greet();  // "Hello Coder Army"
console.log(user1.meet());  // 20


//* ****************************************************
//* 🔹 PROTOTYPE CHAINING (Common Interview Question)
//* ****************************************************

let objProto = {
    name: "Rohit",
    amount: 420,
    greet: function () {
        return 10;
    }
};

console.log(objProto.toString());  // [object Object]

//* 🔹 How does this work?
// - We didn't define `toString()`, yet we can use it!
// - Same for `arr.push()`, even though we didn't define it.
// - ✅ Answer: **These methods come from JavaScript’s Prototype Chain.**
