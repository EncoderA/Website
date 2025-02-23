"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BlurText from "../BlurText/BlurText";
import Typewriter from "typewriter-effect";
import { LinkPreview } from "@/components/ui/link-preview";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});


export function GlobeDemo() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
    },
  ].map((arc) => ({
    ...arc,
    color: () => `rgba(6, 182, 212, 1)`,
  }));
  

  return (
    <div id="home" className="flex flex-row items-center justify-between py-10 px-0 md:px-6 h-screen md:h-auto dark:bg-black bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 relative w-full">
      <div className="max-w-full mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        {/* Content Section - Left Side */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="w-full"
          >
        
            <div className="text-left">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
                We Create{" "}
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
                  <Typewriter
                    options={{
                      strings: [
                        "High-Performance Web Apps",
                        "Full-Stack Solutions",
                        "Dynamic User Experiences",
                        "Scalable Applications",
                        "Modern Web Platforms",
                        "Real-time Systems",
                        "Interactive Interfaces",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                    }}
                  />
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
                Building next-gen apps with Next.js, React.js, PostgreSQL, and
                GSAP—delivering seamless, dynamic, and future-ready solutions
                from concept to deployment.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-blue-400 font-mono">{"</>"}</span>
                  <span className="text-gray-200">
                    <LinkPreview
                      url="https://nextjs.org/"
                      className={"text-white cursor-pointer"}
                    >
                      Next.js
                    </LinkPreview>{" "}
                    &{" "}
                    <LinkPreview
                      url="https://reactjs.org/"
                      className={"text-white cursor-pointer"}
                    >
                      React.js
                    </LinkPreview>
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-purple-400 font-mono">{"🔄"}</span>
                  <span className="text-gray-200">
                    <LinkPreview
                      url="https://nodejs.org/en"
                      className={"text-white cursor-pointer"}
                    >
                      Node.js
                    </LinkPreview>
                    ,{" "}
                    <LinkPreview
                      url="https://www.prisma.io/"
                      className={"text-white cursor-pointer"}
                    >
                      Prisma Schema
                    </LinkPreview>
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-teal-400 font-mono">{"⚡"}</span>
                  <span className="text-gray-200">
                    <LinkPreview
                      url="https://gsap.com/"
                      className={"text-white cursor-pointer"}
                    >
                      GSAP Animations
                    </LinkPreview>
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-teal-400 font-mono">{"🗄"}</span>
                  <span className="text-gray-200">
                    <LinkPreview
                      url={"https://www.postgresql.org/"}
                      className={"text-white cursor-pointer"}
                    >
                      PostgreSQL
                    </LinkPreview>
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-teal-400 font-mono">{"🧠"}</span>
                  <span className="text-gray-200">Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-teal-400 font-mono">{"🌍"}</span>
                  <span className="text-gray-200">
                    <LinkPreview
                      url="https://openlayers.org/"
                      className={"text-white cursor-pointer"}
                    >
                      OpenLayers
                    </LinkPreview>
                  </span>
                </div>

                <div className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform">
                  <span className="text-teal-400 font-mono">{"🗺️"}</span>
                  <span className="text-gray-200">GIS</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Server-Side Rendering
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Type-Safe APIs
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  Real-time Updates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  Smooth Animations
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Globe Section - Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-10">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
            {/* Gradient overlay */}
            {/* <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-gray-900 to-transparent" /> */}
          </div>
        </div>

        {/* Bottom gradient */}
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-gray-900 dark:to-black to-bg-gradient-to-br  via-blue-900 to-slate-900 z-40" /> */}
      </div>
    </div>
  );
}
