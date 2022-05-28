import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { fetchImages } from "../store/actions"
import{AiOutlineLoading3Quarters} from "react-icons/ai"

export default function ImageResult ()  {
    const [searchParams] = useSearchParams()
    const images = useSelector(state => state.images)
    const loadingState = useSelector(state => state.isLoading)
    const query = searchParams.get("q").split(" ").join("+")


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImages(query))

    }, [query])

    if(loadingState) {
        return (
            <div className="flex justify-center my-40">
                <AiOutlineLoading3Quarters className="animate-spin text-5xl text-blue-700 font-bold text-center"  />
            </div>
        )
    } else {
        return (
            <div className="mt-5">
                <div className="flex flex-wrap justify-around px-4 py-4 ">
                
                {images.image_results?.map((image, i) => {
                    return(
                        <div key={i} className=" flex flex-col justify-center  mx-3 my-3 hover:shadow-2xl rounded-lg ">
                            <a href={image.link.href}>
                            <img className="grow " src={image.image.src}></img>
                            </a>
                    
                    <p className="px-2  text-left truncate ">{image.link.title.split("   ")[0]}</p>
                    <p className="px-2 text-left">{image.link.title.split("   ")[1]}</p>
                </div>
                    )
                })}
                </div>
                
                
            </div>
        )
    }
    
}