import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = ()=>{
    return(
        <div className="grid grid-cols-12 min-h-[91vh]">
            <Sidebar/>
            <div className="col-span-11 p-5">
            <Outlet/>
            </div>
        </div>
    )
}
export default Body;