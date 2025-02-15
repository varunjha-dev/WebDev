// ✅ Header Component: Displays the navigation bar with logo, menu options, search bar, and profile actions
function Header() {
    return (
        <div className="header">
            
            {/* 🏷️ Myntra Logo */}
            <img 
                className="logo" 
                src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256" 
                height="30px" 
                width="30px" 
                alt="Myntra Logo"

            />
            
            {/* 🛍️ Navigation Menu */}
            <div className="option">
                <button className="btn">Men</button>
                <button className="btn">Women</button>
                <button className="btn">Kids</button>
                <button className="btn">Home and Living</button>
                <button className="btn">Beauty</button>
                <button className="btn">Studio</button>
            </div>

            {/* 🔍 Search Bar */}
            <input 
                className="searchBar" 
                placeholder="Search for products, brands, and more"
            />
            
            {/* 👤 Profile Section */}
            <div className="profile">
                <button className="pro-btn">Profile</button>
                <button className="pro-btn">Wishlist</button>
                <button className="pro-btn">Bag</button>
            </div>
            
        </div>
    );
}

export default Header;
