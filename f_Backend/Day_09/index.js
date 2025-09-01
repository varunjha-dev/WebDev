//* ════════════════════════════════════════════════════════════════════════════════════
//* 🍃 **MONGODB NODE.JS CONNECTION - COMPLETE DATABASE OPERATIONS** 🍃
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **1. SETUP & IMPORTS** - Foundation                                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//! Import the MongoClient class from the 'mongodb' package
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

//? Alternative ES6 module import syntax:
// import { MongoClient } from 'mongodb'

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔐 **2. DATABASE CONNECTION CONFIGURATION**                                   │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//* 📝 **Special Characters URL Encoding:**
//! @ === %40 (Ascii Value 64)
//? @ === Hexadecimal : 0x40

//! MongoDB Atlas connection string with credentials
// Connection URL
const url = "zxcvbnm";

//* Create MongoClient instance(obj) with connection URL
const client = new MongoClient(process.env.MONGODB_URI);

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📊 **3. DATABASE & COLLECTION SETUP**                                         │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//? Specify target database name
// Database Name
const dbName = 'Learn';

//* ════════════════════════════════════════════════════════════════════════════════════
//* ⚡ **4. MAIN ASYNC FUNCTION - ALL DATABASE OPERATIONS**
//* ════════════════════════════════════════════════════════════════════════════════════

async function main() {
  //* 🔗 **Connection Establishment**
  //! Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  
  //? Get database reference
  const db = client.db(dbName);
  
  //* Get collection reference
  const collection = db.collection('user');

  //* ════════════════════════════════════════════════════════════════════════════════════
  //* 📖 **READ OPERATIONS** - Fetching Documents
  //* ════════════════════════════════════════════════════════════════════════════════════

  //* 🔍 **Method 1: Using toArray() (CAUTION!)**
  //TODO the following code examples can be pasted here...
  //! const findResult = await collection.find({}).toArray(); 
  
  //* 💡 **Performance Note:**
  //? collection.find({}) this akele don't do the Network call, 
  //! its.toArray who actually made the call but this toArray can be fatal if it fetches all the data of size ex 5 gb
  //* Hence Findcursor of collections.find does the job of one by one execution and doesn't give eveerything at once
  
  //* 🚀 **Method 2: Using Cursor (RECOMMENDED for large datasets)**
  const findResult = await collection.find({});
  
  //! Iterate through cursor to process documents one by one
  for await (doc of findResult) {
    console.log('Found documents =>', doc);
  }

  //* ════════════════════════════════════════════════════════════════════════════════════
  //* ➕ **CREATE OPERATIONS** - Inserting Documents (Commented Examples)
  //* ════════════════════════════════════════════════════════════════════════════════════

  //* 📤 **Single Document Insert**
  const insertResult = await collection.insertOne({name: "Varun", College: "GCET", City: "Gr. NOIDA"});
  console.log('Inserted documents =>', insertResult);

  //* 📤 **Multiple Documents Insert**
  const insertResult1 = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log('Inserted documents =>', insertResult1);

  //* ════════════════════════════════════════════════════════════════════════════════════
  //* 🔍 **FILTERED READ OPERATIONS** - Query with Conditions
  //* ════════════════════════════════════════════════════════════════════════════════════

  //? Find documents matching specific criteria
  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  //! Return completion message
  return 'done.';
}

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔄 **5. EXECUTION & ERROR HANDLING** - Robust Connection Management
//* ════════════════════════════════════════════════════════════════════════════════════

main()
  //? Handle successful completion
  .then(console.log)
  //! Handle any errors that occur
  .catch(console.error)
  //* Always close the connection regardless of success/failure
  .finally(() => client.close());

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **MONGODB OPERATIONS SUMMARY** - Quick Reference
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                      🍃 MONGODB CRUD OPERATIONS GUIDE                             │
├─────────────────┬───────────────────────┬─────────────────────────────────────────┤
│   OPERATION     │       METHOD          │              DESCRIPTION                │
├─────────────────┼───────────────────────┼─────────────────────────────────────────┤
│ 🔗 Connect      │ client.connect()      │ Establish database connection           │
│ 📖 Find All     │ find({})              │ Get cursor for all documents            │
│ 📖 Find Filtered│ find({a: 3})          │ Get documents matching criteria         │
│ 📤 Insert One   │ insertOne(doc)        │ Add single document                     │
│ 📤 Insert Many  │ insertMany([docs])    │ Add multiple documents                  │
│ 🔄 Iterate      │ for await (doc of)    │ Process documents one by one            │
│ 📋 To Array     │ .toArray()            │ Convert cursor to array (use carefully) │
│ 🔒 Close        │ client.close()        │ Close database connection               │
└─────────────────┴───────────────────────┴─────────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS & BEST PRACTICES** - Essential Knowledge
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Connection Management:** Always close connections in finally block
//? ✅ **Cursor vs toArray():** Use cursors for large datasets, toArray() for small ones
//* ✅ **URL Encoding:** Special characters like @ must be encoded (%40)
//TODO ✅ **Async/Await:** All MongoDB operations are asynchronous
//! ✅ **Error Handling:** Use try-catch or .catch() for robust error management

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ⚠️ **PERFORMANCE CONSIDERATIONS**                                              │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//? 🚀 **Cursor Benefits:** Memory efficient, processes documents one at a time
//! ⚠️ **toArray() Risks:** Can cause memory issues with large datasets (5GB+ data)
//* 💡 **Best Practice:** Use cursors for iteration, toArray() only for small result sets
//TODO 🔧 **Connection Pooling:** MongoClient automatically manages connection pools
