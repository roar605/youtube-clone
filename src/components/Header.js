import React, { useEffect, useState } from 'react'
import img1 from '../assets/YoutubelogoPNGimage.png';
import img2 from '../assets/pngwing.com.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchText,setSearchText] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [suggestionsBlur , setSuggestionsBlur] = useState(false);
    const searchCache = useSelector((store)=>store.search);

    const dispatch =useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    useEffect(()=>{

        const timer=setTimeout(()=>{
            if(searchCache[searchText]){
                setSuggestions(searchCache[searchText])
            }else{
            getSearchData()}
        },200);
        return()=>{
            clearTimeout(timer)
        };
    },[searchText]);
    
    const getSearchData=async()=>{
        const data = await fetch(SEARCH_API + searchText);
        const jsonData = await data.json();
        setSuggestions(jsonData[1]);
        // update search slice
        dispatch(
            cacheResults({
                [searchText]: jsonData[1],
            })
        );
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-md'>
             
            <div className='flex col-span-1 '>
                <img onClick={()=>toggleMenuHandler()} className='h-8' alt='menu' src={img2}/>
                <Link to="/"><img className='h-8 cursor-pointer' alt='youtube logo' src={img1}/></Link>
            </div>
            <div className=' col-span-10 px-10'>
                <input
                onFocus={()=>setSuggestionsBlur(true)}
                onBlur={()=>setSuggestionsBlur(false)}
                placeholder='Search YouTube'
                onChange={(e)=>setSearchText(e.target.value)}
                 className='w-1/2 px-5 py-2 rounded-l-full border place-self-center border-gray-400 ' value={searchText}></input>
             
                <button className='p-2 rounded-r-full border border-gray-400 bg-gray-200'>Search  </button>
                <div className=' absolute bg-white mx-2 w-[510px] p-2'>
                    {suggestionsBlur && suggestions.map((s,index)=><div key={index}><h1 >{s}</h1></div>)}
                        
                </div>
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8uQ5-1MzoSskLhm-xGab5TECH0f27m2uqyEEkq4vHsYCJi1vBLapngkUuM0m392V3U4&usqp=CAU'></img>
            </div>

        </div>
    )
}

export default Header;