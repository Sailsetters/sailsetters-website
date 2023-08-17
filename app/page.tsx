import Head from 'next/head'
import Hero from '@/components/Hero';

import React from 'react';

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
