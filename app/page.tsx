import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ContinuousDefenseLoop } from '@/components/ContinuousDefenseLoop';
import { InteractiveThreatSimulator } from '@/components/InteractiveThreatSimulator';
import { FeatureGrid } from '@/components/FeatureGrid';
import { PerformanceMetrics } from '@/components/PerformanceMetrics';
import { EnterpriseSecurity } from '@/components/EnterpriseSecurity';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#05070e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <ContinuousDefenseLoop />
      <InteractiveThreatSimulator />
      <FeatureGrid />
      <PerformanceMetrics />
      <EnterpriseSecurity />
      <CTASection />
      <Footer />
    </main>
  );
}
