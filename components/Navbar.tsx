"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed left-0 top-0 w-full'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <Link href='/'>
                    <h1 className='font-bold text-4xl'>Sailsetters</h1>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/projects'>Projekte</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Kontakt</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <XMarkIcon className="h-20 w-20" /> : <Bars3Icon className="h-20 w-20" />}
                </div>
                {/* Mobile Menu */}
                <div className={`sm:hidden absolute top-0 left-${nav ? '0' : '[-100%]'} right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-white text-center ease-in duration-300`}>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/projects'>Projekte</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contact'>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar