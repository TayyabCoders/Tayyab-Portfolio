// app/components/DesignProcessSection.tsx
import React from "react";

const steps = [
  {
    k: "01. ROLE",
    d: "Associate Backend Developer at 360XpertSolutions — building production backend systems and AI-driven applications.",
  },
  {
    k: "02. BUILD",
    d: "Developing enterprise-grade, scalable full-stack applications with clean architecture, strong APIs, and performance-focused engineering across the stack.",
  },
  {
    k: "03. AI AGENTS",
    d: "Creating AI agents and automations that integrate with product workflows — from retrieval + tools to orchestration — to reduce manual work and accelerate execution.",
  },
  {
    k: "04. IMPACT",
    d: "Solving founder pain points end-to-end: clarifying requirements, designing solutions, delivering fast iterations, and hardening systems for scale, security, and maintainability.",
  },
];

export default function Now() {
  return (
    <section className="relative overflow-hidden ">
      {/* soft top glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[32.5rem] w-[75rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),rgba(255,255,255,0.0))]" />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-24  lg:pb-24 lg:pt-20">
       

        {/* Title */}
        <h2 className="text-center uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] font-bold mb-12 file">What I’m Doing Right Now</h2>

        {/* Subtext */}
        <p className="mt-4 max-w-2xl text-pretty  leading-6 text-black ">
          I focus on practical, high-impact engineering — building scalable SaaS systems, developing AI-powered applications, and delivering production-ready full-stack solutions for real-world use cases.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.k}
              className="rounded-xl border border-black/10 bg-black/5 px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.04)_inset]"
            >
              <div className="text-[1rem] font-semibold tracking-[0.10em] text-black">
                {s.k}
              </div>
              <p className="mt-4 text-[1rem] leading-6 text-black">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
