// 📦 Importing Required Hooks from React & Redux
import { useState } from "react";
import { useDispatch } from "react-redux";

// 🔄 Importing Actions from Slicer1.js
import { Decrement, Increment, CustomIncreaser } from "./Slicer1";

export default function CustomCounter() {

    // 🔢 State for Holding User Input Number
    const [number, setNumber] = useState("");

    // 🚀 useDispatch Hook: Used to Trigger Redux Actions
    const dispatch = useDispatch();

    // 🖱️ Function to Handle Button Click (Dispatch Custom Increment)
    function handleClick() {
        // 🔍 Convert Input Value to Number and Dispatch CustomIncreaser Action
        dispatch(CustomIncreaser(Number(number))); 

        // 🧹 Clear Input Field After Submission
        setNumber("");
    }

    return (
        <>
            {/* 🔢 Number Input Field */}
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
            />

            {/* 🚀 Button to Submit Custom Increment Value */}
            <button onClick={handleClick}>Submit</button>
        </>
    );
}
