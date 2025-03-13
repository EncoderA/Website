'use client'
import Footer from "@/components/Footer/Footer";
import Description from "@/components/HeroSection/Description";
import Earth, { GlobeDemo } from "@/components/HeroSection/Earth";
import { TechnologyCards } from "@/components/HeroSection/Technolgy";
import Navbar from "@/components/Navbar/Navbar";
import Contactus from "@/components/Contactus/Contactus";
import CubeBox from "@/components/aboutus/cube";
import { useEffect, useState } from "react";
import Image from "next/image";
import SplashCursor from "@/components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <SplashCursor />  
      <LoadingScreen />
      <div className="">
        <Navbar />
      </div>
      <main className="pt-10 h-screen ">
        <div className=" h-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
 
          <GlobeDemo />
          <Description />
          <TechnologyCards />
          <CubeBox />
          <Contactus />
          <Footer />
        </div>
      </main>
    </div>
  );
}

const LoadingScreen = ({ onLoadComplete }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reduced total duration to 500ms
    const totalDuration = 390;
    const intervalTime = 20; // Update more frequently for smoother appearance
    const totalSteps = totalDuration / intervalTime;
    const incrementPerStep = 100 / totalSteps;
    
    const interval = setInterval(() => {
      setLoadingPercentage(prev => {
        // Accelerated non-linear progression
        let nextValue;
        if (prev < 40) {
          // Start even faster
          nextValue = prev + incrementPerStep * 1.8;
        } else if (prev < 75) {
          // Middle slightly faster
          nextValue = prev + incrementPerStep * 1.2;
        } else {
          // End quickly
          nextValue = prev + incrementPerStep * 1.5;
        }
        
        nextValue = Math.min(Math.round(nextValue), 100); // Round to integer for performance
        
        // When loading completes
        if (nextValue >= 100) {
          clearInterval(interval);
          
          // Immediately hide after reaching 100%
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadComplete) onLoadComplete();
          }, 50); // Reduced to 50ms for quicker transition
        }
        
        return nextValue;
      });
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center">
        {/* Logo with reduced animation */}
        <div className="mb-8">
          <Image 
            src='/logo.png' 
            alt="logo" 
            width={100} 
            height={100} 
            className="w-64 h-32 object-cover"
          />
        </div>
        
        {/* Simplified loading bar for faster rendering */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          {/* Loading bar progress */}
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-100"
            style={{ width: `${loadingPercentage}%` }}
          ></div>
        </div>
        
        {/* Simple percentage counter */}
        <p className="text-blue-400 font-medium text-lg mt-4">
          {loadingPercentage}%
        </p>
      </div>
    </div>
  );
};