'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Zap, Server, Code2, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DocsIntegrationsOverviewPage() {
  return (
    <DocsLayout
      title="Target Environment Integrations"
      description="Connect your cloud providers, identity directories, and developer platforms to feed authoritative topology and telemetry into AEGIS."
      badge="INTEGRATIONS"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Integrations' },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2>Available & Planned Connectors</h2>
          <p>
            AEGIS connects to your infrastructure using least-privilege OAuth 2.0 or local connector agents. All connectors normalize external resources into the Digital Twin topology graph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 not-prose">
          {/* Vercel */}
          <Link
            href="/docs/integrations/vercel"
            className="p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  AVAILABLE NOW
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                AEGIS for Vercel
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Full OAuth 2.0 integration discovering projects, deployments, custom domains, and team collaborator roles for live attack path modeling.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition pt-2 border-t border-slate-800/60">
              <span>View Vercel Documentation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Active Directory */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                  <Server className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  CONNECTOR AGENT
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Active Directory / LDAP</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                On-premise directory synchronization agent mapping users, security groups, OUs, and privilege chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
