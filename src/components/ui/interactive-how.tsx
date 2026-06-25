"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu, FiMonitor, FiBox, FiPlayCircle, FiServer } from "react-icons/fi";
import { cn } from "@/lib/utils";

export interface Step {
  n: string;
  title: string;
  desc: string;
}

interface InteractiveHowProps {
  steps: Step[];
}

const ICONS = [FiServer, FiMonitor, FiBox, FiPlayCircle, FiCpu];
const COLORS = [
  "from-blue-500 to-blue-300",
  "from-green-500 to-emerald-300",
  "from-purple-500 to-pink-300",
  "from-yellow-500 to-orange-300",
  "from-primary to-accent"
];
// Fixed bar heights per step to avoid hydration issues
const BAR_HEIGHTS = [
  ["h-3", "h-5", "h-2", "h-4"],
  ["h-5", "h-2", "h-4", "h-3"],
  ["h-2", "h-4", "h-5", "h-2"],
  ["h-4", "h-3", "h-2", "h-5"],
  ["h-3", "h-5", "h-4", "h-2"],
];

export function InteractiveHow({ steps }: InteractiveHowProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  // Calculate offset to form a parabola peaking at the middle step
  const getOffset = (idx: number, total: number) => {
    const t = idx / (total - 1);
    const x = 400 * t * (1 - t);
    return (x / 100) * 6;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-16 w-full max-w-6xl mx-auto items-center lg:items-stretch">
      
      {/* Left side: Header & Illustration */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
         <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-12">
            Get Started In <br/> <span className="text-gradient">Minutes.</span>
         </h3>
         <RobotIllustration activeStep={activeStep} />
      </div>

      {/* Right side: Timeline */}
      <div className="w-full lg:w-7/12 relative flex">
         {/* 
           Curved SVG connecting all 5 nodes.
           Node centers (in px, 1rem=16px, circle w-12=48px, center at +24px):
           idx0: x=0+24=24,       y≈0%   of height
           idx1: x=72+24=96,      y≈25%
           idx2: x=96+24=120,     y≈50%
           idx3: x=72+24=96,      y≈75%
           idx4: x=0+24=24,       y≈100%
           viewBox 0 0 160 100, preserveAspectRatio=none stretches y to fill container.
         */}
         <svg
           className="absolute left-0 top-0 w-[160px] h-full pointer-events-none hidden sm:block z-0"
           viewBox="0 0 160 100"
           preserveAspectRatio="none"
         >
           <defs>
             <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%"   stopColor="rgba(239,136,173,0.05)" />
               <stop offset="50%"  stopColor="rgba(239,136,173,0.45)" />
               <stop offset="100%" stopColor="rgba(239,136,173,0.05)" />
             </linearGradient>
           </defs>
           {/* Main smooth curve through node centers */}
           <path
             d="M 24 1 C 24 9, 96 16, 96 25 C 96 34, 120 41, 120 50 C 120 59, 96 66, 96 75 C 96 84, 24 91, 24 99"
             fill="none"
             stroke="url(#curveGrad)"
             strokeWidth="2"
             strokeDasharray="5 5"
             vectorEffect="non-scaling-stroke"
           />
         </svg>

         {/* Steps container */}
         <div className="flex flex-col justify-between w-full relative z-10 gap-10 sm:gap-14">
            {steps.map((step, idx) => {
              const offsetRem = getOffset(idx, steps.length);
              const isActive = activeStep === idx;
              
              return (
                <div 
                  key={step.n} 
                  onClick={() => setActiveStep(idx)}
                  className="flex gap-6 items-center group cursor-pointer transition-transform sm:translate-x-[var(--offset)]" 
                  style={{ '--offset': `${offsetRem}rem` } as React.CSSProperties}
                >
                   {/* Circle Node */}
                   <div className={cn(
                     "w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-300 relative z-10 bg-background",
                     isActive 
                       ? "border-accent text-white shadow-[0_0_20px_rgba(239,136,173,0.5)] scale-110" 
                       : "border-white/10 glass-strong text-muted-foreground group-hover:text-accent group-hover:border-accent/60"
                   )}>
                     {step.n}
                   </div>
                   
                   {/* Content */}
                   <div className="flex-1 max-w-sm">
                     <h4 className={cn(
                       "text-xl font-bold mb-2 transition-colors",
                       isActive ? "text-white" : "text-foreground group-hover:text-white"
                     )}>{step.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              )
            })}
         </div>
      </div>
    </div>
  )
}

function RobotIllustration({ activeStep }: { activeStep: number }) {
  const Icon = ICONS[activeStep % ICONS.length];
  const colorClass = COLORS[activeStep % COLORS.length];

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto lg:mx-0 glass-strong border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-end overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
      
      {/* Bot construction */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Head */}
        <div className="w-28 h-24 rounded-[2.5rem] border border-white/20 bg-background/80 backdrop-blur-md relative flex items-center justify-center mb-2 shadow-2xl">
           {/* Eyes */}
           <div className="flex gap-5">
              <div className="w-4 h-4 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(239,136,173,0.5)]" />
              <div className="w-4 h-4 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(239,136,173,0.5)]" style={{ animationDelay: '150ms' }} />
           </div>
           
           {/* Headphones/Ears */}
           <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-10 bg-white/10 border border-white/20 rounded-l-full" />
           <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-10 bg-white/10 border border-white/20 rounded-r-full" />
           
           {/* Antenna */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-white/20" />
           <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
        </div>
        
        {/* Neck */}
        <div className="w-8 h-5 border-l border-r border-white/20 bg-white/5 relative">
            <div className="w-full h-px bg-white/20 absolute top-1/2" />
        </div>
        
        {/* Body */}
        <div className="w-36 h-28 rounded-t-[3rem] border border-white/20 bg-background/80 backdrop-blur-md relative flex flex-col items-center pt-5 shadow-2xl">
           {/* Screen on chest */}
           <div className="w-20 h-12 rounded-lg border border-white/10 bg-black/60 flex items-center justify-center overflow-hidden relative">
              <div className={cn("absolute inset-0 opacity-40 bg-gradient-to-b", colorClass)} />
              
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep}
                   initial={{ opacity: 0, y: 5 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -5 }}
                   className="relative z-10 flex gap-1.5 items-end h-6"
                 >
                     {BAR_HEIGHTS[activeStep % BAR_HEIGHTS.length].map((h, i) => (
                        <div 
                          key={i} 
                          className={cn("w-1.5 rounded-t-sm animate-pulse bg-white/80", h)} 
                          style={{ animationDelay: `${i * 100}ms` }} 
                        />
                     ))}
                 </motion.div>
              </AnimatePresence>
           </div>
           
           {/* Arms */}
           <div className="absolute -left-6 top-8 w-10 h-16 border-l-4 border-t-4 border-white/20 rounded-tl-3xl origin-top-right -rotate-[20deg]" />
           <div className="absolute -right-6 top-8 w-10 h-16 border-r-4 border-t-4 border-white/20 rounded-tr-3xl origin-top-left rotate-[20deg]" />
        </div>
        
        {/* Desk & Laptop */}
        <div className="w-64 h-3 bg-white/10 rounded-full mt-1 relative border border-white/5">
           {/* Laptop */}
           <div className="absolute bottom-3 right-10">
              {/* Screen */}
              <div className="w-20 h-16 border-2 border-white/20 rounded-t-xl bg-background/90 -rotate-[15deg] origin-bottom-right shadow-2xl flex items-center justify-center overflow-hidden relative">
                  <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-tr", colorClass)} />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="relative z-10 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40"
                    >
                        <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                  </AnimatePresence>
              </div>
              {/* Base */}
              <div className="w-24 h-2 bg-white/30 rounded-full absolute bottom-0 -right-2" />
           </div>
        </div>
      </div>
    </div>
  )
}
