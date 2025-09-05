//* ════════════════════════════════════════════════════════════════════════════════════
//* 🍃 **MONGODB CONNECTION** - Secure Database Setup 🍃
//* ════════════════════════════════════════════════════════════════════════════════════

const mongoose = require('mongoose');

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔗 **DATABASE CONNECTION FUNCTION**                                            │
//* └─────────────────────────────────────────────────────────────────────────────────┘

async function main() {
    //! Connect to MongoDB Atlas - Instagram database
    await mongoose.connect("xxxxxxxxxxxxxxxxxxxxxxxxx");
    
    //? Connection successful - ready for operations
}

module.exports = main;

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 💡 **SECURITY NOTE**: In production, use environment variables!                │
//* │ Example: process.env.MONGODB_URI instead of hardcoded connection string       │
//* └─────────────────────────────────────────────────────────────────────────────────┘
