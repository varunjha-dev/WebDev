// ✅ Importing Required Hooks from React
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// 🔥 Password Generator Component
function PasswordGenerator() {
    // 🛠 State Variables (React will track these values and update UI accordingly)
    const [Password, setPassword] = useState(""); // Stores the generated password
    const [length, setLength] = useState(10); // Controls password length
    const [numberChanged, setNumberChanged] = useState(false); // Toggle for including numbers
    const [characterChanged, setCharacterChanged] = useState(false); // Toggle for including special characters

    // 🔥 Password Generation Logic (Memoized using `useCallback`)
    const generatePassword = useCallback(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Default character set (letters only)
        if (numberChanged) str += "0123456789"; // If numbers are selected, add them
        if (characterChanged) str += "!@#$%^&*()_+={}[]"; // If special characters are selected, add them

        let pass = "";
        for (let i = 0; i < length; i++) {
            pass += str[Math.floor(Math.random() * str.length)]; // Randomly pick characters
        }

        setPassword(pass); // Update the password state
    }, [length, numberChanged, characterChanged]); 
    // 🔥 `useCallback` ensures that this function is **only recreated** when `length`, `numberChanged`, or `characterChanged` changes

    // ⚡ Automatically generate a new password whenever dependencies change
    useEffect(() => {
        generatePassword();
    }, [generatePassword]); 
    // ✅ Whenever `generatePassword` changes (which happens when length, numberChanged, or characterChanged changes), the effect runs and updates the password

    return (
        <>
            <h1>{Password}</h1> {/* 🔥 Displays the generated password */}
            <div className="second">
                {/* 📏 Password Length Slider */}
                <input 
                    type="range" 
                    min={5} 
                    max={50} 
                    value={length} 
                    onChange={(e) => setLength(e.target.value)} 
                />
                <label>Length ({length})</label>

                {/* 🔢 Toggle for Including Numbers */}
                <input 
                    type="checkbox" 
                    defaultChecked={numberChanged} 
                    onChange={() => setNumberChanged(!numberChanged)} 
                />
                <label>Include Numbers</label>

                {/* 🔠 Toggle for Including Special Characters */}
                <input 
                    type="checkbox" 
                    defaultChecked={characterChanged} 
                    onChange={() => setCharacterChanged(!characterChanged)} 
                />
                <label>Include Special Characters</label>
            </div>
        </>
    );
}

// 🎯 Render the `PasswordGenerator` Component inside the Root Element
ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);

/*
🎯 **Code Flow Explanation:**
---------------------------------
✅ **1. State Variables:**
   - `Password` → Stores the generated password.
   - `length` → Controls the password length.
   - `numberChanged` → Boolean flag for including numbers.
   - `characterChanged` → Boolean flag for including special characters.

✅ **2. `useCallback()` for `generatePassword()`**
   - Ensures the function is only **re-created when needed**.
   - Uses `length`, `numberChanged`, and `characterChanged` as dependencies.
   - If none of these change, it **reuses the previous function** (optimizing performance).

✅ **3. `useEffect()` for Auto-Updating Password**
   - Runs `generatePassword()` whenever `length`, `numberChanged`, or `characterChanged` changes.
   - Ensures the password updates **only when needed**.

✅ **4. Rendering UI**
   - Displays the generated password.
   - Provides UI controls to change password length, enable numbers, and special characters.

📌 **Key Optimization:**
   - **Without `useCallback()`:** `generatePassword()` is created **on every render**.
   - **With `useCallback()`:** It **only updates when necessary**, reducing memory allocation.

🚀 **Now, You Can Easily Explain This Code in One Go!**
*/
