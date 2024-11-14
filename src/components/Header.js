import React from 'react';
import youtube from '../images/youtube.jpg';
import Hamburger from '../images/HamburgerMenu.png';
import UserIcon from '../images/UserIcon.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice.js';
const Header = () => {
  const dispatch=useDispatch();
  const handleHamClick=()=>
  {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow'>
    <div className='flex col-span-1'>
    <img className='h-10 mx-2 cursor-pointer' onClick={handleHamClick} src={Hamburger} alt="menu"/>
    <img className='h-10' src={youtube} alt="youtube-logo"/>
    </div>
    <div className='col-span-10'>
      <input className='border border-gray-400 p-2 rounded-l-full w-1/2' type="text"/>
      <button className='border border-gray-400 rounded-r-full p-2' type="submit">Search</button>
    </div>
    <div className='col-span-1'>
    <img className='h-8' src={UserIcon} alt="menu"/>
    </div>
    </div>

  )
}

export default Header;