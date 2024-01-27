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
                  <a href="https://www.instagram.com/mohd_ali_664266/?igsh=MXUwa202aG55YWw0ZQ%3D%3D" target='_blank'>
                  <FaInstagram className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
                  <a href="https://www.linkedin.com/in/mohd-ali-293a94250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                  <FaLinkedinIn className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>

                  <a href="https://github.com/MohdAli664266" target='_blank'>
                  <FaGithub className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
                  <a href="https://x.com/AnsariRoyalroy?t=aWIO7l_gZCHj1uTI_5hHaA&s=08 " target='_blank'>
                  <FaTwitter className='hover:text-purple-700 text-3xl text-[#00ffff]' /></a>
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