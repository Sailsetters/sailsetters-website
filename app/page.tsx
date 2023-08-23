"use client";

import Head from 'next/head'
import Spline from '@splinetool/react-spline';

import React from 'react';
import Link from "next/link";

function Hero() {
    return (
        <section className="relative flex items-center justify-center h-screen bg-blue-50">
            <Spline scene="https://prod.spline.design/IwvZXJP9BoIPF9Cc/scene.splinecode" />

            <div className="absolute text-gray-800 flex flex-col space-y-4">
                <h1 className='text-6xl font-semibold uppercase tracking-wider'>
                    Sailsetters
                </h1>
                <h2 className="text-4xl text-gray-500">Students for change.</h2>
                <Link href="/" className="text-xl text-center text-blue-800 p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200">
                    Join Us
                </Link>
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