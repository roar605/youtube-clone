import React from 'react'

const OtherVideosCard = ({ info }) => {
    return (
        <div className='flex w-[520px] mx-4'>
            <div className=''>
                <img className='object-contain rounded-xl' alt='thumbnail' src={info?.snippet?.thumbnails?.default?.url}></img>
            </div>
            <div className='w-[320px] mx-4'>
                <div className='font-medium'>{info?.snippet?.title}</div>
                <h1>{info?.snippet?.channelTitle}</h1>
                <div className='flex '>
                    <h1 >{info?.statistics?.viewCount} views</h1>
                    <h1 className='ml-10'>{info?.statistics?.likeCount} likes</h1>
                </div>
            </div>

        </div>
    )
}

export default OtherVideosCard