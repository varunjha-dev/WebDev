//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔧 **LIBUV - THE HELPER BEHIND NODE.JS MAGIC** 🔧
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🤔 **WHAT IS LIBUV?** - The Simple Answer                                     │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Libuv = Node.js's background helper
    //? Handles slow tasks (files, network, timers) without blocking code
    //* Written in C language for maximum speed

    //* 🍳 **Simple Analogy:**
        // Node.js = Chef giving orders
        // Libuv = Kitchen assistant doing the heavy work
        // Result: Chef can handle multiple orders without waiting

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ⚡ **WHY LIBUV MATTERS** - The Power Behind Node.js                           │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Without Libuv: Node.js would be SLOW (one task at a time)
    //? With Libuv: Node.js can juggle thousands of tasks
    //* Makes Node.js non-blocking and super fast

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🏗️ **HOW IT WORKS** - Simple Process                                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Step 1: You write Node.js code
    //? Step 2: Node.js sends slow tasks to Libuv
    //* Step 3: Libuv does work in background
    //TODO Step 4: When done, Libuv tells Node.js "I'm finished!"

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📁 **EXAMPLE 1: FILE READING - SEE LIBUV IN ACTION**
//* ════════════════════════════════════════════════════════════════════════════════════

const fs = require("fs");

//! This happens instantly
console.log("🚀 Starting...");

//? Libuv handles this in background
fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("❌ Error reading file");
        return;
    }
    console.log("📄 File content:", data);
});

//* This doesn't wait for file reading
console.log("🔄 Doing other work...");

// OUTPUT ORDER:
// 🚀 Starting...
// 🔄 Doing other work...
// 📄 File content: Hello World!

//* 💡 **What Just Happened?**
    //! Node.js didn't wait for file reading
    //? Libuv read the file in background
    //* Code kept running while file was being read

//* ════════════════════════════════════════════════════════════════════════════════════
//* ⏰ **EXAMPLE 2: TIMERS - LIBUV MANAGES TIME**
//* ════════════════════════════════════════════════════════════════════════════════════

//? Set timer (Libuv watches the clock)
setTimeout(() => {
    console.log("⏰ 2 seconds passed!");
}, 2000);

//! This runs immediately
console.log("⏳ Waiting for timer...");

// OUTPUT:
// ⏳ Waiting for timer...
// (2 seconds later)
// ⏰ 2 seconds passed!

//* 💡 **What Happened?**
    //! Libuv started counting 2 seconds
    //? Code continued running immediately  
    //* After 2 seconds, Libuv triggered the callback

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🧠 **KEY CONCEPTS - REMEMBER THESE**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🎯 **Event Loop** - Libuv's coordination system
    //! Checks: "Is anything finished yet?"
    //? Runs callbacks when tasks complete
    //* Keeps everything organized

//* 👥 **Thread Pool** - Libuv's worker team  
    //! 4 background workers by default
    //? Handle heavy tasks (file operations)
    //* Can be changed with UV_THREADPOOL_SIZE

//* ⚡ **Non-blocking Magic**
    //! Your code never stops and waits
    //? Everything happens in parallel
    //* Results come back through callbacks

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🍕 **RESTAURANT ANALOGY - EASY TO UNDERSTAND**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! You (Node.js) = Customer ordering food
    //? Kitchen (Libuv) = Cooks preparing your order
    //* Waiter (Event Loop) = Brings food when ready
    //TODO Result: You can chat while food is being prepared

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📝 **QUICK FACTS - GOOD TO KNOW**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ Libuv handles: Files, Network, Timers, DNS
    //? ✅ Works on: Windows, Mac, Linux
    //* ✅ Thread pool: 4 threads by default
    //TODO ✅ Network operations: Often use OS directly (no threads needed)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **THE BOTTOM LINE**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! Libuv = The reason Node.js is fast
    //? Makes async operations possible
    //* You don't need to manage it - it just works!
    //TODO Focus on writing code, let Libuv handle the heavy lifting
