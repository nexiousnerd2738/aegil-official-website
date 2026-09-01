'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Terminal, ArrowRight, CheckCircle2, Lock, Cpu, Network, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Cyber Grid & Radial Glows */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider font-semibold uppercase shadow-inner shadow-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Next-Gen Autonomous Cyber Defense Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              <span className="block text-slate-100">UNDERSTAND.</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent glow-text-cyan">
                PREDICT.
              </span>
              <span className="block text-slate-100">DEFEND.</span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AEGIL unifies multi-cloud <span className="text-cyan-300 font-medium">Digital Twin Topology</span>,
              multi-hop <span className="text-cyan-300 font-medium">Attack Path Intelligence</span>, real-time
              telemetry correlation, and <span className="text-cyan-300 font-medium">Closed-Loop Adaptive Containment</span> into
              a single continuous, self-healing blue team engine.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#simulator"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-base transition shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02]"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>Try Live Attack Simulation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#architecture"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 text-slate-200 font-medium text-base transition backdrop-blur-md"
              >
                <Network className="w-4 h-4 text-cyan-400" />
                <span>Explore Continuous Loop</span>
              </a>
            </div>

            {/* Live Highlights / Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Deterministic Truth</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>0-Day Graph Paths</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Instant Path Recalculation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic with Cyber Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/25 to-transparent rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

            {/* Glowing Logo Card */}
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden glass-panel glow-box-blue border border-cyan-500/30 p-2 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950/80">
                <Image
                  src="/images/aegil-hero.png"
                  alt="AEGIL Shield Eagle Logo"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Animated Cyber Scan Line */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scan opacity-70 pointer-events-none" />

                {/* Tactical Status Overlay */}
                <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-2.5 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-bold">DIGITAL TWIN: SYNCED</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">
                    ENTERPRISE RISK: 31.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
