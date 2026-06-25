"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export interface PricingFeature {
  title: string;
  items: string[];
}

export interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: PricingFeature[];
  buttonText?: string;
  featured?: boolean;
  onButtonClick?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  features,
  buttonText = "Get Started",
  featured = false,
  onButtonClick,
}: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="w-full"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={`relative mx-auto w-full max-w-6xl overflow-hidden glass-strong glow-border border-0 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] transition-all duration-500 hover:-translate-y-1 ${featured ? 'ring-2 ring-accent/50 shadow-[0_0_50px_-12px_rgba(239,136,173,0.3)]' : ''}`}>
        {featured && (
          <div className="absolute top-0 right-0 p-4 z-10">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col lg:flex-row h-full">
          <motion.div
            className="flex flex-col justify-between p-8 sm:p-10 lg:w-2/5 relative"
            variants={itemVariants}
          >
            {featured && (
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
            )}
            <div className="relative z-10">
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`text-3xl sm:text-4xl font-extrabold ${featured ? 'text-gradient' : 'text-foreground'}`}>{title}</CardTitle>
                    <CardDescription className="mt-3 text-base text-muted-foreground">{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-8 space-y-4" variants={itemVariants}>
                <div className="flex items-baseline">
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight">{price}</span>
                  {originalPrice && (
                    <span className="ml-3 text-xl text-muted-foreground line-through decoration-muted-foreground/50">
                      {originalPrice}
                    </span>
                  )}
                </div>
                {price !== "Custom" && (
                  <span className="block text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    per month, billed annually
                  </span>
                )}
              </motion.div>
            </div>
            <motion.div className="mt-10 lg:mt-12 relative z-10" variants={itemVariants}>
              <Button 
                className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${featured ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_12px_40px_-8px_rgba(239,136,173,0.6)]' : 'glass border-white/10 hover:bg-white/10'}`} 
                onClick={onButtonClick}
                variant={featured ? "default" : "outline"}
              >
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
          
          <Separator className="hidden lg:block w-px h-auto bg-white/5 mx-0" decorative orientation="vertical" />
          <Separator className="lg:hidden h-px w-full bg-white/5 my-0" decorative />
          
          <motion.div
            className="glass bg-white/[0.02] p-8 sm:p-10 lg:w-3/5 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="space-y-8 relative z-10">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className="mb-5 text-sm uppercase tracking-wider font-bold text-muted-foreground">{feature.title}</h3>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <div className="mt-1 rounded-full bg-accent/10 p-1 shrink-0 mr-3">
                          <Check className="h-3 w-3 text-accent stroke-[3]" />
                        </div>
                        <span className="text-sm sm:text-base text-foreground/90 font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && <Separator className="my-8 bg-white/5" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
