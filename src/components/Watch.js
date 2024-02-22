import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addChat, closeMenu } from "../reduxFiles/appSlice";
import useComments from "../utils/useComments";
import CommentContainer from "./CommentContainer";
import ChatContainer from "./ChatContainer";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [userMsg, setUserMsg] = useState('');
  const watch = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu(false));
    return () => {
      dispatch(closeMenu(true));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useComments(watch);
  const sendMsg = ()=>{
    dispatch(addChat({name:'Vamshi',message:userMsg}))
    setUserMsg('')
  }
  return (
    <div className="h-full">
      <div className="h-[500px] grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-8 h-full">
          <iframe
            className=" h-full w-full"
            src={YOUTUBE_VIDEO_LINK + watch}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" col-span-12 md:col-span-4">
          <p className="bg-slate-200 px-4 py-4">
            <h1 className="font-bold">Live Chat</h1>
            <ChatContainer />
          </p>
          <div className="grid grid-cols-12 mt-3">
            <div className="col-start-1 col-end-11">
              <input type="text" value={userMsg} onChange={(e)=>{setUserMsg(e.target.value)}} className="border border-black w-full py-1 px-2 rounded-lg"/>
            </div>
            <div className="mx-3">
              <button onClick={sendMsg} className="bg-blue-600 shadow-sm text-white px-3 py-1 rounded-1g">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;
