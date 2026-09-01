'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Shield, Target, Cpu, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="ABOUT AEGIS"
          badgeIcon={<Shield className="w-3.5 h-3.5" />}
          title="About AEGIS Cyber Defense"
          description="The origin, philosophy, and architectural vision behind the Adaptive Enterprise Guard, Intelligence & Security platform."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'About' },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-sm leading-relaxed text-slate-300">
          {/* Section 1: What is AEGIS */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">What is AEGIS?</h2>
            <p>
              AEGIS (*Adaptive Enterprise Guard, Intelligence & Security*) is an autonomous cyber defense platform engineered to unify fragmented cloud environments, identity directories, and endpoint telemetry into a continuous, self-healing defensive lifecycle.
            </p>
            <p>
              Rather than functioning merely as a passive alert dashboard or siloed scanner, AEGIS continuously reconciles live target infrastructure into a topological <strong>Digital Twin</strong>, computes graph-traversal breach routes, correlates alerts into structured <strong>Attack Stories</strong>, and simulates non-destructive containment actions.
            </p>
          </div>

          {/* Section 2: Why AEGIS Exists */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Why AEGIS Exists</h2>
            <p>
              Modern security teams face two critical structural problems:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li><strong>Context Fragmentation:</strong> Alerts from cloud providers, identity providers, and endpoints arrive in disconnected silos without a unified topological map of the assets they impact.</li>
              <li><strong>Open-Loop Responses:</strong> Detection tools report anomalies but cannot model what will happen to enterprise risk if an endpoint is quarantined or an access token is revoked.</li>
            </ol>
            <p>
              AEGIS solves this by closing the loop: <em>Understand ➔ Predict ➔ Observe ➔ Detect ➔ Correlate ➔ Simulate ➔ Respond ➔ Recalculate</em>.
            </p>
          </div>

          {/* Section 3: Core Philosophy */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Core Engineering Philosophy</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
              <li><strong>Deterministic Authority:</strong> Machine learning and AI agents provide context and speed, but mathematical graph engines and deterministic rules remain the authoritative source of truth.</li>
              <li><strong>Zero Hallucination Tolerance:</strong> Every AI security claim must have a verified database citation linking directly to a concrete graph entity or telemetry event.</li>
              <li><strong>Strict Least Privilege:</strong> Cloud connectors request only read-only metadata required to compute risk, never customer source code or environment secrets.</li>
            </ul>
          </div>

          {/* Section 4: Technology Direction & Roadmap */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Technology Direction & Roadmap</h2>
            <p>
              AEGIS is developed in Python (FastAPI, SQLModel, NetworkX) and TypeScript (Next.js 14, React Flow, Tailwind CSS). Our immediate roadmap focuses on:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              <li>Expanding cloud connectors from Vercel to Amazon Web Services (AWS IAM & CloudTrail) and Google Cloud Platform (GCP).</li>
              <li>Enhancing graph traversal heuristics for multi-cloud lateral movement detection.</li>
              <li>Deepening eBPF kernel telemetry integration for Linux server workloads.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
