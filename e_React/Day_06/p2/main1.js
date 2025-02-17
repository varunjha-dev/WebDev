import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

// ------------------------------------------------------------
// 🔍 SCENARIO 1: Managing State in Parent vs. Child Components
// ------------------------------------------------------------
// ✅ In the first example, the state `count` is maintained in the **parent** component (App).
// ✅ This state is then passed as **props** to the child component (Increment).
// ✅ The child component can access and modify the state using the function received as a prop.
// ------------------------------------------------------------

// function App(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//             <h1>Parent Counter is: {count}</h1>
//             <Increment counts={count} setCounts={setCount}/>
//         </>
//     )
// }

// ------------------------------------------------------------
// 🔍 SCENARIO 2: State Created in Child Component
// ------------------------------------------------------------
// ✅ In this version, the **state is NOT in the parent component (App).**
// ✅ The child components (Increment & Decrement) manage their own states.
// ✅ This creates a **problem** because Decrement does not have access to Increment’s state!
// ✅ The parent also has no control over the state since it's inside Increment.
// ------------------------------------------------------------

// function App(){
//     return (
//         <>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </>
//     )
// }
// ❌ Problem: The `Decrement` component cannot modify the state in `Increment`
// ❌ Even the parent (`App`) does not have access to the count state
// ❌ If we try passing state from `Increment` to `Decrement`, it causes duplication issues

// ------------------------------------------------------------
// ✅ SOLUTION: STATE LIFTING
// ------------------------------------------------------------
// 🏆 Instead of keeping `count` in a child component, we move it to the **parent (App)**.
// 🏆 Now, both `Increment` and `Decrement` can receive `count` via props.
// 🏆 This allows both components to modify the same state properly.
// 🏆 This technique is called **State Lifting** (lifting state to the nearest common ancestor).
// ------------------------------------------------------------

function App() {
    const [count, setCount] = useState(0); // 📌 State is now in Parent (App)

    return (
        <>
            <h1>Hello Coder Army</h1>
            <Increment counts={count} setCounts={setCount} />
            <Decrement counts={count} setCounts={setCount} />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
