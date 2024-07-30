import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className=' m-3'>
        <img className='object-contain rounded-xl' alt='thumbnail' src={info?.snippet?.thumbnails?.high?.url}></img>
        <div className='font-medium'>{info?.snippet?.title}</div>
        <h1>{info?.snippet?.channelTitle}</h1>
        <div className='flex '>
            <h1 >{info?.statistics?.viewCount} views</h1>
            <h1 className='ml-10'>{info?.statistics?.likeCount} likes</h1>
        </div>
    </div>
  )
}

export default VideoCard