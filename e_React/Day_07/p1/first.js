// 📦 Import Required Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // 🔗 Provides Redux store access to the entire app
import stores from "./stores"; // 🏬 Importing the Redux store
import Counting from "./Counting"; // 🔢 Importing the Counting component

// 📌 Functional Component: App (Wraps Counting component with Redux Provider)
function App() {
    
    // 🛠 Debugging: Logging the Redux store for reference
    console.log(stores);

    return (
        // 🌍 Providing the Redux store to the entire app
        <Provider store={stores}>
            {/* 🔢 Rendering the Counting component inside the Provider */}
            <Counting />
        </Provider>
    );
}

// 🚀 Rendering the App component inside the root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
