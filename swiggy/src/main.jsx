import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import FoodOption from './components/FoodOption';
import GroceryOption from './components/GroceryOption';
import DineOption from './components/DineOption';

createRoot(document.getElementById('root')).render(
    <div className="">
        <Header />
        <FoodOption />
        <GroceryOption />
        <DineOption />
    </div>
);