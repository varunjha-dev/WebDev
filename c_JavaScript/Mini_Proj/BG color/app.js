//* ❌ Unoptimized Approach: Adding Event Listeners to Each Button
/*
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const purple = document.getElementById('purple');
const body = document.body;
document .querselector('body);
red.addEventListener('click', () => {
    body.style.backgroundColor = "red";
});
blue.addEventListener('click', () => {
    body.style.backgroundColor = "blue";
});
orange.addEventListener('click', () => {
    body.style.backgroundColor = "orange";
});
green.addEventListener('click', () => {
    body.style.backgroundColor = "green";
});
purple.addEventListener('click', () => {
    body.style.backgroundColor = "purple";
});
*/

//* ⚡ Alternative Approach: Using `forEach()` to Reduce Repetition
/*
const buttons = document.querySelectorAll('button');
const body = document.body;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.getAttribute('id')); // Logs the button ID
        body.style.backgroundColor = button.getAttribute('id'); // OR use btn.id dono chalenge
    });
});
*/

// ❗ Issues with Above Approaches:
// - 🚀 If we had 100 buttons, we would need 100 event listeners, consuming **more memory** and **slowing performance**.
// - ❌ Not optimized for dynamic elements (buttons added later won't work).
// - ✅ Solution: **Event Delegation** (attach event to parent).

//* ✅ Optimized Approach: Using Event Delegation
const root = document.getElementById('root');
root.addEventListener('click', (event) => {
    // 🔍 Check if the clicked element is a BUTTON
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.id; // Change background color dynamically
    }
});

// 🔥 What is Event Delegation?
// - Instead of adding event listeners to each child element (buttons),
//   we add **one** listener to the parent (`#root`).
// - The event **bubbles up** to the parent, which detects the **clicked button**.
// - **Advantages:**
//   ✅ Reduces memory usage 🚀
//   ✅ Handles dynamically added elements 🎯
//   ✅ Improves performance 🔥


// 🌟 Event Delegation for Efficient Event Handling

// 🚀 Instead of adding event listeners to each button individually,
// we attach ONE event listener to the parent (root).
// This improves performance and reduces memory usage.

const root1 = document.getElementById('root1');

root1.addEventListener('click', (event) => {
    // ✅ Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.id; // Change background color
    }
});

// 📝 Why use Event Delegation?
// ✅ Avoids adding multiple event listeners (better performance)
// ✅ Reduces memory usage (one event listener instead of 100 if there were 100 buttons)
// ✅ Useful when elements are dynamically added or removed

// 📌 Alternative Approach (Less Optimized) - Adding Event Listeners to Each Button
// 🚫 Not recommended for large-scale applications

