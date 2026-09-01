'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Database, Lock, Trash2, Shield, FileCheck, ArrowRight } from 'lucide-react';

export default function DataHandlingDocsPage() {
  return (
    <DocsLayout
      title="Data Handling Pipeline & Lifecycle"
      description="Detailed technical breakdown of how customer infrastructure data is ingested, normalized, encrypted, analyzed, and retained in AEGIS."
      badge="DATA GOVERNANCE"
    >
      <div className="space-y-8">
        <div>
          <h2>The End-to-End Data Pipeline</h2>
          <p>
            AEGIS ingests metadata solely to construct the Digital Twin and evaluate attack paths. Data moves through seven strictly isolated processing stages:
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto not-prose">
          <div className="min-w-[650px] flex items-center justify-between text-center gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">1. INGEST</span>
              <span className="text-[10px] text-slate-400">OAuth / REST</span>
            </div>
            <span>➔</span>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">2. AUTHORIZE</span>
              <span className="text-[10px] text-slate-400">Validate State</span>
            </div>
            <span>➔</span>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">3. NORMALIZE</span>
              <span className="text-[10px] text-slate-400">Graph Entities</span>
            </div>
            <span>➔</span>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">4. ENCRYPT</span>
              <span className="text-[10px] text-slate-400">AES-256 Storage</span>
            </div>
            <span>➔</span>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">5. ANALYZE</span>
              <span className="text-[10px] text-slate-400">Attack Paths</span>
            </div>
            <span>➔</span>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-cyan-400 font-bold block">6. PURGE</span>
              <span className="text-[10px] text-slate-400">Deletion on Revoke</span>
            </div>
          </div>
        </div>

        {/* Data Categories Breakdown */}
        <div>
          <h2>Data Categories Processed</h2>
          <div className="space-y-4 not-prose mt-4 text-xs font-sans">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-white">1. Account & Identity Information</h3>
              <p className="text-slate-300">
                User emails, authentication provider user IDs, and organization membership roles. Used strictly for authenticating console access and enforcing Role-Based Access Control (RBAC).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-white">2. Connector Credentials & OAuth Tokens</h3>
              <p className="text-slate-300">
                Third-party OAuth access tokens (e.g. Vercel Bearer tokens). These tokens are encrypted immediately upon reception using Fernet symmetric encryption with 32-byte keys. Raw tokens are never written unencrypted to disk or exposed in API responses.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-white">3. Infrastructure Metadata (Digital Twin)</h3>
              <p className="text-slate-300">
                Project identifiers, deployment URLs, framework types, domain configurations, and logical relationships between cloud components. This metadata forms the graph topology for computing exposure and breach paths.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-white">4. Security Telemetry & Event Envelopes</h3>
              <p className="text-slate-300">
                Normalized endpoint activity logs, process execution lineages, network connection flows, and alerts. Used by the detection engine and multi-dimensional correlation service.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Tenant Organization Isolation */}
        <div>
          <h2>Organization Isolation & Storage Security</h2>
          <p>
            Every entity stored in AEGIS is strictly associated with an <code>org_id</code> foreign key. Backend queries apply mandatory organization scoping at the SQL layer. A user belonging to Organization A can never query, discover, or mutate assets belonging to Organization B.
          </p>
        </div>

        {/* Data Retention & Deletion Policy */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Trash2 className="w-4 h-4 text-cyan-400" />
            <span>Retention & Deletion Policy</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
            <li><strong>Upon Target Disconnection:</strong> The stored OAuth token is deleted and revoked. Discovered assets can be retained in historical read-only mode or immediately purged upon user request.</li>
            <li><strong>Security Event Telemetry:</strong> Retained for 90 days by default (configurable per enterprise policy) before automatic roll-off.</li>
            <li><strong>Account Deletion:</strong> Initiating an organization purge permanently drops all assets, graph relationships, alerts, incident records, and encrypted connector keys.</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/legal/privacy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Review the complete Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
