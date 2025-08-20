//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔧 **EXPRESS.JS MIDDLEWARE - MASTER THE CHAIN** 🔧
//* ════════════════════════════════════════════════════════════════════════════════════

const express = require("express");
const app = express();

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **MULTIPLE ROUTE HANDLERS - UNDERSTANDING THE CHAIN**
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔗 **METHOD 1: MULTIPLE HANDLERS AS SEPARATE ARGUMENTS**                      │
//* └─────────────────────────────────────────────────────────────────────────────────┘

// Route Handler
// app.use("/user",(req,res,next)=>{
//     console.log("first");
//     next();
// },
// (req,res,next)=>{
//     console.log("Second");
//     next();
// },
// (req,res,next)=>{
//     console.log("Third");
//     // res.send("Hello I am Third");
//     next();
// },
// (req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// })

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📦 **METHOD 2: HANDLERS WRAPPED IN ARRAY**                                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! we can wrap all the route handler inside an array
// app.use("/user",[(req,res,next)=>{
//     console.log("first");
//     next();
// },
// (req,res,next)=>{
//     console.log("Second");
//     next();
// },
// (req,res,next)=>{
//     console.log("Third");
    // res.send("Hello I am Third");
//     next();
// },
// (req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// }])

//* 🎯 **Middleware Syntax Patterns:**
    //? app.use(route,RH,RH,RH,RH,RH.....)
    //! app.use(route,[RH,RH,RH,RH,RH.....])
    //* app.use(route,RH,[RH,RH,RH],RH.....)

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔄 **METHOD 3: SEPARATE MIDDLEWARE DEFINITIONS**                              │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//TODO we can also write it alag alag krke and work same like above
// app.use("/user",(req,res,next)=>{
//     console.log("first");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Second");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Third");
    // res.send("Hello I am Third");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// })

//* 💡 **what is middleware here:** jo beech mein hain, first three is middleware and 4th one is request/route handler

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📝 **PRACTICAL LOGGING MIDDLEWARE - REAL WORLD EXAMPLE**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🔍 **Global Logging Middleware** - Tracks all user requests
app.use("/user", (req, res, next) => { 
    //! this is now middleware working saving logs 
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🛣️ **ROUTE HANDLERS - ACTUAL REQUEST PROCESSING**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📖 **GET Route** - Retrieve user information
app.get("/user", (req, res) => {
    res.send("Info About User");
});

//* 📤 **POST Route** - Save user information
app.post("/user", (req, res) => {
    res.send("Info saved");
});

//* 🗑️ **DELETE Route** - Remove user information
app.delete("/user", (req, res) => {
    res.send("Info deleted");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **SERVER STARTUP**
//* ════════════════════════════════════════════════════════════════════════════════════

app.listen(3000, () => {
    console.log("Listening at port 3000");
});

//? here same code is repeatiting console.log(`${Date.now()} ${req.method} ${req.url}`); so we use middleware here

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **WHY MIDDLEWARE MATTERS - REAL WORLD BENEFITS**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📊 **Log Maintenance Benefits:**
    //! mere pass koi bhi request ayyi hme use log ko maintain krni hoti hain
    //? Timing, kis type ki req thi, url kya tha us req ka

//* 🔧 **Server Debugging & Monitoring:**
    //* benefit of log maintaining is suppose our server gets crashed then we are unable to find by which req this happens,
    //TODO if we maintained the log we would the req and we can work on it to maintain the server

//* 🛡️ **Additional Use Cases:**
    //! authentication bhi kiya ja sakta hai using middleware.

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **MIDDLEWARE CONCEPTS SUMMARY**
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        🔧 MIDDLEWARE EXECUTION FLOW                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  Request → Middleware 1 → Middleware 2 → Route Handler → Response                  │
│              ↓              ↓              ↓                                       │
│           next()         next()        res.send()                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘
*/

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎯 **KEY MIDDLEWARE PATTERNS**                                                │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! ✅ **Multiple Arguments:** app.use(path, handler1, handler2, handler3)
//? ✅ **Array Format:** app.use(path, [handler1, handler2, handler3])  
//* ✅ **Separate Definitions:** Multiple app.use() calls for same path
//TODO ✅ **Mixed Format:** app.use(path, handler1, [handler2, handler3], handler4)

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **COMMON MIDDLEWARE USE CASES**                                            │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! 📝 **Logging:** Track requests, timing, and user activity
//? 🛡️ **Authentication:** Verify user credentials and permissions
//* 📊 **Analytics:** Collect usage data and performance metrics  
//TODO 🔒 **Security:** CORS, rate limiting, input validation
//! 🎯 **Error Handling:** Centralized error processing and responses

//* 🎓 **Remember:** Middleware = Functions that execute BETWEEN request and response!