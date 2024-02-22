import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./constants"
import { useDispatch, useSelector } from "react-redux";
import { addSerchSuggestions } from "../reduxFiles/searchSlice";

const useSearchSuggestions = (searchText,setSuggestions)=>{
    
    const dispatch = useDispatch();
    const cacheData = useSelector((store)=>store.search);

    useEffect(()=>{

        const timer = setTimeout(()=>{searchSuggestions()},200) ;
    return ()=> clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchText])

    const searchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        if (!data.ok) {
            throw new Error(`Network response was not ok: ${data.status} ${data.statusText}`);
          }
        const response = await data.json();
          if(cacheData.legth>0){
            setSuggestions(cacheData)
          }else{
            setSuggestions( response[1]);
            dispatch(addSerchSuggestions({
                [searchText]:response[1]
            }))
          }
       
    }

   
}




  

export default useSearchSuggestions;