import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/Home";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contact";

import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";
import Github from "./src/Github";

/* 
📌 React Router Setup 

- We are using **BrowserRouter** to enable routing in our application.
- **Routes** acts as a container for all defined routes.
- **Route** defines individual paths and their corresponding components.
- **Link** is used for navigation without reloading the page.
*/

function App() {
    return (
        <BrowserRouter>
            {/* 🏠 Navigation Menu */}
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/details"}>Details</Link>
            </nav>

            {/* 📌 Defining Routes */}
            <Routes>
                {/* 🌍 Default route -> Home Page */}
                <Route path="/" element={<Home />} />
                
                {/* 📞 Contact Page */}
                <Route path="/contact" element={<Contact />} />
                
                {/* 📊 Dashboard Page */}
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* 🔎 Details Page with Nested Routes */}
                <Route path="/details" element={<Details />}>
                    {/* 👇 Default (index) route inside /details */}
                    <Route index element={<Zero />} />
                    
                    {/* 👇 Nested route /details/Hello */}
                    <Route path="Hello" element={<Hello />} />
                    
                    {/* 👇 Nested route /details/Hi */}
                    <Route path="Hi" element={<Hi />} />
                </Route>

                {/* 🔗 Dynamic Routing Example (GitHub Profile) */}
                <Route path="/github/:name" element={<Github />} />
                {/*
                  Explanation:
                  - ":name" is a dynamic parameter.
                  - When user visits "/github/anyname", the value of "name" will be available in the Github component.
                */}
            </Routes>
        </BrowserRouter>
    );
}

/* 🔥 Rendering the App component inside the root element */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
