// 📦 Importing Required Modules
import { createSlice } from "@reduxjs/toolkit"; // 🛠️ createSlice to manage Redux state

// 🍽️ Creating a Slice for Food Cart Management
const FoodSlicer = createSlice({
    name: "slice2", // 🏷️ Unique Slice Name

    // 🔢 Initial State: `count` represents the number of items in the cart
    initialState: { count: 0 },

    // 🎯 Reducer Functions: Define actions to modify the state
    reducers: {
        // ➕ addItems: Increases the count (adds an item to the cart)
        addItems: (state) => { state.count++ },

        // ➖ removeItems: Decreases the count (removes an item from the cart)
        removeItems: (state) => { state.count-- },
    }
});

// 📤 Exporting the Reducer to use in Redux Store
export default FoodSlicer.reducer;

// 🚀 Exporting Actions for use in Components
export const { addItems, removeItems } = FoodSlicer.actions;
