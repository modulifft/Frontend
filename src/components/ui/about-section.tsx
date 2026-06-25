"use client";

import { motion } from "framer-motion";
import { FiPlay, FiCheckCircle, FiLayers, FiShield } from "react-icons/fi";

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 overflow-hidden z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Split Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-24 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs tracking-wider font-medium text-muted-foreground w-fit mb-2 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Introduction to the best <br className="hidden xl:block"/> <span className="text-gradient">Industrial Robotics Platform!</span>
            </h2>
            
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                so every idea can be brought to life with confidence. Backed by years of experience and multiple branches, we are committed to consistency, reliability, and customer satisfaction, making us a trusted destination for automation engineering.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
                At Modulifft, we are passionate about empowering engineers at every level. With a wide range of premium simulation tools, digital twins, and AI ops essentials, we proudly serve architects, students, and creative professionals alike. Our carefully curated features are built for quality, scalability, and performance.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Box */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glass-strong border-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
              <img
                src="/About Us.svg"
                alt="About Us"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
            {/* Floating smaller image — contained within parent bounds on all screens */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute right-0 sm:-right-4 lg:-right-6 top-[12%] w-[38%] sm:w-[40%] aspect-[4/3] rounded-2xl overflow-hidden glass glow-border shadow-2xl border-white/20"
            >
              <img
                src="/About Us (1).svg"
                alt="About Us Detail"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>



      </div>
    </section>
  );
}
