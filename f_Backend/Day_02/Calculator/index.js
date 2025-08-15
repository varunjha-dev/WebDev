//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📄 **Calculator/index.js** - Central Hub & Public API                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 📥 **Import all mathematical operations**
    //! Each module focused on single responsibility
    const sum = require("./add.js");         //? Addition capability
    const diff = require("./subtract.js");   //! Subtraction capability
    const product = require("./multiply.js"); //* Multiplication capability
    const division = require("./divide.js");  //TODO Division capability

    //* 🎁 **Public API Export** - Clean interface for external use
    //! This creates the calculator's public interface
    module.exports = { 
        sum,        //? Renamed 'add' to 'sum' for clarity
        diff,       //! Renamed 'subtract' to 'diff' for brevity
        product,    //* Kept 'multiply' as 'product' for mathematical accuracy
        division    //TODO Kept 'divide' as 'division' for consistency
    };

    //* 💡 **Design Benefits:**
        //? ✅ Single Responsibility - Each file has one job
        //! ✅ Easy Maintenance - Modify operations independently  
        //* ✅ Clean Imports - Simple require("./Calculator")
        //TODO ✅ Scalability - Easy to add new operations

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **ARCHITECTURE PATTERNS DEMONSTRATED**
//* ════════════════════════════════════════════════════════════════════════════════════

    //* 🏗️ **Modular Design Pattern:**
        //! Each operation = Separate module
        //? index.js = Central coordinator
        //* Clean public API = Easy consumption

    //* 📦 **Benefits of This Structure:**
        //TODO ✅ **Maintainability** - Change one operation without affecting others
        //! ✅ **Testability** - Test each function independently
        //? ✅ **Reusability** - Import specific operations where needed
        //* ✅ **Readability** - Clear file structure and purpose

    //* 🔄 **Alternative Import Patterns:**
        // Option 1: Import everything
        // const calc = require("./Calculator");
        // calc.sum(2, 3);

        // Option 2: Import specific functions (current approach)
        // const { sum, diff } = require("./Calculator");

        // Option 3: Import individual modules directly
        // const add = require("./Calculator/add");

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **KEY TAKEAWAYS - Remember These Points**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ **Module Resolution:** Node.js automatically finds index.js in folders
    //? ✅ **Single Responsibility:** One function per file = easier maintenance
    //* ✅ **Central Hub Pattern:** index.js coordinates and exposes public API
    //TODO ✅ **Clean Imports:** Descriptive names in exports improve readability

    //* 🎯 **This pattern scales beautifully for larger applications!**