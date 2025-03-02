import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileSection() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={container} id="about" className="w-full h-[200vh] bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-12"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
            }}
          >
            <ProfileCard 
              name="Alex Chen"
              role="Frontend Developer"
              image="/profile1.png" 
              details={{
                education: "3rd Year Computer Science Student",
                university: "University of Technology",
                techStack: "React • TypeScript • Node.js • Python",
                projects: [
                  { 
                    title: "Weather Dashboard", 
                    tech: "React, TypeScript, OpenWeather API",
                    color: "purple"
                  },
                  { 
                    title: "Task Management API", 
                    tech: "Node.js, Express, MongoDB",
                    color: "orange"
                  }
                ]
              }}
              // appearDelay={0}
            />
            
            <ProfileCard 
              name="Sarah Kim"
              role="Backend Developer"
              image="/profile2.jpg"
              details={{
                education: "4th Year Software Engineering",
                university: "Tech Institute",
                techStack: "Java • Spring • MongoDB • AWS",
                projects: [
                  { 
                    title: "E-commerce Platform", 
                    tech: "Spring Boot, PostgreSQL, Redis",
                    color: "blue"
                  },
                  { 
                    title: "Authentication Service", 
                    tech: "Node.js, JWT, Firebase",
                    color: "green"
                  }
                ]
              }}
              // appearDelay={0.2}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ProfileCard = ({ name, role, image, details, appearDelay }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div 
      className="relative w-96 h-[450px] group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: appearDelay,
        ease: "easeOut"
      }}
      style={{ y }}
    >
      <div className="[perspective:1000px] w-full h-full">
        <motion.div
          className="w-full h-full rounded-xl shadow-2xl bg-gray-800 relative [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
        >
          {/* Front Face */}
          
          <div className="absolute w-full h-full rounded-xl overflow-hidden flex flex-col [backface-visibility:hidden]">
            <div className="w-full h-3/4 overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-6 bg-gray-800 flex-grow">
              <h2 className="text-white text-2xl font-bold">{name}</h2>
              <p className="text-gray-400">{role}</p>
            </div>
            <div className="absolute top-3 right-3 flex space-x-2">
              <a href="#" className="p-2 bg-gray-900 bg-opacity-70 rounded-full text-gray-400 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-900 bg-opacity-70 rounded-full text-gray-400 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-900 bg-opacity-70 rounded-full text-gray-400 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Back Face */}
          <div 
            className="absolute w-full h-full rounded-xl p-6 bg-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          >
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">{name}</h2>
                <p className="text-gray-400 text-base">{role}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-gray-300 text-base">{details.education}</p>
                <p className="text-gray-400 text-sm">{details.university}</p>
              </div>

              <div className="border-l-2 border-emerald-600 pl-4">
                <h3 className="text-emerald-400 text-base font-medium mb-1">Tech Stack</h3>
                <p className="text-gray-400 text-sm">{details.techStack}</p>
              </div>
              
              {details.projects.map((project, index) => (
                <div key={index} className={`border-l-2 border-${project.color}-600 pl-4`}>
                  <h3 className={`text-${project.color}-400 text-base font-medium`}>{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <a href="#" className="p-2 bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};