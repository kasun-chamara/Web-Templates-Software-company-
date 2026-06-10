"use client";

import Image from "next/image";
import TerminalCard from "./TerminalCard";
import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaReact,
  FaServer,
  FaCode,
  FaChartBar,
} from "react-icons/fa";

export default function HeroVisual() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-8">
      {/* Outer container with border offset effect */}
      <div className="relative w-full max-w-7xl">
        {/* Border accent line */}
        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-[48px] pointer-events-none" />
        
        {/* Main bento card */}
        <div className="bg-white rounded-[40px] overflow-hidden border shadow-2xl relative z-10">
          {/* Browser Header */}
          <div className="h-16 border-b flex items-center px-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <div className="w-3 h-3 rounded-full bg-blue-900" />
            </div>

            <div className="mx-auto flex items-center gap-2 bg-slate-100 px-8 py-2 rounded-full text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              https://youragency.com
            </div>
          </div>

          {/* Bento Grid */}
          <div className="p-5">
            <div className="grid grid-cols-12 gap-4">
              {/* LEFT SIDE */}
              <div className="col-span-5 flex flex-col gap-4">
                <div className="relative h-[463px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/team.jpg"
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[180px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/office.jpg"
                    alt="Office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-7 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-56 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/code.jpg"
                      alt="Code"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative h-56 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/meeting.jpg"
                      alt="Meeting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="relative h-56 rounded-3xl overflow-hidden">
                  <Image
                    src="/images/workspace.jpg"
                    alt="Workspace"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-44 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/laptop.jpg"
                      alt="Laptop"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative h-44 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/programming.jpg"
                      alt="Programming"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative h-44 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/server.jpg"
                      alt="Server"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements positioned relative to the outer container, outside the main bento */}
        
        {/* Floating Terminal Card - left side */}
        <div className="hidden xl:block absolute -left-24 top-44 z-20">
          <TerminalCard />
        </div>

        {/* React Icon - positioned in the white space on the right, outside main card */}
        <motion.div
          animate={{ y: [0, -12, 0],
            
             rotate: [0, 10, 0, -20, 0]
           }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-36 top-1 bg-white shadow-xl rounded-3xl p-5 z-20 border border-blue-100"
        >
          <FaReact className="text-4xl text-blue-500" />
        </motion.div>

        {/* Security Icon */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -right-10 top-60 bg-green-500 shadow-xl rounded-3xl p-5 z-20 "
        >
          <FaShieldAlt className="text-2xl text-white" />
        </motion.div>

        {/* Backend Icon - left side */}
        <motion.div
          animate={{ y: [0, -10, 0],
             rotate: [0, 10, 0, -10, 0]
           }}
          
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -left-10 bottom-40 bg-slate-700 shadow-xl rounded-3xl p-5 z-20 "
        >
          <FaServer className="text-3xl text-white" />
        </motion.div>

        {/* Development Icon */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute right-20  bg-white shadow-xl rounded-3xl p-5 z-20 border border-red-100"
        >
          <FaCode className="text-3xl text-red-600" />
        </motion.div>
      </div>
    </div>
  );
}