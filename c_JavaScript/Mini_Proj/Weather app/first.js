// ! =========================================================
// !  Weather App: Fetch & Display Weather on Button Click ☁️
// ! =========================================================

// ? Adding an event listener to the button
document.querySelector('button').addEventListener('click', () => {
    
    // * Get user input (location) from the input field
    const place = document.getElementById('location').value;

    // ? Fetch the weather data for the entered location
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=API_key&q=${place}&aqi=yes`);

    promise
        .then(response => response.json())  // * Convert response to JSON format
        .then(data => updateTemp(data))     // * Pass the extracted data to updateTemp function
        .catch(error => console.log(error)); // ❌ Handle potential errors (e.g., invalid city name)
});

// ! =========================================================
// !  Function to Update the Weather Info on the Page 📝
// ! =========================================================
function updateTemp(data) {
    
    // * Get the element where we want to display the temperature
    const element = document.getElementById('weatherInfo');
    
    // * Update the innerHTML with the current temperature
    element.innerHTML = `🌡️ Today's Temperature: ${data.current.temp_c}°c`;
}

// ✅ Code Flow :
// 1️⃣ User enters a city name in the input field.
// 2️⃣ When the button is clicked, an API request is sent using fetch().
// 3️⃣ The API responds with JSON data, which is processed.
// 4️⃣ The temperature is extracted and displayed in the 'weatherInfo' section.
// 5️⃣ If there’s an error (e.g., invalid location), it is logged in the console.

