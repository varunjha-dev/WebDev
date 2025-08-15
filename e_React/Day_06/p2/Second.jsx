// 🛠 Importing Required Modules
import Third from "./Third";
import GlobalContext from "./Global";
import { useContext } from "react";

function Second() {

    // 🌍 Accessing Global Context
    // ✅ Using `useContext(GlobalContext)` to get `counts` and `setCounts`
    const { counts, setCounts } = useContext(GlobalContext);

    return (
        <>
            {/* 🏷️ Displaying the Counter Value */}
            <h2>Kaise hain aap sab log {counts}</h2>

            {/* 🔄 Rendering `Third` Component */}
            <Third />
        </>
    );
}

export default Second;
