'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050a] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/30">
              <Image
                src="/images/aegil-logo.png"
                alt="AEGIL Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-white font-mono font-bold text-sm tracking-wider">
                AEGIL
              </span>
              <span className="text-slate-400 block text-[10px] font-mono">
                UNDERSTAND • PREDICT • DEFEND
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <Link href="#architecture" className="hover:text-cyan-400 transition">
              Continuous Loop
            </Link>
            <Link href="#capabilities" className="hover:text-cyan-400 transition">
              Capabilities
            </Link>
            <Link href="#simulator" className="hover:text-cyan-400 transition">
              Interactive Simulator
            </Link>
            <Link href="#metrics" className="hover:text-cyan-400 transition">
              Benchmarks
            </Link>
            <Link href="#security" className="hover:text-cyan-400 transition">
              Security
            </Link>
            <a
              href="https://github.com/nexiousnerd2738/Aegis"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} AEGIL Cyber Defense Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Built for Competition Blue Team Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
