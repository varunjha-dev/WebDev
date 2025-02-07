// ✅ Adding Click Event Listener to Body
document.body.addEventListener("click", (event) => {
  
    // 📌 Step 1: Create a Circle Element
    const circle = document.createElement('div');
    circle.className = 'circle'; // Assign CSS class for styling
    circle.textContent = "Hi"; // Default message inside the circle
  
    // 📌 Step 2: Get Click Position
    const x = event.clientX; // X-coordinate of click
    const y = event.clientY; // Y-coordinate of click
  
    // 🔹 Position the Circle at Click Location
    circle.style.left = `${x - 25}px`;  // Centering horizontally
    circle.style.top = `${y - 25}px`;   // Centering vertically
  
    // 📌 Step 3: Assign a Random Background Color
    const colors = ["red", "orange", "green", "purple","yellow", "wheat"];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 📌 Step 4: Assign a Random messages
    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
    // 📌 Step 5: Add Circle to the Document
    document.body.appendChild(circle);
  
    // 📌 Step 6: Remove Circle After 5 Seconds
    setTimeout(() => {
      circle.remove(); // Remove the circle from the DOM
    }, 5000);
  });
