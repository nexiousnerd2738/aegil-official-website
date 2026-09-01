'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { HelpCircle, BookOpen, Mail, AlertTriangle, ArrowRight, MessageSquare, Zap, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function SupportHubPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="SUPPORT CENTER"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
          title="AEGIS Support & Assistance"
          description="Access technical documentation, diagnostic guides, and direct engineering support for your AEGIS deployment."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Support' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Documentation */}
            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Documentation</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  Explore complete guides covering setup, permissions, data handling, and API integration.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/docs"
                  className="flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Browse Documentation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Troubleshooting */}
            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Troubleshooting</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  Quick diagnostic solutions for OAuth callback errors, token sync delays, and discovery issues.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/docs/troubleshooting"
                  className="flex items-center justify-between text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>Diagnostic Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Contact Support */}
            <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Contact Support</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  Get in touch with our engineering team for integration inquiries or deployment assistance.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/support/contact"
                  className="flex items-center justify-between text-xs font-semibold text-purple-400 hover:text-purple-300 transition"
                >
                  <span>Contact Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Vercel Integration Specific Support Box */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Vercel Integration Inquiries</span>
              </div>
              <p className="text-slate-300 text-xs max-w-xl leading-relaxed">
                Need help authorizing your Vercel organization or configuring connector sync schedules? Check our dedicated Vercel setup walkthrough.
              </p>
            </div>
            <Link
              href="/docs/vercel"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition"
            >
              <span>Vercel Setup Docs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
