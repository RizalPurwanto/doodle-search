import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { ReactTinyLink } from 'react-tiny-link'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom"
import { fetchNews, addToBookmark } from "../store/actions"
import { FaRegBookmark } from "react-icons/fa"


export default function NewsResult() {
    const [searchParams] = useSearchParams()
    const news = useSelector(state => state.news)
    const loadingState = useSelector(state => state.isLoading)
    const query = searchParams.get("q").split(" ").join("+")
    const navigate = useNavigate()

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchNews(query))

    }, [query])

    const addBookmark = (e, link) => {
        e.preventDefault()

        console.log(e, "Bookmarked", link)
        dispatch(addToBookmark(link))
        navigate("/bookmarked")

    }

    console.log(news.entries, "INI ENTRIES")
    if (loadingState) {
        return (
            <div>
                <div className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">


                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-full animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-60 bg-gray-300 w-full animate-pulse" ></p>

                </div>
                <div className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">


                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-full animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-60 bg-gray-300 w-full animate-pulse" ></p>

                </div>
                <div className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">


                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-full animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-60 bg-gray-300 w-full animate-pulse" ></p>

                </div>
                <div className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">


                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-full animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-60 bg-gray-300 w-full animate-pulse" ></p>

                </div>
                <div className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">


                    <p className="text-left rounded-xl my-1 h-10 bg-gray-300 text-3xl w-full animate-pulse"></p>
                    <p className="text-left rounded-xl my-1 h-60 bg-gray-300 w-full animate-pulse" ></p>

                </div>

            </div>
        )
    } else {
        return (
            <div className="mt-5">
                {/* <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={1}
                    minLine={1}
                    description="test"
                    url="https://www.sportskeeda.com/pop-culture/what-time-will-family-guy-season-20-finale-air-fox-details-explored"
                /> */}
                {news.entries?.map((entry, i) => {
                    return (
                        <div key={i} className="mx-3 text-right sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">
                            <p className='text-left'>{entry.title}</p>
                            <a href='' onClick={e => addBookmark(e, entry.link)}><FaRegBookmark title="Add to Bookmarks" className='mb-1 float-right'></FaRegBookmark></a>
                            <br></br>
                            <LinkPreview url={entry.link}></LinkPreview>

                        </div>
                    )
                })}


            </div>
        )
    }

}