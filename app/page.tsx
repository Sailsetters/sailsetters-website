import Head from 'next/head'
import Image from 'next/image'

import React from 'react';

function Hero() {
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

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-6xl font-semibold text-white uppercase tracking-widest">Sailsetters</h1>
                <h2 className="text-4xl text-white mt-2">Students for Change.</h2>
            </div>
        </section>
    );
}

export default function Home() {
  return (
   <>
     <Head>
       <title>Sailsetters - Students for Change</title>
       <meta name="description" content="Join Sailsetters to make a difference in the accessebility of education."/>
     </Head>
     <Hero />
   </>
  )
}
