//* ****************************************************
//* 🔹 FUNCTIONS IN JAVASCRIPT
//* ****************************************************

//* ✅ A function is a block of code designed to perform a specific task.

//* 🔹 Example: Without using a function (Repetitive Code)
console.log("Hello Coder Army");
console.log("Mein Badhiya hoon");
console.log("Or kya Chal rha hain");

//* Doing this 100 times? Not practical! Instead, use a function.

function greet() {  
    console.log("Hello Coder Army");
    console.log("Mein Badhiya hoon");
    console.log("Or kya Chal rha hain");
}
greet();  // ✅ Calls the function


//* ****************************************************
//* 🔹 FUNCTION WITH PARAMETERS & RETURN VALUE
//* ****************************************************

//* ✅ Function to Add Two Numbers
function sum(a, b) {  
    return a + b;   // Returns the sum
}
console.log(sum(3, 5));  // Output: 8 ✅

//* ✅ Function to Multiply Two Numbers
function multiply(a, b) {
    return a * b;
}
let result = multiply(3, 4);
console.log(result);  // Output: 12 ✅


//* ****************************************************
//* 🔹 FUNCTION EXPRESSION (STORING FUNCTION IN A VARIABLE)
//* ****************************************************

const fun = function() {
    console.log("Hello Coder Army");
    return "Money";  // ✅ Code after return won’t execute
};
console.log(fun());  // Output: "Hello Coder Army" + "Money"


//* ****************************************************
//* 🔹 ARROW FUNCTIONS (Shorter Syntax)
//* ****************************************************

//* ✅ Basic Arrow Function
const sumArrow1 = (a, b) => {
   return a + b;
}
console.log(sumArrow1(3, 5)); // Output: 8 ✅

const sumArrow = (a, b) => a + b;
console.log(sumArrow(3, 6));  // Output: 9 ✅

//* ✅ Arrow Function with Single Parameter (No Parentheses Needed)
const cube = a => a * a * a;
console.log(cube(3));  // Output: 27 ✅


//* ****************************************************
//* 🔹 REST OPERATOR IN FUNCTIONS (...)
//* ****************************************************

//* ✅ Function that Accepts Multiple Arguments
const sumAll = function(...numbers) {
    console.log(numbers);  // ✅ Rest operator collects all arguments into an array
};
sumAll(2, 3, 4);
sumAll(2, 3, 6, 10, 12);


//* ****************************************************
//* 🔹 REST VS SPREAD OPERATOR
//* ****************************************************

//* ✅ SPREAD: Expanding an array into elements
let arr = [2, 3, 4, 5];
let arr2 = [...arr];  // ✅ Cloning an array

//* ✅ REST: Collecting values into an array (Used inside function parameters)


//* ****************************************************
//* 🔹 FUNCTION WITH OBJECT PARAMETERS & DESTRUCTURING
//* ****************************************************

let obj = {
    name: "Rohit",
    age: 30,
    amount: 420
};

//* ✅ Function Accepting Object as Parameter
function printDetails(obj1) {
    console.log(obj1.name, obj1.age);
}
printDetails(obj);

//* ✅ Function with Object Destructuring
function printDetails2({ name, amount }) {
    console.log(name, amount);
}
printDetails2(obj);


//* ****************************************************
//* 🔹 FUNCTION PROTOTYPE CHAINING
//* ****************************************************

let first = function() {
    console.log("Function Example");
};

//* ✅ Understanding Function Prototype Chaining
console.log(first.__proto__ === Function.prototype);  // ✅ true
console.log(first.__proto__.__proto__ === Object.prototype);  // ✅ true
console.log(first.__proto__.__proto__.__proto__ === null);  // ✅ true


//* ****************************************************
// todo: PASS BY VALUE VS PASS BY REFERENCE
//* ***************************************
