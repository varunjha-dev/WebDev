// ! =============================================
// !  JavaScript: Single-Threaded & Asynchronous
// ! =============================================

// * JavaScript is a **Single-Threaded** Synchronous Programming Language
// ? This means JavaScript **executes one task at a time** in a specific order.

// * However, JavaScript can also behave **asynchronously**!
// ? Let's see an example of how asynchronous behavior works:

console.log(10); // * Step 1: Executes immediately

setTimeout(() => {
    console.log("20"); // * Step 3: Executes after 2 seconds (Async)
}, 2000);

console.log(30); // * Step 2: Executes immediately after console.log(10)

// ? Expected Output:
// 10
// 30   (Runs immediately, before the timeout completes)
// 20   (Runs after 2 seconds)

// ! =============================================
// ! Why Does This Happen? (JS Execution Model)
// ! =============================================
// * JavaScript is **single-threaded**, so it should execute tasks in order.
// * But **setTimeout()** is **asynchronous** and is handled by **Web APIs**, not JavaScript itself!
// * The **Web API handles the timer**, and once the delay is over, it sends the task back to the **Event Queue**.
// * The **JS Engine picks it up** only when the main thread is free.

// ! =============================================
// ! Simulating Synchronous Delay (Blocking Code)
// ! =============================================

// * In this example, we manually block execution using a while loop.

console.log(10); // * Step 1: Executes immediately

const timer = Date.now(); // * Captures the current time
while (Date.now() - timer < 2000) {
    // ? Blocking the thread for 2 seconds
    // ? No other JS task can run during this time!
}

console.log(20); // * Step 2: Executes after 2 seconds (Blocking)
console.log(30); // * Step 3: Executes immediately after console.log(20)

// ? Expected Output:
// 10  (Immediately)
// 20  (Waits for 2 seconds, then prints 20)
// 30  (Immediately after 20)

// ! =============================================
// ! Key Takeaways: Synchronous vs Asynchronous
// ! =============================================
// * 🔹 **setTimeout() is Asynchronous** (Handled by Web APIs)
// * 🔹 **Blocking while loops are Synchronous** (Executed directly by JS)
// * 🔹 **Asynchronous tasks expect a Callback function** (e.g., setTimeout, event listeners)
// * 🔹 **Web APIs handle Async tasks & push them back when ready**

// ! =============================================
// !  Common Asynchronous Tasks in JavaScript
// ! =============================================
// *  ✅ setTimeout() and setInterval()
// *  ✅ Event Listeners (click, scroll, input, etc.)
// *  ✅ Fetch API (AJAX calls, network requests)
// *  ✅ Promises & Async/Await (Modern approach)

// ? DOM, window objects, and console.log() are also **not part of JavaScript**.
// ? They are handled by the **Web APIs** provided by the browser.
