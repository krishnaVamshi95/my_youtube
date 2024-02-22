export const YOUTUBE_LOGO =
  "https://www.gstatic.com/youtube/img/promos/growth/2c752437638462382db627493e15984dac4417c1ad714c694b00489a796be957_324x72.png";

  const GOOGLE_KEY= process.env.REACT_APP_YOUTUBE_API_KEY
console.log(GOOGLE_KEY,"GOOGLE_KEYGOOGLE_KEY");
export const YOUTUBE_VIDEO_LIST =
  // eslint-disable-next-line no-useless-concat
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_KEY}`;


  export const YOUTUBE_VIDEO_LINK = "https://www.youtube.com/embed/";

  // const CORS_PROXY = 'https://corsproxy.org/'

  // export const YOUTUBE_SEARCH_API = `https://clients1.google.com/complete/search?client=firefox&ds=yt&q=`; 
  
  export const YOUTUBE_SEARCH_API = "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://clients1.google.com/complete/search?client=firefox&ds=yt&q="
  );

  export const YOUTUBE_SEARCH_BY_KEYWORD_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key="+GOOGLE_KEY

 export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key="+GOOGLE_KEY



