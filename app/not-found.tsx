import React from 'react'
import Section from "@/components/Section";
import Image from 'next/image'
import Link from 'next/link';
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
            <Link href='/'>
                <button className="group relative inline-flex items-center justify-center p-4 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white">
                    <span className='uppercase font-medium bg-clip-text text-transparent bg-white transition-all duration-300 ease-in-out group-hover:bg-sky-700'>
                        Take me home!
                    </span>
                </button>
            </Link>


        </div>
    </section>
  )
}
