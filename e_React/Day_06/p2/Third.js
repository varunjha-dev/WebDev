// 🛠 Importing Global Context and useContext Hook
import GlobalContext from "./Global";  
import { useContext } from "react";

function Third() {

    // 📌 Accessing Global State (`count`) and its Updater Function (`setCount`)
    // ✅ Using `useContext(GlobalContext)` to **avoid prop drilling**
    // ✅ Now, `Third` can **directly** access `count` and `setCount` from the Global Context
    const { counts, setCounts } = useContext(GlobalContext);

    return (
        <>
            {/* 🏷️ Displaying the Current Count Value */}
            <h2>I am Printing {counts}</h2>  

            {/* 🔼 Incrementing `count` by 5 when the button is clicked */}
            <button onClick={() => setCounts(counts + 5)}>Increment</button>  
        </>
    );
}

// 📌 Exporting Third Component
export default Third;
