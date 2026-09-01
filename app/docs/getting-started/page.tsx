'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { CheckCircle2, ArrowRight, Zap, Shield, KeyRound, Terminal } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <DocsLayout
      title="Getting Started with AEGIS"
      description="Step-by-step instructions to initialize your organization, connect your target environments, and explore your live Digital Twin."
    >
      <div className="space-y-8">
        <div>
          <h2>Quickstart Walkthrough</h2>
          <p>
            AEGIS is designed to be operational in under 5 minutes. Follow the seven steps below to set up your environment and begin continuous attack path monitoring.
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                1
              </span>
              <h3 className="text-lg font-bold text-white m-0">Sign In to Your AEGIS Account</h3>
            </div>
            <p className="text-sm text-slate-300">
              Navigate to the AEGIS application console. Authenticate using your credentials or your organization’s single sign-on provider.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                2
              </span>
              <h3 className="text-lg font-bold text-white m-0">Create or Select Your Organization</h3>
            </div>
            <p className="text-sm text-slate-300">
              All infrastructure, telemetry, alerts, and attack paths are strictly isolated per tenant. Select your active organization or create a new one from the top navigation bar.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                3
              </span>
              <h3 className="text-lg font-bold text-white m-0">Connect Your Vercel Target</h3>
            </div>
            <p className="text-sm text-slate-300">
              Navigate to <strong>Connectors ➔ Available Integrations</strong>. Click <strong>Connect Vercel</strong>. You will be redirected to the secure Vercel OAuth authorization window.
            </p>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono text-cyan-300">
              GET /api/v1/organizations/{'{org_id}'}/connectors/vercel/authorize
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                4
              </span>
              <h3 className="text-lg font-bold text-white m-0">Review Permissions & Authorize</h3>
            </div>
            <p className="text-sm text-slate-300">
              Review the requested scopes (<Link href="/docs/permissions" className="text-cyan-400 hover:underline">Project Metadata, Deployments, Domains, Teams</Link>). All requested permissions are 100% read-only. Click <strong>Authorize Integration</strong>.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                5
              </span>
              <h3 className="text-lg font-bold text-white m-0">Automatic Resource Discovery</h3>
            </div>
            <p className="text-sm text-slate-300">
              Upon successful OAuth callback, AEGIS establishes an encrypted connector session and initiates background discovery. Projects, deployments, and users are normalized into graph nodes.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                6
              </span>
              <h3 className="text-lg font-bold text-white m-0">Explore Your Live Digital Twin</h3>
            </div>
            <p className="text-sm text-slate-300">
              Open the <strong>Digital Twin</strong> view in the console. You will see an interactive topological graph mapping all discovered assets, access relationships, and network segments.
            </p>
          </div>

          {/* Step 7 */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">
                7
              </span>
              <h3 className="text-lg font-bold text-white m-0">Review Attack Paths & Baseline Risk</h3>
            </div>
            <p className="text-sm text-slate-300">
              Navigate to <strong>Attack Paths</strong>. AEGIS automatically evaluates graph traversal routes from exposed internet endpoints to critical internal targets, scoring overall enterprise risk.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/vercel"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Read detailed Vercel Integration Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
