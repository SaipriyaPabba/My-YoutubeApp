import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const menu=useSelector((state)=>state.app.isMenuOpen);
  if(!menu)
  return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
    </div>
  )
}

export default SideBar