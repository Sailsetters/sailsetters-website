import React from 'react'
import Section from "@/components/Section";
import Image from 'next/image'
import BigButton from "@/components/BigButton";

export default function FourOhFour() {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
        <Image
            src='/lostAtSea.jpg'
            layout='fill'
            objectFit='cover'
            alt='Lost at Sea'
            className='z-0'
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div> */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-9 flex flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-bold mb-4">404</h1>
            <p className="text-2xl text-white mb-8">Oops! The page you're looking for isn't here.</p>
            <BigButton href='/' className='bg-blue-500'>
                Take me home!
            </BigButton>
        </div>
    </section>
  )
}
