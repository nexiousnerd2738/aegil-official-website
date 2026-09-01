'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Shield, Sparkles, Github, Menu, X, ArrowRight, Zap, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Security', href: '/security' },
    { name: 'Docs', href: '/docs' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070e]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/30 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition shadow-md shadow-cyan-500/20">
            <Image
              src="/images/aegil-logo.png"
              alt="AEGIS Shield Logo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-wider text-white font-mono group-hover:text-cyan-400 transition">
                AEGIS
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-semibold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded">
                v1.0
              </span>
            </div>
            <span className="text-[9px] tracking-widest text-slate-400 font-mono uppercase hidden sm:block">
              Understand • Predict • Defend
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-150 ${
                  isActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-300 text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition border border-transparent hover:border-slate-700"
            title="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <Link
            href="/integrations/vercel"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Connect Vercel</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/integrations/vercel"
            className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
          >
            Connect
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05070e]/98 border-b border-cyan-500/20 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-cyan-400 font-medium text-base py-1.5 border-b border-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/integrations/vercel"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Connect Vercel Target</span>
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
