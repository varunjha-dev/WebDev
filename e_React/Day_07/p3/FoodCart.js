// 📦 Importing Required Modules
import { useState } from "react";         // ⚡ useState Hook to track item status (inCart)
import { addItems, removeItems } from "./slice2"; // 🛒 Redux actions for adding/removing items
import { useDispatch } from "react-redux"; // 🔄 useDispatch Hook to trigger actions

// 🛒 FoodCart Component: Represents a single food item with Add/Remove functionality
export default function FoodCart({ value }) {
     
    // 🎯 State: Tracks whether the item is in the cart or not
    const [inCart, setInCart] = useState(false);

    // 🔄 useDispatch Hook: To dispatch Redux actions
    const dispatch = useDispatch();

    // 🛍️ handleClick: Adds or Removes the item from the cart
    function handleClick() {
        if (inCart) {
            dispatch(removeItems()); // ❌ Remove item from cart
            setInCart(false);
        } else {
            dispatch(addItems());    // ✅ Add item to cart
            setInCart(true);
        }
    }

    return (
        <>
            {/* 🍽️ Display Food Name */}
            <h1>{value.food}</h1>
            
            {/* 💰 Display Food Price */}
            <h2>{value.Price}</h2>

            {/* 🛒 Add/Remove Button (Toggles based on 'inCart' state) */}
            <button onClick={handleClick}>
                {inCart ? "Remove" : "Add"}
            </button>
        </>
    );
}
