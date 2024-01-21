import React from 'react'
function About() {
  return (
    <>
      <div className='min-w-full flex justify-center items-center px-10 mt-4 gap-4'>

        <div className='min-w-[20%] h-full flex-row justify-center items-center '>
          <div className='min-w-[100px] max-w-[160px] flex justify-center items-center'>
            <img src="https://www.freepnglogos.com/uploads/logo-home-png/pros-cons-investing-rental-property-piktochart-14.png" alt="" srcset="" />
          </div>
          
          <div className=' flex flex-col p-4 gap-4 text-2xl font-bold text-purple-700'>
            <h3 className=' border-gray-900 shadow-lg hover:text-purple-400 shadow-gray-950 px-2 cursor-pointer'>About</h3>
            <h3 className=' border-gray-900 shadow-lg hover:text-purple-400 shadow-gray-950 px-2 cursor-pointer'>Skills</h3>
            <h3 className=' border-gray-900 shadow-lg hover:text-purple-400 shadow-gray-950 px-2 cursor-pointer'>Projects</h3>
            <h3 className=' border-gray-900 shadow-lg hover:text-purple-400 shadow-gray-950 px-2 cursor-pointer'>Goal</h3>
            <h3 className=' border-gray-900 shadow-lg hover:text-purple-400 shadow-gray-950 px-2 cursor-pointer'>Hobbies</h3>
            
          </div>
        </div>

        <div className='min-w-[80%] min-h-full flex flex-col justify-center items-center p-4 gap-4'>
          <h1 className='shadow-lg shadow-gray-900 text-2xl p-2 font-bold'>Heading will display here</h1>

          <div className='flex'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit minus debitis ad labore odio dolore suscipit sequi soluta, porro libero. Voluptatibus tempora deleniti eligendi aspernatur officia reprehenderit facilis adipisci?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum expedita itaque error sit tempora debitis voluptas, fugit ipsum odio harum pariatur vitae blanditiis, libero necessitatibus officiis aperiam? Obcaecati, quaerat.
            </p>
            <img className='max-w-[250px]' src="https://www.freepnglogos.com/uploads/logo-home-png/pros-cons-investing-rental-property-piktochart-14.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About