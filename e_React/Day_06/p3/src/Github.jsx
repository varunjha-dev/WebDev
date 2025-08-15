import { useEffect,useState  } from "react";
import { useParams, useSearchParams } from "react-router"

export default function Github(){

    const {name} = useParams(); // use params returns an object
    const [profile,setProfile] = useState(null);

    async function fetchUser() {
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        fetchUser();
    },[]);

    return (
        <>
            <h1>My Github Profile</h1>
            <div>
                <img src={profile?.avatar_url} />
                <h2>{profile?.login}</h2>
            </div>
        </>
        
    )
}