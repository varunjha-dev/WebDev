import { useState } from "react";

// ------------------------------------------------------------
// 🔍 SCENARIO 1: Incorrect Decrement Component (Incomplete Code)
// ------------------------------------------------------------
// ❌ The below version has an **empty onClick handler**, meaning clicking 
//    the button would cause an error or do nothing at all. 
// ❌ There is **no state or props**, so it has no way to modify `counts`.
// ------------------------------------------------------------

// function Decrement(){
//     return (
//         <>
//             <button onClick={}>Decrement</button>  // ❌ Missing function in onClick
//         </>
//     )
// }

// ------------------------------------------------------------
// ✅ FINAL VERSION: Decrement with Lifted State from Parent
// ------------------------------------------------------------
// 🏆 This version correctly receives `counts` and `setCounts` from `App`.
// 🏆 Clicking the button **decreases** the `counts` state from the parent.
// 🏆 This ensures that both `Increment` and `Decrement` modify the same state.
// ------------------------------------------------------------

function Decrement({ counts, setCounts }) {
    return (
        <>
            <button onClick={() => setCounts(counts - 1)}>Decrement</button>
        </>
    );
}

export default Decrement;
