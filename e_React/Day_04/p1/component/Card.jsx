// ✅ Card Component: Displays product details
function Card(props) {
    return (
        <div className="card">
            
            {/* 🖼️ Product Image */}
            <img 
                src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" 
                height="200px" 
                width="200px" 
                alt="Product Image"
            />

            {/* 📝 Product Details */}
            <div className="card-desc" style={{ textAlign: "center" }}>

                {/* 🏷️ Product Name */}
                <h2>{props.cloth}</h2>  

                {/* 🔥 Offer / Discount */}
                <h1>{props.offer}</h1>

                {/* 💰 Price Information */}
                <p>Price: {props.price}</p>

                {/* 🛒 Shop Now Button (Styling can be improved) */}
                <h2>Shop Now</h2>

            </div>

        </div>
    );
}

// 📌 Exporting Card Component (so it can be used in other files)
export default Card;
