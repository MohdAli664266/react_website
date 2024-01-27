import React from 'react'
import pic from '../assests/pic.jpg';
import Ali from '../assests/ali.jpg';
function About() {
  return (
    <>
      <div className='min-w-full grid md:grid-cols-5 md:px-10 gap-4 bg-black'>

        <div className='bg-slate-950 shadow-sm p-4 flex flex-col items-center justify-center'>
          <img className='rounded-full w-[100px] h-[100px] object-cover hover:border-2 border-purple-700 ease-in-out transition-all duration-100' src={pic} alt="" srcset="" />
          <p className='text-[#0f0] hover:text-[#0ff] font-bold transition-colors duration-900'>Mohd Ali</p>
          <div className='mt-10'>
            <h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Description</h1>
            <h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Skill</h1>
            <h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Contact</h1>
            <h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Projects</h1>
          </div>

        </div>
        <div className='col-span-4 text-[#0f0] p-4 grid md:grid-rows-10 gap-5'>
          <div className=' text-center font-bold text-2xl hover:text-[#0ff] transition-colors duration-900'><h1>Heading will display here</h1></div>
          <div className='row-span-9 grid grid-cols-2 gap-5'>
            <div className='flex flex-col items-center justify-center md:px-2'>
              <p className='hover:text-[#0f0] text-[#0ff] transition-colors duration-900'>A motivated student with expertise in Problem Solving and Logic 
Building and having a good command over Data Structures and 
Algorithms along with positive attitude and Critical Thinking.
</p>

              <hr className='text-white border-1 border-white w-full my-2' />
              <p className='hover:text-[#0f0] text-[#0ff] transition-colors duration-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque assumenda quasi sit</p>
              
            </div>
            <div><img className='max-w-full md:h-[600px] h-[400px] object-cover' src={Ali} alt="" srcset="" /></div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default About