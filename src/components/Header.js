import { useDispatch } from "react-redux";
import { YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../reduxFiles/appSlice";
import { useState } from "react";
import useSearchSuggestions from "../utils/useSearchSuggestions";
import useSearchVideos from "../utils/useSearchVideos";

const Header = () => {
  const [searchText, setSearchText] = useState(" ");
  const [suggestions, setSuggestions] = useState([]);
  const [isOnSearch, setIsOnSearch] = useState(false);
  const dispatch = useDispatch();
  useSearchSuggestions(searchText, setSuggestions);
  const togglemenu = () => {
    dispatch(toggleMenu());
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useSearchVideos(searchText,isOnSearch)
  const isClicked = (ele)=>{
    setIsOnSearch(false);
    setSearchText(ele)
  }
  return (
    <div className=" text-white grid grid-cols-12 px-4 py-4 shadow-lg items-center">
      <div className="col-span-2 flex align-middle">
        <span className="my-auto">
          <i
            className=" fa fa-bars text-black cursor-pointer"
            onClick={() => togglemenu()}
            aria-hidden="true"
          ></i>
        </span>
        <img alt="logo" className="w-24 h-4 md:h-auto md:w-28 mx-3" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-9 text-black text-center">
        <div  onFocus={() => setIsOnSearch(true)}
            >
          <input
            type="search"
            value={searchText}
            className=" rounded-l-full border border-black focus:outline-none px-3 w-2/4 py-1"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <span className=" py-[0.32rem] pb-[0.35rem] px-3 bg-zinc-300 border border-l-0 rounded-r-full border-black">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          {isOnSearch && suggestions.length > 0 && (
          <div className="absolute bg-white px-5 py-3 left-[35%] w-[38%] mt-1 border shadow-lg text-start z-10">
            {suggestions.map((ele) => (
              <p
                key={ele}
                className="my-2 border-b shadow-sm"
                onClick={() => isClicked(ele)}
              >
                <span className="mx-1">
                  <i className="fa fa-search text-xs" aria-hidden="true"></i>
                </span>
                {ele}
              </p>
            ))}
          </div>
        )}
        </div>
       
      </div>
      <div className="col-span-1 text-black">
        <span className=" my-auto">
          <i className="fa fa-user-circle text-2xl" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
