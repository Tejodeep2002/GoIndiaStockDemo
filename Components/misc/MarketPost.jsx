import React from 'react'

const MarketPost = ({data}) => {
  return (
    <div style={{backgroundImage:`url(${data.image})`}} className='w-64 h-44  rounded-lg bg-no-repeat bg-cover flex flex-col-reverse'>
        {/* <img src={data.image} className='w-64 h-44 rounded-lg'  alt="" /> */}
        <div className=' w-64 h-20 px-6 py-3 opacity-70 rounded-b-lg bg-black  text-sm text-white'>{data.content}</div>
      
    </div>
  )
}

export default MarketPost
