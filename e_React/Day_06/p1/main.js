import React,{useState,useMemo,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";

// // 📌 useMemo Hook
// // 1️⃣ Counter Button: Increase/Decrease
// // 2️⃣ Input Field: Fibonacci Number Calculation

// function App() {
//     // 🔢 Counter State
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(null);

    /* ------------------------------------------------
       🚀 Recursive Fibonacci Function (O(2^n) Complexity)
       ⚠️ This is an **expensive** calculation.
       ⚠️ If we input a large number like 40 or 50, the page becomes **unresponsive**.
    ------------------------------------------------ */
//     function Fibonacci(n) {
//         if (n <= 1) return n;
//         return Fibonacci(n - 1) + Fibonacci(n - 2);
//     }

//     const result = Fibonacci(number);

//     return (
//         <>
//             {/* 🔢 Counter UI */}
//             <h1>Counter is: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>

//             {/* 🔢 Fibonacci Input & Result */}
//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input
//                     type="number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                 />
//             </div>
//         </>
//     );
// }

/* ------------------------------------------------
   ⚠️ Performance Issue (Why is the UI Slow?)
------------------------------------------------ */
// 🛑 Suppose we enter **40** in the input field. The result takes **a while** to appear.
// 🛑 Now, clicking the **Increment button** updates the counter **slowly**.
// 🛑 The page **lags** because each click **triggers a re-render of App()**.
// 🛑 During re-render, it **recalculates Fibonacci(number)**, which is an **expensive operation**.

// ✅ Solution: We don't need to recalculate Fibonacci when clicking Increment/Decrement.
// ✅ We should **cache previous Fibonacci results**.
// ✅ We can solve this using the **useMemo hook**.

// function App() {
//     // 🔢 Counter State
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(null);

    /* ------------------------------------------------
       🚀 Recursive Fibonacci Function (O(2^n) Complexity)
       ⚠️ This is an **expensive** calculation.
       ⚠️ If we input a large number like 40 or 50, the page becomes **unresponsive**.
    ------------------------------------------------ */
//     function Fibonacci(n) {
//         if (n <= 1) return n;
//         return Fibonacci(n - 1) + Fibonacci(n - 2);
//     }

    /* ------------------------------------------------
       🧠 Memoizing Fibonacci Calculation using useMemo
       ✅ useMemo ensures Fibonacci(number) is **only recalculated** 
          when `number` state changes.
       ✅ Prevents unnecessary recalculations when counter updates.
    ------------------------------------------------ */
//     const result = useMemo(() => {
//         Fibonacci(number);
//     }, [number]); // 🛑 Recalculates only if `number` changes

//     return (
//         <>
//             {/* 🔢 Counter UI */}
//             <h1>Counter is: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>

//             {/* 🔢 Fibonacci Input & Result */}
//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input
//                     type="number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                 />
//             </div>
//         </>
//     );
// }


// // 📌 Solving the Fibonacci Performance Issue using useEffect
// function App() {
//     // 🔢 Counter State
//     const [count, setCount] = useState(0);

//     // 🔢 Number input state (user enters the number here)
//     const [number, setNumber] = useState(null);

//     // 🔢 Result state (stores the Fibonacci result)
//     const [result, setResult] = useState(null);

    /* ------------------------------------------------
       🚀 Recursive Fibonacci Function (O(2^n) Complexity)
       ⚠️ This is an **expensive** calculation.
       ⚠️ If we input a large number like 40 or 50, the page becomes **slow**.
    ------------------------------------------------ */
//     function Fibonacci(n) {
//         if (n <= 1) return n;
//         return Fibonacci(n - 1) + Fibonacci(n - 2);
//     }

    /* ------------------------------------------------
       ⚡ Using useEffect to Calculate Fibonacci
       ✅ useEffect runs **after render** when `number` changes.
       ✅ It updates `result` state with the Fibonacci calculation.
       ⚠️ Causes **one extra re-render** because state (`result`) updates.
    ------------------------------------------------ */
//     useEffect(() => {
//         setResult(Fibonacci(number)); // 🛑 Expensive calculation triggered only when `number` changes
//     }, [number]); // 🔄 Dependency array ensures re-run only when `number` changes

//     return (
//         <>
//             {/* 🔢 Counter UI */}
//             <h1>Counter is: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>

//             {/* 🔢 Fibonacci Input & Result */}
//             <div>
//                 <h2>Fibonacci Number is: {result}</h2>
//                 <input
//                     type="number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                 />
//             </div>
//         </>
//     );
// }

/* ------------------------------------------------
   ⚠️ Why does useEffect cause an **extra re-render**?
------------------------------------------------ */
// 🛑 When `number` changes:
//  1️⃣ `setNumber(40)` updates `number` and triggers re-render.
//  2️⃣ `useEffect` sees `number` has changed and schedules `setResult(Fibonacci(40))`.
//  3️⃣ The result updates in state (`setResult`), causing another re-render.
//  4️⃣ Finally, UI updates with the Fibonacci result.
//
// ✅ In **useMemo**, no extra state is needed (no extra re-render).
// ✅ The result is stored in a **normal variable**, avoiding unnecessary re-renders.


// 🔥 Alternative Optimization: Avoid Recreating Fibonacci Function
// 🛑 On every re-render, `Fibonacci()` function is **re-created in memory**.
// ✅ **Solution 1**: Use `useCallback()` (but it's overkill for this case).
// ✅ **Solution 2**: **Move Fibonacci() outside the component** 
//                    so it's **created only once globally**.

/* ------------------------------------------------
   🎯 Fibonacci Calculation using useMemo in React
   ✅ Optimizing Expensive Calculations
   ✅ Prevents Unnecessary Recomputations
------------------------------------------------ */

// 📌 Recursive Fibonacci Function (🔴 Expensive Calculation: O(2^n))
// 🛑 If `n` is large (e.g., 40-50), it will take a lot of time!
function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function App() {
    // 🔢 Counter State (Used for Increment/Decrement)
    const [count, setCount] = useState(0);

    // 🔢 Number input state (User enters a number)
    const [number, setNumber] = useState(null);

    /* ------------------------------------------------
       ⚡ Using useMemo to Optimize Fibonacci Calculation
       ✅ It **remembers** the computed result and reuses it.
       ✅ Fibonacci will **only** be recalculated when `number` changes.
       ✅ Prevents recalculations when counter updates (which avoids lag).
    ------------------------------------------------ */
    const result = useMemo(() => Fibonacci(number), [number]); 

    return (
        <>
            {/* 🔢 Counter UI */}
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            {/* 🔢 Fibonacci Input & Result */}
            <div>
                <h2>Fibonacci Number is: {result}</h2>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
        </>
    );
}

// 🎯 Rendering the App inside React DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
