"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('white')
                setTextColor('black')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);


    return (
        <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full  z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Sailsetters</h1>
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/projects'>Projekte</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/about'>Über uns</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Kontakt</Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <XMarkIcon style={{color: `${textColor}`}} className="h-20 w-20" /> : <Bars3Icon style={{color: `${textColor}`}} className="h-20 w-20" />}
                </div>
                {/* Mobile Menu */}
                <div className={
                nav ?
                'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black text-center ease-in duration-300'
                }>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/projects'>Projekte</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/about'>Über uns</Link>
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