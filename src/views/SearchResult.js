import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../store/actions";
import { useLocation, useSearchParams } from "react-router-dom";


export default function SearchResult() {
    
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    

    const searches = useSelector(state => state.searches)
    const loadingState = useSelector(state => state.isLoading)

    console.log(loadingState, "INI LOADING")
    //console.log(searchParams.get("q"), "INI search params")
    const query = searchParams.get("q").split(" ").join("+")
    //console.log(query, "INI QUERY")
    useEffect(() => {
        dispatch(fetchSearch(query))

    }, [query])



    console.log(searches.results, "INI SEARCHES DALAM PAGE")
    if (loadingState) {
        return (
            <div>
                <div className="sm:mx-40 mx-2 my-8 w-full sm:w-1/2">
                    <p className="text-left rounded-lg my-1 mr-17 h-6 bg-gray-300 w-2/3 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-3/5 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-20 bg-gray-300 w-3/4 animate-pulse" ></p>
                </div>
                <div className="sm:mx-40 mx-2 my-8 w-full sm:w-1/2">
                    <p className="text-left rounded-lg my-1 mr-17 h-6 bg-gray-300 w-2/3 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-3/5 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-20 bg-gray-300 w-3/4 animate-pulse" ></p>
                </div>
                <div className="sm:mx-40 mx-2 my-8 w-full sm:w-1/2">
                    <p className="text-left rounded-lg my-1 mr-17 h-6 bg-gray-300 w-2/3 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-3/5 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-20 bg-gray-300 w-3/4 animate-pulse" ></p>
                </div>
                <div className="sm:mx-40 mx-2 my-8 w-full sm:w-1/2">
                    <p className="text-left rounded-lg my-1 mr-17 h-6 bg-gray-300 w-2/3 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-3/5 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-20 bg-gray-300 w-3/4 animate-pulse" ></p>
                </div>
                <div className="sm:mx-40 mx-2 my-8 w-full sm:w-1/2">
                    <p className="text-left rounded-lg my-1 mr-17 h-6 bg-gray-300 w-2/3 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-3/5 animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-20 bg-gray-300 w-3/4 animate-pulse" ></p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="mt-5 ">
                <p className="text-left sm:mx-40 mx-4">About {searches.results?.length} results</p>

                {searches.results?.map((res, i) => {
                    return (
                        <div key={i} className="mx-4  sm:mx-40 my-8 w-full sm:w-1/2">
                            <p className="text-left text-gray-900 hidden-overflow truncate">{res.link}</p>
                            <p className="text-left text-blue-600 text-3xl"><a href={res.link}>{res.title}</a></p>
                            <p className="text-left text-gray-700" >{res.description}</p>
                        </div>
                    )
                })}



            </div>
        )
    }

}