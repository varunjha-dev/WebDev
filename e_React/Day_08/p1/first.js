// 📦 Importing Required Modules
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // 🏪 Provides Redux store to the React app

// 🔗 Importing Store and Component
import stores from "./stores"; // 🏬 Central Redux Store
import CoinCreate from "./CoinCreate"; // 💰 CoinCreate Component (Handles Coin-related logic)

// 🚀 Main App Component
function App() {
    return (
        // 🏪 Wrapping the App inside Provider to enable Redux
        <Provider store={stores}>
            <CoinCreate /> {/* 💰 Renders the CoinCreate Component */}
        </Provider>
    );
}

// 🔥 Rendering the App Component inside the Root Element
ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// ────────────────────────────────────────────────────────────────────────────────
// 🛠️ Function to Fetch User Data (if locally called )
// ────────────────────────────────────────────────────────────────────────────────

// function Fetchuser() {
//     useEffect(async () => {
        
//         🏷️ Dispatch Loading State Before Fetching Data
//         dispatch(LoadingData(true));
        
//         try {
//             🌍 Fetching User Data from GitHub API
//             const response = await fetch("Github User Info");
//             const da = await response.json();
            
//              📩 Dispatching Fetched Data to Store
//             dispatch(UpdateData(da));
        
//         } catch (error) {
//             ❌ Dispatching Error if API Call Fails
//             dispatch(ErrorData("Error Occurred"));
//         }
        
//     });
// }

// ────────────────────────────────────────────────────────────────────────────────
// 📌 Redux Action Objects
// ────────────────────────────────────────────────────────────────────────────────

// 🔄 When Loading Starts
// {type: 'slice/LoadingData', payload: true};

// ✅ When Data is Successfully Fetched
// {type: 'slice/UpdateData', payload: da};

// ❌ When an Error Occurs
// {type: 'slice/ErrorData', payload: "Error Occurred"};

// ────────────────────────────────────────────────────────────────────────────────
// 🎯 If Another Component Needs Fetching Logic, We Can Use This Template
// ────────────────────────────────────────────────────────────────────────────────
