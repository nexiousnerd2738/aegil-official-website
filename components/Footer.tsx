'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Shield, Lock, ExternalLink, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050a] border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Slogan */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/30">
                <Image
                  src="/images/aegil-logo.png"
                  alt="AEGIS Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-mono font-bold text-base tracking-wider">
                AEGIS
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed font-sans pr-2">
              Adaptive Enterprise Guard, Intelligence & Security. Continuous blue team mapping, threat correlation, and closed-loop defense.
            </p>
            <div className="text-[11px] font-mono text-cyan-400 font-semibold">
              UNDERSTAND • PREDICT • DEFEND
            </div>
          </div>

          {/* Col 2: Product & Architecture */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/product" className="hover:text-cyan-400 transition">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-cyan-400 transition">
                  Core Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-cyan-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-cyan-400 transition">
                  Integrations Hub
                </Link>
              </li>
              <li>
                <Link href="/integrations/vercel" className="hover:text-cyan-400 transition flex items-center gap-1">
                  <span>AEGIS for Vercel</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-cyan-500/20 text-cyan-300 font-mono">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Documentation */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider">
              Documentation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-cyan-400 transition">
                  Docs Overview
                </Link>
              </li>
              <li>
                <Link href="/docs/getting-started" className="hover:text-cyan-400 transition">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/vercel" className="hover:text-cyan-400 transition">
                  Vercel Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/docs/permissions" className="hover:text-cyan-400 transition">
                  Permissions Matrix
                </Link>
              </li>
              <li>
                <Link href="/docs/data-handling" className="hover:text-cyan-400 transition">
                  Data Handling Pipeline
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="hover:text-cyan-400 transition">
                  REST API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/troubleshooting" className="hover:text-cyan-400 transition">
                  Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/docs/changelog" className="hover:text-cyan-400 transition">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Security */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider">
              Security & Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/security" className="hover:text-cyan-400 transition">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/security/report" className="hover:text-cyan-400 transition">
                  Vulnerability Disclosure
                </Link>
              </li>
              <li>
                <Link href="/docs/security" className="hover:text-cyan-400 transition">
                  Security Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-cyan-400 transition">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:text-cyan-400 transition">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition">
                  About AEGIS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Privacy */}
          <div className="space-y-3">
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider">
              Legal & Privacy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/eula" className="hover:text-cyan-400 transition">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-cyan-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="hover:text-cyan-400 transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/data-processing" className="hover:text-cyan-400 transition">
                  Data Processing
                </Link>
              </li>
              <li>
                <Link href="/legal/subprocessors" className="hover:text-cyan-400 transition">
                  Subprocessors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.legal.entityName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono">Last updated: {siteConfig.lastUpdated}</span>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-1 text-slate-400"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
