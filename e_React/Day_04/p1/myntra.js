// ✅ Importing required dependencies  
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// ✅ Importing components  
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";

// ✅ Importing dummy data  
import arr from "./utils/dummy";
// import { greet, meet } from "./utils/dummy"; // Normal import  

// 📌 Renaming imported functions (useful if conflicts exist)
// import { greet as goa, meet as chandigarh } from "./utils/dummy";
// Now, we can use `goa()` and `chandigarh()` instead of `greet()` and `meet()`

// ✅ Main App Component  
function App() {
    
    // 📌 useState Hook for managing the array state  
    let [A, setA] = useState(arr); 

    // 📌 Function to sort array based on price (Low to High)  
    function sortArray() {
        A.sort((a, b) => a.price - b.price); // Sorting by price (ascending order)

        // ❌ Why UI is not updating?
        // - React state updates only when the reference (memory address) of the state changes.
        // - Since `A` is an array (stored in heap memory), sorting modifies the same reference.
        // - React doesn't detect this as a "new change" and doesn't re-render the UI.

        // ✅ Solution: Create a new array (clone) to change the reference.
        setA([...A]); // This forces React to recognize the state update
    }

    // 📌 Function to filter items with price above 499  
    function priceAbove499() {
        const B = arr.filter((value) => value.price > 499); // Filtering items
        setA(B); // Updating state with filtered data
    }

    return (
        <>
            {/* ✅ Header Component */}
            <Header />

            {/* ✅ Buttons for Sorting & Filtering */}
            <button onClick={sortArray}>Sort By Price</button>
            <button onClick={priceAbove499}>Price above 499</button>

            {/* ✅ Rendering Cards */}
            <div className="card-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {
                    A.map((value, index) => (
                        <Card 
                            key={index} // ⚠️ Temporary key (not ideal, will discuss later)
                            cloth={value.cloth} 
                            offer={value.Offer} 
                            price={value.price} 
                        />
                    ))
                }
            </div>

            {/* ✅ Footer Component */}
            <Footer />
        </>
    );
}

/*
📌 Why do we need `key` in React lists?
- React needs a unique key to efficiently update & re-render items.
- Currently, `index` is used as a temporary key (⚠️ Not recommended).
- The ideal approach is to use a **unique ID** from the data itself.
*/

// ✅ Rendering the App inside the root div  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
