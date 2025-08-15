// 🌟 Array of Quotes
const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
];

// 🎯 Event Listener for Button Click
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random() * quotes.length); // Pick a random quote
    text.textContent = quotes[index]; // Display the quote
    changeBackgroundColor(); // Change background color

    // 🛠️ Event Object Properties
    console.log(event.target);   // Returns the clicked element
    console.log(event.type);     // Returns the event type (e.g., "click")
    console.log(event.clientX);  // X position of the click
    console.log(event.clientY);  // Y position of the click
});

// 🖌️ Function to Generate a Random RGB Color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`; // Return an RGB color string
}

// 🎨 Change Background Color on Click
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

// ⌨️ Event Listener for Keyboard Press
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") { // Check if Enter key is pressed
        const text = document.getElementById("quote");
        const index = Math.floor(Math.random() * quotes.length);
        text.textContent = quotes[index]; // Update quote
        changeBackgroundColor(); // Change background color
    }
});

// 📝 Additional Mouse Events
// ✅ dblclick: Triggers when an element is double-clicked
// ✅ mousemove: Triggers when the mouse moves over an element
// ✅ mouseover: Triggers when the mouse hovers over an element

// 📝 Keyboard Events
// ✅ keydown: Triggers when a key is pressed
// ✅ keyup: Triggers when a key is released

// 🎯 Understanding Event Object
// The `event` object contains detailed information about the triggered event:
// ✅ event.key: Returns the key that was pressed
// ✅ event.target: Returns the element where the event occurred
// ✅ event.type: Returns the type of event (click, keydown, etc.)
// ✅ event.clientX: Returns the X-coordinate of the event
// ✅ event.clientY: Returns the Y-coordinate of the event
