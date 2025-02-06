// 🕒 Real-Time Clock Display

// Function to update and display the current time every second
function timing() {
    const timer = document.getElementById('root'); // Get the element with ID 'root'
    const now = new Date(); // Get the current date and time
    const IndianTime = now.toLocaleTimeString(); // Convert to Indian Standard Time (IST)
    timer.innerHTML = IndianTime; // Display the time inside the element
}

// Call the function every second (1000ms)
setInterval(timing, 1000);

// 🎨 Styling the Timer Display
const timer = document.getElementById('root');
timer.style.fontSize = "200px"; // Set font size
timer.style.display = "flex"; // Use flexbox for centering
timer.style.height = "100vh"; // Full viewport height
timer.style.justifyContent = "center"; // Center horizontally
timer.style.alignItems = "center"; // Center vertically

// 📌 Accessing and Modifying Elements

const id = document.querySelector('#first'); // Select element with ID 'first'
id.innerHTML = "Hello Money"; // Update its content

const id2 = document.querySelector('.header2'); // Select element with class 'header2'
id2.style.backgroundColor = "pink"; // Change background color

// 🔄 Iterating Over a NodeList
const obj = document.querySelectorAll('.header1'); // Select all elements with class 'header1'

// ✅ Method 1: Using forEach
obj.forEach((val) => {
    console.log(val);
});

// ✅ Method 2: Using for...of loop
for (let val of obj) {
    console.log(val);
}

// ✅ Method 3: Using traditional for loop
for (let i = 0; i < obj.length; i++) {
    obj[i].style.color = "red"; // Change text color to red
}

// 🔄 Convert NodeList to an Array
const arrayObj = Array.from(obj); // Convert NodeList to a standard array
console.log(arrayObj);

// 📌 Iterating Over HTMLCollection
const team = document.getElementsByTagName('li'); // Get all 'li' elements

// ✅ Method 1: Using traditional for loop
for (let i = 0; i < team.length; i++) {
    team[i].style.color = "black"; // Change text color to black
}

// ✅ Method 2: Using for...of loop
for (let val of team) {
    console.log(val);
}

// ✅ Method 3: Convert to array and use forEach
Array.from(team).forEach((val) => {
    console.log(val);
});

// 📌 Parent-Child Node Relationships
const list = document.querySelector('li'); // Select first 'li' element
console.log(list.parentElement); // Get the parent element
console.log(list.parentNode); // Get the parent node

const par = document.querySelector('ul'); // Select 'ul' element
console.log(par); // Log the 'ul' element
console.log(par.childNodes); // Log all child nodes (includes text nodes)
console.log(par.children); // Log only element children
console.log(par.firstChild); // Log the first child (may include text nodes)
console.log(par.firstElementChild); // Log the first element child

// 🎯 Understanding Content Display Methods
// These methods define how element content is displayed and manipulated:

// ✅ innerHTML: Displays and allows HTML tags inside an element
// ✅ textContent: Displays all text, including hidden content, but ignores HTML tags
// ✅ innerText: Displays only visible text (ignores hidden content and HTML tags)
