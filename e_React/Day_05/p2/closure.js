// ✅ Global Scope Variable
let b = 10;

// 🔥 Outer Function (greet1)
function greet1() {
    let a = 20; // 🛠 Local Variable (accessible only within greet1)

    // 🎯 Inner Function (meet) - This creates a Closure
    function meet() {
        console.log(a); // ✅ Accessing `a` from outer scope
    }

    // ❌ meet(); // This would print `20` immediately if called here

    return meet; // 🎯 Returning the function (not calling it)
}

// 🛠 Storing `meet` function reference inside `num`
const num = greet1();
console.log(num); // 🏆 Output: [Function: meet] (num now holds `meet` function)

num(); // 🏆 Output: 20 
// 🛠 `num()` still has access to `a`, even though `greet1()` execution is finished. This is **Closure**.

