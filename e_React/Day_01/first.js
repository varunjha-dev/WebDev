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