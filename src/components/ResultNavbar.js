import { NavLink, useSearchParams, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function ResultNavbar(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [queryStr, setQuery] = useState('')

    //console.log(location.pathname, "INI LOCATION")
    const query = searchParams.get("q")?.split(" ").join("+")
    useEffect(() => {
     setQuery(searchParams.get("q"))
    
     
    }, [searchParams])

    function backToHome() {
        navigate("/")
    }
    

    console.log(queryStr, "INI QUERYSTR")
    const submitHandler = (e) => {
        e.preventDefault()
        const body = {
            query: queryStr.split(" ").join("+")
        }
        console.log(body.query, "INI BODY")
        //console.log(location, "INI LOCATION")
        if (query == "") {
            // setError("query required")
            console.log("Query needed")
        } else if (location.pathname == "/res") {
            console.log("masuk res")
            navigate(`/res?q=${body.query}`)
        } else if (location.pathname == "/img") {

           navigate(`/img?q=${body.query}`)
        } else if (location.pathname == "/nws") {

            navigate(`/nws?q=${body.query}`)
        } 

    }

    return (
        <div className="border border-gray-500">
            {(location.pathname == "/res" || location.pathname == "/img" || location.pathname == "/nws" ) &&
                <div  className="py-3">
                    <form onSubmit={submitHandler} className='flex justify-start'>
                        <div  onClick={backToHome} className="mx-2">

                            <a href="" className="text-red-700 font-bold text-4xl">D</a>
                            <a href="" className="text-blue-700 font-bold text-4xl">oo</a>
                            <a href="" className="text-yellow-700 font-bold text-4xl">d</a>
                            <a href="" className="text-green-700 font-bold text-4xl">l</a>
                            <a href="" className="text-red-700 font-bold text-4xl">e</a>
                        </div>
                        <input onChange={e => setQuery(e.target.value)} className="border py-1 mx-2 border-5 border-gray-800 rounded-2xl px-2 w-full sm:w-1/3" value={queryStr}  type="search"></input>
                        <button className='mr-2 rounded-xl bg-blue-600 hover:bg-blue-800 px-2 py-1'><BiSearchAlt2 className='text-2xl text-white' /></button>
                    </form>
                    <nav className=" mt-2 my-2">
                        <ul className="flex  mx-40 justify-start">
                            <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname == "/res" ? "text-white bg-blue-600" : ""}`}><NavLink to={`/res?q=${query}`}>Search</NavLink></li>
                            <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname == "/img" ? "text-white bg-blue-600" : ""}`}><NavLink to={`/img?q=${query}`}>Images</NavLink></li>
                            <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname == "/nws" ? "text-white bg-blue-600" : ""}`}><NavLink to={`/nws?q=${query}`}>News</NavLink></li>
               <li className={`rounded-lg px-2 hover:text-white hover:bg-blue-600 
               focus:text-white focus:bg-blue-600
               mx-3 ${location.pathname == "/bookmarked" ? "text-white bg-blue-600" : ""}`}><NavLink to={`/bookmarked`}>Bookmarks</NavLink></li>


                        </ul>

                    </nav>
                </div>

            }
        </div>
    )


}