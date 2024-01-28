import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center md:px-2'>
        <ul className='list-disc px-2 sm:px-0'>
            <li className='text-[#0f0] hover:text-[#0ff] transition-colors duration-900'>Email: exam@gmail.com</li>
            <li className='text-[#0f0] hover:text-[#0ff] transition-colors duration-900'>Phone: xxx-xxx-700</li>
            <li className='text-[#0f0] hover:text-[#0ff] transition-colors duration-900'>Vill: Chandpur</li>
            <li className='text-[#0f0] hover:text-[#0ff] transition-colors duration-900'>Distt: Moradabad</li>
            <li className='text-[#0f0] hover:text-[#0ff] transition-colors duration-900'>Pin: 244402</li>
        </ul>
    </div>
  )
}

export default Contact