import React, { useRef } from 'react'
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import SplitText from "./SplitText";
import { PinContainer } from '@/components/ui/3d-pin';
import { useInView } from 'framer-motion';
import DecryptedText from '../ui/decrypted-text';
import { BackgroundBeams } from '@/components/ui/BackgroundLines';
import { Boxes } from '../ui/background-boxes';

function RoundedCube() {
    const firstRef = useRef()
    const secondRef = useRef()
    const isInView = useInView(firstRef, { once: true, amount: 0.5 })
    const isIn2View = useInView(secondRef, { once: true, amount: 0.5 })
    return (
        <div id="aboutus" className="bg-gradient-to-r  relative w-full overflow-hidden     from-gray-900 via-slate-800 to-gray-900 ">
            {/* <BackgroundBeams /> */}
                <div className="min-h-screen relative">
                    <Boxes/>
                    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-rows-5 grid-cols-1  relative    md:gap-4 gap-1 items-center md:w-[85%] w-11/12  mx-auto md:h-screen">
                        {/* Left profile section */}
                        <div className='md:col-span-2 -mt-2  row-span-2 w-11/12 mx-auto   md:h-2/3  flex justify-center   '>
                            <PinContainer  title="/linkdin" href='www.linkdin.com' className="!w-full !h-full  gap-4  flex  justify-center flex-col items-center relative backdrop-blur-sm bg-gray-800/30 border  border-gray-700/50 shadow-2xl  rounded-2xl">
                                {/* <Boxes/> */}
                                <div className='flex w-full h-full justify-center flex-col items-center   rounded-2xl'>
                                    <Image
                                        ref={firstRef}
                                        src='/profile1.png'
                                        alt='hdom'
                                        width={100}
                                        height={100}
                                        className='w-56 h-56 mb-4 aspect-square rounded-full object-cover'
                                    />
                                    {isInView && <SplitText text="Rohan Nagare"
                                        className="text-3xl text-white font-semibold text-center"
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    />}
                                </div>
                            </PinContainer>
                        </div>


                        {/* Right content section */}
                        <div className="md:col-span-3 md:h-2/3 row-span-3 flex items-center rounded-2xl justify-center z-10 backdrop-blur-sm  bg-gray-800/30 border border-gray-700/50 shadow-2xl py-8 md:py-0">
                            <div className="md:p-6 p-3 w-full h-full">
                                <div className="flex items-center justify-between md:mb-6 mb-3">
                                    <h1 className="text-white md:text-4xl  text-3xl glow glow-2 font-semibold relative">

                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Alex Chen",
                                                    "Backend Dev"
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                                delay: 80,
                                            }}
                                        />
                                    </h1>
                                </div>

                                <p className="text-gray-300 text-lg mb-6 max-w-xl">
                                    <DecryptedText
                                        text="Computer Science Student & Developer passionate about creating elegant solutions to complex problems."
                                        animateOn="view"
                                        revealDirection="center"
                                    />

                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className={`transform border-l-2 border-blue-600 overflow-hidden transition-all duration-400 hover:scale-105`}>
                                        <div className={` ${isInView ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-blue-400 text-lg font-medium mb-1">Education</h3>
                                            <p className="text-gray-200 text-base">3rd Year Computer Science Student</p>
                                            <p className="text-gray-400 text-sm">University of Technology</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 overflow-hidden  border-emerald-600 transition-all duration-300 hover:scale-105">
                                        <div className={`${isInView ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-emerald-400 text-lg font-medium mb-1">Tech Stack</h3>
                                            <p className="text-gray-400 text-sm">React • TypeScript • Node.js • Python</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 overflow-hidden border-purple-600 transition-all duration-300 hover:scale-105">
                                        <div className={`${isInView ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-purple-400 text-lg font-medium mb-1">Weather Dashboard</h3>
                                            <p className="text-gray-400 text-sm">React, TypeScript, OpenWeather API</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 border-orange-600 overflow-hidden transition-all duration-300 hover:scale-105">
                                        <div className={`${isInView ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-orange-400 text-lg font-medium mb-1">Task Management API</h3>
                                            <p className="text-gray-400 text-sm">Node.js, Express, MongoDB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex space-x-5">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Github size={28} className="hover:text-blue-400" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Linkedin size={28} className="hover:text-blue-500" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Mail size={28} className="hover:text-purple-400" />
                                </a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen ">
                    
                    <div className="grid md:grid-cols-5 md:grid-rows-1 grid-rows-5 grid-cols-1  relative z-10   md:gap-4 gap-1 items-center md:w-[85%] w-11/12  mx-auto md:h-screen">
                        


                        {/* Right content section */}
                        <div className="md:col-span-3 md:h-2/3 row-span-3 flex items-center rounded-2xl justify-center z-10 backdrop-blur-sm  bg-gray-800/30 border border-gray-700/50 shadow-2xl py-8 md:py-0">
                            <div className="md:p-6 p-3 w-full h-full">
                                <div className="flex items-center justify-between md:mb-6 mb-3">
                                    <h1 className="text-white md:text-4xl  text-3xl glow glow-2 font-semibold relative">

                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Alex Chen",
                                                    "Backend Dev"
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 50,
                                                delay: 80,
                                            }}
                                        />
                                    </h1>
                                </div>

                                <p className="text-gray-300 text-lg mb-6 max-w-xl">
                                    <DecryptedText
                                        text="Computer Science Student & Developer passionate about creating elegant solutions to complex problems."
                                        animateOn="view"
                                        revealDirection="center"
                                    />

                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className={`transform border-l-2 border-blue-600 overflow-hidden transition-all duration-400 hover:scale-105`}>
                                        <div className={` ${isIn2View ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-blue-400 text-lg font-medium mb-1">Education</h3>
                                            <p className="text-gray-200 text-base">3rd Year Computer Science Student</p>
                                            <p className="text-gray-400 text-sm">University of Technology</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 overflow-hidden  border-emerald-600 transition-all duration-300 hover:scale-105">
                                        <div className={`${isIn2View ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-emerald-400 text-lg font-medium mb-1">Tech Stack</h3>
                                            <p className="text-gray-400 text-sm">React • TypeScript • Node.js • Python</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 overflow-hidden border-purple-600 transition-all duration-300 hover:scale-105">
                                        <div className={`${isIn2View ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-purple-400 text-lg font-medium mb-1">Weather Dashboard</h3>
                                            <p className="text-gray-400 text-sm">React, TypeScript, OpenWeather API</p>
                                        </div>
                                    </div>

                                    <div className="transform border-l-2 border-orange-600 overflow-hidden transition-all duration-300 hover:scale-105">
                                        <div className={`${isIn2View ? 'translate-x-0' : '-translate-x-full'} duration-500  pl-4 h-full`}>
                                            <h3 className="text-orange-400 text-lg font-medium mb-1">Task Management API</h3>
                                            <p className="text-gray-400 text-sm">Node.js, Express, MongoDB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex space-x-5">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Github size={28} className="hover:text-blue-400" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Linkedin size={28} className="hover:text-blue-500" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                                    <Mail size={28} className="hover:text-purple-400" />
                                </a>
                            </div> */}
                            </div>
                        </div>
                        {/* Left profile section */}
                        <div className='md:col-span-2 md:col-start-4 row-start-1 row-span-2 w-11/12 mx-auto   md:h-2/3  flex justify-center  '>
                            <PinContainer title="/linkdin" href='www.linkdin.com' className="!w-full !h-full -mt-4 gap-4  flex  justify-center flex-col items-center  backdrop-blur-sm bg-gray-800/30 border  border-gray-700/50 shadow-2xl  rounded-2xl ">
                                <div className='flex w-full h-full justify-center flex-col items-center   rounded-2xl'>
                                    <Image
                                        ref={secondRef}
                                        src='/profile1.png'
                                        alt='hdom'
                                        width={100}
                                        height={100}
                                        className='w-56 h-56 mb-4 aspect-square rounded-full object-cover'
                                    />
                                    {isIn2View && <SplitText text="Rohan Nagare"
                                        className="text-3xl text-white font-semibold text-center"
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    />}
                                </div>
                            </PinContainer>
                        </div>
                    </div>
                </div>
          
            {/* <BackgroundBeams /> */}
        </div>
    )
}

export default RoundedCube