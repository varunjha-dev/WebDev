// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header"
import FoodOption from "./components/FoodOption"
import GroceryOption from "./Components/GroceryOption";

createRoot(document.getElementById('root')).render(
  <div className="">
            <Header />
            <FoodOption />
            <GroceryOption></GroceryOption>
        </div>
)
