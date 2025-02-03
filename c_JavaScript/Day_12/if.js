//* ****************************************************
//* 🔹 CONDITIONAL STATEMENTS
//* ****************************************************

//* ✅ If-Else Example
let age = 30;
if (age >= 18) {
    console.log("✅ Eligible for Vote");
} else {
    console.log("❌ Not eligible for vote");
}

//* ✅ If-Else If-Else Example
age = 19;
if (age < 18) 
    console.log("👶 KID");
else if (age > 45) 
    console.log("👴 OLD");
else 
    console.log("🧑 YOUNG");


//* ****************************************************
//* 🔹 SWITCH STATEMENT (Strict comparison is used)
//* ****************************************************

switch (new Date().getDay()) {
    case 0: console.log("📅 Sunday"); break;
    case 1: console.log("📅 Monday"); break;
    case 2: console.log("📅 Tuesday"); break;
    case 3: console.log("📅 Wednesday"); break;
    case 4: console.log("📅 Thursday"); break;
    case 5: console.log("📅 Friday"); break;
    case 6: console.log("📅 Saturday"); break;
    default: console.log("❌ Invalid day");
}


//* ****************************************************
//* 🔹 LOOPS
//* ****************************************************

//* ✅ For Loop: Print "Hello World!" 20 times
for (let i = 1; i <= 20; i++) 
    console.log("🌍 Hello World!");

//* ✅ Sum of First 10 Natural Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) 
    sum += i;
console.log("🔢 Sum of first 10 natural numbers:", sum);


//* ✅ Nested For Loop: Print Number Grid
/*
12345
12345
12345
12345
12345
12345
*/
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) 
        row += j;
    console.log(row);
}


//* ****************************************************
//* 🔹 SCOPE IN JAVASCRIPT
//* ****************************************************

//* ✅ Global Scope (Accessible Everywhere)
let globalVar = 100;

function testGlobalScope() {
    console.log(globalVar);  // ✅ Accessible
}
testGlobalScope();
console.log(globalVar);  // ✅ Accessible outside function too


//* ✅ Local Scope (Function Scope)
function localScopeExample() {
    let localVar = 50;  // Exists only inside function
    console.log("🔹 Inside function:", localVar);
}
localScopeExample();
// console.log(localVar); ❌ ERROR: Not accessible outside function


//* ✅ Block Scope
if (true) {
    let blockScopedVar = 30;
    var notBlockScoped = 40;
}
// console.log(blockScopedVar); ❌ ERROR: Not accessible outside block
console.log(notBlockScoped); // ✅ Accessible outside block (because it's declared with var)


//* ****************************************************
//* 🔹 VAR VS LET & CONST
//* ****************************************************

//* ✅ Problem with 'var'
var amount = 400;
var amount = 20;  // ✅ Allowed (but confusing)
console.log(amount);  // Output: 20

//* ✅ 'let' does not allow redeclaration
let money = 100;
// let money = 200; ❌ ERROR: Can't redeclare 'let' in same scope


//* ✅ Temporal Dead Zone (TDZ)
//!console.log(value);  
//* ❌ ERROR: Cannot access before declaration
let value = 300;

//* ✅ 'var' doesn't have TDZ (but leads to undefined)
console.log(varValue); // ✅ undefined (no error)
var varValue = 234;


//* ****************************************************
//* 🔹 HOISTING IN FUNCTIONS
//* ****************************************************

//* ✅ Function Hoisting (Can be called before declaration)
greet();
function greet() {
    console.log("👋 Hello from Greet");
}

//* ❌ Function Expression (Cannot be accessed before declaration)
try {
    meet();
} catch (error) {
    console.log("❌ ERROR: meet() cannot be accessed before declaration");
}

const meet = function() {
    console.log("👋 Hello from Meet");
};


//* ****************************************************
//* 🔹 WHILE LOOP ( Exit controlled loop)
//* ****************************************************
let i = 1;
while (i < 6) {
    console.log("🔄", i);
    i++;
}


//* ****************************************************
//* 🔹 ITERATING THROUGH ARRAYS & OBJECTS
//* ****************************************************

let arr = [10, 20, 30, 40];
//* ✅ Loop through an array
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);


//* ✅ Loop through an object using keys
const obj = {
    name: "Rohit",
    age: 30,
    amount: 420,
    city: "Noida"
};

const keys = Object.keys(obj);  // Get all keys
for (let i = 0; i < keys.length; i++) 
    console.log(obj[keys[i]]);  // Access values using keys
