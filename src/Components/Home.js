import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GlobalApi from './GlobalApi';
const windth = window.innerWidth;
const baseUrl = "https://image.tmdb.org/t/p/w500";
function Home() {
  const elementRef = useRef();
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    getTraindingMovie();
  }, [])

  const getTraindingMovie = ()=>{
    GlobalApi.getTraindingMovies.then((res)=>{
      console.log(res.data.results);
      setMovie(res.data.results);
    })
  }
const slideRight = (element)=>
{
  element.scrollLeft += windth-110;
}
const slideLeft = (element)=>
{
  element.scrollLeft -= windth-110;
}
  return (
    <div>
      <HiChevronLeft className='cursor-pointer hidden md:block text-white text-4xl md:mx-8 absolute md:mt-[225px]' onClick={()=>slideLeft(elementRef.current)}/>
      <HiChevronRight className='cursor-pointer hidden md:block text-white text-4xl md:mx-8 absolute md:mt-[225px] right-0' onClick={()=>slideRight(elementRef.current)} />
      <div className='flex overflow-x-auto w-full px-16 py-2 my-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movie.map((data)=>
        (
          <img className='min-w-full md:h-[450px] h-[190px] object-cover shadow-lg shadow-slate-900 mr-5 rounded-md hover:border-2 border-gray-400 transition-all duration-100 ease-in object-left-top' src={baseUrl+data.backdrop_path} alt="" />
        ))}
      </div>
    </div>
    // <>
    //   <div className='bg-[hsl(120,2%,26%)] h-screen w-fit flex justify-center items-center text-xl '>
    //     {dataContainer.map((data)=>(
    //       <SliderImage image={data.image} imageName = {data.imageName} />
    //     ))}
    //   </div>
    // </>
  )
}

export default Home