import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="telugu cinema"/>
      <Button name="Algorithms"/>
      <Button name="Live"/>
      <Button name="Software Development"/>
    </div>
    
  )
}

export default ButtonList;