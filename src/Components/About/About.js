import React from 'react'
import pic from '../../assests/pic.jpg';
import Ali from '../../assests/ali.jpg';
import { Outlet, Link } from 'react-router-dom';
function About() {
  
  return (
    <>
      <div className='min-w-full grid md:grid-cols-5 md:px-10 gap-4 bg-black'>
        <div className='bg-slate-950 shadow-sm p-4 flex flex-col items-center justify-center'>
          <img className='rounded-full w-[100px] h-[100px] object-cover hover:border-2 border-purple-700 ease-in-out transition-all duration-100 hover:cursor-pointer' src={pic} alt="" srcset="" />
          <p className='text-[#0f0] hover:text-[#0ff] font-bold transition-colors duration-900 mt-2'>Mohd Ali</p>
          <div className='mt-10'>
            <Link to="description"><h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Description</h1></Link>
            <Link to="skills"><h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Skills</h1>
            </Link>
            <Link to="contact"><h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Contact</h1>
            </Link>
            <Link to="projects"><h1 className='flex justify-start p-2 py-1  bg-slate-900 shadow-md shadow-gray-950 text-[#0f0] text-2xl my-1 rounded-md hover:text-[#0ff] font-bold'>Projects</h1>
            </Link>
            
            
          </div>

        </div>
        <div className='md:col-span-4 text-[#0f0] p-4 grid md:grid-rows-10 gap-5'>
          <div className=' text-center font-bold text-2xl hover:text-[#0ff] transition-colors duration-900'><h1>Description</h1></div>
          <div className='row-span-9 grid grid-cols-2 gap-5'>

            <Outlet />

            <div><img className='max-w-full md:h-[600px] h-[400px] object-cover' src={Ali} alt="" srcset="" /></div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default About