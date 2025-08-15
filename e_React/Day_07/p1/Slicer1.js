// 📦 Import Required Modules
import { createSlice } from "@reduxjs/toolkit"; // 🛠 Importing createSlice to define a Redux slice

// 🔹 Defining a Redux Slice
const reactslicer = createSlice({
    name: "slice1", // 🔹 Slice name (used as a namespace in Redux store)
    
    initialState: { count: 0 }, // 🔢 Initial state of the counter
    
    reducers: {
        // 🔺 Action: Increment the count by 1
        Increment: (state) => { 
            state.count = state.count + 1; 
        },

        // 🔻 Action: Decrement the count by 1
        Decrement: (state) => { 
            state.count = state.count - 1; 
        },

        // 🔄 Action: Reset the count to 0
        Reset: (state) => { 
            state.count = 0; 
        }
    }
});

// 📤 Exporting the actions for use in components
export const { Increment, Decrement, Reset } = reactslicer.actions;

// 📤 Exporting the reducer to configure the Redux store
export default reactslicer.reducer;
