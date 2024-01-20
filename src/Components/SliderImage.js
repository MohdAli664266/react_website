import React from 'react'

function SliderImage({image, imageName}) {
  return (
    <div className='shadow-lg shadow-slate-950 m-8 cursor-pointer'>
        <img className='min-w-full h-[360px] object-cover' src={image} alt="" srcset="" />
        <h1 className='text-purple-400 text-center'>{imageName}</h1>
    </div>
  )
}

export default SliderImage