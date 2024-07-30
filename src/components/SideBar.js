import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-[150px]  '>
      <ul>
        <Link to="/"><li className='my-1 hover:font-medium cursor-pointer'>Home</li></Link>
        <li className='my-1 hover:font-medium cursor-pointer'>Shorts</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Subscription</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li className='my-1 hover:font-medium cursor-pointer'>yjr</li>
        <li className='my-1 hover:font-medium cursor-pointer'>drogBaBa</li>
        <li className='my-1 hover:font-medium cursor-pointer'>One MUFC</li>
        <li className='my-1 hover:font-medium cursor-pointer'>BB Ki Vines</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Lallantop</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li className='my-1 hover:font-medium cursor-pointer'>Trending</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Music</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Gaming</li>
        <li className='my-1 hover:font-medium cursor-pointer'>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar