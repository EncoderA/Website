import React, { useRef } from "react";
import ScrollVelocity from "../reactbits/ScrollVelocity/ScrollVelocity";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className={className}
      />
    </motion.div>
  );
};

const Description = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data = [
    {
      title: "Frontend Development",
      content: (
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-8">
            Modern frontend development using React, Next.js, and Tailwind CSS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/server-rendering-with-streaming.avif"
              alt="React Components"
              className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/UI.png"
              alt="UI Design"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Web Mapping",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Interactive web mapping solutions using modern technologies
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🗺️ OpenLayer GL JS Integration
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🗺️ OpenLayer Custom Controls
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🗺️ Real-time Data Visualization
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/Webmap.jpeg"
              alt="Web Maps"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/mapV.png"
              alt="Map Visualization"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Backend Development",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-8">
            Robust backend architecture with Node.js, Next Api Route, Express, and MongoDB, PostgreSQL
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/api.jpeg"
              alt="API Design"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/DBD.jpeg"
              alt="Database Design"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Spatial Data Management",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            GIS data processing and analysis using industry-standard tools
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🌍 PostGIS Database Integration
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🌍 QGIS Data Processing
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🌍 Spatial Analysis Tools
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/gisP.jpeg"
              alt="GIS Processing"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/spatial.png"
              alt="Spatial Analysis"
              className="rounded-lg bg-zinc-900 object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "GSAP & Framer motion Animations",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Smooth and interactive animations using GSAP and Framer Motion
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Scroll Animations
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Page Transitions
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              ✨ Interactive Elements
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/gsap.png"
              alt="GSAP Animation"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/motion.png"
              alt="Motion Graphics"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Website Launch",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-md md:text-xl font-normal mb-4">
            Final deployment and optimization of the website and GIS
            applications
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Performance Optimization
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🚀 SEO Implementation
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Analytics Integration
            </div>
            <div className="flex gap-2 items-center text-neutral-350 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Spatial Data Deployment
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedImage
              src="/Timeline/performance.jpeg"
              alt="Website Performance"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <AnimatedImage
              src="/Timeline/GISIntegration.jpeg"
              alt="GIS Integration"
              className="rounded-lg object-cover h-44 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="services" className="text-white bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <ScrollVelocity
        texts={["Web Development ", "GIS Development"]}
        className="custom-scroll-text"
      />

      <div className="w-full mt-20">
        <Timeline data={data} className="" />
      </div>
    </div>
  );
};

export default Description;
