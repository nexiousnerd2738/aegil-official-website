'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Sparkles, Terminal, ArrowRight, CheckCircle2, Lock, Cpu, Network, Zap, BookOpen, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Cyber Grid & Glows */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity, Exact Description & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider font-semibold uppercase shadow-inner shadow-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Adaptive Enterprise Guard, Intelligence & Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              <span className="block text-slate-100">AEGIS</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent glow-text-cyan">
                UNDERSTAND. PREDICT. DEFEND.
              </span>
            </h1>

            {/* Primary Required Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An adaptive cybersecurity platform that maps authorized environments, identifies attack paths, detects threats, reconstructs incidents, and coordinates defensive response.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/docs/integrations/vercel"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02]"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Connect with AEGIS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm transition backdrop-blur-md"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Read Documentation</span>
                </Link>
              </div>

              {/* Secondary Quick Links */}
              <div className="flex items-center justify-center lg:justify-start gap-5 pt-1 text-xs font-mono text-slate-400">
                <Link href="/security" className="hover:text-cyan-400 transition flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>View Security</span>
                </Link>
                <span>•</span>
                <Link href="/support" className="hover:text-cyan-400 transition flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Support</span>
                </Link>
                <span>•</span>
                <Link href="/how-it-works" className="hover:text-cyan-400 transition flex items-center gap-1">
                  <Network className="w-3.5 h-3.5" />
                  <span>How It Works</span>
                </Link>
              </div>
            </div>

            {/* Factual Core Subsystem Badges (No fake marketing claims) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Read-Only Scopes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AES-256 Token Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cycle-Safe Graph Engine</span>
              </div>
            </div>
          </div>

          {/* Right Column: Metallic Shield Emblem Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/25 to-transparent rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden glass-panel glow-box-blue border border-cyan-500/30 p-2 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950/80">
                <Image
                  src="/images/aegil-hero.png"
                  alt="AEGIS Shield Eagle Logo"
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
                    <span className="text-slate-200 font-bold">DIGITAL TWIN: READY</span>
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
