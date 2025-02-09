// ! =====================================================
// ! Import Required Modules 📦
// ! =====================================================
const fs = require('fs');  // ? File system module for reading & writing files

// ! =====================================================
// ! Initialize Required Data Arrays 📋
// ! =====================================================
const restaurant = []; // ? This will store generated restaurant objects

// * Images Array 🖼️ (Used for Random Image Selection)
const images = ["First","second","third","fourth","fifth","sixth","seventh",'Eigth',"nine","tenth"];

// * Restaurant Names 🍽️
const rest_name = [
  "The Gourmet Haven", "Spice Symphony", "Urban Bites", "Farm to Table", 
  "Ocean Delights", "Fusion Fiesta", "The Cozy Corner", "Sunset Grill", 
  "The Green Plate", "Golden Wok", "Savory Street", "Pasta Paradise", 
  "Burger Bliss", "Sushi Spot", "Mediterranean Magic", "The Rustic Table", 
  "Bistro Bliss", "Street Eats", "The Chocolate Box", "Breakfast Club"
];

// * Food Types 🍕
const foodTypes = [
    "Italian", "Chinese", "Mexican", "Indian", "Japanese", 
    "Mediterranean", "Thai", "American", "French", "Korean"
];

// * Delhi Locations 📍
const delhiLocations = [
    "Connaught Place", "Chandni Chowk", "Hauz Khas Village", "Saket", 
    "Karol Bagh", "Lajpat Nagar", "Rajouri Garden", "Khan Market", 
    "Vasant Kunj", "Dwarka"
];

// ! =====================================================
// ! Generate 100 Random Restaurant Objects 🔄
// ! =====================================================
for(let i = 0; i < 100; i++) {
    
    const obj = {}; // ? Create a new empty restaurant object

    // * Assign Random Image 🖼️
    obj["image"] = images[Math.floor(Math.random() * 10)];

    // * Assign Random Name 🍽️
    obj["name"] = rest_name[Math.floor(Math.random() * 20)];

    // * Assign Random Rating ⭐ (Between 1 and 5)
    obj['rating'] = Math.floor(Math.random() * 5 + 1);

    // * Assign Random Food Type 🍕
    obj["food_type"] = foodTypes[Math.floor(Math.random() * 10)];

    // * Assign Random Price for Two 💰 (Between ₹100 and ₹2500)
    obj["Price_for_two"] = Math.floor(Math.random() * 2401 + 100);

    // * Assign Random Location 📍
    obj["location"] = delhiLocations[Math.floor(Math.random() * 10)];

    // * Assign Random Distance from Customer's House 🚗 (Between 1km and 10km)
    obj["Distance_from_Customer_house"] = (Math.random() * 10 + 1).toFixed(1);

    // * Assign Random Discount Offers 🎉 (Between 0% and 30%)
    obj["offers"] = Math.floor(Math.random() * 30);

    // * Assign Alcohol Availability 🍷 (30% Chance of Being True)
    obj["alcholol"] = Math.random() > 0.7;

    // * Assign Random Opening Time 🕒 (Between 0:00 and 23:00)
    obj["Restaurant_open_time"] = Math.floor(Math.random() * 24);

    // * Assign Closing Time ⏳ (12 Hours After Opening Time, Ensuring Open Hours)
    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"] + 12) % 24;

    // * Push the Generated Object into the Restaurant Array 📦
    restaurant.push(obj);
}

// ! =====================================================
// ! Print Generated Data to Console 🖥️
// ! =====================================================
console.log(restaurant);

// ! =====================================================
// ! Convert Array to JSON & Save to File 📄
// ! =====================================================
const jsonData = JSON.stringify(restaurant, null, 4);  // ? Convert the array into a JSON string (Pretty formatted)
fs.writeFileSync('arrayData.json', jsonData, 'utf8');   // ? Save the JSON data to 'arrayData.json'
