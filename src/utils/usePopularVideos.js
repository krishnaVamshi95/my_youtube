/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { YOUTUBE_VIDEO_LIST } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../reduxFiles/appSlice";

const usePopularVideos = ()=>{
    const dispatch = useDispatch();
    const isPopularVideos = useSelector((store)=>store.app.isPopularVideos)
    const getYoutubeVideoList = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_LIST);
        const json = await data.json();
       // console.log(json.items);
       dispatch(addPopularVideos(json.items))
    }
    useEffect(()=>{
      !isPopularVideos && getYoutubeVideoList();
    },[])
};

export default usePopularVideos;
