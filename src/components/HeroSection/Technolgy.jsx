import React from 'react';
import { 
  Database, 
  Server, 
  Layers, 
  Globe2, 
  Brain,
  LayoutGrid,
  Cpu,
  Code2,
  BrainIcon,
  BrainCircuit
} from "lucide-react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect';

export function TechnologyCards() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-2">
      <div className="flex flex-wrap gap-12 justify-center items-center h-full w-full">
        {/* <div className=""> */}
          <GridItem
            icon={<LayoutGrid className="h-6 w-6 text-blue-400" />}
            title="Next.js Framework"
            description="Full-stack React framework with server-side rendering, automatic routing, and optimized performance for modern web applications."
            
          >
          </GridItem>
        {/* </div> */}
        {/* <div className=""> */}
          <GridItem
            icon={<Code2 className="h-6 w-6 text-cyan-400" />}
            title="React.js Library"
            description="Component-based UI library for building interactive user interfaces with declarative code and efficient state management."
          />
        {/* </div> */}
        {/* <div className=""> */}
          <GridItem
            icon={<Server className="h-6 w-6 text-green-400" />}
            title="Node.js Runtime"
            description="Event-driven JavaScript runtime for building scalable network applications with a rich ecosystem of packages via npm."
          />
        {/* </div> */}
        {/* <div className=""> */}
          <GridItem
            icon={<Database className="h-6 w-6 text-blue-500" />}
            title="PostgreSQL Database"
            description="Advanced open-source relational database with robust features for complex queries, transactions, and data integrity."
          />
        {/* </div> */}
        {/* <div className=""> */}
          <GridItem
            icon={<Layers className="h-6 w-6 text-fuchsia-400" />}
            title="Modern Tech Stack"
            description="Prisma ORM for type-safe database access, WebGIS for spatial data, and ML integration for intelligent features."
          />

          <GridItem
            icon={<BrainCircuit className="h-6 w-6 text-yellow-400" />}
            title="Machine Learning"
            description="TensorFlow.js for deep learning models, TensorFlow Serving for model deployment, and TensorFlow Lite for mobile devices."
            />
        {/* </div> */}
      </div>
    </div>
  );
}

const GridItem = ({
  icon,
  title,
  description
}) => {
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="relative h-full rounded-xl border p-4 bg-gray-900 dark:bg-black dark:border-white/[0.2] border-black/[0.1] group/card hover:border-gray-700 transition-colors duration-300">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden bg-black rounded-lg border-0.75 p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col gap-6">
            <div 
              className="w-fit rounded-lg border border-gray-600 bg-gray-900 p-4 transition-transform duration-300" 
              style={{ transform: "translateZ(50px)" }}
            >
              {icon}
            </div>
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold font-sans -tracking-4 md:text-3xl text-balance text-white transition-transform duration-300"
                style={{ transform: "translateZ(75px)" }}
              >
                {title}
              </h3>
              <h2
                className="text-base md:text-lg text-neutral-400 transition-transform duration-300"
                style={{ transform: "translateZ(50px)" }}
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default TechnologyCards;