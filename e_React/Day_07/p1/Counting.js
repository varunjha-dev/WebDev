// 📦 Import Redux Hooks and Actions
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1"; // 🔗 Importing action creators from Slicer1

// 📌 Functional Component: Counting (A Simple Counter using Redux)
export default function Counting() {
    
    // 🎯 Getting the current count value from Redux store
    const count = useSelector((state) => state.slice1.count);

    // 🔄 Getting dispatch function to send actions to Redux
    const dispatch = useDispatch();

    // 🛠 Debugging: Logging the action creators (Just for reference)
    console.log(Increment()); // Logs the action object for Increment
    console.log(Decrement()); // Logs the action object for Decrement

    return (
        <>
            {/* 📊 Displaying the Current Count */}
            <h1>Counter is {count}</h1>

            {/* 🔼 Increment Button: Dispatches the Increment action */}
            <button onClick={() => dispatch(Increment())}>Increment</button>

            {/* 🔽 Decrement Button: Dispatches the Decrement action */}
            <button onClick={() => dispatch(Decrement())}>Decrement</button>

            {/* 🔄 Reset Button: Dispatches the Reset action */}
            <button onClick={() => dispatch(Reset())}>Reset</button>
        </>
    );
}
