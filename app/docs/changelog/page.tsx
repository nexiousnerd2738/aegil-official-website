'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { History, CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ChangelogDocsPage() {
  return (
    <DocsLayout
      title="Product Changelog"
      description="Official release history and technical changelog for the AEGIS cyber defense platform."
      badge="RELEASE HISTORY"
    >
      <div className="space-y-8">
        <div>
          <h2>Release History</h2>
          <p>
            This log tracks all major architectural releases and security updates for AEGIS.
          </p>
        </div>

        {/* Release 1.0.0 */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 not-prose">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold">
                v1.0.0
              </span>
              <h3 className="text-lg font-bold text-white m-0">
                Official v1.0 Production Release & Closed-Loop Defense Engine
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Released: {siteConfig.lastUpdated}
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-300 font-sans">
            <p className="leading-relaxed">
              Complete unification of all 10 platform phases into a single, continuous, closed-loop defensive architecture with 71/71 automated tests passing:
            </p>

            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Digital Twin & Vercel Connector:</strong> OAuth 2.0 authorization, project and deployment discovery, and idempotent graph upsert.</li>
              <li><strong>Attack Path Intelligence Engine:</strong> Cycle-safe DFS graph traversals discovering multi-hop compromise routes in &lt;100ms.</li>
              <li><strong>Telemetry Ingestion & Baselines:</strong> Process tree reconstruction, sliding temporal baselines, and 6 MITRE ATT&CK detection rules.</li>
              <li><strong>Multi-Dimensional Incident Correlation:</strong> Unifies discrete alerts into single coherent incidents (INC-XXXX) with chronological Attack Story narratives.</li>
              <li><strong>Grounded AI Security Analyst:</strong> Context-augmented query planning and strict database evidence validation (0 hallucination threshold).</li>
              <li><strong>Closed-Loop Containment:</strong> Dry-run response simulation, EDR host quarantine adapters, digital twin state mutation, and immediate post-response risk recalculation.</li>
              <li><strong>Malware Observatory:</strong> Isolated sample storage, 32-D feature vector extraction, and agglomerative clustering.</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
