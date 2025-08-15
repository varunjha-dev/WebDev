// 📦 Importing Required Modules
import FoodCart from "./FoodCart"; // 🛒 Importing the FoodCart Component

// 🍽️ List of Food Items
const foodItems = [
    { id: 1,  food: 'Pizza',    Price: "200"  },
    { id: 2,  food: 'Pasta',    Price: "300"  },
    { id: 3,  food: 'Momos',    Price: "200"  },
    { id: 4,  food: 'Kebab',    Price: "2000" },
    { id: 5,  food: 'Chicken',  Price: "1200" },
    { id: 6,  food: 'Paneer',   Price: "2800" },
    { id: 7,  food: 'Burger',   Price: "2100" },
    { id: 8,  food: 'Poha',     Price: "4200" },
    { id: 9,  food: 'Rice',     Price: "100"  },
    { id: 10, food: 'Daal',     Price: "300"  },
];

/* 🍽️ Card Component: Displays a List of Food Items */
export default function Card() {

    return (
        <div 
            style={{
                display: "flex",         // 🏗️ Display items in a flex container
                justifyContent: "center",// 🔄 Center the items horizontally
                flexWrap: "wrap",        // 🔄 Wrap items to the next row if needed
                gap: "20px"              // 📏 Space between items
            }}
        >
            {foodItems.map((value) => {
                return (
                    <div key={value.id}>
                        {/* 🛒 Passing Food Item to FoodCart Component */}
                        <FoodCart value={value} />
                    </div>
                );
            })}
        </div>
    );
}
