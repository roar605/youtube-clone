import React, { useEffect, useState,useContext } from 'react'
import {YOUTUBE_API} from "../utils/constant";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { VideosContext } from '../utils/videos/videosContext';



const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
    const {dispatch}=useContext(VideosContext);

    useEffect(()=>{
        getVideos();
        
    },[])
    const getVideos=async()=>{
        const jsonData =await fetch(YOUTUBE_API);
        const videosData = await jsonData.json();
        dispatch({ type: "ADD_VIDEOS", payload: [...videosData.items] });
        setVideos(videosData.items); 
    }

  return (
    <div className='flex flex-wrap w-[100%] mx-auto justify-center'>
        {videos.map((videos,index)=><Link key={index} to={"/watch?v="+videos.id}><div className='w-72'><VideoCard info={videos}/></div></Link>)}
        
    </div>
  )
}

export default VideoContainer