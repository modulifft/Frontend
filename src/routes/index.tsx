import { createFileRoute } from "@tanstack/react-router";
import Modulifft from "@/components/Modulifft";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modulifft — Robotics Simulation & Digital Twin Intelligence" },
      { name: "description", content: "AI-powered robotics simulation, digital twin and modular automation platform for enterprise factories." },
      { property: "og:title", content: "Modulifft — Robotics Simulation Platform" },
      { property: "og:description", content: "Design, simulate, test and optimize robotic systems with AI-powered digital twin intelligence." },
    ],
  }),
  component: () => <Modulifft />,
});
