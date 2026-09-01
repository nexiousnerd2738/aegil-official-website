'use client';

import React from 'react';
import { 
  Network, 
  GitBranch, 
  Activity, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Bug, 
  FileCode2 
} from 'lucide-react';

interface FeatureItem {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  color: string;
  metrics: string[];
}

const FEATURES: FeatureItem[] = [
  {
    title: 'Digital Twin Topology Engine',
    category: 'ENVIRONMENT DISCOVERY',
    description: 'Reconciles multi-cloud entities (Vercel projects, AWS IAM, Active Directory, server instances) into an authoritative, idempotent relational graph.',
    icon: Network,
    color: 'from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30',
    metrics: ['Zero duplicate entities', 'Real OAuth 2.0 connectors', 'AES-256 token encryption'],
  },
  {
    title: 'Attack Path Intelligence',
    category: 'PREDICTIVE GRAPH TRAVERSAL',
    description: 'Bounded cycle-safe DFS traversals discover potential multi-hop breach routes from exposed assets to critical targets before any breach occurs.',
    icon: GitBranch,
    color: 'from-sky-500/20 to-cyan-600/20 text-sky-400 border-sky-500/30',
    metrics: ['<100ms path computation', 'Cycle-safe traversal', 'Explainable risk scoring'],
  },
  {
    title: 'Process Tree & Telemetry Ingestion',
    category: 'REAL-TIME OBSERVABILITY',
    description: 'Normalizes high-volume event envelopes across endpoints and networks. Reconstructs parent-child execution lineages and statistical baselines.',
    icon: Activity,
    color: 'from-blue-500/20 to-indigo-600/20 text-blue-400 border-blue-500/30',
    metrics: ['6 MITRE ATT&CK rules', 'Sliding window baselines', 'Attack path context tagging'],
  },
  {
    title: 'Multi-Dimensional Incident Correlation',
    category: 'ALERT FATIGUE ELIMINATION',
    description: 'Clusters discrete alerts across temporal proximity, identity overlap, and graph adjacency into single unified incidents with sequential MITRE stories.',
    icon: Layers,
    color: 'from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/30',
    metrics: ['80% alert reduction', 'Chronological narratives', 'Topological React Flow graphs'],
  },
  {
    title: 'Grounded AI Security Analyst',
    category: 'VERIFIABLE COPILOT',
    description: 'Investigates incidents through deterministic tool execution. Every single assertion is cross-referenced with live database records to prevent hallucinations.',
    icon: Sparkles,
    color: 'from-purple-500/20 to-pink-600/20 text-purple-400 border-purple-500/30',
    metrics: ['100% evidence verification', 'Automatic tool planning', 'Clickable evidence citations'],
  },
  {
    title: 'Adaptive Response & Closed-Loop Defense',
    category: 'SELF-HEALING CONTAINMENT',
    description: 'Performs dry-run response simulations, evaluates safety policies, executes endpoint/identity isolation, and recalculates enterprise risk immediately.',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30',
    metrics: ['Non-destructive simulation', 'Host quarantine adapters', '1-click rollback restoration'],
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 relative bg-[#05070e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for High-Stakes Blue Team Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Every subsystem is built with strict mathematical determinism, tenant scoping, and end-to-end integration.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center border shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition">
                    {feat.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2 font-mono text-xs">
                  {feat.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
