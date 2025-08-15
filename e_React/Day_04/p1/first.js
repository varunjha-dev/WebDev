// ✅ Importing React and ReactDOM to use React features
import React from "react"; 
import ReactDOM from "react-dom/client";

// ✅ JSX Basics
/* JSX allows writing HTML-like syntax inside JavaScript */
const element1 = <h1>Hello Coder Army</h1>; // Simple JSX element

// 📌 JSX supports JavaScript expressions but not statements
// ✅ Allowed: JS expressions (producing a result)
const name = "Rohit";
const element2 = <h2>Ram Ram {name} Jii</h2>; // ✅ This will work

// ❌ Not Allowed: JS statements inside JSX
// <h2>Ram Ram {let name = "Rohit"} Jii</h2>  ❌ This will cause an error

// 📌 Objects in JSX
const obj = { name: "Rohit", age: 50 };

// ❌ Directly inserting an object in JSX gives an error
// const errorElement = <h2>Ram Ram Bhaiya Ji {obj}</h2>; // ❌ ERROR

// ✅ Accessing object properties works fine
const element3 = <h2>Ram Ram Bhaiya Ji {obj.name}</h2>; // ✅ This will work

// ❌ JSX does not support if-else directly
// ✅ But we can use ternary operators inside JSX

// 📌 JSX supports arrays (but not arrays containing objects)
const arrElement = <h2>Numbers: {[1, 2, 3]}</h2>; // ✅ Works fine

// ❌ Arrays containing objects will give an error
// const objArray = <h2>{[{ name: "Rohit" }, { name: "Mohit" }]}</h2>; ❌ ERROR

// ✅ Function-Based Components (React Component)
function Greet() {
  return <h2>Ram Ram Bhaiya Ji</h2>;
}

// 📌 JSX function calling formats
const element4 = Greet(); // ✅ Calling function directly (Returns JSX)
const element5 = <Greet />; // ✅ Calling function as a JSX component

// ❌ Function names must start with a **capital letter** in JSX
/* 
<Greet /> ✅ Works fine
<greet /> ❌ Will not work
*/
// Reason: If function names start with lowercase, JSX confuses them with HTML tags

// 📌 Passing Props (Data) to Components
function GreetWithProps(props) {
  return <h2>Ram Ram {props.name} Jii, your age is {props.age}</h2>;
}

// ✅ Calling the component with props
const element6 = <GreetWithProps name="Varun jha" age="21" />;

/*
🛠 JSX Treats Props Like Function Arguments
<GreetWithProps name="Rohit" age="23" />  
⬇  
GreetWithProps({ name: "Rohit", age: 23 }) ✅
*/

// 📌 JSX Attribute Formatting (Just like HTML)
const element0 = <h2 id="first" className="second"></h2>;
// JSX keeps this format because it’s easy to read

// ✅ Rendering our React component inside the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element6);

// 📌 Modules in React (For Cleaner Code)
/*
Instead of writing everything in one file, we create separate component files.  
Example:
- Create a folder `components/`
- Move `GreetWithProps` into a file like `components/GreetWithProps.jsx`
- Import & use it:  
  import GreetWithProps from "./components/GreetWithProps";
*/
