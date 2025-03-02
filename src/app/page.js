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

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      {/* <SplashCursor />   */}
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
    // Simulate loading process with faster increments
    const interval = setInterval(() => {
      setLoadingPercentage(prev => {
        // Increased increments for faster loading
        const increment = prev < 70 ? 10 : prev < 90 ? 8 : 5;
        const nextValue = Math.min(prev + increment, 100);
        
        // When loading completes
        if (nextValue === 100) {
          clearInterval(interval);
          
          // Reduced delay before hiding the loading screen
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadComplete) onLoadComplete();
          }, 100); // Reduced from 200ms to 100ms
        }
        
        return nextValue;
      });
    }, 25); // Reduced update interval from 25ms to 15ms
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <h1 className="text-4xl font-bold text-white mb-8">
        <Image src='/logo.png' alt="logo" width={100} height={100} className="w-80 h-36 object-cover"/>
      </h1>
      
      {/* Loading bar container */}
      <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
        {/* Loading bar progress */}
        <div 
          className="h-full bg-blue-500 transition-all duration-200"
          style={{ width: `${loadingPercentage}%` }}
        ></div>
      </div>
      
      {/* Percentage text */}
      <p className="text-white mt-4 font-medium">
        {loadingPercentage}%
      </p>
    </div>
  );
};