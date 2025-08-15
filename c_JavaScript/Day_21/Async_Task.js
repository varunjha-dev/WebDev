// ! =========================================
// !  JavaScript Code Execution Flow Example
// ! =========================================

// * Step 1: First, this statement is executed
console.log("hello coder Army"); // ✅ Output: hello coder Army

// ! Function Definitions (Won't Execute Until Called)

// * meet() function - Logs the first element of an array
function meet() {
    const arr = [2, 4, 6]; // ✅ An array is created
    console.log(arr[0]); // ✅ Output: 2 (First element of the array)
}

// * greet() function - Performs arithmetic, calls meet(), and logs squared value
function greet() {
    const a = 2 + 3; // ✅ Addition operation (2+3=5)
    console.log(a); // ✅ Output: 5

    meet(); // ✅ Calls meet() function

    console.log(a * a); // ✅ Output: 5 * 5 = 25
}

// ! Function Calls (Execution Begins)

// * Step 2: greet() function is called
greet(); 

// * Step 3: After greet() finishes, this runs
console.log("Program End"); // ✅ Output: Program End

// ! =========================================
// !  Code Execution Breakdown (Call Stack)
// ! =========================================

/*
✅ Expected Output:
----------------------------------
hello coder Army   --> (Step 1: First console.log outside functions)
5                   --> (Step 2: Inside greet(), prints a = 5)
2                   --> (Step 3: Inside meet(), prints first array element)
25                  --> (Step 4: Inside greet(), prints 5 * 5)
Program End        --> (Step 5: Last console.log outside functions)
----------------------------------

🛠️ **How Code Executes?**
----------------------------------
1️⃣ JavaScript starts execution from top to bottom.
2️⃣ `console.log("hello coder Army")` runs first.
3️⃣ `greet()` is called, so:
   - It calculates `a = 2 + 3` and logs `5`
   - Calls `meet()`, which logs `2`
   - Logs `a * a = 25`
4️⃣ After `greet()` finishes, `"Program End"` is logged.
5️⃣ The script execution ends.
----------------------------------

📌 **Key Takeaways**
----------------------------------
✔️ Functions **do not execute** until they are **called**.  
✔️ The **call stack** follows a **LIFO (Last In, First Out)** order.  
✔️ Function calls are **nested** (greet → meet → back to greet).  
✔️ Execution moves **line by line** but follows function calls.
----------------------------------
*/

// ! =========================================
// !  JavaScript Execution Flow with Async Code
// ! =========================================

// * Step 1: First Synchronous Log
console.log("HEllo Coder Army"); // ✅ Output: HEllo Coder Army

// ! Step 2: Asynchronous setTimeout (Executes after 5 seconds) PPart of web api
setTimeout(() => {
  const a = 2 + 4; // ✅ Calculation (2 + 4 = 6)
  console.log(a); // ✅ Output after 5 sec: 6
}, 5000); // 🔹 Timer starts but does NOT block execution

// * Step 3: Declaring Variables
let b = 20; 
let arr = [20, 30, 11]; // ✅ Array with three values

// ! Step 4: Loop Execution (Synchronous)
for (let i of arr) {
  console.log(i * b); // ✅ Output: 400, 600, 220 (20*20, 30*20, 11*20)
}

// ? Output so far: 
// HEllo Coder Army
// 400
// 600
// 220
// (After 5 seconds, "6" will appear in console)

// ! =========================================
// !  Adding setInterval (Repeating Async Task)
// ! =========================================

console.log("HEllo Coder Army"); // ✅ Output: HEllo Coder Army (Again)

// * Asynchronous setTimeout (Executes after 5 sec)
setTimeout(() => {
  const a = 2 + 4; 
  console.log(a); // ✅ Output after 5 sec: 6
}, 5000);

// * setInterval (Repeating every 2 seconds)
setInterval(() => {
  console.log("I am fast"); // ✅ Runs every 2 sec forever
}, 2000); 

// * Declaring Variables Again
let b1 = 20;
let arr1 = [20, 30, 11];

// ! Synchronous For-Loop Execution
for (let i of arr1) {
  console.log(i * b1); // ✅ Output: 400, 600, 220
}

// ? Output so far:
// HEllo Coder Army
// 400
// 600
// 220
// (Every 2 sec: "I am fast") 2 baar phele timeout ke aur uske baad bhi 
// (After 5 sec: "6" will appear)
// jab tak call stack empty nahi hoga tab tai koi bhi call back queue se callback call stack mei aayega 
// This is done to prevent race around condition, and ensure consitent output
// ! =========================================
// !  Fetch API - Handling Promises (Async)
// ! =========================================

console.log("I am first"); // ✅ Output: I am first

// * Fetching data from YouTube (Simulated API Call)
fetch("https://youtube.com")
  .then(() => console.log("Hello")); // ✅ Output (only after fetch is complete): Hello

console.log("I am last"); // ✅ Output: I am last

// ? Output Order:
// I am first
// I am last
// (After fetch completes: "Hello")
// Microstack queue is used to store promises after web api gives it to execute 
// Microstack queue has >>> priority than Callback queue in sending tasks in execution context

