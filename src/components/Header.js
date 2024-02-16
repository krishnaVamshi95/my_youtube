import { useDispatch } from "react-redux"
import { YOUTUBE_LOGO } from "../utils/constants"
import { toggleMenu } from "../reduxFiles/appSlice";

const Header = ()=>
{
    const dispatch = useDispatch();
    const togglemenu = ()=>{
        dispatch(toggleMenu())
    }
    return(
        <div className=" text-white grid grid-cols-12 px-4 py-4 shadow-lg align-middle">
           <div className="col-span-2 flex align-middle">
                <span className="my-auto"><i className="fa fa-bars text-black cursor-pointer" onClick={()=>togglemenu()} aria-hidden="true"></i></span>
                <img alt="logo" className="w-28 mx-3" src={YOUTUBE_LOGO} />
           </div>
           <div className="col-span-9 text-black text-center">
            <input type="search" className=" rounded-l-full border border-black focus:outline-none px-3 w-2/4 py-1"/>
            <span className=" py-[0.32rem] pb-[0.35rem] px-3 bg-zinc-300 border border-l-0 rounded-r-full border-black"><i className="fa fa-search" aria-hidden="true"></i></span>
           </div>
           <div className="col-span-1 text-black">
            <span className=" my-auto"><i className="fa fa-user-circle text-2xl" aria-hidden="true"></i></span>
           </div>
        </div>
    )
}

export default Header