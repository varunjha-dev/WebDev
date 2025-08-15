//* ****************************************************
//* 🏆 DOM Manipulation - JavaScript
//* ****************************************************

//! 🔹 Accessing an Element by ID
const obj = document.getElementById('first'); 

//* ✅ Modifying Content
obj.innerHTML = "Hello Mahan Aadmi"; 

//* ✅ Logging Properties
console.log(obj);           // Logs the element itself
console.log(typeof obj);    // Logs: 'object' (as DOM elements are objects)
console.log(obj.__proto__); // Logs: Prototype of the element
console.log(obj.innerHTML); // Logs: "Hello Mahan Aadmi"
console.log(obj.id);        // Logs: 'first' (ID of the element)
console.log(obj.className); // Logs: 'header1' (Class name of the element)


//* ****************************************************
//* 🔹 Accessing Elements by Class Name
//* ****************************************************

const obj2 = document.getElementsByClassName('header1');

console.log(obj2);      // Logs: HTMLCollection of elements with class 'header1'
console.log(obj2[0]);   // Logs: First element in the collection (h1)
console.log(obj2[1]); 
//* ✅ Modifying Styles
obj2[1].style.backgroundColor = "pink"; // Changes the background of second element

//* ✅ Logging Style Properties
console.log(typeof obj2[1].style); // Logs: 'object' (as styles are objects)
console.log(obj2[1].style);        // Logs: CSS properties applied to the element
obj2[1].style.fontSize = "39px";
console.log(obj2[1].tagName);