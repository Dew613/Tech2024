"use client"
import React from 'react'
import Mycarousel from "@/components/Mycarousel"
import Lottie from "lottie-react"
import printer from "@/public/animations/3d printer.json"
import Image from 'next/image';


{/* <div className=" bg-black flex-col justify-center"> 
<div className='scale-50 bg-slate-500'>
  <Lottie loop={true} animationData={printer}/>
</div>

<h1 className="bg-red-500"> This is a placeholder</h1>
</div> */}

const Hero = () => {
  return (
    <section className="flex items-center overflow-hidden justify-between  w-screen h-screen bg-transparent">
    {/* Left Image */}
    <div className="flex-1 flex justify-start items-center">
      <Image
        src="/assests/Green splash left.png"
        alt="Left Image"
        width={400}
        height={400}
        className="object-cover"
      />
    </div>

    {/* Center Content */}
    <div className="flex-1 flex flex-col justify-center items-center text-center">
      <h1 className="text-8xl font-bold mb-4">Empowering the Next Generation</h1>
      <h2 className="text-2xl text-gray-600">Where Teens Transform Technology into Tomorrow</h2>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-end items-center">
      <Image
        src="/assests/blue splash right.png"
        alt="Right Image"
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
  </section>
  )
}

export default Hero