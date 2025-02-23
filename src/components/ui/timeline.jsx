"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const h2Ref = useRef(null);
  const isInView = useInView(h2Ref, { once: false });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2
          ref={h2Ref}
          className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Bridging Modern Web Development and GIS: A Journey of Technical Growth
          and Innovation
        </motion.h2>
        <motion.p
          ref={h2Ref}
          className="text-neutral-300 dark:text-neutral-300 text-sm md:text-base max-w-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Exploring the intersection of modern web development and geographic
          information systems. Here's the evolution of my technical expertise.
        </motion.p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const circleRef = useRef(null);
          const [circleColor, setCircleColor] = useState("bg-neutral-800 dark:bg-neutral-800");

          useEffect(() => {
            const handleScroll = () => {
              const motionDiv = document.querySelector(`.motion-div-${index}`);
              const circleDiv = circleRef.current;

              if (motionDiv && circleDiv) {
                const motionDivRect = motionDiv.getBoundingClientRect();
                const circleDivRect = circleDiv.getBoundingClientRect();

                if (motionDivRect.bottom > circleDivRect.top) {
                  setCircleColor("bg-indigo-400");
                } else {
                  setCircleColor("bg-neutral-800 dark:bg-neutral-800");
                }
              }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
                  <div ref={circleRef} className={`h-4 w-4 rounded-full ${circleColor} border border-neutral-700 dark:border-neutral-700 p-2`} />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          {data.map((_, index) => (
            <motion.div
              key={index}
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className={`absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full motion-div-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};