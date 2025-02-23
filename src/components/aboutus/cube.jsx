import { OrbitControls, Html } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, TextureLoader } from "three";
import { useScroll } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function CubeBox() {
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 2])
    return (
        <div ref={container} id="aboutus" className="w-full h-[200vh] bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
            <div className="sticky top-0 w-full h-screen">
                <Canvas>
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} intensity={1} />
                    <Cube scrollProgress={progress} />
                </Canvas>
            </div>
        </div>
    )
}

const Cube = ({ scrollProgress }) => {
    const mesh = useRef()
    const mesh2 = useRef()

    useFrame(() => {
        if (scrollProgress?.get !== undefined) {
            const currentProgress = scrollProgress.get()
            mesh.current.rotation.x = currentProgress * 0.79
            mesh2.current.rotation.x = currentProgress * 0.79 * -1
        }
    })

    const texture_4 = useLoader(TextureLoader, '/profile1.png')
    const texture_5 = useLoader(TextureLoader, '/profile2.jpg')

    return (
        <group>
            {/* First cube */}
            <mesh ref={mesh} position={[-3, 0, 0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial map={texture_4} attach="material-3" />
                <meshStandardMaterial map={texture_5} attach="material-4" />
                <meshStandardMaterial map={texture_4} attach="material-0" />
                <meshStandardMaterial map={texture_5} attach="material-1" />
                <meshStandardMaterial map={texture_4} attach="material-2" />
                <meshStandardMaterial map={texture_5} attach="material-5" />
            </mesh>

            {/* Second cube */}
            <mesh ref={mesh2} position={[1.50, 0, 0]}>
                <boxGeometry args={[6, 3, 3]} />
                <meshStandardMaterial color="#111827" />
                {/* <meshStandardMaterial map={texture_4} attach="material-3" /> */}
                {/* <meshStandardMaterial map={texture_5} attach="material-4" />
                <meshStandardMaterial map={texture_4} attach="material-0" />
                <meshStandardMaterial map={texture_5} attach="material-1" />
                <meshStandardMaterial map={texture_4} attach="material-2" />
                <meshStandardMaterial map={texture_5} attach="material-5" /> */}

                {/* Front HTML */}
                <Html
                    style={{
                        width: '400px',
                        height: "300px"
                    }}
                    center
                    rotation-x={0}
                    position={[-0.2, 0, 1.510]}
                    transform
                    distanceFactor={4}
                    occlude
                >
                    <div className=" p-6 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <h1 className="text-white text-3xl font-bold mb-2">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Alex Chen",
                                            "Frontend Dev"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 80,
                                    }}
                                />

                            </h1>
                            <div className=" flex space-x-4 ">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">Computer Science Student & Developer</p>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="border-l-2 border-blue-600 pl-4">
                                <p className="text-gray-300 text-sm">3rd Year Computer Science Student</p>
                                <p className="text-gray-400 text-xs">University of Technology</p>
                            </div>

                            <div className="border-l-2 border-emerald-600 pl-4">
                                <h3 className="text-emerald-400 text-sm font-medium mb-1">Tech Stack</h3>
                                <p className="text-gray-400 text-xs">React • TypeScript • Node.js • Python</p>
                            </div>
                            <div className="border-l-2 border-purple-600 pl-4">
                                <h3 className="text-purple-400 text-sm font-medium">Weather Dashboard</h3>
                                <p className="text-gray-400 text-xs">React, TypeScript, OpenWeather API</p>
                            </div>
                            <div className="border-l-2 border-orange-600 pl-4">
                                <h3 className="text-orange-400 text-sm font-medium">Task Management API</h3>
                                <p className="text-gray-400 text-xs">Node.js, Express, MongoDB</p>
                            </div>
                        </div>


                        {/* */}
                    </div>
                </Html>
                <Html
                    style={{
                        width: '400px',
                        height: "320px",
                        // back
                        // transform: 'translateX(-50%) translateY(-50%) rotateX(90deg)'
                    }}
                    center
                    rotation-x={Math.PI / 2}
                    position={[0, -1.50004, 0]}
                    transform
                    distanceFactor={4}
                    occlude
                >
                    <div className=" p-6 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <h1 className="text-white text-3xl font-bold mb-2">
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
                            <div className=" flex space-x-4 ">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">Computer Science Student & Developer</p>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="border-l-2 border-blue-600 pl-4">
                                <p className="text-gray-300 text-sm">3rd Year Computer Science Student</p>
                                <p className="text-gray-400 text-xs">University of Technology</p>
                            </div>

                            <div className="border-l-2 border-emerald-600 pl-4">
                                <h3 className="text-emerald-400 text-sm font-medium mb-1">Tech Stack</h3>
                                <p className="text-gray-400 text-xs">React • TypeScript • Node.js • Python</p>
                            </div>
                            <div className="border-l-2 border-purple-600 pl-4">
                                <h3 className="text-purple-400 text-sm font-medium">Weather Dashboard</h3>
                                <p className="text-gray-400 text-xs">React, TypeScript, OpenWeather API</p>
                            </div>
                            <div className="border-l-2 border-orange-600 pl-4">
                                <h3 className="text-orange-400 text-sm font-medium">Task Management API</h3>
                                <p className="text-gray-400 text-xs">Node.js, Express, MongoDB</p>
                            </div>
                        </div>


                        {/* */}
                    </div>
                </Html>
            </mesh>
        </group>
    )
}