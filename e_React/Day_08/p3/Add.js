import { useState } from "react";

/*  
    ! ============================================
    !  Add Component (Voting System)
    ! ============================================
*/

/*  
    * Props:
    * - value: Name of the programming language (passed from parent)
*/

export default function Add({ value }) {
    
    /*  
        ? useState Hook:
        * - 'count' state stores the number of votes
        * - 'setCount' updates the vote count
    */
    const [count, setCount] = useState(0);

    /*  
        ! ==================================
        !  Rendering UI
        ! ==================================
    */

    return (
        <>
            {/* * Display language name and vote count */}
            <h1>{value}: {count}</h1>

            {/* * Button to increment vote count */}
            <button onClick={() => setCount(count + 1)}>Vote</button>
        </>
    );
}
