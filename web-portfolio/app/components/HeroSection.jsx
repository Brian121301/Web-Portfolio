"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className=' grid grid-cols-1 lg:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-center text-center sm:text-left sm:justify-self-start mb-4'>
                    <h1 className='mb-4 text-6xl text-white lg:text-8xl font-extrabold'>
                        Hi, I'm
                    </h1>
                    <h1
                        className='bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8] mb-4 text-6xl lg:text-8xl font-extrabold'>
                        Brian Najera
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "Web Developer",
                            1000,
                            "Mobile Developer",
                            1000,
                            "Cloud Practitioner",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className='text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8] sm:mt-0'
                        repeat={Infinity}
                    />
                    <div>
                        <button href={"#contact"} className='px-6 py-4 rounded-full w-full sm:w-fit mr-4 bg-[#00A8CC] hover:bg-slate-200 text-black sm:mt-0 mt-4'>Hire Me</button>
                        <button className='px-6 py-4 rounded-full w-full sm:w-fit mt-4 bg-[#FF6F61] hover:bg-slate-200 text-black'>Download CV</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center mt-10 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[400px] h-[400px] sm:[500px] sm:[500px] p-10 relative'>
                        <Image
                            src="/images/cross.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={200}
                            height={200}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
