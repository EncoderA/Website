'use client'
import Footer from "@/components/Footer/Footer";
import Description from "@/components/HeroSection/Description";
import Earth, { GlobeDemo } from "@/components/HeroSection/Earth";
import { TechnologyCards } from "@/components/HeroSection/Technolgy";
import Navbar from "@/components/Navbar/Navbar";
import Contactus from "@/components/Contactus/Contactus";
import CubeBox from "@/components/aboutus/cube";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      {/* <SplashCursor />   */}
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
