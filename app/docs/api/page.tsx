'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Code2, KeyRound, Server, Zap, Shield, ArrowRight } from 'lucide-react';

interface ApiRoute {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path: string;
  description: string;
  authRequired: boolean;
}

const API_ROUTES: ApiRoute[] = [
  { method: 'GET', path: '/health', description: 'System health check and database latency probe.', authRequired: false },
  { method: 'GET', path: '/api/v1/organizations', description: 'List organizations where current user has membership.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/connectors', description: 'List active and pending target connectors for tenant.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/connectors/vercel/authorize', description: 'Initiates OAuth 2.0 flow for Vercel target.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/assets', description: 'Query Digital Twin assets with type and exposure filters.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/digital-twin/graph', description: 'Fetch full node and edge topology for React Flow rendering.', authRequired: true },
  { method: 'POST', path: '/api/v1/organizations/{org_id}/attack-paths/analyze', description: 'Trigger graph traversal to discover multi-hop breach routes.', authRequired: true },
  { method: 'POST', path: '/api/v1/organizations/{org_id}/events/batch', description: 'Ingest normalized telemetry event envelope batch.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/alerts', description: 'List detected security alerts with ATT&CK tactic tags.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/incidents/{id}/story', description: 'Fetch synthesized chronological attack story and graph.', authRequired: true },
  { method: 'GET', path: '/api/v1/organizations/{org_id}/risk', description: 'Compute overall multi-factor enterprise cyber risk score.', authRequired: true },
  { method: 'POST', path: '/api/v1/organizations/{org_id}/responses/actions/{id}/simulate', description: 'Simulate non-destructive containment effect.', authRequired: true },
  { method: 'POST', path: '/api/v1/organizations/{org_id}/responses/actions/{id}/execute', description: 'Execute approved host isolation or token revocation.', authRequired: true },
];

export default function ApiDocsPage() {
  return (
    <DocsLayout
      title="AEGIS REST API Reference"
      description="Authoritative API endpoints for programmatic access to the Digital Twin, attack graph engine, incident stream, and response orchestrator."
      badge="API REFERENCE"
    >
      <div className="space-y-8">
        <div>
          <h2>Authentication & Scoping</h2>
          <p>
            All requests to <code>/api/v1/*</code> require a Bearer token in the <code>Authorization</code> header. Each request is evaluated within the context of the requested <code>org_id</code>.
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 not-prose my-3">
            Authorization: Bearer {'<SUPABASE_OR_SERVICE_JWT>'}
          </div>
        </div>

        {/* Endpoints Table */}
        <div>
          <h2>Exposed Public Endpoints</h2>
          <div className="glass-panel rounded-xl border border-slate-800 overflow-hidden not-prose my-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3">Method</th>
                    <th className="p-3">Endpoint</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Auth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {API_ROUTES.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition">
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                          route.method === 'GET'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : route.method === 'POST'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {route.method}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-cyan-300">{route.path}</td>
                      <td className="p-3 text-slate-300 leading-relaxed">{route.description}</td>
                      <td className="p-3">
                        {route.authRequired ? (
                          <span className="text-amber-400 font-mono text-[10px]">Bearer</span>
                        ) : (
                          <span className="text-slate-400 font-mono text-[10px]">Public</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Ready to integrate? Review Getting Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
