//* ════════════════════════════════════════════════════════════════════════════════════
//* 🌟 **NODE.JS & MODULE SYSTEM - LEARNING GUIDE** 🌟
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🌟 **WHAT IS NODE.JS?** (Core Concept #1)                                     │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Node.js = JavaScript runtime outside the browser
    //? Built on Chrome's V8 engine
    //* Key Features: Non-blocking I/O, Event-driven, Single-threaded

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🧩 **MODULE SYSTEM** (Core Concept #2)                                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Modules = Reusable code blocks across files
    //? Two systems: CommonJS (old/reliable) vs ESM (new/standard)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🏛️ **COMMONJS (CJS) - 80% OF WHAT YOU'LL USE**
//* ════════════════════════════════════════════════════════════════════════════════════

    //* 📤 **Export Pattern** - How to share code
        // mathUtils.js
        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        //! The ONE pattern you need to remember
        module.exports = { add, subtract };

    //* 📥 **Import Pattern** - How to use shared code
        // calculator.js
        //? Method 1: Import everything
        const math = require('./mathUtils');
        console.log(math.add(2, 3)); // 5

        //! Method 2: Destructure (Most common)
        const { add, subtract } = require('./mathUtils');
        console.log(add(2, 3)); // 5

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📝 **REAL EXAMPLE: Simple Todo Manager**                                       │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 📁 **tasks.js** - The reusable module
        const tasks = [];

        const addTask = (task) => {
            tasks.push(task);
            return tasks;
        };

        const removeTask = (task) => {
            const index = tasks.indexOf(task);
            if (index > -1) tasks.splice(index, 1);
            return tasks;
        };

        //! Export the functions you want to share
        module.exports = { addTask, removeTask, tasks };

    //* 📁 **app.js** - Using the module
        //! Import what you need
        const { addTask, removeTask, tasks } = require('./tasks');

        addTask("Learn Node.js");
        addTask("Build an app");
        removeTask("Learn Node.js");
        
        console.log(tasks); // ["Build an app"]

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **ESM (Modern) - FOR NEW PROJECTS**
//* ════════════════════════════════════════════════════════════════════════════════════

    //* ⚙️ **Setup Required** (Choose ONE method):
        //? Method 1: Add to package.json → "type": "module"
        //? Method 2: Use .mjs file extension

    //* 📤 **Export Pattern** - Modern syntax
        // stringUtils.mjs
        export function toUpper(str) {
            return str.toUpperCase();
        }

        export function toLower(str) {
            return str.toLowerCase();
        }

    //* 📥 **Import Pattern** - Clean and explicit
        // app.mjs
        //! Must include file extension in ESM
        import { toUpper, toLower } from './stringUtils.mjs';

        console.log(toUpper("hello")); // "HELLO"
        console.log(toLower("WORLD")); // "world"

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔧 **TROUBLESHOOTING - Fix 80% of Issues**                                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! 🚨 "Cannot use import statement outside a module"
    //? → Add "type": "module" to package.json OR use .mjs extension

    //! 🚨 "require is not defined" 
    //? → You're in ESM mode, use import instead

    //! 🚨 "Cannot find module"
    //? → Check file path and include .mjs extension for ESM

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎯 **QUICK DECISION GUIDE**                                                   │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //TODO Learning Node.js? → Start with CommonJS (CJS)
    //TODO New project? → Use ESM 
    //TODO Working with existing code? → Match what's already there

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📚 **ESSENTIAL PATTERNS - MEMORIZE THESE**                                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 🏛️ **CommonJS Essentials:**
        //! Export: module.exports = { func1, func2 }
        //! Import: const { func1, func2 } = require('./file')

    //* 🚀 **ESM Essentials:**
        //! Export: export function myFunc() {}
        //! Import: import { myFunc } from './file.mjs'
        //! Setup: "type": "module" in package.json

//* ════════════════════════════════════════════════════════════════════════════════════
//* ✅ **COMPLETION CHECKLIST - Master These 5 Things**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ I can export functions using module.exports
    //! ✅ I can import functions using require()
    //! ✅ I understand the difference between CJS and ESM
    //! ✅ I can set up ESM using package.json
    //! ✅ I can troubleshoot common module errors
