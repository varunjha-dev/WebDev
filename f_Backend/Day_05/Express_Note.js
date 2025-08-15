//* ════════════════════════════════════════════════════════════════════════════════════
//* 🌟 **EXPRESS.JS GUIDE - BUILD WEB SERVERS LIKE A PRO** 🌟
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🤔 **WHAT IS EXPRESS.JS?** - The Web Framework Champion                       │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Express.js (or "Express") is a lightweight framework for "Node.js" that makes it easier to build web servers and APIs.
    //? It's like a set of tools that simplifies handling requests, sending responses, and organizing your server code.

    //* 💡 **Simple Analogy:**
        // Think of Express as a smart waiter in a restaurant:
        // 🍽️ Takes orders (handles requests)
        // 🔄 Processes them in the kitchen (your code logic)
        // 📋 Brings back food (sends responses)
        // All while managing multiple tables efficiently!

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ ⚡ **HOW EXPRESS.JS WORKS?** - The Magic Behind the Scenes                    │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! Express builds on top of Node.js's "http" module. Here's the basic flow:

    //* 🏗️ **The Express Workflow:**
        //? **Step 1:** Create a Server - Set up a server to listen for requests
        //! **Step 2:** Define Routes - Tell the server what to do for each URL (e.g., "/home" shows a homepage)
        //* **Step 3:** Handle Requests - Process incoming requests and send back responses
        //TODO **Step 4:** It uses Node's event-driven, non-blocking nature but makes the code more organized and readable

    //* 🔄 **Request-Response Cycle:**
        // Client sends request → Express routes it → Your code processes → Response sent back

//* ┌─────────────────────────────────────┐
//* │ 🧠 **KEY CONCEPTS AND TERMINOLOGY** 
//* └─────────────────────────────────────┘

    //! 1️⃣ **App:** The main Express object you create to build your server
        // Think of it as your server's brain - controls everything

    //? 2️⃣ **Routing:** Telling Express what to do for different URLs (e.g., "/home" vs. "/about")
        // Like a GPS for web requests - directs traffic to right destinations

    //* 3️⃣ **HTTP Methods:** Actions like "GET" (get data), "POST" (send data), "PUT" (update), "DELETE" (remove)
        // The verbs of web communication - what action to perform

    //TODO 4️⃣ **Middleware:** A function that runs between a request and a response
        // Like security guards checking IDs before entering a building

    //! 5️⃣ **Request (req):** An incoming HTTP request from a client
        // Contains all info about what the client wants

    //? 6️⃣ **Response (res):** An outgoing HTTP response sent back to the client
        // Your answer to the client's request

    //* 7️⃣ **Port:** The number (like 3000) where your server listens
        // Like a specific door number where your server waits for visitors

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🛠️ **BASIC SYNTAX - FROM ZERO TO HERO**
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📦 **INSTALLATION SETUP** - Getting Started                                   │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //! 1️⃣ **Install Express:**
        // You need Node.js installed first
        // Run "npm install express" to install Express
        
    //* 💻 **Command Line Steps:**
        // mkdir my-express-app    ← Create project folder
        // cd my-express-app       ← Navigate into folder
        // npm init -y             ← Initialize package.json
        // npm install express     ← Install Express.js

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🏗️ **BASIC STRUCTURE** - The Foundation Code                                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //? **Step 1:** Import Express.js
    const express = require("express");

    //! **Step 2:** Create an Express app (server)
    const app = express();

    //TODO **Step 3:** Define routes and handlers for different URLs

        //* 🎯 **Core Syntax Pattern:**
        //! app.method(path, callback)
            // - "method" is the HTTP method (e.g., "get", "post", "put", "delete")
            // - "path" is the URL (e.g., "/", "/about", "/home")
            // - "callback" is a function that handles the request

        //* 🌐 **Basic Route Example:**
        app.get("/", (req, res) => {
            res.send("Welcome to Express.js!");
        });

        //? **Additional Route Examples:**
        app.get("/about", (req, res) => {
            res.send("This is the About page!");
        });

        app.get("/contact", (req, res) => {
            res.send("Contact us at: info@example.com");
        });

        //! **JSON Response Example:**
        app.get("/api/users", (req, res) => {
            res.json({
                message: "User data retrieved successfully",
                users: ["Alice", "Bob", "Charlie"]
            });
        });

    //* **Step 4:** Start the server
    app.listen(3000, () => {
        console.log("🚀 Server running at http://localhost:3000");
        console.log("📡 Express.js server is ready to handle requests!");
    });

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 💡 **CODE EXPLANATION** - Understanding Each Line                             │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    //* 🔍 **Line-by-Line Breakdown:**

        //! require("express"): 
            // Brings Express into your code - like importing a toolkit

        //? express(): 
            // Makes a new server app - creates your web server instance

        //* app.get: 
            // Sets up a response for a "GET" request to a URL
            // GET = retrieving/reading data (like opening a webpage)

        //TODO res.send: 
            // Sends a response to the client - your answer to their request

        //! app.listen: 
            // Starts the server on a port - opens the door for connections

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **ENHANCED EXAMPLES - PRACTICAL APPLICATIONS**
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📱 **Complete Starter Application:**
const express = require("express");
const app1 = express();

//* 🏠 **Home Route**
app1.get("/", (req, res) => {
    res.send(`
        <h1>🏠 Welcome to My Express App!</h1>
        <p>Visit these pages:</p>
        <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/api/info">API Info</a></li>
        </ul>
    `);
});

//* 📋 **About Page Route**
app1.get("/about", (req, res) => {
    res.send(`
        <h1>📋 About Our Company</h1>
        <p>We're building amazing web applications with Express.js!</p>
        <a href="/">← Back to Home</a>
    `);
});

//* 📞 **Contact Route**
app1.get("/contact", (req, res) => {
    res.json({
        company: "Express Masters Inc.",
        email: "hello@expressmaster.com",
        phone: "+1-555-EXPRESS",
        message: "We'd love to hear from you!"
    });
});

//* 🔧 **API Info Route**
app1.get("/api/info", (req, res) => {
    res.json({
        apiName: "Express Learning API",
        version: "1.0.0",
        description: "A beginner-friendly Express.js demonstration",
        endpoints: [
            "GET /",
            "GET /about", 
            "GET /contact",
            "GET /api/info"
        ],
        status: "✅ Running successfully!"
    });
});

//* 🚀 **Start Server with Enhanced Logging**
const PORT = 3000;
app1.listen(PORT, () => {
    console.log("════════════════════════════════════════");
    console.log("🎉 EXPRESS.JS SERVER STARTED!");
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log("📡 Ready to handle requests...");
    console.log("🔗 Available routes:");
    console.log("   • GET / (Home)");
    console.log("   • GET /about (About)");
    console.log("   • GET /contact (Contact)");
    console.log("   • GET /api/info (API Info)");
    console.log("════════════════════════════════════════");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎓 **LEARNING MILESTONES - TRACK YOUR PROGRESS**
//* ════════════════════════════════════════════════════════════════════════════════════

    //! ✅ **Beginner Level:** I can create a basic Express server
    //? ✅ **Novice Level:** I understand routing and HTTP methods
    //* ✅ **Intermediate Level:** I can send different types of responses (HTML, JSON)
    //TODO ✅ **Advanced Level:** I'm ready to learn middleware and advanced routing

//* 🚀 **Next Learning Steps:**
    // 1. Learn about middleware functions
    // 2. Explore POST requests and form handling
    // 3. Study route parameters and query strings
    // 4. Dive into error handling
    // 5. Build a complete REST API