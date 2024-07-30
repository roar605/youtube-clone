import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';


const WatchContainer = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  })
  return (

      <div className='flex'>

        <div>
          <iframe width="960" height="480" src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen className=' rounded-2xl'></iframe>
        </div>
      </div>

  )
}

export default WatchContainer