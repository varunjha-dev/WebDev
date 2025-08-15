// ✅ CALLBACK FUNCTION (A Function Passed as an Argument)
// - A callback is a function passed to another function to be executed later.

function names(callback) {
    console.log("Hello, I am the main function.");
    callback(); // ✅ Calling the callback function
}

// ✅ Example: Passing a Function as an Argument
function greet() {
    console.log("Hello, I am the callback function.");
}

names(greet); // ✅ Passing 'greet' as a callback

// ✅ Directly Define the Callback Inside the Argument
names(function () {
    console.log("Hello, I am an inline callback function.");
});

// ✅ Using an Arrow Function as a Callback
names(() => {
    console.log("Hello, I am an arrow function callback.");
});


// ✅ Practical Example: Fetching Data Every 5 Seconds
function fetchData() {
    console.log("Fetching data..."); // ✅ Simulate a fetch operation
}

// ✅ setInterval calls 'fetchData' every 5 seconds
setInterval(fetchData, 5000);

// setInterval & fetching data in later topics.
