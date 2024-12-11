'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo';


function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex flex-row justify-between gap-6 text-[#fff5ed]'>
                <Logo />
                <div className='ml-80'>
                    <Link
                        href="/"
                        aria-label="Home"
                        className='scroll-animate-down hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200'
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        aria-label="About"
                        className='scroll-animate-down  hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200'
                    >
                        About
                    </Link>
                    {/* <Link href="/dashboard" aria-label="Dashboard">Dashboard</Link> */}
                    <Link
                        href="/blog"
                        aria-label="Blog"
                        className='scroll-animate-down hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200'
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        aria-label="Contact"
                        className='scroll-animate-down hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200'
                    >
                        Contact
                    </Link>
                    <Link
                        href="/profile"
                        aria-label="Contact"
                        className='scroll-animate-down hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200'
                    >
                        Profile
                    </Link>
                </div>
            </nav>


            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center w-full gap-x-52">
                {/* Logo on the Left */}
                <div className="md:hidden">
                    <Logo />
                </div>

                {/* Toggle Button (Menu) on the Right */}
                <button
                    className="md:hidden text-[#fff5ed]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    ☰
                </button>
            </div>


            {isMenuOpen && (
                <nav className='flex flex-col gap-4  text-[#fff5ed] mt-4 md:hidden'>

                    <Link href="/" aria-label="Home">Home</Link>
                    <Link href="/about" aria-label="About">About</Link>
                    <Link href="/dashboard" aria-label="Dashboard">Dashboard</Link>
                    <Link href="/blog" aria-label="Blog">Blog</Link>
                    <Link href="/contact" aria-label="Contact">Contact</Link>
                    
                </nav>
            )}
        </div>
    )
}

export default Navbar