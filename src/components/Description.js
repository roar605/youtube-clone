import React, { useContext, useEffect } from 'react'
import { VideosContext } from '../utils/videos/videosContext';
import { useParams } from 'react-router-dom';
const Description = () => {
  // let video;  
  //   video=localStorage.getItem("video"); 
  //   console.log("videos  is ",video);
  const { video } = useContext(VideosContext);
  // console.log("my video is ",video);
  // const {resId} = useParams()
  // console.log("Params ",resId)
  let params = new URL(document.location).searchParams;
  let name = params.get("v")
  const dataVideo = video.find((video) => video.id == name);
 


  return (
    <div className='bg-gray-100 ml-5 mt-4 mb-2 h-24  w-[940px] rounded-xl p-2'>
      <h1 className='font-semibold text-xl'>{dataVideo?.snippet?.title}</h1>
      <div className='flex justify-between'>
        <div className='flex'>
          <img className='h-8 my-2' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU'></img>
    
          <h1 className='text-xl m-2 '>{dataVideo?.snippet?.channelTitle}</h1>
        </div>

        <button className='px-2 bg-gray-200 hover:bg-gray-300 rounded-xl'>Subscribe</button>
        <div className='flex'>
          <button className='mx-8 px-2 bg-gray-200 hover:bg-gray-300 rounded-xl'>{dataVideo?.statistics?.likeCount} Likes</button>
          <button className='px-2 bg-gray-200 hover:bg-gray-300 rounded-xl'>Share</button>
        </div>

        <button className='px-2 bg-gray-200 hover:bg-gray-300 rounded-xl'>More</button>
      </div>
    </div>
  )
}

export default Description