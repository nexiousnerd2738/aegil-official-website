'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="PLATFORM CAPABILITIES"
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          title="Core Defensive Features"
          description="Explore the mathematical graph algorithms, detection engines, and adaptive containment capabilities powering AEGIS."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Features' },
          ]}
        />

        <FeatureGrid />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">See the Continuous Loop in Action</h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed font-sans">
              Learn how these capabilities connect end-to-end to deliver autonomous, self-healing cyber defense.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
              >
                <span>How It Works</span>
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
