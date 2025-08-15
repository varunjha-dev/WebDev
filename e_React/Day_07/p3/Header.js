// 📦 Importing Required Modules
import { useSelector } from "react-redux"; // 🔄 useSelector Hook to access Redux state

// 🏠 Header Component: Displays the app name and cart count
export default function Header() {

    // 🛒 Retrieving Cart Count from Redux Store (slice2)
    const count = useSelector((state) => state.slice2.count);

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
            {/* 🍽️ Swiggy Brand Name */}
            <h1>Swiggy</h1>

            {/* 🛍️ Display Cart Count */}
            <h2>Cart: ({count})</h2>
        </div>
    );
}
