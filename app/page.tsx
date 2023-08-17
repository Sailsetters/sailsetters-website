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
                className="absolute -z-10 brightness-50 saturate-50"
            />

            <div className="container relative mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center p-8 text-white md:p-16">
                <h1 className='mb-4 text-6xl font-semibold uppercase tracking-wider'>
                    Sailsetters
                </h1>
                <p className="text-2xl">Students for change.</p>
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