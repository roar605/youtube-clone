import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center border-y-2 px-2'>
        <img className='h-8' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU'></img>
        <h1 className='mx-2 font-semibold text-gray-500 '>{name}</h1>
        <h1 className='mx-1 '>{message}</h1>
    </div>
  )
}

export default ChatMessage