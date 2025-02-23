import React from 'react';
import { motion } from 'framer-motion';

const CubeLoader = ({ size = 100, color = "#6d28d9", isLoading = true }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className={`cube-wrapper ${!isLoading && 'hidden'}`}
        style={{
          perspective: '1000px',
          width: size,
          height: size
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-br"
            style={{
              transform: `translateZ(${size / 2}px)`,
              backgroundColor: color,
              opacity: 0.8,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>

          {/* Back face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-bl"
            style={{
              transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
              backgroundColor: color,
              opacity: 0.8,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>

          {/* Right face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-tr"
            style={{
              transform: `translateX(${size / 2}px) rotateY(90deg)`,
              backgroundColor: color,
              opacity: 0.9,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>

          {/* Left face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-tl"
            style={{
              transform: `translateX(-${size / 2}px) rotateY(-90deg)`,
              backgroundColor: color,
              opacity: 0.9,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>

          {/* Top face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-b"
            style={{
              transform: `translateY(-${size / 2}px) rotateX(90deg)`,
              backgroundColor: color,
              opacity: 0.7,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>

          {/* Bottom face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-t"
            style={{
              transform: `translateY(${size / 2}px) rotateX(-90deg)`,
              backgroundColor: color,
              opacity: 0.7,
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-white/40 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LoaderContainer = ({ show = true,isDone }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
    >
      <div className="p-8 rounded-2xl ">
        {/* <p className='mb-5'>Wait a minute</p> */}
        {isDone ?
          <div className='text-white text-center'>
              <p className='text-4xl font-bold mb-4'>Thank for Messaging</p>
              <p className='text-3xl font-semibold'>We will respond you as soon as possible</p>
          </div>
        :<CubeLoader size={80} color="#6d28d9" isLoading={show} />}
      </div>
    </motion.div>
  );
};

export default LoaderContainer;