import React, { useContext } from 'react'
import { VideosContext } from '../utils/videos/videosContext';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import OtherVideosCard from './OtherVideosCard';

const OtherVideos = () => {

    const { video } = useContext(VideosContext);
  console.log("my video is ",video);
  return (
    <div className=' '>
        {video.map((videos,index)=><Link key={index} to={"/watch?v="+videos.id}>
            <div className='p-2'><OtherVideosCard info={videos}/></div></Link>)}
    </div>
  )
}

export default OtherVideos