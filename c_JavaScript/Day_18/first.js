// ✅ Selecting elements
const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

/*  
//*🔹 Event Bubbling & Event Capturing
--------------------------------------------------
👉 Syntax: addEventListener(event, callback, capture)
👉 The `capture` parameter (true/false) determines whether
   the event follows the **Capturing Phase** or **Bubbling Phase**.
   as by default Event Bubbling is done 
*/

// 📌 Example 1: Bubbling Phase (Default: false)
child.addEventListener('click', (event) => {
    console.log("Child Clicked");
}, false);

parent.addEventListener('click', (event) => {
    console.log("Parent Clicked");
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("GrandParent Clicked");
}, false);

/*
✅ If we click on `child`, the output will be:
   ➝ "Child Clicked"
   ➝ "Parent Clicked"
   ➝ "GrandParent Clicked"
   (Bubbling: Event flows **upward** from child to parent to grandParent)
*/

// 📌 Example 2: Capturing Phase (true for capturing)
child.addEventListener('click', (event) => {
    console.log("Child Clicked");
}, true);

parent.addEventListener('click', (event) => {
    console.log("Parent Clicked");
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("GrandParent Clicked");
}, true);

/*
✅ If we click on `child`, the output will be:
   ➝ "GrandParent Clicked"
   ➝ "Child Clicked"
   ➝ "Parent Clicked"
   (Capturing: Event flows **downward** from grandParent to child)
*/

// 📌 Example 3: Mixed Bubbling & Capturing
child.addEventListener('click', (event) => {
    console.log("Child Clicked");
}, false);

parent.addEventListener('click', (event) => {
    console.log("Parent Clicked");
}, true);

grandParent.addEventListener('click', (event) => {
    console.log("GrandParent Clicked");
}, false);

/*
✅ If we click on `child`, the output will be:
   ➝ "Parent Clicked" (Captured first)
   ➝ "Child Clicked"
   ➝ "GrandParent Clicked"
*/

// 🔹 Finding the Target Element in Event Propagation
child.addEventListener('click', (event) => {
    console.log(event.target); // Logs the exact clicked element
}, false);

parent.addEventListener('click', (event) => {
    console.log(event.target); // Logs the exact clicked element
}, false);

grandParent.addEventListener('click', (event) => {
    console.log(event.target); // Logs the exact clicked element
}, false);

/*
✅ When we click on `child`, all log `event.target` as the child itself.
   Because `event.target` refers to the **original clicked element**.
*/

// 🔹 Checking the Current Target
parent.addEventListener('click', (event) => {
    console.log(event.currentTarget); // Logs the element handling the event
}, false);

/*
✅ If we click on `child`, it logs:
   ➝ `<div id="parent">...</div>`
   Because `event.currentTarget` refers to the **element with the event listener**, 
   not necessarily the element that was originally clicked.
*/

/* 
🔹 Difference Between `event.target` & `event.currentTarget`
--------------------------------------------------
👉 `event.target` → The exact element where the event **originated**.
👉 `event.currentTarget` → The element that **handles** the event.
✔ Example: If we click on a `<span>` inside a `<button>`:
   - `event.target` → `<span>`
   - `event.currentTarget` → `<button>`
*/

// 🔹 Stopping Event Bubbling (event.stopPropagation)
child.addEventListener('click', (event) => {
    console.log("Child Clicked");
    event.stopPropagation(); // Stops the event from bubbling up
}, false);

parent.addEventListener('click', (event) => {
    console.log("Parent Clicked");
    event.stopPropagation();
}, false);

grandParent.addEventListener('click', (event) => {
    console.log("GrandParent Clicked");
}, false);

/*
✅ Now, if we click on `child`, the output will be:
   ➝ "Child Clicked"
   (No bubbling up to parent or grandParent)
   Because `event.stopPropagation()` **stops event propagation**.
   same for parent too
*/
