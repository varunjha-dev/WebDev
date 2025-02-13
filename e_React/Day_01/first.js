// ! React is a JavaScript library
// * It helps write complex UI with fewer lines of code compared to plain JavaScript
// * Optimizes performance by handling updates efficiently
// * Everything React can do, JavaScript can also do—but with more effort

// ? Let's build a basic React-like library from scratch!

// -----------------------------------------------
// * Creating Elements in Pure JavaScript
// -----------------------------------------------

// ? Step 1: Create an <h1> element
const header1 = document.createElement('h1');  // Creating an <h1> tag
header1.innerText = "Hello Coder Army";        // Adding text inside <h1>
header1.style.backgroundColor = "pink";        // Setting background color
header1.style.fontSize = "30px";               // Font size
header1.style.color = "white";                 // Text color

// ? Step 2: Create an <h2> element
const header2 = document.createElement('h2');  
header2.innerText = "Kaise ho Aap sab log";    
header2.style.backgroundColor = "black";       
header2.style.fontSize = "25px";               
header2.style.color = "white";                 

// ? Step 3: Append elements to the root div
const root = document.getElementById('root');
root.append(header1);
root.append(header2);

// * PROBLEM: Too much repetition! Every time we need a new element, we repeat the same process. 
// * SOLUTION: Let's create our own version of React to make this easier!

// -----------------------------------------------
// * Implementing a Simple React-like Library 🫡
// -----------------------------------------------

// ? React Object (handles element creation)
const React = {
    /**
     * @function createElement
     * @param {string} tag - The HTML tag name (e.g., 'h1', 'div')
     * @param {object} styles - CSS styles for the element
     * @param {string|array} children - Text content or nested elements
     * @returns {HTMLElement} - The created DOM element
     */
    createElement: function (tag, styles, children) {
        const element = document.createElement(tag); // Create the element

        // If children is an array, append multiple child elements
        if (typeof children === 'object') {
            for (let value of children) element.append(value);
        } else {
            element.innerText = children; // Otherwise, set text content
        }

        // Apply styles dynamically
        for (let key in styles) {
            element.style[key] = styles[key]; // Example: element.style.fontSize = '30px'
        }

        return element; // Return the created element
    }
};

// ? ReactDOM Object (handles rendering)
const ReactDOM = {
    /**
     * @function render
     * @param {HTMLElement} element - The element to render
     * @param {HTMLElement} root - The root container
     */
    render: function (element, root) {
        root.append(element); // Append element to the root
    }
};

// -----------------------------------------------
// * Creating Elements Using Our React-like Library
// -----------------------------------------------

const header1React = React.createElement(
    'h1', 
    { fontSize: '30px', backgroundColor: 'pink', color: 'wheat' }, 
    "Hello Coder Army"
);

const header2React = React.createElement(
    'h2', 
    { fontSize: '25px', backgroundColor: 'black', color: 'white' }, 
    "Kaise ho Aap sab log"
);

const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");
const li4 = React.createElement('li', {}, "Git and GitHub");
const li5 = React.createElement('li', {}, "TS");

const UL = React.createElement(
    'ul', 
    { fontSize: '25px', backgroundColor: 'black', color: 'white' }, 
    [li1, li2, li3, li4, li5]  // ? Nested elements (list items inside <ul>)
);

// ? Rendering Elements in the DOM
ReactDOM.render(header1React, document.getElementById('root'));
ReactDOM.render(header2React, document.getElementById('root'));
ReactDOM.render(UL, document.getElementById('root'));

// -----------------------------------------------
// * Why are React and ReactDOM Separate?
// -----------------------------------------------

// * React deals with creating UI elements (like <h1>, <div>)
// * ReactDOM is responsible for rendering those elements in the actual web page
// * This separation makes React flexible—so it can work with different rendering environments 
//   (e.g., React Native for mobile apps, ReactDOM for web apps)
