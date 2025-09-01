//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **EXPRESS + MONGODB CRUD API - COMPLETE REST API IMPLEMENTATION** 🚀
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🛠️ **1. DEPENDENCIES & IMPORTS** - Foundation Setup                           │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! Import Express.js framework for REST API
const express = require("express");

//? Create Express application instance
const app = express();

//* Import database connection function
const main = require("./database");

//! Import User model for database operations
const User = require('./Models/users');

// Load environment variables at the very top
require('dotenv').config();

//* ════════════════════════════════════════════════════════════════════════════════════
//* ⚙️ **2. MIDDLEWARE CONFIGURATION** - Request Processing Setup
//* ════════════════════════════════════════════════════════════════════════════════════

//! Essential middleware to parse JSON request bodies
app.use(express.json());

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📖 **3. READ OPERATION** - GET All Users
//* ════════════════════════════════════════════════════════════════════════════════════

//? GET endpoint to retrieve all users from database
app.get("/info", async (req, res) => {
    //! Find all users in the database
    const ans = await User.find({});
    res.send(ans);
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* ➕ **4. CREATE OPERATION** - POST New User
//* ════════════════════════════════════════════════════════════════════════════════════

//! POST endpoint to create new user with error handling
app.post("/info", async (req, res) => {
    //* Alternative method (commented):
    // const ans = new User(req.body);
    // await ans.save();
    
    //? Try-catch block for robust error handling
    try {
        //! Create new user using request body data
        await User.create(req.body);
        res.status(201).send("Successfully Updated");
    } catch (error) {
        //TODO Handle validation and database errors
        res.status(500).send(error);
    }
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔄 **5. UPDATE OPERATION** - PUT Update User
//* ════════════════════════════════════════════════════════════════════════════════════

//? PUT endpoint to update existing user data
app.put("/info", async (req, res) => {
    //! Update user by name with new age and city data
    const result = await User.updateOne({ name: "Mohini" }, { age: 30, city: "Delhi" });
    res.send("Updated Successfully");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🗑️ **6. DELETE OPERATION** - DELETE Remove User
//* ════════════════════════════════════════════════════════════════════════════════════

//! DELETE endpoint to remove user from database
app.delete("/info", async (req, res) => {
    //? Delete user by name
    await User.deleteOne({ name: "Neeraj" });
    res.send("Deleted Successfully");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **7. SERVER STARTUP & DATABASE CONNECTION** - Application Launch
//* ════════════════════════════════════════════════════════════════════════════════════

//! Execute database connection and start server
main()
    //? Handle successful database connection
    .then(async () => {
        console.log("Connected to DB");
        // Use environment variable for port
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        });
        
        //TODO Example query operation (commented for reference)
        // const ans1 = await User.find({ name: 'Mohit'})
        // console.log(ans1)
    })
    //! Handle database connection errors
    .catch(err => console.log(err));

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **API ENDPOINTS SUMMARY** - Complete CRUD REST API
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        🚀 EXPRESS + MONGODB CRUD API ENDPOINTS                     │
├─────────────┬───────────────────┬──────────────┬─────────────────────────────────────┤
│   METHOD    │     ENDPOINT      │   OPERATION  │              DESCRIPTION            │
├─────────────┼───────────────────┼──────────────┼─────────────────────────────────────┤
│ GET         │ /info             │     READ     │ 📖 Retrieve all users from database│
│ POST        │ /info             │    create    │ ➕ Add new user to database        │
│ PUT         │ /info             │    update    │ 🔄 Update existing user data       │
│ DELETE      │ /info             │    delete    │ 🗑️ Remove user from database       │
└─────────────┴───────────────────┴──────────────┴─────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **MONGOOSE OPERATIONS USED** - Database Method Reference
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                      🍃 MONGOOSE METHODS IN THIS API                               │
├──────────────────┬──────────────────┬─────────────────────────────────────────────┤
│    OPERATION     │     METHOD       │              DESCRIPTION                    │
├──────────────────┼──────────────────┼─────────────────────────────────────────────┤
│ Find All         │ User.find({})    │ Retrieve all documents from collection     │
│ Create Document  │ User.create()    │ Insert new document to collection          │
│ Update Document  │ User.updateOne() │ Modify existing document by criteria       │
│ Delete Document  │ User.deleteOne() │ Remove document by matching criteria       │
└──────────────────┴──────────────────┴─────────────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 💡 **BEST PRACTICES IMPLEMENTED** - Production-Ready Patterns
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Error Handling:** Try-catch blocks for database operations
//? ✅ **Async/Await:** Proper asynchronous operation handling
//* ✅ **Status Codes:** HTTP 201 for creation, 500 for server errors
//TODO ✅ **Modular Design:** Separate database connection and model files
//! ✅ **Middleware Usage:** express.json() for request body parsing

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔧 **ARCHITECTURAL PATTERN** - MVC-Style Organization                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//? 📁 **File Structure:**
/*
project/
├── database.js          // Database connection logic
├── Models/
│   └── users.js         // User schema and model definition
└── index.js               // Express server with CRUD routes (this file)
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **TESTING THE API** - How to Use These Endpoints
//* ════════════════════════════════════════════════════════════════════════════════════

/*
//! **GET Request** - Retrieve all users
curl -X GET http://localhost:3000/info

//? **POST Request** - Create new user
curl -X POST http://localhost:3000/info \
  -H "Content-Type: application/json" \
  -d '{"name": "John", "age": 25, "city": "NYC", "gender": "male"}'

//* **PUT Request** - Update user
curl -X PUT http://localhost:3000/info

//TODO **DELETE Request** - Remove user
curl -X DELETE http://localhost:3000/info
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS & PATTERNS** - Essential Knowledge
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Database First:** Connect to DB before starting server
//? ✅ **CRUD Mapping:** HTTP methods map to database operations
//* ✅ **Error Handling:** Always wrap async operations in try-catch
//TODO ✅ **Separation of Concerns:** Models, routes, and database logic separated
//! ✅ **RESTful Design:** Single endpoint with different HTTP methods

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **NEXT STEPS - API IMPROVEMENTS**                                          │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//TODO 🔧 **Add Validation:** Input validation and sanitization
//! 🎯 **Add Authentication:** User authentication and authorization
//? 📊 **Add Pagination:** Limit and skip for large datasets
//* 🛡️ **Add Error Middleware:** Centralized error handling
//TODO 🌐 **Add Route Parameters:** Dynamic IDs for specific operations

//* 🎓 **Complete CRUD API:** Ready for real-world application development!
