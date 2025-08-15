//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **MODULAR CALCULATOR - ARCHITECTURE EXAMPLE** 🎯
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📁 **Main.js** - Application Entry Point                                      │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 📥 **Import calculator functions from organized module**
    //! Beautiful destructuring - grab only what we need
    const { sum, diff, product, division } = require("./Calculator");

    //* 🧮 **Perform mathematical operations**
    console.log("🧮 Calculator Operations Demo:\n");

    const result1 = sum(2, 3);           //? Addition operation
    const result2 = diff(5, 2);          //? Subtraction operation  
    const result3 = product(2, 6);       //! Multiplication operation
    const result4 = division(6, 2);     //TODO Division operation

    //* 📊 **Display results with style**
    console.log(`➕ Addition:= ${result1}`);        // Output: 5
    console.log(`➖ Subtraction:= ${result2}`);     // Output: 3
    console.log(`✖️ Multiplication:= ${result3}`);   // Output: 24
    console.log(`➗ Division:= ${result4}`);       // Output: 5

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔍 **NODE.JS MODULE RESOLUTION ** - How It Works                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 🎯 **Why `require("./Calculator")` Works Without Exact Path?**
    
    //! **The Resolution Chain:** Node.js follows this intelligent lookup order:
    
    //? **Step 1:** Looks for `"./Calculator.js"` file
        // If found → loads the file directly
        // If not found → proceeds to Step 2
    
    //! **Step 2:** Checks if `"./Calculator"` is a directory
        // If it's a folder → looks for `"./Calculator/index.js"`
        // If index.js exists → loads it as the entry point
        // If no index.js → throws "Cannot find module" error
    
    //* **Step 3:** Additional file extensions checked
        // Also looks for: .json, .node, .mjs (in that order)

    //TODO **Key Insights:**
        // ✅ `index.js` = Default entry point for folders
        // ✅ Node.js assumes `.js` extension if not provided
        // ❌ Without `index.js`, you MUST specify exact file path
        // 🎯 This enables clean imports: `require("./Calculator")` vs `require("./Calculator/index.js")`
