'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Network, GitBranch, Activity, ShieldAlert, Layers, Sparkles, ShieldCheck, RotateCw, ArrowRight } from 'lucide-react';

export default function ProductOverviewPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="PRODUCT ARCHITECTURE"
          badgeIcon={<Network className="w-3.5 h-3.5" />}
          title="The AEGIS Defense Architecture"
          description="A unified, closed-loop cyber defense engine designed to map authorized environments, predict multi-hop attack paths, and orchestrate policy-governed containment."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Product' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Continuous Loop Pipeline Flow */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">The Ten-Phase Pipeline</span>
              <h2 className="text-3xl font-extrabold text-white">How AEGIS Protects Your Environment</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 not-prose">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">1. CONNECT</span>
                <p className="text-slate-300">Authorize Vercel, Active Directory, or API targets with AES-256 encrypted tokens.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">2. DISCOVER</span>
                <p className="text-slate-300">Enumerate projects, deployments, domains, and users through normalized schemas.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">3. DIGITAL TWIN</span>
                <p className="text-slate-300">Construct idempotent relational graph mapping assets and network relationships.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">4. ATTACK PATHS</span>
                <p className="text-slate-300">Cycle-safe DFS traversals discover breach routes from exposed hosts to crown jewels.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">5. TELEMETRY</span>
                <p className="text-slate-300">Ingest process trees, network flows, and authentication events with sliding baselines.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">6. DETECTION</span>
                <p className="text-slate-300">Evaluate 6 MITRE ATT&CK rules with automatic attack path intersection escalation.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">7. CORRELATION</span>
                <p className="text-slate-300">Cluster discrete alerts across time, identity, and topology into unified Incidents.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">8. ATTACK STORY</span>
                <p className="text-slate-300">Synthesize chronological MITRE stages and topological React Flow incident graphs.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">9. RESPONSE</span>
                <p className="text-slate-300">Dry-run response simulations model risk drops before executing approved host isolation.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <span className="text-cyan-400 font-mono font-bold block">10. RECALCULATE</span>
                <p className="text-slate-300">Digital Twin mutates, severing active paths and lowering enterprise risk in real time.</p>
              </div>
            </div>
          </div>

          {/* Core Modules Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-cyan-400" />
                <span>Attack Path Intelligence</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Evaluates graph-traversal vulnerability chains before attackers exploit them, giving security analysts actionable insight into structural weaknesses.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>AI Security Analyst</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Conducts grounded investigations via deterministic tool execution. Every assertion is cross-referenced with database records to prevent hallucinations.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Closed-Loop Orchestrator</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Enforces RBAC containment policies, isolates compromised endpoints, disables network relationships, and recalculates risk posture immediately.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Explore the Vercel Cloud Integration</h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed font-sans">
              Connect your Vercel organization in under two minutes with 100% read-only least-privilege OAuth scopes.
            </p>
            <div className="pt-2">
              <Link
                href="/integrations/vercel"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
              >
                <span>Connect Vercel Target</span>
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
