//* ════════════════════════════════════════════════════════════════════════════════════
//* 🍃 **MONGOOSE DATABASE OPERATIONS - COMPLETE CRUD IMPLEMENTATION** 🍃
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📁 **FILE: getting-started.js** - Main Database Connection File               │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! Import Mongoose ODM library for MongoDB operations
// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
//* ════════════════════════════════════════════════════════════════════════════════════
//* ⚡ **MAIN DATABASE CONNECTION FUNCTION** - Central Database Operations
//* ════════════════════════════════════════════════════════════════════════════════════

async function main() {
  //* 🔗 **Database Connection** - Connect to MongoDB Atlas
  //! Connect to MongoDB Atlas cluster with credentials
  await mongoose.connect('process.env.MONGODB_URI');

  //? Alternative local connection with authentication:
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  //* ════════════════════════════════════════════════════════════════════════════════════
  //* 📋 **SCHEMA DEFINITION** - User Document Structure (Commented Examples)
  //* ════════════════════════════════════════════════════════════════════════════════════

  //* 🏗️ **User Schema Definition** - Defines document structure
//   const userSchema = new Schema({
//   name: String, // String is shorthand for {type: String}
//   age: Number,
//   city: String,
//   gender: String
// });

  //* ════════════════════════════════════════════════════════════════════════════════════
  //* 🏭 **MODEL CREATION & DOCUMENT OPERATIONS** - CRUD Implementation
  //* ════════════════════════════════════════════════════════════════════════════════════

  //* 📦 **Model Creation** - Converting Schema to Usable Model
  //! Model ko Create === collection ko create karna (Table ko create Karna)
// const user = mongoose.model('user', userSchema);

  //* ┌─────────────────────────────────────────────────────────────────────────────────┐
  //* │ ➕ **CREATE OPERATIONS** - Adding Documents to Database                       │
  //* └─────────────────────────────────────────────────────────────────────────────────┘

  //* 🔧 **Method 1: Constructor + Save Pattern**
  //? Document ko create kiya hai or Object ko create kiya hai
// const user1 = new user({name:"Rohit", age: 21, city: "Delhi", gender: "male", college:"GECT"})
// await user1.save();

  //* 🚀 **Method 2: Direct Create Method**
// user.create({name:"Mohan", age: 23, city: "NOIDA", gender: "male", college:"GECT"})

  //* 📦 **Method 3: Bulk Insert Multiple Documents**
// await user.insertMany([{name:"Mohit", age: 26, city: "Gr. NOIDA", gender: "male", college:"GECT"},{name:"Mohini", age: 23, city: " New NOIDA", gender: "female", college:"GECT"}])

  //* ┌─────────────────────────────────────────────────────────────────────────────────┐
  //* │ 📖 **READ OPERATIONS** - Retrieving Documents from Database                   │
  //* └─────────────────────────────────────────────────────────────────────────────────┘

  //* 🔍 **Find All Documents** - Retrieve everything from collection
// const ans = await user.find({});
// console.log(ans)

  //* 🎯 **Find Specific Documents** - Query with conditions
  //! find all documents named john and at least 18
// const ans1 = await user.find({ name: 'Mohini'})
// console.log(ans1)

}

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📦 **MODULE EXPORT** - Making Function Available to Other Files
//* ════════════════════════════════════════════════════════════════════════════════════

//TODO Export main function for use in other parts of application
module.exports = main;

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **MONGOOSE CRUD OPERATIONS GUIDE** - Complete Reference
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        🍃 MONGOOSE CRUD OPERATIONS MATRIX                          │
├─────────────┬───────────────────────┬─────────────────────────────────────────────┤
│ OPERATION   │       METHODS         │              DESCRIPTION                    │
├─────────────┼───────────────────────┼─────────────────────────────────────────────┤
│ CREATE      │ new + save()          │ Create instance, then save to database     │
│ CREATE      │ Model.create()        │ Direct creation and save in one step       │
│ CREATE      │ Model.insertMany()    │ Insert multiple documents efficiently      │
│ READ        │ Model.find()          │ Find all documents matching criteria       │
│ READ        │ Model.findOne()       │ Find single document matching criteria     │
│ READ        │ Model.findById()      │ Find document by MongoDB ObjectId          │
│ UPDATE      │ findByIdAndUpdate()   │ Update document by ID and return new doc   │
│ UPDATE      │ Model.updateOne()     │ Update first matching document             │
│ UPDATE      │ Model.updateMany()    │ Update all matching documents              │
│ DELETE      │ findByIdAndDelete()   │ Delete document by ID                      │
│ DELETE      │ Model.deleteOne()     │ Delete first matching document             │
│ DELETE      │ Model.deleteMany()    │ Delete all matching documents              │
└─────────────┴───────────────────────┴─────────────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 💡 **PRACTICAL EXAMPLES** - Real-World Usage Patterns
//* ════════════════════════════════════════════════════════════════════════════════════

/*
! **Complete CRUD Example Implementation:**

// 1. CONNECT TO DATABASE
await mongoose.connect('mongodb://localhost:27017/myapp');

// 2. DEFINE SCHEMA
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

// 3. CREATE MODEL
const User = mongoose.model('User', userSchema);

// 4. CREATE OPERATIONS
//? Method 1: Constructor + Save
const user1 = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 25
});
await user1.save();

//! Method 2: Direct Create
const user2 = await User.create({
  name: 'Jane Smith',
  email: 'jane@example.com',
  age: 28
});

//* Method 3: Insert Many
await User.insertMany([
  { name: 'Bob', email: 'bob@example.com', age: 30 },
  { name: 'Alice', email: 'alice@example.com', age: 26 }
]);

// 5. READ OPERATIONS
//TODO Find all users
const allUsers = await User.find({});

//! Find specific users ex age less than 30
const youngUsers = await User.find({ age: { $lt: 30 } });

//? Find single user
const specificUser = await User.findOne({ name: 'John Doe' });

//! Find by ID
const userById = await User.findById(user1._id);

// 6. UPDATE OPERATIONS
//* Update single user
await User.findByIdAndUpdate(
  user1._id, 
  { age: 26 }, 
  { new: true }
);

//? Update multiple users
await User.updateMany(
  { age: { $lt: 25 } },
  { $set: { status: 'young' } }
);

// 7. DELETE OPERATIONS
//! Delete by ID
await User.findByIdAndDelete(user1._id);

//TODO Delete multiple
await User.deleteMany({ age: { $gt: 50 } });
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS & BEST PRACTICES** - Essential Knowledge
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Connection Management:** Always establish connection before operations
//? ✅ **Schema First:** Define schema structure before creating models
//* ✅ **Model = Collection:** mongoose.model() creates/connects to MongoDB collection
//TODO ✅ **Async Operations:** All Mongoose operations are asynchronous (use await)
//! ✅ **Error Handling:** Wrap database operations in try-catch blocks

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ⚠️ **PERFORMANCE & OPTIMIZATION TIPS**                                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//? 🚀 **Bulk Operations:** Use insertMany() for multiple documents (faster)
//! 📊 **Query Optimization:** Use indexes for frequently queried fields
//* 💾 **Connection Pooling:** Mongoose automatically manages connection pools
//TODO 🔍 **Selective Fields:** Use .select() to fetch only needed fields
//! ⚡ **Pagination:** Use .limit() and .skip() for large datasets

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **NEXT STEPS - ADVANCED FEATURES**                                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//TODO 🔧 **Add Validation:** Schema validation rules and custom validators
//! 🎯 **Add Middleware:** Pre/post hooks for business logic
//? 📊 **Add Indexing:** Database indexes for query performance
//* 🛡️ **Add Population:** Reference other collections and populate data
//TODO 🌐 **Add Aggregation:** Complex data analysis and reporting

//* 🎓 **Perfect Starting Point:** Complete database operations foundation ready for scaling!
