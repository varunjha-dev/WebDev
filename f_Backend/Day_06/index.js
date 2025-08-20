//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **BOOKSTORE REST API - COMPLETE CRUD OPERATIONS** 📚
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **SERVER SETUP & DATA STORE** - Foundation                                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

const express = require("express");
const app = express();

//* 📊 **Sample Book Database** - In-memory storage
const BookStore = [
    { id: 1, name: "Harry Potter", author: "JK Rowling" },
    { id: 2, name: "Rich Dad Poor Dad", author: "Robert K" },
    { id: 3, name: "5 am club", author: "James Clear" },
    { id: 4, name: "Art of Decision Making", author: "Varun" },
    { id: 5, name: "Art of Happiness", author: "Varun" }
];

//! **Essential Middleware** - converts json in js object (sort of Middleware)
app.use(express.json());

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📖 **READ OPERATIONS** - Getting Book Data
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📥 **GET Books by Author** - Query Parameter Filtering
app.get("/book", (req, res) => {
    //? Filter books by author using query parameter (?author=Varun)
    const Book = BookStore.filter(info => info.author === req.query.author);
    res.send(Book);
});

//* 📥 **GET Single Book by ID** - Path Parameter Access
app.get("/book/:id", (req, res) => {
    //! Convert string ID to number for comparison
    const id = parseInt(req.params.id);
    //? Find book with matching ID
    const book = BookStore.find(info => info.id === id);
    res.send(book);
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* ➕ **CREATE OPERATION** - Adding New Books
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📤 **POST New Book** - Create with Duplicate Check
app.post("/book", (req, res) => {
    //? Get book data from request body
    const book = req.body;
    
    //! Check for duplicate books (object reference comparison)
    const duplicateBook = BookStore.find(info => info === book);
    
    if (duplicateBook) {
        res.send("Book Already Exists");
    } else {
        //* Add new book to database
        BookStore.push(req.body);
        res.send("Book Stored Successfully");
    }
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🗑️ **DELETE OPERATION** - Removing Books
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🗑️ **DELETE Book by ID** - Remove from Database
app.delete("/book/:id", (req, res) => {
    //! Convert string ID to number
    const id = parseInt(req.params.id);
    
    //? Alternative approach: BookStore = BookStore.filter(book => book.id !== id);
    
    //* Find index of book to delete
    const index = BookStore.findIndex(info => info.id === id);
    
    //! Remove book from array using splice
    BookStore.splice(index, 1);
    
    res.send("Book is removed Successfully");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔄 **UPDATE OPERATIONS** - Modifying Existing Books
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🎨 **PATCH - Partial Update** - Update Only Specified Fields
app.patch("/book", (req, res) => {
    //? Debug: console.log(req.body)
    
    //! Find book to update by ID
    const Book = BookStore.find(info => info.id === req.body.id);
    
    //? Update author if provided in request
    if (req.body.author) {
        Book.author = req.body.author;
    }
    
    //* Update name if provided in request
    if (req.body.name) {
        Book.name = req.body.name;
    }
    
    res.send("Patch catching");
});

//* 🔄 **PUT - Complete Update** - Replace Entire Resource
app.put("/book", (req, res) => {
    //! Find book to update by ID
    const Book = BookStore.find(info => info.id === req.body.id);
    
    //? Replace all fields (assumes all data provided)
    Book.author = req.body.author;
    Book.name = req.body.name;
    
    res.send("Changes Updated");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **SERVER STARTUP** - Launch Application
//* ════════════════════════════════════════════════════════════════════════════════════

app.listen(3000, () => {
    console.log("Server is Listening at 3000");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **API ENDPOINTS SUMMARY - QUICK REFERENCE**
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           🎯 BOOKSTORE API ENDPOINTS                               │
├─────────────────┬───────────────────────┬─────────────────────────────────────────┤
│     METHOD      │       ENDPOINT        │              DESCRIPTION                │
├─────────────────┼───────────────────────┼─────────────────────────────────────────┤
│ GET             │ /book?author=name     │ 📖 Get books by author (query filter)  │
│ GET             │ /book/:id             │ 📖 Get single book by ID               │
│ POST            │ /book                 │ ➕ Add new book (with duplicate check) │
│ DELETE          │ /book/:id             │ 🗑️ Remove book by ID                   │
│ PATCH           │ /book                 │ 🎨 Partial update (only changed fields)│
│ PUT             │ /book                 │ 🔄 Complete update (replace all fields)│
└─────────────────┴───────────────────────┴─────────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS - REMEMBER THESE**
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **CRUD Operations:** Create(POST), Read(GET), Update(PUT/PATCH), Delete(DELETE)
//? ✅ **Query vs Path Params:** ?author=name vs /:id 
//* ✅ **Array Methods:** find(), filter(), findIndex(), splice(), push()
//TODO ✅ **Middleware:** express.json() for parsing request bodies
//! ✅ **HTTP Status:** Should use proper status codes (200, 201, 404, etc.)
