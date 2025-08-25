//* ════════════════════════════════════════════════════════════════════════════════════
//* 🛡️ **AUTHENTICATION MIDDLEWARE - SECURE YOUR API** 🛡️
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔐 **AUTH MIDDLEWARE FUNCTION** - Simple Token-Based Security                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

const Auth = (req, res, next) => {
    //! **Hardcoded Security Token** - For demonstration purposes
    const token = "ABCDEF";
    
    //? **Access Control Logic** - Compare token and determine permission
    const access = token === "ABCDEF" ? 1 : 0;

    //* **Permission Check** - Grant or deny access
    if (!access) {
        //! **Unauthorized Access** - Send 403 Forbidden status
        res.status(403).send("No permission");
    } else {
        //? **Authorized Access** - Continue to next middleware/route handler
        next();
    }
};

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📦 **MODULE EXPORT** - Make middleware available to other files
//* ════════════════════════════════════════════════════════════════════════════════════

module.exports = {
    Auth, //TODO Export Auth function for use in main application
};

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **MIDDLEWARE CONCEPTS** - How Authentication Works
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                       🔐 AUTHENTICATION FLOW                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  Request → Auth Middleware → Token Check → Permission Decision                     │
│              ↓                    ↓              ↓                                 │
│         Extract Token        Compare Token    Allow/Deny Access                    │
│                                   ↓              ↓                                 │
│                               ✅ Match        ❌ No Match                          │
│                                   ↓              ↓                                 │
│                              next() called   403 Forbidden                         │
└─────────────────────────────────────────────────────────────────────────────────────┘
*/

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔧 **KEY SECURITY COMPONENTS**                                                │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! ✅ **Token Validation:** Static token comparison for access control
//? ✅ **HTTP Status 403:** Proper forbidden access response  
//* ✅ **Middleware Chain:** Uses next() to continue request processing
//TODO ✅ **Modular Export:** Reusable across different route handlers

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **USAGE EXAMPLE** - How to implement in routes                             │
//* └─────────────────────────────────────────────────────────────────────────────────┘

/*
! Import middleware
const { Auth } = require("./middleware/auth");

? Apply to protected routes
app.post("/admin", Auth, (req, res) => {
    Only executes if Auth middleware calls next()
    res.send("Admin access granted!");
});

//* Multiple middleware chaining
app.delete("/admin/:id", Auth, (req, res) => {
    Protected delete operation
    res.send("Item deleted by admin");
});
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 💡 **REAL-WORLD IMPROVEMENTS** - Production-Ready Enhancements
//* ════════════════════════════════════════════════════════════════════════════════════

//TODO 🔐 **Dynamic Tokens:** Use JWT or session-based authentication
//! 🌐 **Header Extraction:** Get token from Authorization header
//? 🗄️ **Database Verification:** Validate tokens against user database
//* 🕒 **Token Expiry:** Implement time-based token validation
//TODO 🔄 **Role-Based Access:** Different permission levels (admin, user, etc.)

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📚 **ENHANCED VERSION EXAMPLE**                                               │
//* └─────────────────────────────────────────────────────────────────────────────────┘

/*
const Auth = (req, res, next) => {
    Extract token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        return res.status(401).send("Access token required");
    }
    
    In real apps, verify JWT or check database
    if (token === "ABCDEF") {
        next(); // Continue to route handler
    } else {
        res.status(403).send("Invalid or expired token");
    }
};
*/

//* 🎯 **Simple yet effective middleware pattern for securing API endpoints!**
