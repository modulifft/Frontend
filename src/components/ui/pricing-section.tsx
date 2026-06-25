"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 10 boards per workspace", icon: <Briefcase size={20} /> },
      { text: "Up to 10GB storage", icon: <Database size={20} /> },
      { text: "Limited analytics", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Up to 2 individual users",
      "Up to 2 workspaces",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimted boards", icon: <Briefcase size={20} /> },
      { text: "Storage (250MB/file)", icon: <Database size={20} /> },
      { text: "100 workspace command runs", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Up to 10 individual users",
      "Up to 10 workspaces",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited board", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage ", icon: <Database size={20} /> },
      { text: "Unlimited workspaces", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Custom roles",
      "Custom boards",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl glass border border-white/10 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl shadow-sm bg-gradient-to-t from-primary to-accent"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly Billing</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl shadow-sm bg-gradient-to-t from-primary to-accent"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Billing
            <span className="rounded-full glass-strong px-2 py-0.5 text-xs font-bold text-accent">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 py-24 max-w-7xl mx-auto relative overflow-hidden"
      ref={pricingRef}
      id="pricing"
    >
      <article className="text-left mb-12 space-y-6 max-w-2xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground uppercase tracking-widest font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Flexible Pricing
        </div>
        
        <h2 className="md:text-5xl text-4xl font-extrabold text-foreground mb-4">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            We've got a plan that's perfect for you
          </VerticalCutReveal>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:text-lg text-sm text-muted-foreground max-w-xl mx-auto"
        >
          Trusted by millions, we help teams all around the world. Explore which
          option is right for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </motion.div>
      </article>

      <div className="grid md:grid-cols-3 gap-6 py-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card
              className={`relative h-full flex flex-col transition-all duration-300 hover:-translate-y-2 border-0 ${
                plan.popular
                  ? "glass-strong glow-border ring-2 ring-accent shadow-[0_20px_60px_-15px_rgba(239,136,173,0.3)]"
                  : "glass"
              }`}
            >
              <CardHeader className="text-left p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-foreground">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-5xl font-extrabold"
                    />
                  </span>
                  <span className="text-muted-foreground ml-2 font-medium">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0 flex-1 flex flex-col">
                <button
                  className={`w-full mb-8 p-4 text-base font-bold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-t from-accent to-primary text-primary-foreground shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(239,136,173,0.6)]"
                      : "glass border border-white/10 hover:bg-white/10 text-foreground"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-6 border-t border-white/5 flex-1">
                  <h4 className="font-bold text-sm text-foreground">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-3 font-medium">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="mt-0.5 mr-3 shrink-0 rounded-full bg-accent/10 p-1">
                          <CheckCheck className="h-3 w-3 text-accent" />
                        </span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
