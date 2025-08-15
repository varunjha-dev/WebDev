// 📦 Importing Required Modules
import { configureStore } from "@reduxjs/toolkit"; // 🛠️ configureStore to create Redux store
import CartReducer from "./slice2"; // 🛍️ Importing Cart Reducer (slice2)

// 🏪 Creating the Redux Store
const stores = configureStore({
    reducer: {
        slice2: CartReducer // 🔗 Assigning the cart reducer to `slice2`
    }
});

// 📤 Exporting the Store to use in the Application
export default stores;
