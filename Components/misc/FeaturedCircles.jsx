import React from 'react'

const FeaturedCircles = ({image}) => {
  return (
    <div className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-500 overflow-hidden'>
        <img src={image} className='w-12  rounded-full' alt="" />
      
    </div>
  )
}

export default FeaturedCircles
