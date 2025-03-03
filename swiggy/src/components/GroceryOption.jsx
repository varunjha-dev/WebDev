import {grocery} from '../utils/Grocery'
import Grocerycard from "./GroceryCard"
export default function GroceryOption(){
    return (
        <div className="mt-20 w-[80%] container mx-auto">
        <h1 className='font-extrabold text-2xl font-serif'>Shop Groceries on Instamart</h1>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-10">
                        {grocery && grocery.map((foodData) => (
                            <Grocerycard key={foodData.id} foodData={foodData} />
                        ))}
                    </div>
        </div>
    )
}