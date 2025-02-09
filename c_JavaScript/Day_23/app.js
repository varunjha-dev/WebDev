let cart = ["Pizza", "Coke", "Sandwich"];
// ! ================================================
// !  Function 1: Place Order
// ! ================================================
function placeOrder(cart) {
    console.log("🛒 Talking with Domino's..."); // ? Initializing order placement
  
    const pr = new Promise(function (resolve, reject) {
      setTimeout(() => {
        const food_available = true; // * Simulating food availability check
  
        if (food_available) {
          console.log("✅ Order Placed Successfully!"); // * Order confirmed
          const order = {
            orderId: 221,
            food: cart,
            restaurant: "Domino's",
            location: "Dwarka",
          };
          resolve(order); // 🔥 Promise resolved with order details
        } else {
          reject("❌ Items Out of Stock!"); // 🔥 Promise rejected if food unavailable
        }
      }, 2000); // * Simulating 2 seconds delay
    });
  
    return pr; // ? Returning Promise
  }
  
  // ! ================================================
  // !  Function 2: Preparing Order
  // ! ================================================
  function preparingOrder(order) {
    console.log("👨‍🍳 Pizza Preparation Started..."); // ? Preparation begins
  
    const pr = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("✅ Pizza Preparation Done! 🍕"); // * Pizza is ready
  
        const foodDetails = {
          token: 12,
          restaurant: order.restaurant,
          location: order.location,
        };
        resolve(foodDetails); // 🔥 Promise resolved with food details
      }, 5000); // * Simulating 5 seconds delay
    });
  
    return pr;
  }
  
  // ! ================================================
  // !  Function 3: Picking Up the Order
  // ! ================================================
  function pickupOrder(foodDetails) {
    console.log("🏍️ Reaching Restaurant to Pick Up the Order..."); // ? Delivery boy en route
  
    const pr = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("✅ Order Picked Up by Delivery Boy 🚴"); // * Order picked up
  
        const dropLocation = foodDetails.location;
        resolve(dropLocation); // 🔥 Promise resolved with drop location
      }, 3000); // * Simulating 3 seconds delay
    });
  
    return pr;
  }
  
  // ! ================================================
  // !  Function 4: Delivering the Order
  // ! ================================================
  function deliverOrder(dropLocation) {
    console.log("🚗 Delivery Boy is on the Way..."); // ? Order out for delivery
  
    setTimeout(() => {
      console.log("✅ Order Delivered Successfully! 🎉"); // * Order delivered
    }, 5000); // * Simulating 5 seconds delay
  }
  
  // ! ================================================
  // !  Handling the Promise Chain (Order Flow Execution)
  // ! ================================================

// ? Traditional Promise Chaining (Callback Hell Alternative)
placeOrder(cart) // 📌 Step 1: Place order
  .then((order) => preparingOrder(order)) // 📌 Step 2: Prepare order
  .then((foodDetails) => pickupOrder(foodDetails)) // 📌 Step 3: Pick up order
  .then((dropLocation) => deliverOrder(dropLocation)) // 📌 Step 4: Deliver order
  .catch((error) => console.log(error)); // ❌ Handles any errors that occur

// * Our goal is to write this in a synchronous-looking way:
const order = placeOrder(cart);
const foodDetails = preparingOrder(order);
const dropLocation = pickupOrder(foodDetails);
deliverOrder(dropLocation);

// 🚨 However, the above code executes immediately without waiting for results!
// We need a way to **pause execution** until data is received. 

// ! ✅ Solution: Using Async/Await to handle asynchronous flow
async function orderFood() {
  try {
    const order = await placeOrder(cart); // 🛒 Place order and wait for response
    const foodDetails = await preparingOrder(order); // 🍕 Wait for food preparation
    const dropLocation = await pickupOrder(foodDetails); // 🏠 Pickup order
    deliverOrder(dropLocation); // 🚴 Deliver order

    // ✅ Await ensures each step **waits** before executing the next step.
  } catch (error) {
    console.log(error); // ❌ Handles any rejection/error in the flow
  }
}
orderFood();

// * =====================================
// *  Basic Promise Example 🔄
// * =====================================
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Everyone");
  }, 5000);
});

// ? Traditional Promise Handling
console.log(p1); // Logs Promise state (pending, resolved, rejected)
p1.then((response) => console.log(response)); // ✅ Logs resolved value after 5 seconds

// ? Using Async/Await to handle Promise
async function greet() {
  const data1 = await p1; // 🕒 Wait for promise to resolve
  console.log(data1);

  const data2 = await p1; // 🚀 This resolves instantly as p1 is already resolved!
  console.log(data2);
}
greet();

// * =====================================
// *  Multiple Promises & Execution Order
// * =====================================
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 5000);
});

// ? Sequential Execution (Promises resolve one by one)
async function greetSequential() {
  const data1 = await p1; // ⏳ Wait 5 sec
  console.log(data1);
  
  const data2 = await p2; // ⏳ Wait another 5 sec
  console.log(data2);
}
greetSequential();

// ⏳ Takes **10 seconds** in total (5s + 5s)

// * =====================================
// *  Parallel Execution Using `Promise.all`
// * =====================================
async function greetParallel() {
  const [data1, data2] = await Promise.all([p1, p2]); // 🚀 Runs both promises in parallel!
  console.log(data1);
  console.log(data2);
}
greetParallel();

// ✅ Runs in **5 seconds** instead of 10, since both promises execute together!

// ! =====================================================
// !  Using Functions for Returning Promises 📦
// ! =====================================================
function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise resolved");
    }, 5000);
  });
}

function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise resolved");
    }, 5000);
  });
}

// ? Traditional Async/Await Handling
async function executeSequential() {
  console.log("Execution Started...");
  const data1 = await test1(); // ⏳ Wait for first promise
  console.log(data1);

  const data2 = await test2(); // ⏳ Wait for second promise
  console.log(data2);
}
executeSequential();

// ? Optimized Parallel Execution using Promise.all
async function executeParallel() {
  console.log("Execution Started...");
  const [data1, data2] = await Promise.all([test1(), test2()]); // 🚀 Execute both in parallel
  console.log(data1);
  console.log(data2);
}
executeParallel();

// ✅ Both functions run **at the same time** and resolve after the **max time** taken

// * =====================================
// *  Async Function Always Returns a Promise 🔄
// * =====================================
async function meet() {
  return "Hello Coder"; // Implicitly wrapped in a Promise!
}

meet().then((value) => console.log(value)); // ✅ Logs: "Hello Coder"

// ? If nothing is returned, the async function returns a `Promise` of `undefined`

// ! =====================================================
// !  Handling Promises with Try-Catch for Error Handling 🛑
// ! =====================================================
async function orderWithErrorHandling() {
  try {
    console.log("Starting order process...");
    const data1 = await test1(); // ✅ If successful, it proceeds
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
  } catch (error) {
    console.log("Error Occurred:", error); // ❌ Catches any errors during execution
  }
}
orderWithErrorHandling();

// ! =====================================================
// !  Microtask Queue & Execution Order 📌
// ! =====================================================
async function greetWithLogs() {
  console.log("Hello I greet You"); // 🟢 Logs immediately

  const data1 = await test1(); // ⏳ Moves execution to microtask queue
  console.log(data1); // 🟢 Logs after 5 seconds

  const data2 = await test2();
  console.log(data2); // 🟢 Logs after another 5 seconds
}

greetWithLogs();

console.log("Hello Coder Army"); // 🟢 Logs immediately
console.log("Kaise Ho Aap Sab Log"); // 🟢 Logs immediately

// ✅ Final Output (Explaining Execution Order):
// 1️⃣ "Hello I greet You"
// 2️⃣ "Hello Coder Army"
// 3️⃣ "Kaise Ho Aap Sab Log"
// 4️⃣ (After 5s) "First promise resolved"
// 5️⃣ (After another 5s) "Second promise resolved"

// ! =====================================================
// !  Parallel Execution for Faster Performance 🚀
// ! =====================================================
async function greetOptimized() {
  try {
    console.log("Starting Execution...");
    
    // 🚀 Run both functions simultaneously & wait for the longest one
    const [data1, data2] = await Promise.all([test1(), test2()]);
    
    console.log(data1);
    console.log(data2);
  } catch (error) {
    console.log(error); // ❌ Catch any errors
  }
}
greetOptimized();

// ✅ Both functions run **at the same time** and resolve after the **max time** taken
 

