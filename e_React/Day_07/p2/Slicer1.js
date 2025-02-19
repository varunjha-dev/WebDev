// 📦 Importing createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// 📝 Array Example (Not Used in the Code, Just for Understanding)
arr = [10, 20, 30, 40]; // Object stored as a reference

// 📝 Original vs Draft Object Explanation:
// ----------------------------------------------------
// | Original Object | Draft (Duplicate) | Updated?  |
// |----------------|------------------|-----------|
// | {count: 0}     | {count: 1}        | Yes       |
// ----------------------------------------------------
// 🛠️ Immer Library: It creates a new draft object internally 
//                  and updates it instead of mutating the original state.

// 🔹 Defining Initial State
const initialState = { count: 0 };

// 🔄 Creating Redux Slice
const reactslicer = createSlice({
    name: "slice1", // 🏷️ Unique name for this slice
    initialState, // 🎯 Setting Initial State
    reducers: {
        // 🔼 Increment Action: Increases count by 1
        Increment: (state) => {
            state.count = state.count + 1;
        },

        // 🔽 Decrement Action: Decreases count by 1
        Decrement: (state) => {
            state.count = state.count - 1;
        },

        // 🔄 Reset Action: Resets count to 0
        Reset: (state) => {
            state.count = 0;
        },

        // 🔢 Custom Increaser Action: Increases count by a custom value
        CustomIncreaser: (state, action) => {
            state.count += action.payload;
        }
    }
});

/* 📝 Alternative Approach (Without Immer):
Increment: (state) => {
    return { ...state, count: state.count + 1 };
}
*/

// 📝 Action Object Example:
// { type: "slice1/Increment", payload: argument };

// 🌍 Exporting Actions for Dispatching
export const { Increment, Decrement, Reset, CustomIncreaser } = reactslicer.actions;

// 🌍 Exporting Slice (For Debugging in App.js)
export { reactslicer };

// 🛠️ Exporting Reducer for Store Configuration
export default reactslicer.reducer;
