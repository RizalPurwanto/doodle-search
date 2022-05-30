import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { ReactTinyLink } from 'react-tiny-link'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { deleteFromBookmark, fetchNews } from "../store/actions"
import { AiFillDelete } from "react-icons/ai"


export default function Bookmarked() {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const bookmarks = useSelector(state => state.bookmarks)
    const loadingState = useSelector(state => state.isLoading)



    function deleteBookmark(e, link) {
        console.log("INI DELETE BUTTON")
        e.preventDefault()
        dispatch(deleteFromBookmark(link))
        console.log(bookmarks, "INI BOOKMARKS SETELAH DELETE")
    }


   
    console.log(bookmarks, "INI Bookmarks")
    return (
        <div className="mt-5">

            {bookmarks.length > 0 && bookmarks.map((link, i) => {
                return (
                    <div className="mx-3 sm:mx-40 my-2 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-lg">
                        
                        <a href='' onClick={e => deleteBookmark(e, link)}><AiFillDelete title="Delete Bookmark" className='mb-1 float-right'></AiFillDelete></a>
                        <br></br>
                        <LinkPreview url={link}></LinkPreview>

                    </div>
                )
            })}


        </div>
    )
}