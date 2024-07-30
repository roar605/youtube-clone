import React from 'react'

const Recommend = (props) => {
  // console.log({props})
  return (
    <div>
        <button className='px-3 py-1 m-1 bg-gray-200 rounded-lg hover:bg-gray-300'>{props.name}</button>
    </div>
  )
}

export default Recommend