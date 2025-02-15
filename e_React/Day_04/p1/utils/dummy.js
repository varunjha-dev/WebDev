// ✅ Array of Clothing Items with Offers & Prices
const arr = [
    { cloth: "Tshirt", Offer: "20-40% Off", price: "250" },
    { cloth: "Pant", Offer: "20-40% Off", price: "340" },
    { cloth: "Skirt", Offer: "10-20% Off", price: "140" },
    { cloth: "Kurta", Offer: "30-60% Off", price: "275" },
    { cloth: "Patloon", Offer: "20-40% Off", price: "100" },
    { cloth: "Shoes", Offer: "40-60% Off", price: "650" },
    { cloth: "Shirt", Offer: "20-40% Off", price: "450" },
    { cloth: "Tshirt", Offer: "20-40% Off", price: "500" },
    { cloth: "Tshirt", Offer: "20-40% Off", price: "230" },
    { cloth: "Tshirt", Offer: "20-40% Off", price: "300" },
    { cloth: "Tshirt", Offer: "20-40% Off", price: "500" },
    { cloth: "Tshirt", Offer: "20-40% Off", price: "350" }
];

// ✅ Function 1: Greet the Coder Army
export function greet() {
    return <h1>Hello Coder Army</h1>;
}

// ✅ Function 2: Greet Bhaiya Jii
export function meet() {
    return <h1>Hello Bhaiya Jii</h1>;
}

// 🔥 Default Export: arr (No need for {} when importing this)
export default arr;

/*
📌 Importing in another file:
-----------------------------------
✅ Import default (arr) 👇
import arr from "./utils/dummy";

✅ Import named functions (greet & meet) 👇
import { greet, meet } from "./utils/dummy";

✅ Rename imports using `as` 👇
import { greet as Goa, meet as Chandigarh } from "./utils/dummy";
*/
