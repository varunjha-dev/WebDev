// 📦 Importing Required Hooks from React-Redux
import { useDispatch, useSelector } from "react-redux"; 

// 🔄 Importing Actions from Slicer1.js
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting() {

    // 🎯 Getting the current counter value from Redux store
    const count = useSelector((state) => state.slice1.count); // ✅ Subscribing to state updates

    // 🚀 useDispatch Hook: Used to trigger Redux actions
    const dispatch = useDispatch(); 

    // 🛠 Debugging: Logging the Increment action function
    console.log(Increment()); 

    return (
        <>
            {/* 🏆 Display Counter Value */}
            <h1>Counter is {count}</h1> 

            {/* ➕ Increment Button: Dispatches Increment Action */}
            <button onClick={() => dispatch(Increment())}>Increment</button> 

            {/* ➖ Decrement Button: Dispatches Decrement Action */}
            <button onClick={() => dispatch(Decrement())}>Decrement</button> 

            {/* 🔄 Reset Button: Dispatches Reset Action */}
            <button onClick={() => dispatch(Reset())}>Reset</button> 
        </>
    );
}
