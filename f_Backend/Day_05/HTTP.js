//* ════════════════════════════════════════════════════════════════════════════════════
//* 🌐 **HTTP METHODS WITH EXPRESS.JS ** 🌐
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🤔 **WHAT ARE HTTP METHODS?** - The Language of the Web                       │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Definition:** HTTP methods are standard "actions" that a client (like a browser or app) tells a server to perform
    //? **Protocol Context:** HTTP (Hypertext Transfer Protocol) is a protocol (language) for transferring data over the internet

    //* 📚 **Simple Explanation:**
        // Think of HTTP methods as instructions you give to a librarian:
            //! "Get me a book" (read something)
            //? "Add a new book" (create something)
            //* "Update this book's title" (change something)
            //TODO "Remove that book" (delete something)

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **COMMON HTTP METHODS - THE BIG 5**
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📥 **1️⃣ GET METHOD** - Retrieving Data                                        │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Purpose:** Retrieve data from the server
    //? **When to Use:** When you just want to read something (e.g., a webpage, a list of users)
    //* **Idempotent (repeatable):** Yes (repeating the request has no side effects)
    //TODO **Safe?:** Yes (does not modify the server's state)

    //* 💻 **Syntax In Express:**
        app.get("/path", (req, res) => {
            // handle the request
        });

    //* 🌟 **Real-World Examples:**
        // GET /users          → Fetch all users
        // GET /users/123      → Fetch user with ID 123
        // GET /products       → Display product catalog
        // GET /profile        → Show user profile page

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📤 **2️⃣ POST METHOD** - Creating New Data                                     │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Purpose:** Send data to the server to create a new resource
    //? **When to Use:** Submitting a form, adding a new user, or uploading a file
    //* **Idempotent (repeatable):** No (repeating the request may create multiple resources)
    //TODO **Safe?:** No (modifies the server's state)

    //* 💻 **Syntax In Express:**
        app.post("/path", (req, res) => {
            // handle the request
        });

    //* 🌟 **Real-World Examples:**
        // POST /users         → Create new user account
        // POST /posts         → Publish new blog post
        // POST /orders        → Place new order
        // POST /comments      → Add comment to post

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🔄 **3️⃣ PUT METHOD** - Replacing Entire Resources                             │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Purpose:** Updates existing data on the server by replacing it
    //? **When to Use:** Editing a profile or updating a blog post
    //* **Idempotent (repeatable):** Yes (repeating the request has no side effects)
    //TODO **Safe?:** No (modifies the server's state)

    //* 💻 **Syntax In Express:**
        app.put("/path", (req, res) => {
            // handle the request
        });

    //* 🌟 **Real-World Examples:**
        // PUT /users/123      → Replace entire user profile
        // PUT /posts/456      → Replace entire blog post
        // PUT /settings       → Update all user settings
        // PUT /products/789   → Replace entire product info

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🗑️ **4️⃣ DELETE METHOD** - Removing Resources                                  │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Purpose:** Remove a resource from the server
    //? **When to Use:** Deleting a user account or a post
    //* **Idempotent (repeatable):** Yes (repeating the request has no side effects)
    //TODO **Safe?:** No (modifies the server's state)

    //* 💻 **Syntax In Express:**
        app.delete("/path", (req, res) => {
            // handle the request
        });

    //* 🌟 **Real-World Examples:**
        // DELETE /users/123   → Delete user account
        // DELETE /posts/456   → Remove blog post
        // DELETE /comments/789 → Delete comment
        // DELETE /files/abc   → Remove uploaded file

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🎨 **5️⃣ PATCH METHOD** - Partial Updates                                      │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! **Purpose:** Update an existing resource partially on a server
    //? **When to Use:** Making small changes, like updating just an email address
    //* **Idempotent (repeatable):** No (repeating the request may have side effects)
    //TODO **Safe?:** No (modifies the server's state)

    //* 💻 **Syntax In Express:**
        app.patch("/path", (req, res) => {
            // handle the request
        });

    //* 🌟 **Real-World Examples:**
        // PATCH /users/123    → Update only email address
        // PATCH /posts/456    → Change only post title
        // PATCH /settings     → Update specific preferences
        // PATCH /status/789   → Change only status field

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔧 **OTHER LESS COMMON HTTP METHODS - ADVANCED TOOLS**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! **HEAD:** Like GET, but only fetches headers (no body)—used to check metadata
        // Use case: Check if file exists without downloading it

    //? **OPTIONS:** Asks the server what methods it supports for a resource
        // Use case: CORS preflight requests, API discovery

    //* **TRACE:** Echoes back the request (for debugging)
        // Use case: Network diagnostics and debugging

//* ════════════════════════════════════════════════════════════════════════════════════
//* ⚡ **HOW HTTP METHODS WORK IN EXPRESS.JS** - The Implementation
//* ════════════════════════════════════════════════════════════════════════════════════

    //! In Express.js (or plain Node.js with "http"), we use these methods to define routes
    //? Each route listens for a specific HTTP method and URL, then runs code to handle it

    //* 🎯 **Universal Syntax Pattern:**
        app.method("/path", (req, res) => {
            // handle the request
        });

    //* 📝 **Parameter Breakdown:**
        //! **method:** get, post, put, delete, patch, etc.
        //? **"/path":** The URL (e.g., /users, /home, /about)
        //* **req:** Contains information about the HTTP request (e.g., data sent by the client)
        //TODO **res:** Tools to send back the HTTP response

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **PRACTICAL EXAMPLES - CRUD OPERATIONS**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📚 **Complete CRUD Example for a Book Store:**

const express = require("express");
const app = express();

//* ⚙️ **Essential Middleware**
app.use(express.json()); //! Parse JSON requests

//* 📊 **Sample Data Store**
let books = [
    { id: 1, title: "Node.js Guide", author: "John Doe", pages: 300 },
    { id: 2, title: "Express Mastery", author: "Jane Smith", pages: 250 }
];

//* 📥 **GET - Read Operations**
    //! Get all books
    app.get("/books", (req, res) => {
        res.json({
            message: "📚 All books retrieved successfully",
            data: books,
            count: books.length
        });
    });

    //? Get single book by ID
    app.get("/books/:id", (req, res) => {
        const bookId = parseInt(req.params.id);
        const book = books.find(b => b.id === bookId);
        
        if (book) {
            res.json({
                message: "📖 Book found",
                data: book
            });
        } else {
            res.status(404).json({
                error: "❌ Book not found"
            });
        }
    });

//* 📤 **POST - Create Operations**
    //! Create new book
    app.post("/books", (req, res) => {
        const newBook = {
            id: books.length + 1,
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages
        };
        
        books.push(newBook);
        
        res.status(201).json({
            message: "✅ Book created successfully",
            data: newBook
        });
    });

//* 🔄 **PUT - Replace Operations**
    //? Replace entire book
    app.put("/books/:id", (req, res) => {
        const bookId = parseInt(req.params.id);
        const bookIndex = books.findIndex(b => b.id === bookId);
        
        if (bookIndex !== -1) {
            books[bookIndex] = {
                id: bookId,
                title: req.body.title,
                author: req.body.author,
                pages: req.body.pages
            };
            
            res.json({
                message: "🔄 Book updated completely",
                data: books[bookIndex]
            });
        } else {
            res.status(404).json({
                error: "❌ Book not found"
            });
        }
    });

//* 🎨 **PATCH - Partial Update Operations**
    //! Update specific book fields
    app.patch("/books/:id", (req, res) => {
        const bookId = parseInt(req.params.id);
        const book = books.find(b => b.id === bookId);
        
        if (book) {
            //* Update only provided fields
            if (req.body.title) book.title = req.body.title;
            if (req.body.author) book.author = req.body.author;
            if (req.body.pages) book.pages = req.body.pages;
            
            res.json({
                message: "🎨 Book updated partially",
                data: book
            });
        } else {
            res.status(404).json({
                error: "❌ Book not found"
            });
        }
    });

//* 🗑️ **DELETE - Remove Operations**
    //TODO Delete book by ID
    app.delete("/books/:id", (req, res) => {
        const bookId = parseInt(req.params.id);
        const bookIndex = books.findIndex(b => b.id === bookId);
        
        if (bookIndex !== -1) {
            const deletedBook = books.splice(bookIndex, 1)[0];
            
            res.json({
                message: "🗑️ Book deleted successfully",
                data: deletedBook
            });
        } else {
            res.status(404).json({
                error: "❌ Book not found"
            });
        }
    });

//* 🚀 **Start Server**
const PORT = 3000;
app.listen(PORT, () => {
    console.log("════════════════════════════════════════");
    console.log("🌐 HTTP Methods Demo Server Started!");
    console.log(`📡 Running on: http://localhost:${PORT}`);
    console.log("🔗 Available endpoints:");
    console.log("   📥 GET    /books       - Get all books");
    console.log("   📥 GET    /books/:id   - Get single book");
    console.log("   📤 POST   /books       - Create new book");
    console.log("   🔄 PUT    /books/:id   - Replace entire book");
    console.log("   🎨 PATCH  /books/:id   - Update book partially");
    console.log("   🗑️ DELETE /books/:id   - Delete book");
    console.log("════════════════════════════════════════");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎓 **HTTP METHODS COMPARISON CHART**
//* ════════════════════════════════════════════════════════════════════════════════════

    //* 📊 **Quick Reference Table:**
    /*
    ┌────────┬─────────────┬─────────────┬──────────────┬─────────────┐
    │ METHOD │   PURPOSE   │   SAFE?     │ IDEMPOTENT?  │   USE CASE  │
    ├────────┼─────────────┼─────────────┼──────────────┼─────────────┤
    │   GET  │    Read     │    ✅ Yes   │    ✅ Yes    │  Fetch data │
    │  POST  │   Create    │    ❌ No    │    ❌ No     │  Add new    │
    │   PUT  │  Replace    │    ❌ No    │    ✅ Yes    │  Full edit  │
    │ PATCH  │   Update    │    ❌ No    │    ❌ No     │ Partial edit│
    │ DELETE │   Remove    │    ❌ No    │    ✅ Yes    │   Delete    │
    └────────┴─────────────┴─────────────┴──────────────┴─────────────┘
    */

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS TO REMEMBER**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ **Safe Methods:** Don't change server state (only GET, HEAD, OPTIONS)
    //? ✅ **Idempotent Methods:** Multiple identical requests = same result (GET, PUT, DELETE)
    //* ✅ **CRUD Mapping:** Create(POST), Read(GET), Update(PUT/PATCH), Delete(DELETE)
    //TODO ✅ **Status Codes:** 200(OK), 201(Created), 404(Not Found), 500(Server Error)

//* 🚀 **Next Steps:** Practice building RESTful APIs using all HTTP methods!
