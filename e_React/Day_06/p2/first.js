// 🛠 Importing React and Required Modules
// import React, { useState } from "react"; 
// import ReactDOM from "react-dom/client";
// import Second from "./Second";

// 📌 FUNCTION: App (Parent Component)
// ✅ This is the **main parent component (First Component)**.
// ✅ It **creates and manages the state variable** `count`.
// ✅ The state needs to be **accessible in the deepest child (Fifth Component)**.
// ✅ Currently, we are passing `count` and `setCount` to `Second`, which will pass it further down.
// function App() {/
    // const [count, setCount] = useState(0);

    // return (
    //     <>
    //         <h1>Hello Coder Army</h1>
    //         {/* 🏷️ Passing state `count` and function `setCount` to Second (next child) */}
    //         <Second count={count} setCount={setCount} />
    //     </>
    // );
// }

// 🔥 RENDERING THE APP COMPONENT INTO THE ROOT ELEMENT
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// 🛠 PROBLEM STATEMENT:
// 📌 We need to use `count` and `setCount` inside the **Fifth Component**.
// 📌 Currently, we **pass these props down through multiple levels**:
//     First → Second → Third → Fourth → Fifth  
// 📌 However, **Second, Third, and Fourth have no use for `count` or `setCount`**, but they still have to receive and pass them.

// 🚨 DRAWBACKS:
// ❌ **Unnecessary Prop Drilling** → These intermediate components don’t need `count`, yet they are forced to pass it down.
// ❌ **Extra Re-renders** → Whenever `count` changes, Second, Third, and Fourth **also re-render**, even though they don't use it.
// ❌ **Scalability Issues** → If we add more levels in the future, managing state like this becomes **a nightmare**.

// 🔍 QUESTION: Is there a better way to send `count` directly to `Fifth` without passing it through all components?
// ✅ **SOLUTION:** We can use **Context API** or a **State Management Library (Redux, Zustand, etc.)** to avoid prop drilling!
// * or
// Here we have another hook useContext it solves all these problems
// ✅ Here we have another hook `useContext`, which solves all the problems of prop drilling

// 🛠 Importing Required Modules
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import GlobalContext from "./Global";

function App() {

    // 🔢 State Variable for Counter
    // ✅ We want to keep this in `GlobalContext` for global access
    const [count, setCount] = useState(0);

    return (
        <>
            {/* 🌍 Providing Global State to All Child Components */}
            {/* ✅ Now, `count` and `setCount` are available to all child components */}
            <GlobalContext.Provider value={{ counts: count, setCounts: setCount }}>

                {/* 🏷️ Displaying the Counter */}
                <h1>Hello Coder Army {count}</h1> 

                {/* 🔄 Rendering Child Component `Second` */}
                <Second />  

            </GlobalContext.Provider> 
        </>
    );
}

// ✅ Now, this state variable is accessible to all its children and sub-children
// ✅ Instead of `value={{counts: count, setCounts: setCount}}`, we can also write:
//    🔹 `value={{count: count, setCount: setCount}}`
//    🔹 If the key and value names are the same, we can simply use: `value={{count, setCount}}`

// 🚨 IMPORTANT: 
// ✅ The previous data inside `GlobalContext` gets **erased** and **new data gets updated**
// ✅ This updated data is **only accessible to its children and sub-children**
// ✅ Any component **outside** this provider will still have the old context data

// 🔥 Rendering the `App` Component Inside `root` Element
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
