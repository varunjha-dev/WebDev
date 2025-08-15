import { useCallback, useEffect, useState } from "react";

function Body() {
    // ✅ State for storing fetched GitHub profiles
    const [profiles, setProfiles] = useState([]);
    
    // ✅ State to store user input for searching profiles
    const [searchInput, setSearchInput] = useState("");

    // ✅ Function to fetch random GitHub profiles
    const fetchRandomProfiles = useCallback(async (count) => {
        try {
            const random = Math.floor(1 + Math.random() * 10000); // 🔹 Generate a random ID
            const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error("⚠️ No profiles found!");
            }

            setProfiles(data); // ✅ Update state with fetched profiles
        } catch (error) {
            console.error("❌ Error fetching profiles:", error.message);
        }
    }, []);

    // ✅ Function to search GitHub users by username
    const searchUserProfile = async () => {
        if (!searchInput.trim()) return; // 🚫 Prevent empty searches

        try {
            const response = await fetch(`https://api.github.com/users/${searchInput}`);
            if (!response.ok) {
                throw new Error("⚠️ User not found!");
            }

            const data = await response.json();
            setProfiles([data]); // ✅ Show only the searched user
        } catch (error) {
            console.error("❌ Error fetching user:", error.message);
            setProfiles([]); // 🚫 Clear profiles if user not found
        }
    };

    // ✅ Fetch 10 random profiles when the component mounts
    useEffect(() => {
        fetchRandomProfiles(10);
    }, [fetchRandomProfiles]);

    return (
        <div className="container">
            {/* 🔹 Search by username */}
            <input 
                type="text"
                className="input"
                placeholder="Enter GitHub username..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={searchUserProfile}>🔍 Search User</button>

            {/* 🔹 Fetch random profiles based on number input */}
            <input 
                type="number"
                className="input"
                placeholder="Number of Profiles"
                min="1"
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={() => fetchRandomProfiles(Number(searchInput))}>🔄 Fetch Profiles</button>

            {/* 🔹 Display profiles */}
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map((user) => (
                        <div key={user.id} className="card">
                            <img src={user.avatar_url} alt="User Avatar" />
                            <h2>{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </div>
                    ))
                ) : (
                    <p>⚠️ No profiles to display</p>
                )}
            </div>
        </div>
    );
}

export default Body;
