//* ════════════════════════════════════════════════════════════════════════════════════
//* 🍽️ **FOOD MENU API - COMPLETE RESTAURANT MANAGEMENT SYSTEM** 🍽️
//* ════════════════════════════════════════════════════════════════════════════════════

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🚀 **SERVER SETUP & DEPENDENCIES** - Foundation                               │
//* └─────────────────────────────────────────────────────────────────────────────────┘

const { Auth } = require("./middleware/auth");
const express = require("express");
const app = express();

//! Essential middleware for parsing JSON requests
app.use(express.json());

//* 📝 **API Pattern:** CRUD: Create Read Update Delete

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **DATABASE SIMULATION** - In-Memory Data Storage
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🗄️ **Main Food Menu Database** - array
const FoodMenu = [
    { "id": 1, "food": "Veg Chowmein", "category": "veg", "price": 150 },
    { "id": 2, "food": "Butter Naan", "category": "veg", "price": 50 },
    { "id": 3, "food": "Chicken Curry", "category": "non-veg", "price": 250 },
    { "id": 4, "food": "Veg Momos", "category": "veg", "price": 120 },
    { "id": 5, "food": "Mutton Curry", "category": "non-veg", "price": 350 },
    { "id": 6, "food": "Tandoori Roti", "category": "veg", "price": 20 },
    { "id": 7, "food": "Chicken Lollipop", "category": "non-veg", "price": 180 },
    { "id": 8, "food": "Seekh Kabab", "category": "non-veg", "price": 220 },
    { "id": 9, "food": "Paneer Butter Masala", "category": "veg", "price": 280 },
    { "id": 10, "food": "Egg Curry", "category": "non-veg", "price": 200 },
    { "id": 11, "food": "Green Salad", "category": "veg", "price": 80 },
    { "id": 12, "food": "Veg Shawarma", "category": "veg", "price": 150 },
    { "id": 13, "food": "Butter Chicken", "category": "non-veg", "price": 300 },
    { "id": 14, "food": "Mushroom Masala", "category": "veg", "price": 250 },
    { "id": 15, "food": "Rajma Chawal", "category": "veg", "price": 180 },
    { "id": 16, "food": "Masala Chai", "category": "veg", "price": 30 }
];

//* 🛒 **User Shopping Cart** - Dynamic storage
//? user ko jo bhi food hoga wo idhar aayega
const AddToCart = [];

//* ════════════════════════════════════════════════════════════════════════════════════
//* 👁️ **PUBLIC ENDPOINTS** - Customer Access (No Authentication Required)
//* ════════════════════════════════════════════════════════════════════════════════════

//* 📖 **GET Food Menu** - Display complete restaurant menu
//! Actual Menu
app.get("/food", (req, res) => {
    res.status(200).send(FoodMenu);
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🔐 **ADMIN ENDPOINTS** - Restaurant Management (Authentication Required)
//* ════════════════════════════════════════════════════════════════════════════════════

//* ➕ **POST New Food Item** - Add item to menu
//? authenticate admin here
// app.use("/admin",Auth);
//! here anyone can request it, how we differentiate it is org admin or not
app.post("/admin", Auth, (req, res) => {
    FoodMenu.push(req.body);
    res.status(201).send("Item added Successfully");
});

//* 🗑️ **DELETE Food Item** - Remove from menu
//TODO Delete from Menu
app.delete("/admin/:id", Auth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex(item => item.id === id);

    if (index === -1) {
        res.status(404).send("Item doesn't exists");
    } else {
        FoodMenu.splice(index, 1);
        res.status(200).send("Successfully deleted");
    }
});

//* 🔄 **PATCH Update Food Item** - Modify existing menu item
//? Add to Menu
app.patch("/admin", Auth, (req, res) => {
    const id = parseInt(req.body.id);
    const foodData = FoodMenu.find(item => item.id === id);
    
    if (foodData) {
        //! Partial update - only modify provided fields
        if (req.body.food) {
            //? since foodData is the object hence it is referencing to the same object (FoodMenu) 
            foodData.food = req.body.food;
        }

        if (req.body.category) {
            foodData.category = req.body.category;
        }

        if (req.body.price) {
            foodData.price = req.body.price;
        }

        res.status(200).send("Successfully Updated");
    } else {
        res.status(404).send("Item doesn't exists");
    }
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 👤 **USER ENDPOINTS** - Customer Shopping Cart Management
//* ════════════════════════════════════════════════════════════════════════════════════

//* 🛒 **POST Add to Cart** - Add food item to user cart
//! Add to Cart
app.post("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const foodItem = FoodMenu.find(item => item.id === id);
    
    if (foodItem) {
        AddToCart.push(foodItem);
        res.status(201).send("Item added to Cart successfully!!");
    } else {
        res.send("Item Out of Stock");
    }
});

//* 🗑️ **DELETE from Cart** - Remove item from user cart
//? Remove from Cart
app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = AddToCart.findIndex(item => item.id === id);
    
    if (index === -1) {
        res.status(404).send("Item Not found in Cart");
    } else {
        AddToCart.splice(index, 1);
        res.status(200).send("Item removed successfully");
    }
});

//* 👁️ **GET Cart Contents** - View current cart items
//! See Cart
app.get("/user", (req, res) => {
    if (AddToCart.length === 0) {
        res.send("Cart is Empty");
    } else {
        res.status(200).send(AddToCart);
    }
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🚀 **SERVER STARTUP** - Launch Restaurant API
//* ════════════════════════════════════════════════════════════════════════════════════

app.listen(3000, (req, res) => {
    console.log("Listening at port 3000");
});

//* ════════════════════════════════════════════════════════════════════════════════════
//* 📊 **API ENDPOINTS SUMMARY** - Complete Restaurant System
//* ════════════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          🍽️ FOOD MENU API ENDPOINTS                               │
├─────────────┬───────────────────┬──────────────┬─────────────────────────────────────┤
│   METHOD    │     ENDPOINT      │     AUTH     │            DESCRIPTION              │
├─────────────┼───────────────────┼──────────────┼─────────────────────────────────────┤
│ GET         │ /food             │   Public     │ 📖 View complete restaurant menu   │
│ POST        │ /admin            │   Required   │ ➕ Add new food item to menu      │
│ DELETE      │ /admin/:id        │   Required   │ 🗑️ Remove food item from menu     │
│ PATCH       │ /admin            │   Required   │ 🔄 Update existing food item      │
│ POST        │ /user/:id         │   Public     │ 🛒 Add food item to cart          │
│ DELETE      │ /user/:id         │   Public     │ 🗑️ Remove item from cart          │
│ GET         │ /user             │   Public     │ 👁️ View current cart contents     │
└─────────────┴───────────────────┴──────────────┴─────────────────────────────────────┘
*/

//* ════════════════════════════════════════════════════════════════════════════════════
//* 🎯 **KEY CONCEPTS & PATTERNS** - Restaurant Management Essentials
//* ════════════════════════════════════════════════════════════════════════════════════

//! ✅ **Role-Based Access:** Admin (authenticated) vs User (public) endpoints
//? ✅ **Data Separation:** Menu (permanent) vs Cart (session-based) storage
//* ✅ **CRUD Operations:** Complete Create, Read, Update, Delete functionality
//TODO ✅ **Error Handling:** Proper HTTP status codes and meaningful messages
//! ✅ **Middleware Usage:** Authentication middleware for admin protection

//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 🏗️ **SYSTEM ARCHITECTURE BENEFITS**                                          │
//* └─────────────────────────────────────────────────────────────────────────────────┘

//? 🔐 **Security:** Admin operations protected by authentication middleware
//* 🎯 **Scalability:** Separate endpoints for different user roles
//! 📊 **Data Integrity:** Proper validation and error responses
//TODO 🚀 **User Experience:** Clear status messages and proper HTTP codes

//* 🎓 **Perfect Example:** Real-world restaurant management system with role-based access!
