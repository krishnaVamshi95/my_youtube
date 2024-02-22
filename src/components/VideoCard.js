import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { snippet } = videoData;
  const {statistics} =  videoData?.statistics ? videoData?.statistics :" '"
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics ? statistics : '';
  const id = videoData.id.channelId ?  videoData.id.channelId : videoData.id.videoId ? videoData.id.videoId : videoData.id.playlistId ? videoData.id.playlistId : videoData.id;
  return (
    <Link to={'/watch?v='+id}>
      <div className="mx-3 my-3 shadow-lg p-3 cursor-pointer">
        <div>
          <img
            alt={channelTitle}
            src={thumbnails.standard ? thumbnails.standard.url : thumbnails.default.url}
            className="w-72 rounded-lg"
          />
        </div>
        <p className="my-2 h-12 overflow-hidden text-ellipsis w-72">{title}</p>
        <p>{channelTitle}</p>
        <span>
          <b>views: </b>
          {viewCount}
        </span>
      </div>
    </Link>
  );
};

export default VideoCard;
