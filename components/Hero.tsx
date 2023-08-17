import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen w-screen flex">
            <Image
                src="/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute z-0"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9">
                <h1 className="text-6xl font-semibold text-white uppercase tracking-widest">Sailsetters</h1>
                <h2 className="text-4xl text-white mt-2">Students for Change.</h2>
            </div>
        </section>
  )
}

export default Hero