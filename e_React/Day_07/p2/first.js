// 📦 Importing React Core Modules
import React from "react";
import ReactDOM from "react-dom/client";

// 🌍 Importing Redux Provider for State Management
import { Provider } from "react-redux";

// 🏪 Importing Redux Store
import stores from "./Stores";

// 🔄 Importing Components
import Counting from "./Counting";
import { reactslicer } from "./Slicer1";
import CustomCounter from "./CustomCounter";

function App() {
    
    // 🛠️ Logging the Slice for Debugging Purposes
    console.log(reactslicer);

    return (
        // 🏪 Wrapping App Inside Redux Provider to Access Global Store
        <Provider store={stores}>

            {/* 🔢 Counter Component */}
            <Counting />
            
            {/* 📏 Adding Space Between Components */}
            <br />
            <br />
            <br />

            {/* 🔢 Custom Counter Component */}
            <CustomCounter />
            
        </Provider>
    );
}

// 🚀 Rendering the App Component to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
