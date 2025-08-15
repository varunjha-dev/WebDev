import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/* 
🔥 OLD APPROACH (Direct DOM Manipulation ❌) 🔥

- Here, we manipulate the DOM directly using `document.querySelector()`
- React discourages direct DOM manipulation
- React says: "Let me handle the DOM, you just focus on building UI" 🚀

❌ PROBLEM:
- UI doesn't update automatically when `count` changes.
- React doesn't track the variable `count`, so it won’t re-render the component.

*/

// function Counter() {
//     let count = 0;

//     function incrementNumber() {
//         count++; // Increment count
//         console.log(count);  
//         document.querySelector('h1').innerHTML = `Count is ${count}`; // Manually updating the DOM ❌
//     }
    
//     function decrementNumber() {
//         count--; // Decrement count
//         console.log(count);
//         document.querySelector('h1').innerHTML = `Count is ${count}`; // Manually updating the DOM ❌
//     }

//     return (
//         <div className="first">
//             <h1>Count is {count}</h1>  {/* UI won't update when count changes */}
//             <button onClick={incrementNumber}>Increment {count}</button>
//             <button onClick={decrementNumber}>Decrement {count}</button>
//         </div>
//     );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);

// ✅ SOLUTION: USE HOOKS (useState)
  
/* 
🎯 **useState Hook - What & Why?**
-----------------------------------
- `useState` is a special function (Hook) provided by React.
- It allows React to track **state changes** and automatically re-render components.

📌 **How does useState work?**
1️⃣ `useState(initialValue)` returns **an array** of **two elements**:
   - **First element** → The current state value.
   - **Second element** → A function to update the state.
   
2️⃣ Whenever we call the **update function**, React **re-renders** the component with the new value.

*/

function Counter() {
    // ✅ Using `useState` Hook for state management
    let [count, setCount] = useState(0); // 🟢 count = state value, 🔄 setCount = function to update count

    // 📌 Function to Increment the count
    function incrementNumber() {
        setCount(count + 1); // ✅ Updates the state & triggers re-render
    }

    // 📌 Function to Decrement the count
    function decrementNumber() {
        setCount(count - 1); // ✅ Updates the state & triggers re-render
    }

    return (
        <div className="first">
            <h1>Count is {count}</h1> {/* ✅ UI updates automatically when count changes */}
            <button onClick={incrementNumber}>Increment {count}</button>
            <button onClick={decrementNumber}>Decrement {count}</button>
        </div>
    );
}

// ✅ Rendering the Counter component
ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);

/* 
💡 **How useState Works Internally?**
-------------------------------------
1️⃣ Initially, `count` = 0 (from `useState(0)`)
2️⃣ When `Increment` button is clicked:
   - `setCount(1)` is called.
   - React **re-renders** `Counter()`.
   - Now, `count = 1` and UI updates.
3️⃣ Every time we call `setCount(newValue)`, React calls `Counter()` again with the updated value.

🚀 **Key Takeaways**
✔ No need for manual DOM updates (`document.querySelector()` ❌)
✔ React **automatically** updates the UI when state changes.
✔ Makes the code **cleaner, reusable & maintainable**.

🔥 Now your `Counter.js` is optimized, easy to understand, and follows React best practices! 🚀
*/
