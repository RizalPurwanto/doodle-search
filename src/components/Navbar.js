import { NavLink, useSearchParams, useLocation } from "react-router-dom";

export default function Navbar (props)  {
    const location = useLocation()
    console.log(location.pathname, "INI LOCARION")
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    return (
        <div>
            {(location.pathname == "/" || location.pathname == "/images" || location.pathname == "/news" || location.pathname == "/bookmarked") &&  
        
        <nav className="mt-2 my-2">
           <ul className="flex  justify-end">
               <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname =="/" ? "text-white bg-blue-600" : ""}`}><NavLink to={'/'}>Search</NavLink></li>
               <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname =="/images" ? "text-white bg-blue-600" : ""}`}><NavLink to={'images'}>Images</NavLink></li>
               <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname =="/news" ? "text-white bg-blue-600" : ""}`}><NavLink to={'news'}>News</NavLink></li>
                <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname =="/bookmarked" ? "text-white bg-blue-600" : ""}`}><NavLink to={'bookmarked'}>Bookmarks</NavLink></li>
               
               
            </ul> 
           
        </nav>
    }
        </div>
    )
    
    
}