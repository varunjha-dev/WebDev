// ✅ Creating an element in React (without JSX)
const element = React.createElement(
    "h1",
    { id: "first", className: "Rahul;", style: { backgroundColor: "purple", fontSize: "30px", color: "pink" } },
    "Hello Coder Army"
);

// ✅ Getting the root container
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Creating another element
const element2 = React.createElement(
    "h2",
    { id: "second", className: "varun", style: { backgroundColor: "black", fontSize: "30px", color: "white" } },
    "Maja Aaya Mujhe"
);

// ❌ What happens if we render element2?
//    - It will replace element1 instead of adding it
//    - React clears previous content before rendering new content
Reactroot.render(element2);  // element1 disappears

// ✅ To render both elements together, wrap them inside a parent container
const div1 = React.createElement('div', {}, [element, element2]);
Reactroot.render(div1);  // Now both elements are visible

// 🔴 Why is this approach not ideal?
//    - Code readability is poor
//    - Too much complexity just to write simple HTML
//    - **JSX (JavaScript XML) solves this** (to be discussed later)

// ---------------------------------------------------------------------------------
// 📌 Can we host this on a server?
// ---------------------------------------------------------------------------------

// ✅ Yes, but it's not the best approach!
//    - This code is **not optimized** (lots of comments, unnecessary spaces, full React & ReactDOM from CDN)
//    - Loading React & ReactDOM from CDN increases page load time

// ❌ Bad Idea: Copying React & ReactDOM code into our JS file
//    - It saves time on network requests but increases file size
//    - We are not using all features of React, so why load everything?

// ✅ Solution: Use a **Bundler**
//    - **Optimizes the code**
//    - **Removes unnecessary comments & spaces**
//    - **Includes only required parts of React & ReactDOM**
//    - **Combines everything into 1-2 small JS files**

// 📌 Popular Bundlers: Webpack, Vite, Parcel (we use **Parcel**)

// ---------------------------------------------------------------------------------
// 📌 How to install Parcel?
// ---------------------------------------------------------------------------------

// 1️⃣ Initialize npm
//    ```bash
//    npm init -y (shortcut)
//    npm init  (long)
//    ```

// 2️⃣ Install Parcel
//    ```bash
//    npm install parcel
//    ```

// ✅ What is **package.json**?
//    - Contains project metadata & dependencies
//    - Helps manage project libraries

// ✅ What is **npm**?
//    - Many say it stands for **Node Package Manager**, but it's just **npm**
//    - Acts as a registry for JavaScript libraries (React, Parcel, TypeScript, etc.)

// ---------------------------------------------------------------------------------
// 📌 Why does `node_modules` appear after installing Parcel?
// ---------------------------------------------------------------------------------

// ✅ **node_modules** contains:
//    - Parcel itself
//    - All libraries Parcel depends on (dependencies of dependencies)

// 🚀 Example:
//    - **Parcel → Uses Library A → Library A uses Library B**
//    - **node_modules** includes Parcel, Library A, and Library B

// ---------------------------------------------------------------------------------
// 📌 Installing React via npm (instead of CDN)
// ---------------------------------------------------------------------------------

// 1️⃣ Install React & ReactDOM
//    ```bash
//    npm install react react-dom
//    ```

// ✅ `package.json` stores:
//    - All dependencies (React, ReactDOM, Parcel, etc.)
//    - Their versions (`^19.0.0` for React)

// ---------------------------------------------------------------------------------
// 📌 Understanding Dependency Versions
// ---------------------------------------------------------------------------------

// ✅ Versioning: `major.minor.patch` (e.g., `18.2.3`)
//    - **Major**: Breaking changes ❌ (e.g., React 16 → 17)
//    - **Minor**: New features ✅ (e.g., React 18.0 → 18.1)
//    - **Patch**: Bug fixes ✅ (e.g., React 18.2.1 → 18.2.3)

// ✅ Symbols in `package.json`
//    - `^19.0.0` → Allows minor & patch updates (19.x.x)
//    - `~19.0.0` → Allows only patch updates (19.0.x)

// ---------------------------------------------------------------------------------
// 📌 What is `package-lock.json`?
// ---------------------------------------------------------------------------------

// ✅ Ensures dependency versions remain the same across all environments
// ✅ While `package.json` allows flexible versions, `package-lock.json` locks exact versions

// 🚀 Why is this important?
//    - "It works on my system but not on yours!" → Different dependency versions
//    - Ensures the project behaves consistently even after months

// ---------------------------------------------------------------------------------
// 📌 Why should we NOT push `node_modules` to GitHub?
// ---------------------------------------------------------------------------------

// ✅ `node_modules` is ~300MB (too big for GitHub)
// ✅ Instead, push only `package.json` & `package-lock.json`
//todo ✅ Other developers can run `npm install` to download dependencies

// ---------------------------------------------------------------------------------
// 📌 What happens when you run `npm install`?
// ---------------------------------------------------------------------------------

// 1️⃣ **Looks at `package-lock.json`**
//    - Downloads the exact dependency versions

// 2️⃣ **If `package-lock.json` is missing**
//    - Reads `package.json`
//    - Downloads dependencies based on `^` or `~` versioning

// 🚀 This ensures your project works the same way on every system!

