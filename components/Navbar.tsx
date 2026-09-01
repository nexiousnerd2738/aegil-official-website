'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, GitBranch, Bell, Activity, Sparkles, Github, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070e]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition shadow-md shadow-cyan-500/20">
            <Image
              src="/images/aegil-logo.png"
              alt="AEGIL Shield Logo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-wider text-white font-mono group-hover:text-cyan-400 transition">
                AEGIL
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-semibold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded">
                v1.0
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
              Understand • Predict • Defend
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#architecture" className="hover:text-cyan-400 transition">
            Continuous Loop
          </Link>
          <Link href="#capabilities" className="hover:text-cyan-400 transition">
            Capabilities
          </Link>
          <Link href="#simulator" className="hover:text-cyan-400 transition flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Demo</span>
          </Link>
          <Link href="#metrics" className="hover:text-cyan-400 transition">
            Performance
          </Link>
          <Link href="#security" className="hover:text-cyan-400 transition">
            Security & Trust
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/nexiousnerd2738/Aegis"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition border border-transparent hover:border-slate-700"
            title="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#simulator"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
          >
            <span>Launch Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05070e]/95 border-b border-cyan-500/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium text-base py-2"
          >
            Continuous Loop Architecture
          </Link>
          <Link
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium text-base py-2"
          >
            Capabilities
          </Link>
          <Link
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-cyan-300 font-medium text-base py-2"
          >
            Interactive Threat Simulator
          </Link>
          <Link
            href="#metrics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium text-base py-2"
          >
            Performance & Benchmarks
          </Link>
          <Link
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-cyan-400 font-medium text-base py-2"
          >
            Security & Compliance
          </Link>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="https://github.com/nexiousnerd2738/Aegis"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold"
            >
              <span>Launch Live Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
