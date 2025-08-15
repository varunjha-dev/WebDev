import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header"; // ✅ Importing Header Component
import Body from "./component/Body"; // ✅ Importing Body Component

// 🎯 Main Component: GithubProfile (Renders Header & Body)
function GithubProfile() {
    return (
        <>  
            <Header/> {/* 🔹 Rendering Header Component */}
            <Body />  {/* 🔹 Rendering Body Component */}
        </>
    );
}

// 🔥 Rendering `GithubProfile` inside the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile />);
