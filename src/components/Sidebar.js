import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = ()=>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    return isMenuOpen && (
        <div className=" col-span-12 text-center md:col-span-1 py-2 px-2 shadow-lg min-h-[91vh] overflow-y-scroll">

            <div className="px-2 py-2 border-b border-black">
            <ul >
                <li className="my-3"><Link to={'/'}>Home</Link> </li>
                <li className="my-3">Shorts</li>
                <li className="my-3">Subscriptions</li>
            </ul>
            </div>
            <div className="px-2 py-2 border-b border-black">
                <p className="font-bold">sports</p>
            <ul >
                <li className="my-3">Cricket</li>
                <li className="my-3">Soccer</li>
                <li className="my-3">Tennis</li>
            </ul>
            </div>
            <div className="px-2 py-2 ">
                <p className="font-bold">Explore</p>
            <ul >
                <li className="my-3">Trending</li>
                <li className="my-3">Shopping</li>
                <li className="my-3">Music</li>
                <li className="my-3">Music</li> 
                <li className="my-3">Movies</li>
                <li className="my-3">Live</li>
                <li className="my-3">Gamining</li>
                <li className="my-3">News</li>
                <li className="my-3">Learning</li>
                <li className="my-3">Fashion & beauty</li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar