"use strict";
// ✅ Creating an object of type Person
const obj = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    // aadhar is optional, so it's omitted
};
// ✅ Readonly: Prevents modification of properties after initialization
const obj2 = {
    name: "Rohit",
    balance: 210,
    age: 20
};
// ✅ An array that can store both People and Manager types
const arr = [
    { name: "Rohit", age: 20 },
    { name: "Mohit", age: 18 },
    { salary: 20000, id: "2321" } // Different structure but valid due to union type
];
// -------------------------------------------------------------------
// ✅ Function in TypeScript
function greet(a) {
    console.log(a); // Prints the number
    return a + 5; // Returns number + 5
}
console.log(greet(10)); // Output: 15
// ✅ Function with multiple parameters
function meet(msg, val) {
    console.log(msg, val);
}
meet("Anshika Verma", 4);
// ✅ Default Parameter (If no argument is passed, default value is used)
function neet(msg = "Jit") {
    console.log(msg);
}
neet(); // Output: Jit
neet("Bittu"); // Output: Bittu
// ✅ Optional Parameter (If not provided, uses fallback value)
function GATE(person) {
    console.log(person || "Mohan");
}
GATE("Rohit"); // Output: Rohit
GATE(); // Output: Mohan
// -------------------------------------------------------------------
// ✅ Arrow Function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4)); // Output: 7
const squareRoot = (val) => {
    return val * val;
};
// Function that takes a number and a callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount); // Calls the callback function with new amount
}
placeOrder(10, (amount) => {
    console.log(amount); // Output: 20
});
// -------------------------------------------------------------------
// ✅ Rest Parameter (Allows multiple arguments to be passed as an array)
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans += val); // Adds all values in the array
    console.log(ans);
}
total(2, 3, 1, 4, 123, 1, 12, 10); // Output: 156
// ✅ Object of Teacher Type
const obj8 = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    id: 123
};
