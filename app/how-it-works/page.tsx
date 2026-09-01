'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContinuousDefenseLoop } from '@/components/ContinuousDefenseLoop';
import { InteractiveThreatSimulator } from '@/components/InteractiveThreatSimulator';
import { Network, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="HOW IT WORKS"
          badgeIcon={<Network className="w-3.5 h-3.5" />}
          title="The Closed-Loop Defense Engine"
          description="Understand how AEGIS connects to your target environment, predicts breach routes, correlates alerts, and orchestrates adaptive containment."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'How It Works' },
          ]}
        />

        <ContinuousDefenseLoop />
        <InteractiveThreatSimulator />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Connect Your First Target in Minutes</h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed font-sans">
              Get started with our 100% read-only Vercel integration and inspect your live Digital Twin.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/integrations/vercel"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
              >
                <span>Connect Vercel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
