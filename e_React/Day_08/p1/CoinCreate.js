import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";

/*  
    ! ============================================
    !  CoinCreate Component (Fetch & Display Data)
    ! ============================================
*/

export default function CoinCreate() {
    
    const dispatch = useDispatch();
    
    // ? Extracting required state from Redux store
    const { data, loading, error } = useSelector((state) => state.slice1);

    useEffect(() => {
        // * Fetch 20 cryptocurrency market data on component mount
        dispatch(FetchData(20));// This is a funcetion not action hence it has no type. hence handled by middleware
    }, [dispatch]);

    /*  
        ! ==================================
        !  Handling Different UI States
        ! ==================================
    */

    if (loading) {
        return <h1>Data is Loading...</h1>; // * Show loading message while fetching data
    }

    if (error) {
        return <h1>Error has Occurred!</h1>; // * Show error message if request fails
    }

    /*  
        ! ==================================
        !  Rendering the List of Coins
        ! ==================================
    */

    return (
        <>
            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {data.map((value) => (
                    <CoinCard key={value.id} coin={value} />
                ))}
            </div>
        </>
    );
}
