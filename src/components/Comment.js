import React from 'react'
import { CommentList } from './CommentContainer'

const Comment = ({ data }) => {
  return (
    <>
      <div className='flex mx-5 px-2 '>
        <div>
          <img className='h-8 my-2 ' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU'></img>
        </div>
        <div className='mx-4'>
          <h1>{data.user}</h1>
          <h1>{data.comment}</h1>
        </div>
      </div>
      <div className='mx-8 p-1 my-1 border-l-2 border-l-black '>
        <CommentList comment={data.replies} />
      </div>
    </>
  )
}

export default Comment