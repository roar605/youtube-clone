import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/ChatSlice';
import { generateRandomNames } from '../utils/helper';
import { makeid } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages)
  const [liveMessage,setLiveMessage]  = useState()

  useEffect(() => {
    const i = setInterval(() => {

      dispatch(
        addMessages({
          name: generateRandomNames(),
          message: makeid(10)
        })
      )
    }, 1000);
    return () => clearInterval(i)
  }, [])
  return ( 
    <div className='h-[480px] flex w-full border-black border-[1px] bg-slate-100 rounded-xl   overflow-y-scroll flex-col-reverse'>
      {chat.map((chat, i) => <ChatMessage key={i} name={chat.name} message={chat.message} />)}
      <div className='absolute bg-gray-100  w-[512px] h-12 border-black border-2'>
        <input className='w-[86%] h-full p-1 px-2' placeholder='Comment' type='text' 
        onChange={(e)=>setLiveMessage(e.target.value)} value={liveMessage} ></input>
        <button onClick={(e)=>{
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Rohit Kumar Singh",
              message: liveMessage,
            })
          )
          setLiveMessage("")
        }} className='ml-2'>Submit</button>
      </div >

    </div>
  )
}

export default LiveChat