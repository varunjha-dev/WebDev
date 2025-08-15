// ✅ Selecting the form element
const form = document.querySelector('form');

/*  
//*🔹 Input Event
--------------------------------------------------
👉 Triggers when a user **types** in the input field.
👉 Fires immediately as we type (Real-time).
*/
form.addEventListener('input', (event) => {
    console.log(event.target.value); // Logs input value in real-time
});

/*  
//*🔹 Change Event
--------------------------------------------------
👉 Triggers when an input field **loses focus** and the value **changes**.
*/
form.addEventListener('change', (event) => {
    console.log(event.target.value); // Logs changed value after losing focus
});

/*  
//* 🔹 Focus & Focusin Events
--------------------------------------------------
👉 `focus` → **Does NOT bubble** (Must be attached to individual input fields)
👉 `focusin` → **Bubbles** (Can be attached to `form` for event delegation)
*/
form.addEventListener('focusin', (event) => {
    console.log(event.target.value); // Logs the value of focused input
});

/*  
//*🔹 Blur & Focusout Events
--------------------------------------------------
👉 `blur` → **Does NOT bubble** (Must be attached to individual input fields)
👉 `focusout` → **Bubbles**
*/
form.addEventListener('focusout', (event) => {
    console.log(event.target.value); // Logs value before moving focus elsewhere
});

/*  
//*🔹 Click Event
--------------------------------------------------
👉 Triggers when **anywhere in the form** is clicked.
*/
form.addEventListener('click', (event) => {
    console.log(event.target.value); // Logs the value of clicked input
});

/*  
//*🔹 Double Click (dblclick) Event
--------------------------------------------------
👉 Triggers when a user **double-clicks** anywhere in the form.
⚠️ Typo Fix: It should be "dblclick" instead of "dbclick"
*/
form.addEventListener('dblclick', (event) => {
    console.log(event.target.value); // Logs the value of double-clicked input
});

/*  
//*🔹 Submit Event
--------------------------------------------------
👉 Triggers when the form is **submitted**.
👉 By default, **page refreshes** after form submission.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page auto refresh
    console.log("Form Submitted");
});

/*  
//*🔹 Reset Event
--------------------------------------------------
👉 Triggers when the form is **reset** using a reset button (`<button type="reset">`in html element is must do).
*/
form.addEventListener('reset', (event) => {
    console.log("Form Reset");
});

/*  
//*🔹 Prevent Default Form Submission
--------------------------------------------------
👉 Prevents the page from refreshing on form submission.
👉 Retrieves values from multiple inputs.
⚠️ Not efficient if there are many input fields.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page refresh

    const first = document.getElementById('first');
    console.log(first.value);

    const second = document.getElementById('second');
    console.log(second.value);

    const third = document.getElementById('third');
    console.log(third.value);

    const result = document.getElementById('result');
    result.innerText = `${first.value} ${second.value} is a Man of Culture`;
});

/*  
//*🔹 Handling Large Forms Efficiently with FormData API
--------------------------------------------------
👉 `FormData` is an **object** that holds form data as key-value pairs.
👉 **Solves the problem** of manually accessing multiple input fields.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form); // Stores form data as key-value pairs
    // console.log(data);
    // 🔹 Iterating through FormData
    console.log("Keys:");
    for (let key of data.keys()) console.log(key);

    console.log("Values:");
    for (let value of data.values()) console.log(value);

    console.log("Entries:"); // array ke form mei key and values deta hai 
    for (let entry of data.entries()) console.log(entry);

    // 🔹 Destructuring FormData Entries
    console.log("Destructured Entries:");
    for (let [key, value] of data.entries()) console.log(key, value);

    // 🔹 Converting FormData to Arrays
    console.log("Keys as Array:", Array.from(data.keys()));
    console.log("Values as Array:", Array.from(data.values()));
    console.log("Entries as Array:", Array.from(data.entries()));
});
