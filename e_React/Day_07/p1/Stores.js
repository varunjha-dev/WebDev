// 📦 Import Required Modules
import { configureStore } from "@reduxjs/toolkit"; // 🛠 Importing configureStore to create a Redux store
import slice1Reducer from "./Slicer1"; // 🔄 Importing the reducer from Slicer1.js

// 🏪 Configuring the Redux Store
const stores = configureStore({
    reducer: {
        slice1: slice1Reducer, // 🔹 Registering slice1 reducer inside the Redux store
    }
});
// 📤 Exporting the configured store for use in the application
export default stores;
