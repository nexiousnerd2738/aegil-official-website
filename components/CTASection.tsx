'use client';

import React from 'react';
import { ArrowRight, Github, Zap, Shield, Sparkles, Terminal } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#05070e] to-slate-950 border-t border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase mb-6 shadow-inner shadow-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Production-Ready Autonomous Cyber Defense Platform</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Deploy Autonomous Cyber Defense?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Connect your target infrastructure, uncover zero-day attack paths, and let AEGIL automate closed-loop containment for your enterprise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#simulator"
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-base transition shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02]"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>Try Live Attack Simulation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/nexiousnerd2738/Aegis"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition"
          >
            <Github className="w-5 h-5" />
            <span>Explore Source Code on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
