import { useEffect } from "react";
import { YOUTUBE_SEARCH_BY_KEYWORD_API } from "./constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../reduxFiles/appSlice";

const useSearchVideos = (ele,isOnSearch)=>{
    const dispath = useDispatch();
    useEffect(()=>{
      getSearchedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOnSearch])
    const getSearchedVideos = async()=>{
        const fetchData = await fetch(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", ele));
        const results = await fetchData.json();
        
        if(!isOnSearch){
            console.log(results,"abccc");
            dispath(addPopularVideos(results.items))
        }
      }

};

export default useSearchVideos