
//* ════════════════════════════════════════════════════════════════════════════════════
//* 📚 **EXPRESS.JS BOOKSTORE API** 📚
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **WHAT WE'RE BUILDING** - Simple REST API                                  │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! A bookstore API that can:
    //? ✅ Get all books (READ)
    //* ✅ Get one book by ID (READ)  
    //TODO ✅ Add new books (CREATE)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🛠️ **THE COMPLETE CODE - CLEAN & ENHANCED**
//* ════════════════════════════════════════════════════════════════════════════════════

const express = require("express");
const app = express();
//* What it does: A simple server to manage a list of books using different HTTP methods.

//* 📊 **Data Store** - Our mini database
const BookStore = [
    { id: 1, name: "Harry Potter", author: "JK Rowling" },
    { id: 2, name: "Rich Dad Poor Dad", author: "Robert K" },
    { id: 3, name: "5 am club", author: "James Clear" }
];

//* ⚙️ **Essential Middleware** - Parse JSON requests
//! This line is CRITICAL - without it, req.body will be undefined
app.use(express.json());

// app.get("/book",(req,res)=>{
//     res.send(BookStore);
// })

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📖 **API ENDPOINTS - THE BIG 3**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📥 **GET /book** - Fetch all books
app.get("/book", (req, res) => {
    console.log("📚 Fetching all books...");
    res.send(BookStore);
    //? Returns: Array of all books as o/p
});

// app.get("/book/:id", (req, res)=>{
//     const id = parseInt(req.params.id);
//     const Book = BookStore.find(info => info.id ===id);
//     res.send(Book);
// })

//* 📥 **GET /book/:id** - Fetch specific book
app.get("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);  //! Convert string to number
    console.log(`🔍 Looking for book with ID: ${id}`);
    
    const book = BookStore.find(info => info.id === id);
    
    if (book) {
        res.send(book);  //? Returns: Single book object
        console.log(`✅ Found: ${book.name}`);
    } else {
        res.status(404).send({ error: "Book not found" });  //! Error handling
        console.log(`❌ Book with ID ${id} not found`);
    }
});

// app.post("/book", (req,res) =>{
//     BookStore.push(req.body);
//     res.send("Data saved done")
// })

//* 📤 **POST /book** - Add new book
app.post("/book", (req, res) => {
    console.log("📝 Adding new book:", req.body);
    
    //! Generate auto ID with ternary
    const newId = BookStore.length > 0 
        ? Math.max(...BookStore.map(book => book.id)) + 1 
        : 1;
    
    const newBook = {
        id: newId,  //? Auto-generate ID
        ...req.body  //! Spread operator - copies name & author
    };
    
    BookStore.push(newBook);
    
    //! Return the created book instead of generic message
    res.status(201).send(newBook);  //? 201 = Created status
    console.log(`✅ Book added successfully: ${newBook.name}`);
});

// app.listen(3000, ()=>{
//     console.log("Listening at port 3000");
// })

//* 🚀 **Start Server**
app.listen(3000, () => {
    console.log("🚀 Bookstore API running at http://localhost:3000");
    console.log("📚 Available endpoints:");
    console.log("   GET    /book     - Get all books");
    console.log("   GET    /book/:id - Get book by ID");
    console.log("   POST   /book     - Add new book");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS EXPLAINED - REMEMBER THESE**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🔧 **Essential Middleware:**
    //! app.use(express.json()) - MUST HAVE for POST requests
    //? Without this: req.body = undefined
    //* With this: req.body contains your JSON data

//* 🛣️ **Route Parameters:**
    //! :id in "/book/:id" creates req.params.id
    //? Always convert to number: parseInt(req.params.id)
    //* Example: GET /book/5 → req.params.id = "5" (string)

//* 📊 **HTTP Status Codes:**
    //! 200 - OK (default for res.send())
    //? 201 - Created (use for successful POST)
    //* 404 - Not Found (use when resource doesn't exist)

//* 🔍 **Array Methods You Need:**
    //! .find() - Returns first matching item or undefined
    //? .push() - Adds item to end of array
    //* .map() - Transforms each item (used for auto ID generation)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🧪 **TESTING YOUR API - POSTMAN EXAMPLES**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📥 **GET All Books:**
    // URL: GET http://localhost:3000/book
    // Response: [array of all books]

//* 📥 **GET Single Book:**
    // URL: GET http://localhost:3000/book/1
    // Response: {id: 1, name: "Harry Potter", author: "JK Rowling"}

//* 📤 **POST New Book:**
    // URL: POST http://localhost:3000/book
    // Headers: Content-Type: application/json
    // Body: {
    //   "name": "Atomic Habits",
    //   "author": "James Clear"
    // }
    // Response: {id: 4, name: "Atomic Habits", author: "James Clear"}

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🏗️ **ARCHITECTURE PATTERN - REST API BASICS**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! REST = REpresentational State Transfer
    //? HTTP Methods = Actions (GET, POST, PUT, DELETE)
    //* URLs = Resources (/book, /book/:id)
    //TODO Status Codes = Results (200, 201, 404, 500)

//* 🎯 **Common REST Patterns:**
    // GET    /book     → Get all books
    // GET    /book/:id → Get specific book  
    // POST   /book     → Create new book
    // PUT    /book/:id → Update existing book
    // DELETE /book/:id → Delete book

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🐛 **COMMON MISTAKES & SOLUTIONS**
//* ════════════════════════════════════════════════════════════════════════════════════

//* ❌ **Mistake 1:** Forgetting express.json()
    //! Problem: req.body is undefined
    //? Solution: app.use(express.json());

//* ❌ **Mistake 2:** Not converting string to number
    //! Problem: "1" !== 1 (string vs number)
    //? Solution: parseInt(req.params.id)

//* ❌ **Mistake 3:** Not handling missing resources
    //! Problem: Sending undefined when book not found
    //? Solution: Check if book exists, send 404 if not

//* ❌ **Mistake 4:** Generic error messages
    //! Problem: "Data saved done" tells you nothing
    //? Solution: Return the actual created resource

//* ════════════════════════════════════════════════════════════════════════════════════
//* ✅ **SUCCESS CHECKLIST - MASTER THESE 5 THINGS**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ I understand express.json() middleware
    //? ✅ I can create GET routes for collections and single items
    //* ✅ I can create POST routes that accept JSON data
    //TODO ✅ I can handle route parameters (:id)
    //! ✅ I can test my API with Postman