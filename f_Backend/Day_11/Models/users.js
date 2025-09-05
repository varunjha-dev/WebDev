//* ════════════════════════════════════════════════════════════════════════════════════
//* 🛡️ **ADVANCED USER SCHEMA - PRODUCTION-READY VALIDATION** 🛡️
//* ════════════════════════════════════════════════════════════════════════════════════

const mongoose = require('mongoose');
const { Schema } = mongoose;

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📋 **ENHANCED USER SCHEMA** - Complete Field Validation                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

const userSchema = new Schema({
    //! 👤 **FIRST NAME** - Required field with length constraints
    firstName: {
        type: String,
        required: true,        //? Must provide first name
        minLength: 3,         //! Minimum 3 characters
        maxLength: 20         //* Maximum 20 characters
    },
    
    //? 👤 **LAST NAME** - Optional field
    lastName: {
        type: String          //TODO Optional field, no validation
    },
    
    //! 🎂 **AGE** - Restricted age range for platform eligibility
    age: {
        type: Number,
        min: 14,              //? Minimum age requirement (Instagram-style)
        max: 70,              //* Maximum age limit
        required: true        //! Age is mandatory
    },
    
    //! ⚧️ **GENDER** - Custom validation with specific allowed values
    gender: {
        type: String,
        // enum: ["male", "female", "others"]  // Alternative approach
        
        //? **Custom Validator Function** - More flexible than enum
        validate(value) {
            if (!["male", "female", "others"].includes(value))
                throw new Error("Invalid Gender");
        }
    },
    
    //! 📧 **EMAIL ID** - Unique identifier with multiple validations
    emailId: {
        type: String,
        required: true,        //? Email is mandatory
        unique: true,          //! Must be unique across all users
        trim: true,           //* Remove extra spaces
        lowercase: true,       //? Convert to lowercase
        immutable: true       //! Cannot be changed after creation
    },
    
    //! 🔐 **PASSWORD** - Will be hashed before storage
    password: {
        type: String
        //TODO Add validation in API layer (length, complexity)
    },
    
    //? 📷 **PROFILE PHOTO** - Optional field with default value
    photo: {
        type: String,
        default: "This is the default photo"
    }
}, { 
    timestamps: true          //! 📅 Automatically adds createdAt & updatedAt
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📦 **MODEL EXPORT** - Create and export User model
//* ════════════════════════════════════════════════════════════════════════════════════

const User = mongoose.model("user", userSchema); // collection name, schema
module.exports = User;

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎯 **KEY VALIDATION CONCEPTS USED**                                            │
//* ├─────────────────────────────────────────────────────────────────────────────────┤
//* │ ✅ required: true     → Field is mandatory                                     │
//* │ ✅ unique: true       → No duplicates allowed                                  │
//* │ ✅ min/max           → Numeric range validation                                │
//* │ ✅ minLength/maxLength → String length constraints                              │
//* │ ✅ trim: true        → Remove whitespace                                       │
//* │ ✅ lowercase: true   → Convert to lowercase                                    │
//* │ ✅ immutable: true   → Cannot be changed after creation                        │
//* │ ✅ validate()        → Custom validation function                              │
//* │ ✅ timestamps: true  → Auto createdAt/updatedAt fields                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘
