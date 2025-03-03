import { info } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
    return (
        <>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-10">
                {info && info.map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </>
    );
}