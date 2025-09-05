//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **ENHANCED EXPRESS API** - Advanced CRUD with Validation 🚀
//* ════════════════════════════════════════════════════════════════════════════════════

const express = require('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");

//! Essential middleware for JSON parsing
app.use(express.json());

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ➕ **CREATE USER** - Registration with API-level validation                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

app.post("/register", async (req, res) => {
    try {
        //! **API-LEVEL VALIDATION** - Check mandatory fields before DB call
        const mandatoryField = ["firstName", "emailId", "age"];
        const isAllowed = mandatoryField.every((k) => Object.keys(req.body).includes(k));
        
        if (!isAllowed)
            throw new Error("Fields missing");
        
        //? Create user with all validations applied
        await User.create(req.body);
        res.send("User Registered Successfully");
        
    } catch (err) {
        res.send("Error " + err.message);
    }
})

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📖 **READ ALL USERS** - Get complete user list                                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

app.get("/info", async (req, res) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (err) {
        res.send("Error " + err.message);
    }
})

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎯 **READ SPECIFIC USER** - Get user by ID (NEW FEATURE)                       │
//* └─────────────────────────────────────────────────────────────────────────────────┘

app.get("/user/:id", async (req, res) => {
    try {
        //! Find user by MongoDB ObjectId
        const result = await User.findById(req.params.id);
        res.send(result);
    } catch (err) {
        res.send("Error " + err.message);
    }
})

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🗑️ **DELETE USER** - Remove user by ID (NEW FEATURE)                          │
//* └─────────────────────────────────────────────────────────────────────────────────┘

app.delete("/user/:id", async (req, res) => {
    try {
        //! Delete user using MongoDB ObjectId
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    } catch (err) {
        res.send("Error " + err.message);
    }
})

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔄 **UPDATE USER** - Partial update with validation (NEW FEATURE)              │
//* └─────────────────────────────────────────────────────────────────────────────────┘

app.patch("/user", async (req, res) => {
    try {
        //! **DESTRUCTURING** - Extract ID and update fields
        const { _id: id, ...update } = req.body;
        
        //? **IMPORTANT**: runValidators ensures schema validation during update
        await User.findByIdAndUpdate(id, update, { "runValidators": "true" });
        res.send("Updated Successfully");
        
    } catch (err) {
        res.send("Error " + err.message);
    }
})

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **SERVER STARTUP** - Database connection and server launch
//* ════════════════════════════════════════════════════════════════════════════════════

main()
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000, () => {
            console.log("Listening at port 3000");
        })
    })
    .catch((err) => console.log(err));

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📝 **HOMEWORK NOTED** - Learn .every() method and NPM Validator package        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **API ENDPOINTS SUMMARY** - Enhanced CRUD Operations
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ 🚀 ENHANCED API ENDPOINTS - Day 11                                                 │
├─────────────┬─────────────────┬──────────────┬─────────────────────────────────────┤
│ METHOD      │ ENDPOINT        │ OPERATION    │ DESCRIPTION                         │
├─────────────┼─────────────────┼──────────────┼─────────────────────────────────────┤
│ POST        │ /register       │ CREATE       │ ➕ Register user with validation    │
│ GET         │ /info           │ READ ALL     │ 📖 Get all users                   │
│ GET         │ /user/:id       │ READ ONE     │ 🎯 Get specific user by ID         │
│ DELETE      │ /user/:id       │ DELETE       │ 🗑️ Remove user by ID              │
│ PATCH       │ /user           │ UPDATE       │ 🔄 Partial update with validation  │
└─────────────┴─────────────────┴──────────────┴─────────────────────────────────────┘

//! **NEW FEATURES IN DAY 11:**
//? ✅ Route parameters (:id) for specific operations
//* ✅ API-level validation using .every() method
//! ✅ Enhanced schema with comprehensive validations
//? ✅ Password security concepts with bcrypt
//* ✅ runValidators option for update operations
//TODO ✅ Immutable fields and advanced validation patterns
*/
