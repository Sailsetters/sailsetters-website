"use client";

import Head from 'next/head'
import Spline from '@splinetool/react-spline';
import React from 'react';
import Link from "next/link";
import Section from "@/components/Section";
import {ChevronDownIcon} from '@heroicons/react/24/outline'

function Hero() {
    return (
        <section className="relative flex items-center justify-center h-screen bg-blue-50 text-gray-800">
            <div className="w-full h-full">
                <Spline scene="https://prod.spline.design/IwvZXJP9BoIPF9Cc/scene.splinecode" />
            </div>

            <div className="absolute flex flex-col space-y-4">
                <h1 className='text-6xl font-semibold uppercase tracking-wider'>
                    Sailsetters
                </h1>
                <h2 className="text-4xl text-gray-800">Students for change.</h2>
                <Link href="/" className="text-xl text-center text-blue-800 p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200">
                    Join now!
                </Link>
            </div>

            <button
                className="absolute bottom-16 left-[50%] -translate-x-[50%]"
                onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
            >
                <ChevronDownIcon className="animate-bounce h-12 w-12"></ChevronDownIcon>
            </button>
        </section>
    );
}

function Statements() {
    return (
        <Section>
            <h2 className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-10">Unsere Ziele</h2>
            <div className="flex flex-col md:flex-row text-gray-800 gap-10 text-center">
                <div>
                    <h3 className="text-3xl mb-2">Mission</h3>
                    <p>Unsere Vision ist ein Deutschland, in dem jedes Kind, unabhängig von seiner Herkunft, gleichen und gerechten Bildungszugang erhält, um ein selbstbestimmtes Leben zu führen.</p>
                </div>
                <div>
                    <h3 className="text-3xl mb-2">Vision</h3>
                    <p>Unsere Vision ist ein Deutschland, in dem jedes Kind, unabhängig von seiner Herkunft, gleichen und gerechten Bildungszugang erhält, um ein selbstbestimmtes Leben zu führen.</p>
                </div>
            </div>
        </Section>
    )
}

export default function Home() {
  return (
   <>
     <Head>
       <title>Sailsetters - Students for Change</title>
       <meta name="description" content="Join Sailsetters to make a difference in the accessebility of education."/>
     </Head>
     <Hero />
     <Statements />
   </>
  )
}