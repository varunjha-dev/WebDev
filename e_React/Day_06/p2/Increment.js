// ------------------------------------------------------------
// 🔍 SCENARIO 1: Increment Component with State Passed from Parent
// ------------------------------------------------------------
// ✅ In this version, the state `counts` and function `setCounts` are received as **props** from the parent.
// ✅ Clicking the button **updates the parent’s state** (not just local state).
// ✅ This allows the parent component (`App`) to share the same state with other components.
// ------------------------------------------------------------

// function Increment({counts,setCounts}){ 
//     return (
//         <>
//             <h2>Child Counter is {counts}</h2>
//             <button onClick={()=> setCounts(counts + 1)}>Increment</button>
//         </>
//     )
// }

// ------------------------------------------------------------
// 🔍 SCENARIO 2: Increment Component with Local State
// ------------------------------------------------------------
// ✅ Here, the state `counts` is created **inside** the `Increment` component itself.
// ✅ Clicking the button only updates the local state inside `Increment`.
// ✅ However, this creates a **problem**: The parent (`App`) or other child components cannot access this state!
// ------------------------------------------------------------

// import { useState } from "react";
// function Increment(){
//     const [counts,setCounts] = useState(0);
//     return (
//         <>
//             <h2>Child Counter is {counts}</h2>
//             <button onClick={()=> setCounts(counts + 1)}>Increment</button>
//         </>
//     )
// }

// ------------------------------------------------------------
// ✅ FINAL VERSION: Lifting State to Parent
// ------------------------------------------------------------
// 🏆 Here, `Increment` **does not create its own state** but receives it from the parent (`App`).
// 🏆 This ensures that any updates to `counts` are reflected in the parent and any sibling components (e.g., `Decrement`).
// 🏆 Now, both `Increment` and `Decrement` can modify the same `counts` value correctly.
// ------------------------------------------------------------

function Increment({ counts, setCounts }) {
    return (
        <>
            <h2>Child Counter is {counts}</h2>
            <button onClick={() => setCounts(counts + 1)}>Increment</button>
        </>
    );
}

export default Increment;
