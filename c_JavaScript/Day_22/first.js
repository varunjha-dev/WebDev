// ! ================================================
// !  Ordering Food from Domino's using Promises 🍕
// ! ================================================

let cart = ["Pizza", "Coke", "Sandwich"]; // * User's cart containing ordered items
// function placeOrder(cart, callback){
//     console.log("Tallking with Domino's");

//     setTimeout(() => {
//         console.log("ordered Placed Successfully");
//         const order = {
//             orderId: 221,
//             food: cart,
//             restaurant: "Dominos",
//             location: "Dwarka"
//         }
//         callback(order);
//     }, 2000);
// }

// function preparingOrder(order, callback){
//     console.log("Pizza Preparation Started.....");
//     setTimeout(() => {
//         console.log("Pizza Preparation done!");
//         const foodDetails = {
//             token: 12,
//             restaurant: order.restaurant,
//             location: order.location
//         }
//         callback(foodDetails);
//     }, 5000);
// }

// function pickupOrder(foodDetails, callback){
//     console.log("Reaching Restaurant for Pikcing the Order...");
//     setTimeout(() => {
//         console.log("Order picked up by the Delivery Boy");
//         const dropLocation = foodDetails.location;
//         callback(dropLocation);
//     }, 3000);
// }

// function deliverOrder(dropLocation){
//     console.log("Delivery boy is on the way....");
//     setTimeout(() => {
//         console.log("Ordered Delivered successfully");
//     }, 5000);
// }

// placeOrder(cart, (order) => {
//   preparingOrder(order, (foodDetails) => {
//     pickupOrder(foodDetails, (dropLocation) => {
//       deliverOrder(dropLocation);
//     });
//   });
// });
// how this callback hell is solved by the promise in following way

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

placeOrder(cart) // 📌 Step 1: Place order
  .then((order) => preparingOrder(order)) // 📌 Step 2: Prepare order
  .then((foodDetails) => pickupOrder(foodDetails)) // 📌 Step 3: Pick up order
  .then((dropLocation) => deliverOrder(dropLocation)) // 📌 Step 4: Deliver order
  .catch((error) => console.log(error)); // ❌ Handling any errors in the flow

// ! ================================================
// !  Explanation of How This Works
// ! ================================================

/*
✔️ **Using Promises to Avoid Callback Hell**
   - Earlier, the process used **nested callbacks**, leading to hard-to-read code.
   - **Promise chaining** makes it **cleaner and more readable**.

✔️ **Promise Flow**:
   1️⃣ **placeOrder()** → Checks food availability and places the order.
   2️⃣ **preparingOrder()** → Starts making the pizza.
   3️⃣ **pickupOrder()** → Delivery boy picks up the order.
   4️⃣ **deliverOrder()** → Order is delivered to the customer.

✔️ **Error Handling with `.catch()`**:
   - If any step fails (e.g., food out of stock), the `.catch()` block will handle it.

✔️ **Asynchronous Simulation**:
   - `setTimeout()` mimics **real-world delays** (cooking, delivery, etc.).
   - Each function **returns a Promise** that **resolves** after the task is completed.

✔️ **Better Readability & Maintainability**:
   - Each function **handles a single task**.
   - Using **resolve/reject**, functions work **independently**.
*/

