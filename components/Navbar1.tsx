"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from "next/image";
import {Link as ScrollLink} from "react-scroll";

const links = [
    {href: 'projects', text: 'Projekte'},
    {href: 'havens', text: 'Havens'},
    {href: 'join', text: 'Mitmachen'},
    {href: 'timeline', text: 'Roadmap'},
];

const baseClassMobile = "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center backdrop-blur-md w-full h-screen text-center ease-in duration-200";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY >= 90);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed left-0 top-0 w-full z-10 ease-in duration-200 ${isScrolled ? 'backdrop-blur-xl bg-primary-50/30' : 'bg-transparent'}`}>
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/' className='z-10'>
                    <Image src='/sailsetters_logo.png' alt='Sailsetters' width={70} height={80}/>
                </Link>
                <ul className={`hidden sm:flex text-gray-800 text-lg`}>
                    {links.map(link => (
                        <ScrollLink to={link.href} smooth duration={500} className="cursor-pointer p-4">{link.text}</ScrollLink>
                    ))}
                </ul>
                <div onClick={() => setNav(!nav)} className="block sm:hidden z-10">
                    {nav ?
                        <XMarkIcon className={`h-8 w-8 text-gray-800`}/> :
                        <Bars3Icon className={`h-8 w-8 text-gray-800`}/>
                    }
                </div>
                <ul className={`${baseClassMobile} ${nav ? 'opacity-100' : 'opacity-0 collapse'}`}>
                    {links.map(link => (
                        <ScrollLink to={link.href} onClick={() => setNav(false)} smooth duration={500} className="p-4 text-2xl hover:cursor-pointer hover:text-gray-500 text-gray-800 ease-in duration-100">{link.text}</ScrollLink>
                        // <Link href={link.href} onClick={() => setNav(false)}
                        //       className='p-4 text-2xl hover:text-gray-500 text-gray-800 ease-in duration-100'>
                        //     {link.text}
                        // </Link>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;