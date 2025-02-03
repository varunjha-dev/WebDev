//* ****************************************************
//* 🔹 OBJECT PROPERTY DESCRIPTORS
//* ****************************************************

let obj = {};
obj.name = "Rohit";

//* ✅ Check default property descriptor values
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
Output:
{
  value: 'Rohit',
  writable: true,     // ✅ Can modify the value
  enumerable: true,   // ✅ Can be iterated in loops
  configurable: true  // ✅ Can modify property attributes like writable / enumerable
}
*/

//* ✅ Modifying Property Attributes
Object.defineProperty(obj, "name", {
  writable: false,    // ❌ Can't modify now
  enumerable: true,   // ✅ Can still be iterated
  configurable: true  // ✅ Can change descriptors later
});

console.log(obj.name);  // Rohit
obj.name = "Mohit";     // ❌ Won't change since writable is false
console.log(obj.name);  // Rohit


//* ✅ Configurable Example (Cannot Revert Writable Back to True)
let obj2 = {};
Object.defineProperty(obj2, "name", {
  value: "Rohit",
  writable: true,
  enumerable: true,
  configurable: false  // ❌ Cannot change writable/enumerable later
});

obj2.name = "Mohit"; // ✅ Allowed (since writable is true)
console.log(obj2.name); // Mohit

//* ✅ Now trying to change writable from true ➝ false
Object.defineProperty(obj2, "name", { writable: false });

//* ❌ Trying to set writable back to true (ERROR)
try {
  Object.defineProperty(obj2, "name", { writable: true });
} catch (error) {
  console.log("❌ ERROR: Can't change writable from false to true");
}


//* ****************************************************
//* 🔹 PROTECTING OBJECT PROPERTIES (Bank Account Example)
//* ****************************************************

const account = {
  holder: "varun",
  age: 23,
  account_number: 30001,
  balance: 5000
};

//* ✅ Prevent account_number from being modified
Object.defineProperty(account, "account_number", {
  writable: false,
  configurable: false
});

account.account_number = 20001; // ❌ Won't change
console.log(account.account_number); // ✅ 30001


//* ****************************************************
//* 🔹 ENUMERABLE PROPERTY & FOR-IN LOOPS
//* ****************************************************

const customer = {
  name: "Rohit",
  age: 23,
  account_number: 123456,
  balance: 33000
};

//* ✅ Checking enumerable keys
console.log("Before setting enumerable to false:");
for (let key in customer) {
  console.log(key); // ✅ name, age, account_number, balance
}

//* ❌ Hiding 'name' from being iterated
Object.defineProperty(customer, "name", {
  enumerable: false
});

console.log("After setting enumerable to false:");
for (let key in customer) {
  console.log(key); // ✅ Only age, account_number, balance (name is hidden)
}


//* ****************************************************
//* 🔹 INHERITANCE & ENUMERABLE PROPERTIES
//* ****************************************************

const parent = {
  city: "Haridwar"
};

const child = Object.create(parent);
child.name = "Rohit";
child.age = 30;

console.log("For-in loop including inherited properties:");
for (let key in child) {
  console.log(key); // ✅ name, age, city (inherited property)
}

//* ❌ Why doesn't Object.prototype properties appear in loops?
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
/*
Output:
{
  enumerable: false, // ❌ Not accessible in for-in loops
}
*/

//* ✅ Making Object.prototype.toString enumerable
Object.defineProperty(Object.prototype, "toString", {
  enumerable: true
});

console.log("After making toString enumerable:");
for (let key in child) {
  console.log(key); // ✅ name, age, city, toString (now included)
}


//* ****************************************************
//* 🔹 WHY FOR-IN LOOP IS NOT RECOMMENDED FOR ARRAYS?
//* ****************************************************

const arr = [10, 20, 30, 40];
arr.name = "Rohit"; // Adding extra property

console.log("For-in loop on array:");
for (let key in arr) {
  console.log(key, arr[key]); // ❌ Also prints "name" property (unexpected)
}

//* ✅ Best way to iterate arrays (for-of loop)
console.log("For-of loop on array:");
for (let value of arr) {
  console.log(value); // ✅ 10, 20, 30, 40 (ignores extra properties)
}
