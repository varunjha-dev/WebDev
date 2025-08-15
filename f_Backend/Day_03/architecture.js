//* ════════════════════════════════════════════════════════════════════════════════════
//* 🏗️ **NODE.JS ARCHITECTURE** 🏗️
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🤔 **WHAT IS NODE.JS?** - Quick Definition                                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Node.js = JavaScript runtime outside browser
    //? Uses Chrome's V8 engine to run JS code
    //* Perfect for servers, APIs, and tools

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🧩 **THE BIG 3 - KEY COMPONENTS YOU MUST KNOW**                              │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! 1️⃣ **V8 Engine** - The brain that runs your JavaScript
    //? 2️⃣ **Libuv** - The helper that handles slow tasks  
    //* 3️⃣ **Event Loop** - The coordinator that manages everything

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ⚡ **HOW IT WORKS** - Simple 3-Step Process                                   │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Step 1: V8 runs your JavaScript code
    //? Step 2: Slow tasks go to Libuv (background work)
    //* Step 3: Event Loop brings results back to your code

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **SIMPLE ARCHITECTURE FLOW**
//* ════════════════════════════════════════════════════════════════════════════════════

    /*
        📝 Your JS Code
            ↓
        🧠 V8 Engine (runs code)
            ↓
        🔧 Libuv (handles slow stuff)
            ↓
        🔄 Event Loop (brings results back)
            ↓
        ✅ Your Callback Runs
    */

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📁 **REAL EXAMPLE - SEE IT IN ACTION**
//* ════════════════════════════════════════════════════════════════════════════════════

const fs = require('fs');

//! 1. This runs first (V8 engine)
console.log('🚀 Start reading file...');

//? 2. This goes to Libuv (background work)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('❌ Error reading file');
        return;
    }
    //TODO 4. This runs when file is ready (Event Loop brings it back)
    console.log('📄 File content:', data);
});

//* 3. This runs immediately (doesn't wait)
console.log('✨ End of script');

// OUTPUT ORDER:
// 🚀 Start reading file...
// ✨ End of script  
// 📄 File content: Hello World!

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔑 **KEY INSIGHTS - REMEMBER THESE**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ **Single-Threaded** - One main thread for your code
    //? ✅ **Non-Blocking** - Never waits, always keeps running
    //* ✅ **Event-Driven** - Responds to events when they happen
    //TODO ✅ **Fast** - V8 engine compiles JS to machine code

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🏭 **SIMPLE FACTORY ANALOGY**                                                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! You (JavaScript) = Manager giving orders
    //? V8 Engine = Translator (understands your orders)
    //* Libuv = Factory workers (do the heavy lifting)
    //TODO Event Loop = Delivery person (brings results back)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **BOTTOM LINE - WHAT YOU NEED TO KNOW**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! Node.js = V8 + Libuv + Event Loop
    //? Your code never stops and waits, Time Tide and JS waits for none.
    //* Perfect for handling many users at once
    //TODO This is why Node.js is so popular for servers!
