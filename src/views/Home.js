
import {BiSearchAlt2} from 'react-icons/bi'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Home  ()  {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const body = {
            query: query.split(" ").join("+")
        }
        console.log(body, "INI BODY")
        if (query == "" ) {
            // setError("query required")
            console.log("Query needed")
        } else {

           navigate(`/res?q=${body.query}`)
        }

    }
    return (
        <div className="grid grid-cols-1 mt-48  sm:mt-48  h-screen">
            <div className=''>
                <div className='my-5'>
                <a className="text-red-700 font-bold text-6xl">D</a>
                <a className="text-blue-700 font-bold text-6xl">oo</a>
                <a className="text-yellow-700 font-bold text-6xl">d</a>
                <a className="text-green-700 font-bold text-6xl">l</a>
                <a className="text-red-700 font-bold text-6xl">e</a>
                </div>
                <form onSubmit={submitHandler} className='flex justify-center'>
                <input onChange={e => setQuery(e.target.value)} className="border py-1 border-5 border-gray-800 rounded-2xl px-2 ml-2 sm:w-1/3 w-full" type="search"></input>
                <button type='submit' className='mr-2 rounded-xl bg-blue-600 hover:bg-blue-800 px-2 py-1'><BiSearchAlt2 className='text-2xl  text-white'/></button>
                </form>
            </div>
        </div>
    )
}