import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiMenu, FiX, FiArrowRight, FiCheck, FiMail, FiPhone, FiMapPin,
  FiStar, FiCpu, FiLayers, FiActivity, FiGitBranch, FiZap,
  FiBarChart2, FiServer, FiAperture, FiPlay, FiBox, FiSettings,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import FeatureSection from "@/components/ui/feature-section";
import { TestimonialCarousel, type Testimonial } from "@/components/ui/testimonial";
import { PricingSection } from "@/components/ui/pricing-section";
import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";
import { SiteFooter } from "@/components/ui/site-footer";
import { InteractiveHow } from "@/components/ui/interactive-how";
import logoUrl from "../logo.svg";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

/* --------------------------- NAVBAR --------------------------- */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 pt-2 ${
        scrolled ? "py-0.25" : "py-0.5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-0.5 sm:py-0.75 transition-all ${
            scrolled
              ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              : "glass"
          }`}
        >
          <a href="/" className="flex items-center shrink-0">
            <img src={logoUrl} alt="Modulifft Logo" className="h-12 sm:h-14 w-auto object-contain" />
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  onClick={() => setActive(n.href)}
                  href={n.href}
                  className={`px-3 py-1 text-sm rounded-lg transition-all ${
                    active === n.href
                      ? "text-foreground bg-white/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            
            <a href="/Product" className="px-4 py-1 text-sm rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_8px_30px_-6px_rgba(239,136,173,0.6)] transition">
              Explore ModSim X
            </a>
          </div>

          <button
            className="lg:hidden h-8 w-8 grid place-items-center rounded-lg glass"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu className="h-4 w-4" />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        className="lg:hidden fixed inset-y-0 right-0 w-[84%] max-w-sm z-[60] glass-strong border-l border-border p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-heading font-extrabold">MODULIFFT</span>
          <button
            className="h-10 w-10 grid place-items-center rounded-lg glass"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                onClick={() => setOpen(false)}
                href={n.href}
                className="block px-4 py-3 rounded-xl text-foreground/90 hover:bg-white/5"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3">
          <a href="/Product" className="w-full py-3 rounded-xl border border-border text-foreground text-center">
            Login
          </a>
          <a href="/Product" className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
            View Product
          </a>
        </div>
      </motion.div>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-[55] bg-background/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}

/* --------------------------- PARTICLES --------------------------- */
function Particles({ count = 24 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i * 0.6) % 8;
        const dur = 6 + ((i * 1.3) % 8);
        const size = 2 + (i % 3);
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-accent/60"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animation: `particle ${dur}s linear ${delay}s infinite`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>
  );
}

/* --------------------------- HERO --------------------------- */
const COLORS = [
  { hex: "#EF6820", name: "Orange" },
  { hex: "#17B26A", name: "Green" },
  { hex: "#2E90FA", name: "Blue" },
  { hex: "#F04400", name: "Red" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="home" ref={ref} className="relative pt-24 sm:pt-28 pb-16 overflow-hidden min-h-screen flex items-center bg-black">

      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <Particles />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6">
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[minmax(120px,auto)]">
          {/* 1. Main Title Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 lg:col-span-4 glass-strong p-8 sm:p-12 lg:p-16 rounded-[1.5rem] relative overflow-hidden flex flex-col justify-center min-h-[600px]" style={{ border: 'none', boxShadow: 'none' }}
          >
            <video
              src="./Untitled design (2).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-contain opacity-80"
              style={{ objectPosition: "right center" }}
            />
            {/* Gradient overlay: fades from dark bg on left → transparent → blends into video on right */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "linear-gradient(to right, #0a0008 0%, #0a0008 25%, rgba(10,0,8,0.85) 40%, rgba(10,0,8,0.4) 58%, transparent 75%)"
            }} />
            {/* Top & bottom fade for depth */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "linear-gradient(to bottom, rgba(10,0,8,0.3) 0%, transparent 20%, transparent 80%, rgba(10,0,8,0.3) 100%)"
            }} />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] sm:text-xs text-muted-foreground mb-4 w-max">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                AI-Powered Digital Twin Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                The Robotics <span className="text-gradient">Simulation</span> &amp; Modular <span className="text-gradient">Automation</span> Platform.
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Design, simulate, test, and optimize robotic systems using AI-powered
                digital twin intelligence — before real-world deployment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Product"
                  className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_12px_40px_-8px_rgba(239,136,173,0.6)] transition"
                >
                  Explore ModSim X
                  <FiArrowRight className="group-hover:translate-x-0.5 transition" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold glass hover:bg-white/10 transition"
                >
                  <FiPlay /> Explore Platform
                </a>
              </div>
            </div>

          </motion.div>


          {/* 2. AI Optimizer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-strong glow-border p-4 rounded-[1.5rem] relative overflow-hidden flex flex-col min-h-[300px]"
          >
            <video
              src="./ai-optimizer.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Content pinned to bottom-left */}
            <div className="absolute bottom-4 left-4 z-10">
              <div className="flex items-center gap-2 mb-1">
                <HiSparkles className="h-4 w-4 text-accent" />
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">AI</span>
              </div>
              <div className="text-lg font-bold text-foreground">AI Optimizer</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Active Learning</div>
            </div>
          </motion.div>

          {/* 3. 100K+ Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-strong glow-border p-6 rounded-[1.5rem] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, rgba(80,10,30,0.85) 0%, rgba(40,5,20,0.95) 100%)" }}
          >
            {/* Main stat */}
            <div className="flex flex-col gap-1 mb-5">
              <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">100K+</span>
              <span className="text-sm text-muted-foreground leading-snug">High ranking product</span>
            </div>
            {/* Supporting stats */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Robots Deployed</span>
                <span className="text-sm font-bold text-foreground">500+</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Uptime SLA</span>
                <span className="text-sm font-bold text-green-400">99.9%</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">Scenarios Tested</span>
                <span className="text-sm font-bold text-accent">3× faster</span>
              </div>
            </div>
          </motion.div>

          {/* 4. Robots Online Video Card - 2 cols wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 glass-strong glow-border rounded-[1.5rem] relative overflow-hidden flex flex-row items-stretch min-h-[220px]"
          >
            {/* Left: description */}
            <div className="relative z-10 flex flex-col justify-center p-6 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">System</span>
              </div>
              <div className="text-xl font-bold text-foreground mb-2">Robots Online</div>
              <div className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                Real-time fleet management with live status monitoring and distributed load balancing across all active robots.
              </div>
            </div>
            {/* Right: video */}
            <div className="relative w-1/2 flex-shrink-0 overflow-hidden rounded-r-[1.5rem]">
              <video
                src="./robots-online.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- ABOUT --------------------------- */
function About() {
  return <AboutSection />;
}

/* --------------------------- HOW IT WORKS --------------------------- */
const STEPS = [
  { n: "01", title: "Connect Robotics Systems", desc: "Ingest CAD, ROS topics, PLC tags and SCADA streams." },
  { n: "02", title: "Create Digital Twin", desc: "Auto-generate a synchronized virtual environment." },
  { n: "03", title: "Build Automation Logic", desc: "Compose workflows with the modular block editor." },
  { n: "04", title: "Run AI Simulation Engine", desc: "Stress-test thousands of scenarios in parallel." },
  { n: "05", title: "Deploy Optimized Ops", desc: "Push validated programs to the physical fleet." },
];

function How() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How It Works"
          title={<>How <span className="text-gradient">Modulifft</span> works</>}
          desc="Five orchestrated stages — from physical signal to optimized deployment — built around a continuous twin-feedback loop."
        />

        <InteractiveHow steps={STEPS} />
      </div>
    </section>
  );
}

/* --------------------------- FEATURES --------------------------- */
function Features() {
  return <FeatureSection />;
}

/* --------------------------- PRICING --------------------------- */
const PLANS = [
  {
    name: "Starter", price: "$499",
    desc: "For teams piloting their first digital twin.",
    features: ["3 Active Twins", "10 Robots", "Core Simulation Engine", "Community Support"],
    featured: false,
  },
  {
    name: "Professional", price: "$1,899",
    desc: "Scale automation across multiple production lines.",
    features: ["25 Active Twins", "150 Robots", "AI Optimization Layer", "Analytics Dashboard", "Priority Support"],
    featured: false,
  },
  {
    name: "Enterprise", price: "Custom",
    desc: "Plant-wide deployment with dedicated AI Ops.",
    features: ["Unlimited Twins & Robots", "Multi-site Orchestration", "Custom AI Models", "SAP / MES Integration", "Dedicated Success Engineer", "24/7 SLA"],
    featured: true,
  },
];

function Pricing() {
  return <PricingSection />;
}

/* --------------------------- TESTIMONIALS --------------------------- */
const TESTIMONIALS = [
  { name: "Dr. Elena Vasquez", role: "Director of Robotics, Aurelia Manufacturing", text: "Modulifft cut our commissioning time by 64%. The twin fidelity is unlike anything we've evaluated.", avatar: "/testimonial (2).svg" },
  { name: "Marcus Chen", role: "Automation Architect, Heliox Industries", text: "The modular workflow builder lets our engineers ship logic in hours, not weeks.", avatar: "/testimonial.svg" },
  { name: "Priya Raman", role: "VP Operations, NorthBridge Robotics", text: "We simulate thousands of scenarios overnight. Decisions are now driven by data, not guesswork.", avatar: "/testimonial (3).svg" },
  { name: "Lars Holmberg", role: "Principal Consultant, Volta Industrial", text: "Honestly the most coherent industrial AI platform I've deployed for a Tier-1 client.", avatar: "/testimonial.svg" },
];

const formattedTestimonials: Testimonial[] = TESTIMONIALS.map((t, i) => ({
  id: i,
  name: t.name,
  role: t.role,
  description: t.text,
  avatar: (t as any).avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(t.name)}`,
}));

function Testimonials() {
  const stats = [
    { value: "64%", label: "Faster commissioning" },
    { value: "3×", label: "More scenarios tested" },
    { value: "500+", label: "Robots managed" },
    { value: "99.9%", label: "Uptime SLA" },
  ];


  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 lg:items-start items-center">
          <div className="max-w-xl lg:mt-12 flex flex-col gap-10">
            <SectionHeader
              eyebrow="Testimonials"
              title={<>What <span className="text-gradient">industry leaders</span> say</>}
              desc="Discover how the world's most ambitious manufacturers are scaling their automation operations with Modulifft."
            />

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="glass border border-white/10 rounded-xl px-3 py-2.5 flex flex-col gap-0.5">
                  <span className="text-lg font-extrabold text-gradient">{s.value}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{s.label}</span>
                </div>
              ))}
            </div>


          </div>

          <div className="relative w-full flex justify-center lg:justify-end pb-8">
            <TestimonialCarousel testimonials={formattedTestimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CONTACT --------------------------- */
function Contact() {
  return <ContactSection />;
}

/* --------------------------- FOOTER --------------------------- */
export function Footer() {
  return <SiteFooter />;
}

/* --------------------------- HELPER --------------------------- */
function SectionHeader({
  eyebrow, title, desc,
}: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-accent" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>
      {desc && <p className="mt-5 text-base sm:text-lg text-muted-foreground subheading">{desc}</p>}
    </div>
  );
}

/* --------------------------- PAGE --------------------------- */
export default function Modulifft() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <How />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
