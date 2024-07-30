import React from 'react'
import Comment from './Comment'

const commentsData = [
  {
    user:"Rohit Kumar Singh",
    comment:"lorem ipsum doras drefit jugo isag ",
    replies:[],
  },
  {
    user:"Rohit Kumar Singh",
    comment:"lorem ipsum doras drefit jugo isag ",
    replies:[
      {
        user:"Rohit Kumar Singh",
        comment:"lorem ipsum doras drefit jugo isag ",
        replies:[],
      },
    ],
  },
  {
    user:"Rohit Kumar Singh",
    comment:"lorem ipsum doras drefit jugo isag ",
    replies:[
      {
        user:"Rohit Kumar Singh",
        comment:"lorem ipsum doras drefit jugo isag ",
        replies:[
          {
            user:"Rohit Kumar Singh",
            comment:"lorem ipsum doras drefit jugo isag ",
            replies:[
              {
                user:"Rohit Kumar Singh",
                comment:"lorem ipsum doras drefit jugo isag ",
                replies:[],
              },
              {
                user:"Rohit Kumar Singh",
                comment:"lorem ipsum doras drefit jugo isag ",
                replies:[
                  {
                    user:"Rohit Kumar Singh",
                    comment:"lorem ipsum doras drefit jugo isag ",
                    replies:[],
                  }
                ],
              },{
                user:"Rohit Kumar Singh",
                comment:"lorem ipsum doras drefit jugo isag ",
                replies:[],
              }
            ],
          },
        ],
      },
      {
        user:"Rohit Kumar Singh",
        comment:"lorem ipsum doras drefit jugo isag ",
        replies:[],
      }
    ],
  },
  {
    user:"Rohit Kumar Singh",
    comment:"lorem ipsum doras drefit jugo isag ",
    replies:[],
  }
]
//n times nested comments
export const CommentList = ({comment})=>{
  return(
    <div>
      {comment.map((comment,index)=><Comment key={index} data={comment}/>)}
    </div>
    
  )
}

const CommentContainer = () => {
  return (
    <div className=' bg-gray-100 w-[940px] rounded-xl ml-5'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comment={commentsData}/>
    </div>
  )
}

export default CommentContainer