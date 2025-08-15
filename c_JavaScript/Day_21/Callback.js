// ! ============================================
// !           Understanding Callbacks
// ! ============================================

// * Step 1: Fetching User Details (Without Callbacks)
// ? Here, we fetch user details and call `greet()` and `meet()` manually

// function fetchUser() {
//     console.log("Fetching the user detail....");

//     setTimeout(() => {
//         console.log("Data fetched successfully");

//         const name = "Varun"; // ? Data fetched from backend (Simulation)
//         greet(name);  // * Greet function is called
//         meet(name);   // * Meet function is called
//     }, 2000);
// }

// * Step 2: Greeting Function
function greet(name) {
    console.log(`Hello ${name}`);
}

// * Step 3: Meeting Function
function meet(name) {
    console.log(`Hello ${name}, I will meet you in Delhi`);
}

// * Call the fetchUser function
// fetchUser();

// ! Problem: The above code is **not flexible** because we have hardcoded `greet()` and `meet()` inside `fetchUser()`
// ? What if we want to call a different function after fetching data?
// ? Solution: Use Callbacks!

// ! ============================================
// !          Using Callbacks for Flexibility
// ! ============================================

// * Callback Function to Edit User Details
function edit(name) {
    console.log(`${name} edited from the user detail..`);
}

// * Fetch User Function (Now Accepts a Callback)
function fetchUser(callback) {
    console.log("Fetching the user detail....");

    setTimeout(() => {
        console.log("Data fetched successfully");

        const name = "Varun"; // ? Data fetched from backend (man lo)
        callback(name); // * Calls the function passed as an argument
    }, 2000);
}

// * We can now reuse fetchUser() for different functions
fetchUser(greet); // ? Calls greet function after fetching user data
fetchUser(meet);  // ? Calls meet function after fetching user data
fetchUser(edit);  // ? Calls edit function after fetching user data

// ? Benefits:
// - Now, we can decide **which function should execute** after fetching the user data.
// - We have **written fetchUser() only once**, but we **use it for different scenarios**.

// ! ============================================
// !              Callback Hell Example
// ! ============================================

// * Real-life Example: Ordering Pizza from Domino's

// ? Step 1: Place Order
function placeOrder(callback) {
    console.log("Talking with Domino's...");

    setTimeout(() => {
        console.log("Order Placed Successfully!");
        callback(); // * Proceed to the next step
    }, 2000);
}

// ? Step 2: Preparing Order
function preparingOrder(callback) {
    console.log("Pizza Preparation Started...");

    setTimeout(() => {
        console.log("Pizza Preparation Done!");
        callback();
    }, 5000);
}

// ? Step 3: Pickup Order
function pickupOrder(callback) {
    console.log("Reaching Restaurant for Picking the Order...");

    setTimeout(() => {
        console.log("Order Picked Up by the Delivery Boy");
        callback();
    }, 3000);
}

// ? Step 4: Deliver Order
function deliverOrder() {
    console.log("Delivery Boy is on the way...");

    setTimeout(() => {
        console.log("Order Delivered Successfully!");
    }, 5000);
}

// ! Executing the Functions in Proper Order (Callback Hell)
placeOrder(() => {
    preparingOrder(() => {
        pickupOrder(() => {
            deliverOrder();
        });
    });
});

/*
? Expected Output (Correct Sequence):
Talking with Domino's...
Order Placed Successfully!
Pizza Preparation Started...
Pizza Preparation Done!
Reaching Restaurant for Picking the Order...
Order Picked Up by the Delivery Boy
Delivery Boy is on the way...
Order Delivered Successfully!
*/

// ! ============================================
// !  Callback Hell Problem (Nesting & Readability)
// ! ============================================

// * The issue with the above code is:
// - **Too much nesting**, making the code difficult to read and maintain
// - **Hard to debug** as one function depends on the previous one
// - **Dependencies**: If one step fails, the entire process can break

// ? Solution: Promises! (We will refactor this using Promises next)
