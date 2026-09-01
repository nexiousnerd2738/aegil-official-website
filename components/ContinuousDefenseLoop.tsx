'use client';

import React, { useState } from 'react';
import { 
  Network, 
  GitBranch, 
  Activity, 
  ShieldAlert, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  RotateCw,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface LoopStage {
  id: string;
  number: number;
  verb: string;
  name: string;
  icon: React.ElementType;
  color: string;
  tag: string;
  description: string;
  input: string;
  output: string;
  deterministicRule: string;
}

const STAGES: LoopStage[] = [
  {
    id: 'twin',
    number: 1,
    verb: 'UNDERSTAND',
    name: 'Digital Twin Topology',
    icon: Network,
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
    tag: 'Phase 1 & 2',
    description: 'Continuously reconciles multi-cloud assets, identities, deployments, and access permissions into an authoritative, idempotent relational graph.',
    input: 'Vercel OAuth, AWS IAM, Active Directory, Endpoint Agents',
    output: 'Topological graph nodes & relationships with exposure metrics',
    deterministicRule: 'Idempotent upsert algorithm prevents duplicate entities across sync cycles.',
  },
  {
    id: 'paths',
    number: 2,
    verb: 'PREDICT',
    name: 'Attack Path Intelligence',
    icon: GitBranch,
    color: 'text-sky-400 border-sky-500/40 bg-sky-500/10',
    tag: 'Phase 3',
    description: 'Executes bounded, cycle-safe graph traversals to uncover potential compromise routes from exposed entry points to crown-jewel databases before any breach occurs.',
    input: 'Digital Twin Topology & Asset Criticality Scores',
    output: 'Ranked multi-hop attack paths with explainable likelihood and impact',
    deterministicRule: 'Depth-first search traversal with cycle prevention bounds execution strictly <100ms.',
  },
  {
    id: 'telemetry',
    number: 3,
    verb: 'OBSERVE',
    name: 'Real-Time Ingestion & Baselines',
    icon: Activity,
    color: 'text-blue-400 border-blue-500/40 bg-blue-500/10',
    tag: 'Phase 4',
    description: 'Ingests provider-neutral event envelopes across endpoints, networks, and identities. Reconstructs parent-child process trees and learns statistical activity baselines.',
    input: 'Process creates, network flows, authentication logs, DNS queries',
    output: 'Normalized events and dynamic behavioral anomaly scores',
    deterministicRule: 'Sliding temporal baseline calculates standard deviations to eliminate static threshold alerts.',
  },
  {
    id: 'detection',
    number: 4,
    verb: 'DETECT',
    name: 'Detection Engine & Path Intersect',
    icon: ShieldAlert,
    color: 'text-rose-400 border-rose-500/40 bg-rose-500/10',
    tag: 'Phase 4',
    description: 'Evaluates telemetry against 6 MITRE ATT&CK detection rules while cross-referencing topological attack paths to instantly escalate intersecting threats.',
    input: 'SecurityEvent stream & Active Attack Path Graph',
    output: 'Context-enriched alerts with verified ATT&CK tactic mappings',
    deterministicRule: 'Alerts intersecting pre-calculated attack paths receive an immediate severity escalation.',
  },
  {
    id: 'correlation',
    number: 5,
    verb: 'CORRELATE',
    name: 'Incident Synthesis & Attack Stories',
    icon: Layers,
    color: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    tag: 'Phase 5',
    description: 'Multi-dimensional correlation unifies discrete alerts into single coherent incidents, synthesizing chronological kill-chain stages and topological incident graphs.',
    input: 'Disparate security alerts across temporal windows',
    output: 'Unified Incident (INC-XXXX) with sequential Attack Story narrative',
    deterministicRule: 'Composite temporal, identity, and topology scoring prevents alert fatigue.',
  },
  {
    id: 'analyst',
    number: 6,
    verb: 'INVESTIGATE',
    name: 'AI Security Analyst',
    icon: Sparkles,
    color: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
    tag: 'Phase 8 & 9',
    description: 'Conducts grounded natural language investigations through deterministic tool planning, producing structured reports with mandatory database evidence citations.',
    input: 'Analyst prompts & incident context',
    output: 'Structured forensic findings, root cause analysis & simulation plans',
    deterministicRule: 'Answer validator detects and strips hallucinated IDs with 100% citation grounding.',
  },
  {
    id: 'simulate',
    number: 7,
    verb: 'RESPOND',
    name: 'Simulation & Policy Gatekeeper',
    icon: ShieldCheck,
    color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    tag: 'Phase 6',
    description: 'Performs non-destructive dry-run simulations to model risk drops and path severance before enforcing RBAC policy checks and executing containment.',
    input: 'Response action candidate (e.g. ISOLATE_ENDPOINT on WS-01)',
    output: 'Simulated risk drop metric and approved containment execution',
    deterministicRule: 'Mutating actions require policy authorization or explicit human-in-the-loop sign-off.',
  },
  {
    id: 'recalc',
    number: 8,
    verb: 'RECALCULATE',
    name: 'Closed-Loop Recalculation',
    icon: RotateCw,
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
    tag: 'Phase 6 & 10',
    description: 'Upon host quarantine, the Digital Twin mutates in real time, severing connected network relationships and triggering instantaneous risk and attack path recalculation.',
    input: 'Executed containment record & updated topology state',
    output: 'Severed attack paths, lowered enterprise risk score & defense audit ledger',
    deterministicRule: 'Proves mathematical defense effectiveness by closing the complete loop.',
  },
];

export const ContinuousDefenseLoop: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section id="architecture" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <RotateCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
            <span>Closed-Loop Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Continuous Blue Team Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            AEGIL is not a fragmented collection of point tools. Every phase feeds authoritative, real data into the next stage, creating an unbreakable defensive loop.
          </p>
        </div>

        {/* Interactive 8-Stage Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? `${stage.color} shadow-lg shadow-cyan-950/40 scale-105 z-10`
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 font-mono text-xs font-bold">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400">
                  {stage.verb}
                </span>
                <span className="text-xs font-semibold text-slate-200 truncate w-full mt-0.5">
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Card */}
        {currentStage && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 glow-box-blue animate-in fade-in zoom-in-95 duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Profile */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                    STEP {currentStage.number} OF 8: {currentStage.verb}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentStage.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentStage.name}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">INPUT:</span>
                    <span className="text-slate-300">{currentStage.input}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">OUTPUT:</span>
                    <span className="text-slate-300">{currentStage.output}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deterministic Guarantee & Next Step */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Deterministic Guarantee</span>
                  </div>
                  <p className="text-sm text-slate-300 font-mono leading-relaxed">
                    {currentStage.deterministicRule}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStageIndex((activeStageIndex + 1) % STAGES.length)}
                    className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <span>Advance to Next Stage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    {activeStageIndex + 1} / {STAGES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
