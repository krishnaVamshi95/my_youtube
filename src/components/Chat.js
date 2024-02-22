import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { generateName, generateSentence } from "../utils/helper";
import { addChat } from "../reduxFiles/appSlice";

const Chat = () => {
    const data = useSelector((store)=>store.app.chatData);
    const dispatch = useDispatch();
    useEffect(()=>{
     const timer =   setInterval(()=>{
            const name = generateName();
            const message = generateSentence();
            dispatch(addChat({name:name,message:message}));
        },1500);
        return ()=> clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return data && (
    <div className="flex-col-reverse">
    {
        data.map((chat,index)=><div key={index} className={ "flex items-center flex-wrap w-full my-3"}>
        <div>
          <span>
            <i className="fa fa-user-circle text-2xl" aria-hidden="true"></i>
          </span>
        </div>
        <p className="font-bold mx-2">{chat.name} : </p>
        <p className="text-sm"> {chat.message}</p>
      </div>)
    }
      
    </div>
  )
}

export default Chat