//* ════════════════════════════════════════════════════════════════════════════════════
//* 🏗️ **MONGOOSE SCHEMA - STRUCTURED DATA MODELING FOR MONGODB** 🏗️
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **1. IMPORTS & SETUP** - Essential Dependencies                            │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! Import Mongoose ODM (Object Document Mapper)
const mongoose = require('mongoose');

//? Extract Schema constructor for cleaner code
const { Schema } = mongoose;

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📋 **2. SCHEMA DEFINITION** - Document Structure Blueprint
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📊 **USER SCHEMA STRUCTURE** - Defining Document Shape                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

const userSchema = new Schema({
  //! Define field types using shorthand notation
  name: String,     //? String is shorthand for {type: String}
  age: Number,      //* Number type for numeric values
  city: String,     //TODO String type for text data
  gender: String    //! Another string field for categorical data
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🏭 **3. MODEL CREATION** - Converting Schema to Usable Model
//* ════════════════════════════════════════════════════════════════════════════════════

//! Create Model from Schema - This maps to 'users' collection in MongoDB
const user = mongoose.model('user', userSchema);

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📦 **4. MODULE EXPORT** - Making Model Available to Other Files
//* ════════════════════════════════════════════════════════════════════════════════════

//? Export the model for use in other parts of the application
module.exports = user;

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **MONGOOSE SCHEMA CONCEPTS** - Understanding the Foundation
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        🏗️ MONGOOSE ARCHITECTURE FLOW                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  Schema Definition → Model Creation → Collection Mapping → Document Operations     │
│        ↓                  ↓               ↓                      ↓                 │
│   Field Structure    Mongoose Model   MongoDB Collection    CRUD Operations       │
│     & Validation       Constructor      ('users')           (Save, Find, etc.)    │
└─────────────────────────────────────────────────────────────────────────────────────┘
*/

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎯 **SCHEMA PURPOSE & BENEFITS**                                              │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! ✅ **Document Structure:** Defines the shape and fields of MongoDB documents
//? ✅ **Type Safety:** Ensures data types are consistent across documents
//* ✅ **Validation:** Provides built-in and custom validation capabilities
//TODO ✅ **Middleware Support:** Allows pre/post hooks for document operations
//! ✅ **Method Definition:** Enables custom instance and static methods

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📊 **COMMON SCHEMA TYPES & EXAMPLES**                                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

/*
//? Extended Schema Example with More Types:
const advancedUserSchema = new Schema({
  // Basic Types
  name: String,                    // Text data
  age: Number,                     // Numeric data
  isActive: Boolean,               // True/false values
  birthDate: Date,                 // Date objects
  
  // Advanced Types
  profilePicture: Buffer,          // Binary data
  metadata: Schema.Types.Mixed,    // Any type of data
  userId: Schema.Types.ObjectId,   // MongoDB ObjectId
  
  // Array Types
  hobbies: [String],              // Array of strings
  scores: [Number],               // Array of numbers
  
  // Nested Objects
  address: {
    street: String,
    city: String,
    zipCode: String
  },
  
  // Advanced Options
  email: {
    type: String,
    required: true,      // Validation: field is mandatory
    unique: true,        // Validation: must be unique
    lowercase: true      // Transform: convert to lowercase
  },
  
  createdAt: {
    type: Date,
    default: Date.now    // Default value: current timestamp
  }
});
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔧 **SCHEMA USAGE PATTERNS** - How to Use This Model
//* ════════════════════════════════════════════════════════════════════════════════════

/*
//! Import and use the model in other files:
const User = require('./path/to/this/file');

//? Create new user document:
const newUser = new User({
  name: 'John Doe',
  age: 25,
  city: 'New York',
  gender: 'Male'
});

//* Save to database:
await newUser.save();

//TODO Find users:
const users = await User.find({ city: 'New York' });

//! Update user:
await User.findByIdAndUpdate(userId, { age: 26 });

//? Delete user:
await User.findByIdAndDelete(userId);
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📋 **SCHEMA FIELD TYPES REFERENCE** - Quick Type Guide
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                       🏗️ MONGOOSE SCHEMA TYPES REFERENCE                          │
├─────────────────┬───────────────────────┬─────────────────────────────────────────┤
│   SCHEMA TYPE   │       JAVASCRIPT      │              DESCRIPTION                │
├─────────────────┼───────────────────────┼─────────────────────────────────────────┤
│ String          │ String                │ Text data, UTF-8 encoded               │
│ Number          │ Number                │ Integer or floating-point numbers      │
│ Boolean         │ Boolean               │ True/false values                       │
│ Date            │ Date                  │ Date and time objects                   │
│ Buffer          │ Buffer                │ Binary data (images, files)            │
│ Mixed           │ Any                   │ Any data type (use sparingly)          │
│ ObjectId        │ ObjectId              │ MongoDB unique identifiers             │
│ Array           │ Array                 │ Lists of values [String], [Number]     │
│ Embedded        │ Object                │ Nested document structures             │
└─────────────────┴───────────────────────┴─────────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS & BEST PRACTICES** - Essential Knowledge
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Naming Convention:** Use lowercase for model names (mongoose auto-pluralizes)
//? ✅ **Schema First:** Always define schema before creating models
//* ✅ **Type Safety:** Use appropriate types for data validation
//TODO ✅ **Modular Design:** Export models for reuse across application
//! ✅ **Collection Mapping:** Model name 'user' → MongoDB collection 'users'

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **NEXT STEPS - SCHEMA ENHANCEMENTS**                                       │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//TODO 🔧 **Add Validation:** Required fields, min/max values, custom validators
//! 🎯 **Add Methods:** Instance methods for document operations
//? 📊 **Add Indexes:** Database indexes for query performance
//* 🛡️ **Add Middleware:** Pre/post hooks for business logic
//TODO 🌐 **Add Virtuals:** Computed properties that aren't stored