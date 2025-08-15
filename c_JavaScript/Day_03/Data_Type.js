//* *****************************************************
//* Non-Primitive Data Types in JavaScript
//* *****************************************************

//* 1. Arrays: A collection of values (can hold mixed data types)
let arr = [10, 20, 50, "Rohit", "Mohit"];
console.log(arr);               //* Output: [10, 20, 50, "Rohit", "Mohit"]
console.log(typeof arr);        //* Output: object

//* 2. Objects: Stores key-value pairs
let obj = {
  user_name: "Rohit",
  account_number: 12365498562436,
  account_balance: 420,
};
console.log(obj);  //* Output: {user_name: "Rohit", account_number: ..., account_balance: 420}
console.log (typeof obj);
//* 3. Functions: Blocks of reusable code
let func = function () {
  console.log("Hello Coder Army");
};
func();                         //* Output: Hello Coder Army
console.log(typeof func);       //* Output: function
