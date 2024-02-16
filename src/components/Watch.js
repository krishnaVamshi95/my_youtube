import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../reduxFiles/appSlice";

const Watch = () => {
    const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const watch = searchParams.get("v");
  useEffect(()=>{
    dispatch(closeMenu(false))
    return ()=>{
        dispatch(closeMenu(true))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className="h-full">
      <iframe
        className="w-2/3 h-2/3"
        src={YOUTUBE_VIDEO_LINK + watch}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
