import React,{useState,useRef,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";


// function App() {
//     const [count, setCount] = useState(0); // ✅ State variable (Triggers re-render)
//     let money = 0; // ❌ Normal variable (Resets on re-render)

//     return (
//         <>
//             {/* 🔢 Counter Section */}
//             <h1>Counter is: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>

//             {/* 💰 Money Section */}
//             <h1>Money is: {money}</h1>
//             <button onClick={() => {
//                     money++; // ✅ Increases value but doesn't trigger UI update
//                     console.log(money); // ✅ Logs updated value in console
//                 }}
//             >
//                 Increment
//             </button>
//         </>
//     );
// }

// 🔍 Why does 'money' reset?
// - Because 'money' is a normal variable, React doesn't track it
// - Every re-render reinitializes 'money' to 0

// 🔥 Solution: Use useRef to persist value across re-renders


function App() { 
    const [count, setCount] = useState(0); // ✅ State variable (Triggers re-render)
    let money = useRef(0); // ✅ useRef maintains value across re-renders

    return (
        <>
            {/* 🔢 Counter Section */}
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            {/* 💰 Money Section */}
            <h1>Money is: {money.current}</h1>
            <button onClick={() => {
                    money.current = money.current + 1; // ✅ Updates money without re-rendering
                    console.log(money.current); // ✅ Logs updated value
                }}
            >
                Increment
            </button>
        </>
    );
}

// 🔍 How useRef Works:
// - Unlike state, useRef doesn’t cause re-render when updated
// - It persists value across re-renders
// - The value is stored in `money.current`

// 🔥 Now, 'money' retains its value even after counter increments!

ReactDOM.createRoot(document.getElementById('root')).render(<App />);