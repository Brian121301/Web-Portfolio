"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import MenuOverlay from './MenuOverlay'
import { AiFillGithub } from 'react-icons/ai'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
    {
        title: <AiFillGithub className='w-6 h-6' />,
        path: "https://github.com/Brian121301"
    },
]
const NavBar = () => {
    const [navBarOpen, setnavBarOpen] = useState(true);

    return (
        <nav className='fixed rounded-md top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 border-x-2 border-b-2 border-slate-700'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-12 p-2'>
                <div className='text-2xl md:text-5xl font-semibold text-white'>
                    <NavLinks href={"/"} title={"BN"} />
                </div>
                <div className='md:hidden text-slate-300 hover:text-white font-semibold text-2xl'>
                    {
                        !navBarOpen ? (
                            <button onClick={() => setnavBarOpen(true)}>
                                close menu
                            </button>
                        ) : (
                            <button onClick={() => setnavBarOpen(false)}>
                                Menu
                            </button>)
                    }
                </div>
                <div className='menu hidden md:block md:w-auto text-xl font-semibold'>
                    <ul className='flex md:flex-row space-x-4'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLinks href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {!navBarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar;