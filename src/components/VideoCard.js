import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics,id } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <Link to={'/watch?v='+id}>
      <div className="mx-3 my-3 shadow-lg p-3 cursor-pointer">
        <div>
          <img
            alt={channelTitle}
            src={thumbnails.standard.url}
            className="w-72 rounded-lg"
          />
        </div>
        <p className="my-2 h-12 overflow-hidden text-ellipsis w-72">{title}</p>
        <span>
          <b>views: </b>
          {viewCount}
        </span>
      </div>
    </Link>
  );
};

export default VideoCard;
