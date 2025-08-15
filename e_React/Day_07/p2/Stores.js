// 📦 Importing configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// 🔄 Importing Reducers
import slice1Reducer from "./Slicer1"; // 🛠️ Main reducer for slice1

// 🏪 Configuring Redux Store
const stores = configureStore({
    reducer: {
        slice1: slice1Reducer, // 🎯 First state slice (slice1)
        slice2: slice1Reducer, // 🎯 Second state slice (slice2) (Uses same reducer)
    }
});

/* 📝 Redux Action Object Structure:
{
    type: "slice1/Increment", // 📌 Action Type
    payload: undefined         // 📌 Data passed (optional)
}
*/

// 🌍 Exporting Store
export default stores;
