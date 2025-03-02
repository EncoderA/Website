

import React, { useRef } from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { useInView } from "framer-motion";
import { Boxes } from "../ui/background-boxes";

function FoundersCards() {
  const rohanRef = useRef();
  const ankushRef = useRef();
  const isRohanInView = useInView(rohanRef, { once: true, amount: 0.5 });
  const isAnkushInView = useInView(ankushRef, { once: true, amount: 0.5 });

  return (
    <div
      id="about"
      className="bg-gradient-to-r relative md:h-[120vh] h-[150vh] w-full overflow-hidden from-gray-900 via-slate-800 to-gray-900"
    >
      {/* <Boxes /> */}

      {/* Section Header */}
      <div className="flex flex-col justify-center items-center pt-8 pb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
          Founders
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-8"></div>
        <p className="text-center text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl px-6">
          Meet the brilliant minds behind Beat Coder
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex md:flex-row flex-col md:gap-12 gap-52 mx-auto w-11/12 pb-20 md:w-[85%] max-w-4xl">
        {/* Rohan's Card */}
        <div className="w-full transform hover:scale-105 transition-transform duration-300">
          <PinContainer
            title="Connect with Rohan on LinkedIn"
            href="https://www.linkedin.com/in/rohan-nagare-4078ab212/"
            className="w-full aspect-[4/5] flex flex-col items-center backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 shadow-2xl rounded-2xl p-8"
          >
            <div className="flex flex-col items-center w-full h-full">
              {/* Profile Image with Glow Effect */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <Image
                      ref={rohanRef}
                      src="/Rohan (2).png"
                      alt="Rohan Nagare"
                      width={256}
                      height={256}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center w-full">
                <h3 className="text-4xl font-bold text-white mb-5">
                  Rohan Nagare
                </h3>
                <div className="flex justify-center items-center gap-2 mb-6">
                  <span className="px-4 py-1 bg-gradient-to-r shadow-md shadow-blue-400 from-indigo-600 to-indigo-800 rounded-full text-white font-medium">
                    Co-Founder
                  </span>
                  {/* <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium">
                      CTO
                    </span> */}
                </div>

                {isRohanInView && (
                  <div className="space-y-6">
                    <blockquote className="italic text-lg text-blue-200 border-l-4 border-blue-500 pl-4 my-6">
                      "Frontend developer proficient in React, Next.js, Framer Motion and
                      OpenLayers for dynamic user experiences."
                    </blockquote>
                  </div>
                )}
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Ankush's Card */}
        <div className="w-full transform hover:scale-105 transition-transform duration-300">
          <PinContainer
            title="Connect with Ankush on LinkedIn"
            href="https://www.linkedin.com/in/ankush-khairnar-a51620208/"
            className="w-full aspect-[4/5] flex flex-col items-center backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 shadow-2xl rounded-2xl p-8"
          >
            <div className="flex flex-col items-center w-full h-full">
              {/* Profile Image with Glow Effect */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <Image
                      ref={ankushRef}
                      src="/Ankush.png"
                      alt="Ankush Khairnar"
                      width={256}
                      height={256}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center w-full">
                <h3 className="text-4xl font-bold text-white mb-5">
                  Ankush Khairnar
                </h3>
                <div className="flex justify-center items-center gap-2 mb-6">
                  <span className="px-4 py-1 bg-gradient-to-r shadow-md shadow-blue-400 from-indigo-600 to-indigo-800 rounded-full text-white font-medium">
                    Co-Founder
                  </span>
                  {/* <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium">
                      CEO
                    </span> */}
                </div>

                {isAnkushInView && (
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed"></p>
                    <blockquote className="italic text-lg text-blue-200 border-l-4 border-blue-500 pl-4 my-6">
                      "Backend developer skilled in Node.js, Express.js, Prisma, Drizzle ORM and
                      PostgreSQL for scalable applications."
                    </blockquote>
                  </div>
                )}
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}

export default FoundersCards;
