// "use client";
// import React from "react";
// import { StickyScroll } from "../ui/sticky-scroll-reveal";
// import Image from "next/image";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div
//         className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo" />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div
//         className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div
//         className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
// export function StickyScrollRevealDemo() {
//   return (
//     (<div className=" bg-gradient-to-r  from-gray-900 via-slate-800 to-gray-900 ">
//       <StickyScroll content={content} />
//     </div>)
//   );
// }

"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Next.js & React.js Development",
    description:
      "Leveraging the power of Next.js 15 with App Router and React.js for building high-performance, SEO-friendly web applications. We implement server-side rendering, static site generation, and dynamic client-side features to create seamless user experiences with optimal performance.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">⚛️</span>
          <span className="text-xl font-semibold">Modern Web Development</span>
        </div>
      </div>
    ),
  },
  {
    title: "Node.js & Prisma Backend",
    description:
      "Building robust, scalable backend systems with Node.js and Prisma ORM. Our backend architecture ensures type-safe database operations, efficient API endpoints, and seamless data management. We implement real-time features, authentication systems, and complex business logic with industry best practices.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">🚀</span>
          <span className="text-xl font-semibold">Scalable Backend Systems</span>
        </div>
      </div>
    ),
  },
  {
    title: "GSAP Animations & Interactive UX",
    description:
      "Creating stunning, smooth animations and interactive user experiences using GSAP (GreenSock Animation Platform). We implement complex scroll-based animations, transitions, and interactive elements that enhance user engagement while maintaining optimal performance and accessibility.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">✨</span>
          <span className="text-xl font-semibold">Dynamic Animations</span>
        </div>
      </div>
    ),
  },
  {
    title: "OpenLayers & GIS Solutions",
    description:
      "Implementing advanced mapping solutions using OpenLayers and GIS technologies. We create interactive maps, spatial data visualization, and location-based services that help businesses make data-driven decisions. Our solutions include custom map layers, real-time tracking, and complex geospatial analysis.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">🌍</span>
          <span className="text-xl font-semibold">Geospatial Technologies</span>
        </div>
      </div>
    ),
  },
  {
    title: "PostgreSQL & Database Architecture",
    description:
      "Designing and implementing sophisticated database solutions with PostgreSQL. Our database architecture ensures data integrity, optimal performance, and scalability. We implement complex queries, stored procedures, and efficient indexing strategies while maintaining security best practices.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">🗄️</span>
          <span className="text-xl font-semibold">Database Solutions</span>
        </div>
      </div>
    ),
  },
  {
    title: "Machine Learning Integration",
    description:
      "Incorporating intelligent features through machine learning integration. We implement predictive analytics, data processing pipelines, and AI-driven functionalities that provide valuable insights and automate complex tasks. Our solutions help businesses leverage their data for better decision-making.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/20 flex items-center justify-center text-white p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">🧠</span>
          <span className="text-xl font-semibold">AI & ML Solutions</span>
        </div>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900">
      <StickyScroll content={content} />
    </div>
  );
}