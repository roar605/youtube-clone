import React from 'react'
import Recommend from './Recommend'

const RecommendList = () => {
  const list = ["All","Mixes","Music","News","Live","Gaming","AFC Asian Cup","La Liga","Football","Cricket","Podcasts","Dance","Cooking",]
  return (
    <div className='flex mx-auto justify-center'>
        {list.map((data,index)=> <Recommend key={index} name={data}/>)}
        

    </div>
  )
}

export default RecommendList