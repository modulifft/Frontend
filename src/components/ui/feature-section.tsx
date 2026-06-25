"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, Globe, Play, Plus, Signature, Sparkles, Activity, Layers, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";

const AVATAR_1 = '/Active Connection.svg'
const AVATAR_2 = '/Active Connection (1).svg'
const AVATAR_3 = '/Active Connection (2).svg'
const AVATAR_4 = '/Active Connection (3).svg'

export default function FeatureSection() {

    return (
        <section id="features" className="relative w-full overflow-hidden">
            <div className="py-24">
                <div className="mx-auto max-w-full overflow-hidden">
                    {/* TOP - Centered Header */}
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            Platform Features
                        </div>
                        <h2 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                            Built for the <span className="text-gradient">control room</span> of modern factories
                        </h2>
                        <p className="max-w-2xl text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                            A unified stack covering simulation, twin, automation logic and AI optimization — under one operating layer. We help you streamline operations with AI-driven automation.
                        </p>
                    </div>

                    {/* HERO FEATURE - 2 Column showcase */}
                    <div className="mt-16 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-muted-foreground w-fit">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                Live Operations Dashboard
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                                Full-stack visibility <span className="text-gradient">across every robot</span> on your floor
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Modulifft aggregates every sensor, PLC tag, and ROS topic into one unified real-time dashboard — giving your team a single source of truth for the entire fleet.
                            </p>

                            <div className="grid grid-cols-2 gap-4 flex-1">
                                {[
                                    { icon: "/Live Operations Dashboard.svg", title: "Real-time sync", desc: "Sub-50ms latency from physical to digital twin", isImage: true },
                                    { icon: "/Live Operations Dashboard (1).svg", title: "Smart alerts", desc: "Anomaly detection before downtime occurs", isImage: true },
                                    { icon: "/Live Operations Dashboard (2).svg", title: "Fleet analytics", desc: "Utilization trends and energy reports", isImage: true },
                                    { icon: "/Live Operations Dashboard (3).svg", title: "Auto-remediation", desc: "Self-healing workflows on failure events", isImage: true },
                                ].map(f => (
                                    <div key={f.title} className="glass border border-white/10 rounded-2xl p-4">
                                        {f.isImage ? (
                                            <img src={f.icon} alt={f.title} className="w-10 h-10 mb-2 object-contain" style={{ filter: "brightness(1.2) contrast(1.1) saturate(0.8)" }} />
                                        ) : (
                                            <div className="text-xl mb-2">{f.icon}</div>
                                        )}
                                        <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                                        <div className="text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative h-full"
                        >
                            <Card className="w-full h-full glass-strong border border-white/10 glow-border rounded-3xl overflow-hidden bg-transparent p-6 flex flex-col justify-between">
                                {/* Top bar */}
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                    </div>
                                    <div className="h-5 flex-1 rounded-full bg-white/5 border border-white/10 flex items-center px-3">
                                        <span className="text-[10px] text-muted-foreground">modulifft.ai/dashboard</span>
                                    </div>
                                </div>

                                {/* Dashboard preview */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {[
                                        { label: "Fleet Uptime", val: "99.8%", color: "text-green-400" },
                                        { label: "Active Robots", val: "124", color: "text-accent" },
                                        { label: "Alerts", val: "2", color: "text-yellow-400" },
                                    ].map(s => (
                                        <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                                            <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
                                            <div className="text-[10px] text-muted-foreground mt-0.5">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Live feed rows */}
                                <div className="space-y-2">
                                    {[
                                        { label: "Arm #7 trajectory optimized", time: "just now", dot: "bg-accent" },
                                        { label: "Digital twin synced — Floor B", time: "2m ago", dot: "bg-green-400" },
                                        { label: "Firmware update deployed", time: "5m ago", dot: "bg-primary" },
                                        { label: "Anomaly detected — Conveyor 4", time: "8m ago", dot: "bg-yellow-400" },
                                    ].map((r, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-2.5">
                                            <span className={`w-2 h-2 rounded-full shrink-0 ${r.dot}`} />
                                            <span className="text-sm text-white/80 flex-1">{r.label}</span>
                                            <span className="text-[10px] text-muted-foreground">{r.time}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Gradient glow overlay */}
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
                            </Card>
                        </motion.div>
                    </div>

                    {/* BOTTOM - Row Wise Features Grid */}
                    <div className="mt-16 mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                        {/* Feature 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <Card className="w-full aspect-[4/3] flex items-center justify-center p-4 glass-strong border border-white/10 glow-border rounded-2xl overflow-hidden bg-transparent">
                                <div className="w-full">
                                    <DigitalTwinIllustration />
                                </div>
                            </Card>
                            <div className="w-full">
                                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-white/10">
                                    <img src="/Platform Features icon.svg" alt="Icon" className="h-5 w-5 object-contain" />
                                </div>
                                <h3 className="text-foreground text-xl font-bold tracking-tight">Digital Twin Modeling</h3>
                                <p className="text-muted-foreground mt-2 text-[15px] leading-relaxed">
                                    Bidirectional sync between virtual and physical environments. Monitor your factory floor in real-time with highly accurate 3D spatial representations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <Card className="w-full aspect-[4/3] flex items-center justify-center p-4 glass-strong border border-white/10 glow-border rounded-2xl overflow-hidden bg-transparent">
                                <div className="w-full">
                                    <OptimizationPipelineIllustration />
                                </div>
                            </Card>
                            <div className="w-full">
                                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-white/10">
                                    <img src="/Platform Features icon (1).svg" alt="Icon" className="h-5 w-5 object-contain" />
                                </div>
                                <h3 className="text-foreground text-xl font-bold tracking-tight">AI Optimization Layer</h3>
                                <p className="text-muted-foreground mt-2 text-[15px] leading-relaxed">
                                    Our RL agents analyze your robotic fleets to discover optimization opportunities, reducing inference time and minimizing energy consumption effortlessly.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <Card className="w-full aspect-[4/3] flex items-center justify-center p-4 glass-strong border border-white/10 glow-border rounded-2xl overflow-hidden bg-transparent">
                                <div className="w-full mask-b-from-75% -mx-2 -mt-2 px-2 pt-4">
                                    <AutomationAssistantIllustration />
                                </div>
                            </Card>
                            <div className="w-full">
                                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-white/10">
                                    <img src="/Platform Features icon (2).svg" alt="Icon" className="h-5 w-5 object-contain" />
                                </div>
                                <h3 className="text-foreground text-xl font-bold tracking-tight">Modular Automation Builder</h3>
                                <p className="text-muted-foreground mt-2 text-[15px] leading-relaxed">
                                    A contextual AI assistant that understands your hardware configurations and helps compose complex workflows without writing any code.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

const DigitalTwinIllustration = () => {
    return (
        <Card aria-hidden className="aspect-video p-4 glass border-white/5 shadow-none bg-transparent">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-accent bg-accent px-1 py-px text-[10px] font-medium text-white shadow-md shadow-accent/35">LIVE</div>
                <div className="h-10 w-8 rounded-md border border-white/10 bg-white/5"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold text-white flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                Factory Floor Sync
            </div>
            <div className="mb-4 flex gap-2 text-sm mt-1">
                <span className="text-accent flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    Active Connection
                </span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5 mt-2">
                    {[
                        { src: AVATAR_1, alt: 'Engineer 1' },
                        { src: AVATAR_2, alt: 'Engineer 2' },
                        { src: AVATAR_3, alt: 'Manager 1' },
                        { src: AVATAR_4, alt: 'Tech Lead' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-black/20 size-8 rounded-full border border-white/10 p-0.5 shadow-lg relative z-10 hover:z-20 transition-transform hover:scale-110">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-muted-foreground text-xs font-medium mt-3 bg-white/5 p-2 rounded-lg border border-white/5 inline-block">
                Robotics Team Active
            </div>
        </Card>
    )
}

const OptimizationPipelineIllustration = () => {
    return (
        <div aria-hidden className="relative">
            <Card className="aspect-video w-[85%] p-4 transition-transform duration-300 ease-in-out hover:-rotate-2 glass border-white/5 shadow-none relative z-10 bg-black/40 backdrop-blur-md">
                <div className="mb-4 grid grid-cols-[auto_1fr] gap-3 items-center">
                    <div className="bg-black/20 size-8 rounded-full border border-white/10 p-0.5 shadow-lg">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={AVATAR_1}
                            alt="Lead Engineer"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white line-clamp-1 text-sm font-medium">Auto-Optimizer</span>
                        <span className="text-accent text-[10px] uppercase tracking-wider font-bold">Just now</span>
                    </div>
                </div>

                <div className="ml-1 space-y-2.5 mt-4">
                    <div className="bg-gradient-to-r from-primary/50 to-transparent h-2.5 rounded-full w-full"></div>
                    <div className="bg-gradient-to-r from-accent/50 to-transparent h-2.5 w-4/5 rounded-full"></div>
                    <div className="bg-gradient-to-r from-white/20 to-transparent h-2.5 w-1/2 rounded-full"></div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Signature className="size-4 text-primary" />
                    Path updated
                </div>
            </Card>
            
            <Card className="absolute right-0 top-6 flex w-2/5 translate-y-4 p-2 transition-transform duration-300 ease-in-out hover:rotate-3 glass border-white/10 shadow-2xl z-20 overflow-hidden bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
                <div className="bg-white/10 m-auto flex size-12 rounded-full border border-white/20 shadow-inner relative group cursor-pointer">
                    <Play className="fill-white/80 stroke-white/80 m-auto size-5 transition-transform group-hover:scale-110" />
                </div>
            </Card>
        </div>
    )
}

const AutomationAssistantIllustration = () => {
    return (
        <Card aria-hidden className="aspect-video p-5 transition-transform duration-200 hover:-translate-y-1 glass border-white/5 shadow-none flex flex-col justify-between bg-transparent">
            <div className="w-fit">
                <div className="inline-flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 mb-3">
                    <img src="/How can I optimize .svg" alt="Icon" className="size-4 object-contain" />
                </div>
                <p className="mt-1 text-sm text-white/90 leading-relaxed font-medium">
                    How can I optimize arm trajectory to avoid collision with conveyor belt #4?
                </p>
            </div>
            
            <div className="bg-black/40 border border-white/10 mt-4 space-y-3 rounded-xl p-3 backdrop-blur-md">
                <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider pl-1 text-accent">Modulifft AI</div>

                <div className="flex justify-between items-center gap-2">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8 rounded-lg border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                            <Plus className="h-4 w-4 text-white" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-8 rounded-lg border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                            <Globe className="h-4 w-4 text-white" />
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-md opacity-50 rounded-lg"></div>
                        <Button
                            size="icon"
                            className="size-8 rounded-lg bg-gradient-to-r from-primary to-accent border-0 text-white shadow-none relative hover:scale-105 transition-transform">
                            <ArrowUp strokeWidth={3} className="h-4 w-4 text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
