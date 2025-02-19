import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./Add";

/*  
    ! ============================================
    !  Main App Component
    ! ============================================
*/

function App() { 
     
    /*  
        ? useState Hook:
        * - 'language' state stores an array of programming languages
        * - 'setLanguage' updates the state
    */
    const [language, setLanguage] = useState(["TS", "JS", "Java"]);

    /*  
        ! ==================================
        !  Function to Add New Language
        ! ==================================
    */

    function handleClick() {
        setLanguage(["C++", ...language]);  // * Adds "C++" at the beginning of the array
    }

    /*  
        ! ==================================
        !  Virtual DOM vs Real DOM Example
        ! ==================================
    */

    // ? Virtual DOM Element (React) => Light weight copy
    const VDom = <h1>Hello Coder Army</h1>;

    // ? Real DOM Element (Vanilla JavaScript)
    const RDom = document.createElement('h1');
    RDom.innerText = "Hello Coder Army";

    // ? Console output to compare VDOM & RDOM
    console.log(VDom);
    console.dir(RDom);

    /*  
        ! ==================================
        !  Rendering UI
        ! ==================================
    */

    return (
        <>
            {/* * Displaying language list dynamically using Add component */}
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "50px"
                }}
            >
                {language.map((value, index) => (
                    <Add key={value} value={value} />
                ))}
            </div>

            {/* * Adding some spacing */}
            <br />
            <br />
            <br />
            <br />

            {/* * Button to add new language */}
            <button onClick={handleClick}>Add Language</button>
        </>
    );
}

/*  
    ! ==================================
    !  Rendering the App to the DOM
    ! ==================================
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
