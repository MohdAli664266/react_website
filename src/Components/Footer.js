import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter  } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer class="bg-gray-500">
        <div class="w-full flex-col justify-center items-center">
            <div className='grid md:grid-cols-3 gap-5 p-10 mt-5'>
              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4'>
                <h1 className='text-3xl font-bold'>Stay Connect</h1>
                <p className='px-4 text-purple-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quae ullam incidunt fugiat excepturi</p>
              </div>

              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4'>
                <h1 className='text-3xl font-bold'>Projects</h1>
                <p className='px-4 text-purple-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quae ullam incidunt fugiat excepturi</p>
              </div>

              <div className='bg-slate-800 shadow-md shadow-slate-950 p-4 flex flex-col gap-5 '>
                <h1 className='text-3xl font-bold'>Contact Us</h1>
                <p className='px-4 text-purple-700'>Just click on below given link and follow</p>
                <div className=' flex items-center justify-between p-4'>
                  <FaInstagram className='hover:text-purple-700 text-3xl text-[#00ffff]' />
                  <FaLinkedinIn className='hover:text-purple-700 text-3xl text-[#00ffff]' />
                  <FaGithub className='hover:text-purple-700 text-3xl text-[#00ffff]' />
                  <FaTwitter className='hover:text-purple-700 text-3xl text-[#00ffff]' />
                </div>
              </div>
            </div>
            <h1 className='text-center py-4'>All keywords are reserved. Copywrite @</h1>
        </div>
    </footer>
    </>
  )
}

export default Footer