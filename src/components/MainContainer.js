import React from 'react'
import RecommendList from './RecommendList'
import VideoContainer from './VideoContainer'
import SideBar from './SideBar'

const MainContainer = () => {
  return (
    <div className='flex justify-self-center'>
      <div>
        <SideBar/>
      </div>
      <div>
      <RecommendList />
      <VideoContainer />
      </div>

    </div>
  )
}

export default MainContainer