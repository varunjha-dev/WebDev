// 📦 Importing Required Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // 🏪 Provides Redux store to the React app

// 📌 Importing Components
import Header from "./Header"; // 🏠 Header Component (Shows Cart Count)
import Card from "./Card"; // 🍔 Card Component (Displays Food Items)

// 🔗 Importing the Redux Store
import stores from "./stored"; // 🏬 Central Redux Store

// 🚀 Main App Component
function App() {
    return (
        // 🏪 Wrapping the App inside Provider to enable Redux
        <Provider store={stores}>
            <Header /> {/* 🛒 Displays Swiggy Header & Cart Count */}
            <Card />   {/* 🍽️ Displays the Food Menu */}
        </Provider>
    );
}

// 🔥 Rendering the App Component inside the Root Element
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
