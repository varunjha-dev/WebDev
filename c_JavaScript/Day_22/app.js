// ! ===============================================
// !  Fetching Weather Data using Promises 🌦️
// ! ===============================================

// ? The fetch() function initiates an asynchronous request to a URL
// ? It returns a Promise that either resolves (success) or rejects (failure)

// * ============================================================
// *  Basic Fetch Request (Checking the Response Object)
// * ============================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`);
// Promise.then((response)=>{
//     console.log(response); // * Logs the Response object (not actual data)
// }).catch((error)=>{
//     console.log(error); // * Handles any network errors
// });

// ✅ fetch is an asynchronous task handled by Web APIs
// ✅ If the request is rejected, it prints the error
// ✅ .then() only runs when the Promise is resolved (data is available)

// ! ===============================================
// !  Understanding Promise States 🛠️
// ! ===============================================

// * Promise has 3 states:
// * 1️⃣ Pending   → Waiting for the response
// * 2️⃣ Resolved  → Request was successful (runs .then())
// * 3️⃣ Rejected  → Request failed (runs .catch())

// * ============================================================
// *  Fetching JSON Data (Understanding response.json())
// * ============================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`);
// Promise.then((response)=>{
//     console.log(response.json());  // * Returns another Promise (because response.json() is async too)
// });

// ✅ response.json() also returns a Promise (asynchronous operation)
// ✅ We need another .then() to get the actual data

// * ============================================================
// *  Correct Way to Fetch & Extract Data Using Nested .then()
// * ============================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`);
// Promise.then((response)=>{
//     const pro2 = response.json(); // * Extract JSON (returns another Promise)
//     pro2.then((data)=>{
//         console.log(data); // * Now we have the actual weather data
//     })
// });

// ✅ The first .then() extracts the JSON, returning another Promise
// ✅ The second .then() processes the actual weather data

// * ============================================================
// *  Fetching JSON & Returning It Directly for Simplicity
// * ============================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`);

// const pro2 = Promise.then((response)=>{
//     return response.json(); // * Returning the JSON directly
// })

// pro2.then((data) =>{
//     console.log(data); // * Accessing the data after resolution
// });

// ✅ Here, we store response.json() in a separate variable for clarity
// ✅ Then, we use another .then() to access the extracted data

// * ============================================================
// *  Promise Chaining (Better Readability)
// * ============================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`);

// Promise.then(response => response.json())  // * Extract JSON
//       .then(data => console.log(data));    // * Log extracted data

// ✅ This approach is cleaner & avoids unnecessary variables

// * =====================================================================
// *  Handling Errors Gracefully with .catch() and other way of clean code 
// * =====================================================================

// const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`)
// .then(response => response.json()) // * Extract JSON
// .then(data => console.log(data))    // * Log extracted data
// .catch(error => console.log(error)); // ❌ Handle errors

// ✅ If any part of the process fails (e.g., network error), .catch() runs
// ✅ .catch() prevents the script from breaking due to an unhandled error

// ! ===============================================
// !  Accessing Specific Data (Fetching Temperature)
// ! ===============================================

const Promise = fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=London&aqi=no`)
  .then(response => response.json()) // * Convert response to JSON
  .then(data => console.log(`🌡️ Current Temperature: ${data.current.temp_f}°F`)) // * Extract temperature
  .catch(error => console.log(error)); // ❌ Handle errors

// ✅ Now we can access specific properties of the JSON data
// ✅ JSON is essentially an object, so we use dot notation (data.current.temp_f)

