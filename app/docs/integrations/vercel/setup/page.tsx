'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Rocket, CheckCircle2, ArrowRight, Zap, Shield, KeyRound, AlertTriangle } from 'lucide-react';

interface ConnectionState {
  state: string;
  badgeColor: string;
  description: string;
}

const STATES: ConnectionState[] = [
  { state: 'PENDING', badgeColor: 'bg-slate-800 text-slate-400 border-slate-700', description: 'Connector initialized in AEGIS console, awaiting user OAuth authorization.' },
  { state: 'CONNECTING', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40', description: 'Authorization code received; AEGIS backend is exchanging code for encrypted access token.' },
  { state: 'CONNECTED', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', description: 'Active OAuth session verified. Periodic health checks confirming 200 OK API status.' },
  { state: 'SYNCING', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', description: 'Background discovery worker currently querying projects, deployments, domains, and teams.' },
  { state: 'ERROR', badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40', description: 'Token expired, revoked at provider, or rate limit hit. Requires re-authentication.' },
  { state: 'DISCONNECTED', badgeColor: 'bg-slate-800 text-slate-400 border-slate-700', description: 'Connector disabled. Stored access token purged and revoked.' },
];

export default function VercelSetupDocsPage() {
  return (
    <DocsLayout
      title="Vercel Integration Setup Guide"
      description="Step-by-step walkthrough to connect your Vercel organization, verify OAuth authorization, and monitor connection states."
      badge="SETUP GUIDE"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Integrations', href: '/docs/integrations' },
        { label: 'Vercel', href: '/docs/integrations/vercel' },
        { label: 'Setup Guide' },
      ]}
    >
      <div className="space-y-10">
        <div>
          <h2>8-Step Setup Walkthrough</h2>
          <p>
            Follow these steps to connect your Vercel organization to AEGIS using least-privilege OAuth 2.0:
          </p>
        </div>

        {/* 8 Steps */}
        <div className="space-y-6 not-prose">
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">1</span>
              <h3 className="text-sm font-bold text-white m-0">Open the AEGIS Console</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Log in to your AEGIS console and select the active organization where you want to import your Vercel assets.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">2</span>
              <h3 className="text-sm font-bold text-white m-0">Select Connect Vercel</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Navigate to <strong>Connectors ➔ Available Integrations</strong> and click <strong>Connect via OAuth</strong> on the Vercel card.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">3</span>
              <h3 className="text-sm font-bold text-white m-0">Authenticate with Vercel</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              You will be securely redirected to Vercel&apos;s authorization portal. Select the personal account or team scope you wish to connect.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">4</span>
              <h3 className="text-sm font-bold text-white m-0">Review Requested Permissions</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Confirm the read-only scopes: <code>projects:read</code>, <code>deployments:read</code>, <code>teams:read</code>, and <code>domains:read</code>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">5</span>
              <h3 className="text-sm font-bold text-white m-0">Authorize AEGIS</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Click <strong>Authorize Integration</strong>. Vercel generates an authorization code and redirects you back to AEGIS.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">6</span>
              <h3 className="text-sm font-bold text-white m-0">Return to AEGIS & Token Encryption</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              AEGIS verifies the cryptographic state parameter, exchanges the code for a Bearer token, and encrypts the token at rest using AES-256 Fernet.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">7</span>
              <h3 className="text-sm font-bold text-white m-0">Resource Discovery Begins</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Connector status switches to <code>SYNCING</code>. Background workers enumerate projects, active deployments, and domains.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center border border-cyan-500/40">8</span>
              <h3 className="text-sm font-bold text-white m-0">Digital Twin is Populated</h3>
            </div>
            <p className="text-xs text-slate-300 pl-8 leading-relaxed">
              Discovered cloud assets and relationships appear in your Digital Twin graph. Attack paths and exposure metrics are automatically calculated.
            </p>
          </div>
        </div>

        {/* Expected Connection States */}
        <div>
          <h2>Expected Connection Lifecycle States</h2>
          <div className="glass-panel rounded-xl border border-slate-800 overflow-hidden not-prose my-4">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3">State</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {STATES.map((st, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition">
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold border ${st.badgeColor}`}>
                        {st.state}
                      </span>
                    </td>
                    <td className="p-3 leading-relaxed">{st.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/integrations/vercel/permissions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Next: Review Vercel Permissions Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
