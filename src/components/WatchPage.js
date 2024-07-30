import React from 'react'
import WatchContainer from './WatchContainer'
import Description from './Description'
import CommentContainer from './CommentContainer'
import OtherVideos from './OtherVideos'
import LiveChat from './LiveChat'



const WatchPage = () => {
  return (
    <div className='w-full flex'>
      <div>
        <WatchContainer />
        <Description />
        <CommentContainer />
      </div>
      <div className='w-full pl-4'>

        <LiveChat/>
        <OtherVideos />
      </div>
    </div>
  )
}

export default WatchPage