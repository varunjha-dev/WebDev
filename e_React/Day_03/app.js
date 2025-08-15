// ✅ Import React and ReactDOM from node_modules
import React from "react";
import ReactDOM from "react-dom/client";

// 🎯 Using React.createElement (Old Way)
/* React.createElement creates a React element (JS object) that React converts into an HTML element */
const element = React.createElement(
  "h1",
  { id: "first", className: "Rahul", style: { backgroundColor: "blue", fontSize: "30px", color: "pink" } },
  "Hello Coder Army"
);
const element2 = React.createElement(
  "h2",
  { id: "second", className: "Varun", style: { backgroundColor: "black", fontSize: "30px", color: "white" } },
  "Maja Aaya Mujhe"
);

// 📌 Creating a React root for rendering
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Rendering multiple elements inside a div
const div1 = React.createElement("div", {}, [element, element2]);
Reactroot.render(div1);

// 🚀 JSX (JavaScript XML) - A Cleaner Way
/* JSX allows us to write HTML-like syntax inside JavaScript */
const newElement = <h1>Hello Coder Army</h1>;
Reactroot.render(newElement);

// 🔥 JSX Benefits:
// 1️⃣ Multiple elements inside a single parent
const newElement2 = (
  <>
    <h1>Hello Coder Army</h1>
    <h2>Maja Aaya Mujhe,dil garden garden horiya hai</h2>
  </>
);
Reactroot.render(newElement2);

// 2️⃣ Adding attributes like id, class
const newElement3 = (
  <>
    <h1 id="first" className="second">Hello Coder Army</h1>
    <h2>Maja Aaya Mujhe</h2>
  </>
);

// 3️⃣ Using JavaScript expressions inside JSX
const names = "Varun";
const newElement4 = (
  <>
    <h1>Hello {names}</h1> {/* Using JS inside JSX */}
    <h2>Maja Aaya Mujhe</h2>
  </>
);
Reactroot.render(newElement4);
// 4️⃣ Using JavaScript objects inside JSX
const obj = { age: 23, salary: 60 };
const newElement5 = (
  <>
    <h1>Hello {names},</h1>
    <h2>Your age is {obj.age}</h2>
  </>
);
Reactroot.render(newElement5);
// 5️⃣ Adding inline styles
const obj2 = { backgroundColor: "black", color: "white", fontSize: "30px" };
const newElement6 = (
  <>
    <h1>Hello {names},</h1>
    <h2 style={obj2}>Your age is {obj.age}</h2>
  </>
);
Reactroot.render(<>{newElement6}{newElement5}</>);// multiple element

// ✅ React Components (Function-Based)// class based legacy now
/* Components allow reusability and clean code */
function Greet() {
  return <h1>Aur Bhai Kaise ho?</h1>;
}

const Meet = () => <h2>Mera Sab Accha Hain</h2>;

// 🎯 Rendering both components inside a fragment <>
Reactroot.render(
  <>
    <Greet />
    <Meet />
  </>
);
