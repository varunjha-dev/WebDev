import React, { useRef, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// function Stopwatch()
//{// ✅ State Variable: `time`
// - Stores the current time value
// const [time, setTime] = useState(0); 

// 🚨 Initial Incorrect Implementation:
// - `setTime(time + 1)` inside `setInterval` captures an outdated time value
// - React schedules state updates but doesn't immediately reflect them
// - This causes the stopwatch to keep adding 1 to the initial `time` value (always 0)
// function start() {
//     setInterval(() => {
//         setTime(time + 1); // ❌ Incorrect: Always updates based on initial time
//     }, 1000);
// }

// 🔄 Correct Implementation with Functional Update:
// - Uses a callback `(prevTime) => prevTime + 1`
// - Ensures `setTime` gets the latest state value
// - Prevents issues caused by stale closures
// function start() {
//     setInterval(() => {
//         setTime((prevTime) => prevTime + 1); // ✅ Correct: Always updates with latest state
//     }, 1000);
// }

// 🛠 How it Works:
// 1️⃣ `start()` is called → `setInterval` begins execution every second
// 2️⃣ `setTime((prevTime) => prevTime + 1);` ensures the latest `time` value is used
// 3️⃣ React properly updates `time`, making the stopwatch function correctly


//! ✅ useRef Hook: `intervalRef`
// - Stores the interval ID so we can clear it later
// - Prevents re-creating a new interval on every function call
// const intervalRef = useRef(null);

// 🎯 `start()` Function:
// - Starts the stopwatch by setting an interval
// - Stores the interval ID inside `intervalRef.current`
// function start() {
//     intervalRef.current = setInterval(() => {
//         setTime((prevTime) => prevTime + 1); // ✅ Ensures `time` updates correctly
//     }, 1000);
// }

// 🛑 `stop()` Function:
// - Stops the interval using `clearInterval(intervalRef.current)`
// - Resets `intervalRef.current` to `null` to avoid accidental reuse
// function stop() {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
// }

// 🔄 `reset()` Function:
// - Stops the interval (if running)
// - Resets `time` back to `0`
// - Ensures `intervalRef.current` is cleared
// function reset() {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//     setTime(0);
// }

// 🖥️ UI: Stopwatch Display & Controls
// return (
//     <>
//         <h1>StopWatch is: {time}</h1>
        
//         <button onClick={start}>Start</button>
//         <br /><br />

//         <button onClick={stop}>Stop</button>
//         <br /><br />

//         <button onClick={reset}>Reset</button>
//     </>
// );
// }

// 🚨 PROBLEM: Clicking "Start" multiple times makes time increase too fast! 🚨
// ---------------------------------------------------------------------------
// - When we click "Start", a new setInterval starts running every time.
// - If we click it 3-4 times, multiple intervals run simultaneously.
// - Each interval updates `time`, making it increase faster than 1 second per step.
// - Even clicking "Stop" does not stop all intervals (since multiple were created).
// ---------------------------------------------------------------------------
// ✅ SOLUTION: Prevent multiple intervals from running!
// - We use a **state variable `isRunning`** to track if the timer is already running.
// - If it's already running, we prevent another interval from starting.
// - Now, only one setInterval will run at a time.


function Stopwatch() {
    const [time, setTime] = useState(0); // ⏳ Tracks elapsed time
    const intervalRef = useRef(null); // ⏲️ Holds the setInterval reference
    const [isRunning, setIsRunning] = useState(false); // 🔍 Tracks if timer is running

    // ▶️ START FUNCTION:
    // - Starts setInterval **ONLY IF** it's not already running.
    function start() {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1); // ✅ Always uses the latest time
            }, 1000);
            setIsRunning(true); // ✅ Mark timer as running
        }
    }

    // ⏹️ STOP FUNCTION:
    // - Stops setInterval **ONLY IF** it's running.
    function stop() {
        if (isRunning) {
            clearInterval(intervalRef.current); // ✅ Stops the interval
            intervalRef.current = null;
            setIsRunning(false); // ❌ Marks timer as stopped
        }
    }

    // 🔄 RESET FUNCTION:
    // - Stops the interval (if running) and resets time to 0.
    function reset() {
        clearInterval(intervalRef.current); // ✅ Stop running interval
        intervalRef.current = null;
        setTime(0); // ⏳ Reset time
        setIsRunning(false); // ❌ Ensure timer is marked as stopped
    }

    return (
        <>
            <h1>StopWatch is: {time}</h1>

            <button onClick={start}>Start</button>
            <br /><br />

            <button onClick={stop}>Stop</button>
            <br /><br />

            <button onClick={reset}>Reset</button>
        </>
    );
}

ReactDOM>createRoot(document.getElementById('root')).render(<Stopwatch />);