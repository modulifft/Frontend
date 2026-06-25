import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiCpu, FiLayers, FiActivity, FiPlay, FiShield, FiZap, FiBarChart2 } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { Footer, Navbar } from "@/components/Modulifft";

export const Route = createFileRoute("/Product")({
  head: () => ({
    meta: [
      { title: "ModSim X — AI Robotics Simulation and Automation" },
      { name: "description", content: "ModSim X brings together digital twins, robotics simulation, and modular automation in one intelligent operating layer for modern factories." },
      { property: "og:title", content: "ModSim X — Robotics Simulation Platform" },
      { property: "og:description", content: "Explore how ModSim X helps teams design, simulate, and optimize automated operations with real-time insight." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const pillars = [
    {
      title: "Live digital twins",
      description: "Turn physical production lines into responsive 3D models that mirror operations in real time.",
      icon: FiLayers,
    },
    {
      title: "Adaptive automation",
      description: "Translate goals into guided workflows that help teams automate with clarity and confidence.",
      icon: FiCpu,
    },
    {
      title: "Predictive resilience",
      description: "Spot issues before they become costly downtime and keep critical operations moving smoothly.",
      icon: FiShield,
    },
  ];

  const highlights = [
    "Real-time robotics simulation for planning, testing, and optimization.",
    "Modular automation building blocks that connect people, machines, and processes.",
    "Operational intelligence that surfaces health, throughput, and efficiency trends instantly.",
  ];

  const sdkHighlights = [
    {
      name: "NVIDIA Omniverse",
      description: "Powers high-fidelity digital twins and synchronized 3D environments for live operations.",
    },
    {
      name: "NVIDIA Isaac Sim",
      description: "Supports robotics simulation, sensor modeling, and AI training for safer planning.",
    },
    {
      name: "NVIDIA Morpheus",
      description: "Processes telemetry and operational events in real time to surface issues early.",
    },
    {
      name: "NVIDIA NeMo & RAPIDS",
      description: "Helps turn automation logic and historical data into adaptive, insight-driven workflows.",
    },
  ];

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(239,136,173,0.18),_transparent_30%),linear-gradient(135deg,_#05010a_0%,_#0d0714_45%,_#03070d_100%)] pt-24 text-foreground sm:pt-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-8 shadow-[0_30px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                <HiSparkles className="h-3.5 w-3.5" />
                Introducing ModSim X
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                A smarter way to design, test, and run robotics operations with confidence.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                ModSim X brings together real-time digital twins, modular automation logic, and AI-assisted optimization so teams can move from concept to execution without losing visibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://app.modulifft.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-[0_16px_45px_-12px_rgba(239,136,173,0.65)]">
                  Launch ModSim X
                  <FiArrowRight className="transition group-hover:translate-x-0.5" />
                </a>
                <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10">
                  <FiPlay /> See the platform story
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-inner">
              <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Live operations view</p>
                    <p className="mt-1 text-2xl font-semibold">Factory orchestration</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 p-3 text-emerald-300">
                    <FiActivity className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <FiZap /> Why teams choose ModSim X
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Purpose-built for modern industrial operations.</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              From planning a new line to adapting a live fleet, ModSim X gives operations leaders a shared environment for simulation, automation, and decision-making.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.article key={pillar.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <FiBarChart2 /> Built for outcomes
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">See the bigger picture before the line ever moves.</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The platform helps teams understand utilization, energy use, and risk in one place so they can optimize production with confidence instead of reacting late.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-white/10 bg-black/25 p-5">
                <p className="text-sm font-semibold text-foreground">Operational clarity</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">Monitor health, flow, and exceptions with a view that stays grounded in the real world.</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-black/25 p-5">
                <p className="text-sm font-semibold text-foreground">Faster iteration</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">Test process ideas in simulation before they change the plant floor.</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-black/25 p-5 sm:col-span-2">
                <p className="text-sm font-semibold text-foreground">Technology layer, quietly powerful</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  The experience is designed around industrial outcomes, while the underlying stack supports CAD ingestion, robotics telemetry, reinforcement learning, and live stream analytics in a way that feels seamless to the operator.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <FiCpu /> NVIDIA-enabled foundation
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">Built on a powerful simulation and AI stack.</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The experience stays focused on operations and outcomes, while the underlying platform draws on NVIDIA technologies for digital twins, simulation, real-time analytics, and automation assistance.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {sdkHighlights.map((sdk) => (
                <div key={sdk.name} className="rounded-[1.25rem] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-foreground">{sdk.name}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{sdk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-primary/15 bg-primary/10 p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Ready to see it in action?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Bring the next generation of robotics operations into your workflow.</h2>
            </div>
            <a href="https://app.modulifft.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90">
              Visit the live product
              <FiArrowRight />
            </a>
          </div>
        </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
