import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='rounded-lg shadow p-2 m-2 bg-gray-200'>{name}</button>
    </div>
    
  )
}

export default Button