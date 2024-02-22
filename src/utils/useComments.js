import { useEffect } from "react";
import { YOUTUBE_COMMENTS_API } from "./constants"
import { useDispatch } from "react-redux";
import { addComments } from "../reduxFiles/appSlice";

const useComments = (videoId)=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const getComments = async ()=>{
        const data = await fetch(YOUTUBE_COMMENTS_API.replace("[VIDEO_ID]",videoId));
        const json = await data.json();
        dispatch(addComments(json.items))
        console.log(json)
    }
};

export default useComments;