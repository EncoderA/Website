import React, { useRef,useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SignupFormDemo } from './SignupFormDemo';
import { CardSpotlightDemo } from './CardDemo';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import { MultiStepLoader } from '../ui/multi-step-loader';
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
function Contactus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [loading,setLoading] = useState(false)
  return (
    <BackgroundBeamsWithCollision className='bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 min-h-screen flex items-center justify-center'>
        <SignupFormDemo />
    </BackgroundBeamsWithCollision>
  );
}

export default Contactus;
