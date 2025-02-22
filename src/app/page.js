'use client'
import BlurText from "@/components/BlurText/BlurText";
import Earth, { GlobeDemo } from "@/components/HeroSection/Earth";
import { StickyScrollRevealDemo } from "@/components/HeroSection/Technolgy";
import Navbar from "@/components/Navbar/Navbar";
import SplashCursor from "@/components/SplashCursor/SplashCursor";
import { Suspense } from "react";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
      <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
        {/* <SplashCursor /> */}
        <div className="">
          <Navbar />
        </div>
        <main className="pt-20 h-screen ">
          <div className=" h-full">
            <GlobeDemo />
            <StickyScrollRevealDemo />
          </div>
        </main>
      </div>
  );
}
