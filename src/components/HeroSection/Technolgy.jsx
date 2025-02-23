import React, { useRef } from "react";
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
  BrainCircuit,
} from "lucide-react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function TechnologyCards() {
  const [hovered, setHovered] = React.useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div id="technolgy" className=" w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-2">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-12 justify-center items-center h-full w-full"
      >
        <GridItem
          icon={<LayoutGrid className="h-6 w-6 text-blue-400" />}
          title="Next.js Framework"
          description="Full-stack React framework with server-side rendering, automatic routing, and optimized performance for modern web applications."
          hoverColors={[
            [59, 130, 246],
            [139, 92, 246],
          ]}
        />
        <GridItem
          icon={<Code2 className="h-6 w-6 text-cyan-400" />}
          title="React.js Library"
          description="Component-based UI library for building interactive user interfaces with declarative code and efficient state management."
          hoverColors={[
            [16, 185, 129],
            [5, 150, 105],
          ]}
        />
        <GridItem
          icon={<Server className="h-6 w-6 text-green-400" />}
          title="Node.js Runtime"
          description="Event-driven JavaScript runtime for building scalable network applications with a rich ecosystem of packages via npm."
          hoverColors={[
            [34, 197, 94],
            [22, 163, 74],
          ]}
        />
        <GridItem
          icon={<Database className="h-6 w-6 text-blue-500" />}
          title="PostgreSQL Database"
          description="Advanced open-source relational database with robust features for complex queries, transactions, and data integrity."
          hoverColors={[
            [37, 99, 235],
            [29, 78, 216],
          ]}
        />
        <GridItem
          icon={<Layers className="h-6 w-6 text-fuchsia-400" />}
          title="Modern Tech Stack"
          description="Prisma ORM for type-safe database access, WebGIS for spatial data, and ML integration for intelligent features."
          hoverColors={[
            [217, 70, 239],
            [192, 38, 211],
          ]}
        />
        <GridItem
          icon={<BrainCircuit className="h-6 w-6 text-yellow-400" />}
          title="Machine Learning"
          description="TensorFlow.js for deep learning models, TensorFlow Serving for model deployment, and TensorFlow Lite for mobile devices."
          hoverColors={[
            [234, 179, 8],
            [202, 138, 4],
          ]}
        />
      </motion.div>
    </div>
  );
}

const GridItem = ({ icon, title, description, hoverColors }) => {
  const [hovered, setHovered] = React.useState(false);
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
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden bg-gray-900 rounded-lg border-0.75 p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                <CanvasRevealEffect
                  animationSpeed={10}
                  containerClassName="bg-transparent"
                  colors={hoverColors}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={3}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
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
