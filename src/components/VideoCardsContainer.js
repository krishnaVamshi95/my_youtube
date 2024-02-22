import { useSelector } from 'react-redux';
import usePopularVideos from '../utils/usePopularVideos'
import VideoCard from './VideoCard';

const VideoCardsContainer = () => {
    usePopularVideos();
    const isPopularVideos = useSelector((store)=>store.app.isPopularVideos);
    
  return isPopularVideos && (
    <div className='flex flex-wrap w-full'>
        {
            isPopularVideos.map((video,index)=><VideoCard key={video?.id+index} videoData={video} />)
        }
        
    </div>
  )
}

export default VideoCardsContainer