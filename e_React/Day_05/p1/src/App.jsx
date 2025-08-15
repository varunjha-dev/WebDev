import React,{ useState, useEffect } from "react";


/*
🔥 **React useState & useEffect Hooks Explained**
--------------------------------------------------
✅ `useState` → Manages the current background color state.
✅ `useEffect` → Runs **side-effects** (updates the background color when `color` changes).
*/

function App() {
	// 🟢 useState Hook: State to track the current background color
	const [color, setColor] = useState("black"); // Default color is black

	// 🔄 useEffect Hook: Updates `document.body` background color when `color` changes
	useEffect(() => {
		document.body.style.backgroundColor = color;
	}, [color]); // 🎯 Dependency Array: Runs the effect whenever `color` changes, same chiz do baar nahi chalne dega 

	return (
		<>
			<div className="btn-container">
				{/* 🎨 Color Buttons - Click to change background color */}
				<button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
				<button onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
				<button onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
				<button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
				<button onClick={() => setColor("crimson")} style={{ backgroundColor: "crimson" }}>Crimson</button>
				<button onClick={() => setColor("indigo")} style={{ backgroundColor: "indigo" }}>Indigo</button>
				<button onClick={() => setColor("lime")} style={{ backgroundColor: "lime" }}>Lime</button>
				<button onClick={() => setColor("tomato")} style={{ backgroundColor: "tomato" }}>Tomato</button>
			</div>
		</>
	);
}

export default React.memo(App);
// use React.memo only when parent has too many operation and calling child in every operation uselessly
/*
🚀 **How It Works?**
---------------------
1️⃣ **Initial Render:**
   - `color = "black"` (default state).
   - `useEffect` sets `document.body.style.backgroundColor = "black"`.

2️⃣ **On Button Click:**
   - `setColor("red")` updates the state.
   - React **re-renders** the component.
   - `useEffect` runs again → Updates background to `"red"`.

🎯 **Key Takeaways:**
✔ `useState` maintains state across renders.
✔ `useEffect` handles **side-effects** like DOM updates.
✔ Clicking a button updates `color` and triggers a **UI re-render**.
*/
