'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { 
  Zap, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  KeyRound, 
  AlertTriangle,
  RotateCcw,
  Eye,
  Server,
  Layers
} from 'lucide-react';
import { VERCEL_INTEGRATION_CONFIG } from '@/config/integrations/vercel-permissions';
import { siteConfig } from '@/config/site';

export default function VercelIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="VERCEL INTEGRATION"
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          title="AEGIS for Vercel"
          description="Connect your Vercel organization to AEGIS to map live web applications, discover multi-hop attack paths, and monitor deployment security in your Digital Twin."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Integrations', href: '/integrations' },
            { label: 'Vercel' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Section 1: Overview & Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Continuous Cloud Observability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Map & Protect Your Vercel Deployments
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                The AEGIS for Vercel integration allows security teams to connect their Vercel team through standard OAuth 2.0. AEGIS automatically discovers projects, active deployments, custom domains, and team collaborator roles—incorporating them into your real-time Digital Twin topology graph.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/docs/vercel"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/25"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>View Step-by-Step Setup Guide</span>
                </Link>
                <Link
                  href="/docs/permissions"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium transition"
                >
                  <KeyRound className="w-4 h-4 text-cyan-400" />
                  <span>Review Permissions</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-cyan-500/30 glow-box-blue space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-slate-400">INTEGRATION STATUS</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                  VERIFIED ACTIVE
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Auth Protocol:</span>
                  <span>OAuth 2.0 (PKCE + State)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Token Storage:</span>
                  <span>AES-256 Fernet Encrypted</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Default Access:</span>
                  <span>100% Read-Only</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Revocation:</span>
                  <span>Instant 1-Click Disconnect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Authorization Architecture Flow */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How the Authorization Flow Works
              </h2>
              <p className="text-slate-400 text-sm">
                AEGIS implements strict OAuth 2.0 authorization code flow with server-side token encryption.
              </p>
            </div>

            {/* Visual Flow Diagram */}
            <div className="glass-panel rounded-2xl p-8 border border-slate-800 overflow-x-auto">
              <div className="min-w-[700px] flex items-center justify-between gap-2 text-xs font-mono">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-28">
                  <span className="text-[10px] text-cyan-400 font-bold">STEP 1</span>
                  <span className="font-bold text-white mt-1">User</span>
                  <span className="text-[10px] text-slate-400">Initiates Sync</span>
                </div>
                <span className="text-cyan-400">➔</span>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-32">
                  <span className="text-[10px] text-cyan-400 font-bold">STEP 2</span>
                  <span className="font-bold text-white mt-1">Connect AEGIS</span>
                  <span className="text-[10px] text-slate-400">Generates State</span>
                </div>
                <span className="text-cyan-400">➔</span>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-36">
                  <span className="text-[10px] text-cyan-400 font-bold">STEP 3</span>
                  <span className="font-bold text-white mt-1">Vercel Auth</span>
                  <span className="text-[10px] text-slate-400">User Reviews Scope</span>
                </div>
                <span className="text-cyan-400">➔</span>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-32">
                  <span className="text-[10px] text-cyan-400 font-bold">STEP 4</span>
                  <span className="font-bold text-white mt-1">Authorized</span>
                  <span className="text-[10px] text-slate-400">Exchanges Code</span>
                </div>
                <span className="text-cyan-400">➔</span>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-36">
                  <span className="text-[10px] text-cyan-400 font-bold">STEP 5</span>
                  <span className="font-bold text-white mt-1">Digital Twin</span>
                  <span className="text-[10px] text-emerald-400">Graph Synced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Data Access & Permissions Table */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Data Access & Scope Disclosures
              </h2>
              <p className="text-slate-400 text-sm">
                Below is the exact list of resources requested by AEGIS for Vercel. AEGIS only requests the minimum data necessary to compute your security posture.
              </p>
            </div>

            <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-slate-950/90 text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="p-4">Permission / Resource</th>
                      <th className="p-4">API Endpoint</th>
                      <th className="p-4">Access Type</th>
                      <th className="p-4">Why Required by AEGIS</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    {VERCEL_INTEGRATION_CONFIG.permissions.map((perm) => (
                      <tr key={perm.id} className="hover:bg-slate-900/40 transition">
                        <td className="p-4">
                          <div className="font-bold text-white">{perm.name}</div>
                          <div className="font-mono text-[11px] text-cyan-400">{perm.apiScope}</div>
                        </td>
                        <td className="p-4 font-mono text-slate-400">{perm.endpoint}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 font-mono text-[10px] font-bold">
                            {perm.accessType}
                          </span>
                        </td>
                        <td className="p-4 leading-relaxed max-w-sm">{perm.whyRequired}</td>
                        <td className="p-4">
                          {perm.required ? (
                            <span className="text-amber-400 font-mono font-bold">Required</span>
                          ) : (
                            <span className="text-slate-400 font-mono">Optional</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 4: Least Privilege Principles */}
          <div className="glass-panel rounded-2xl p-8 border border-cyan-500/20 glow-box-blue space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Our Least Privilege Commitment
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  Strict boundaries for cloud security operations
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VERCEL_INTEGRATION_CONFIG.leastPrivilegeGuarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: How to Disconnect / Revoke */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How to Disconnect & Revoke Access
              </h2>
              <p className="text-slate-400 text-sm">
                You retain complete control over your authorization. Disconnecting takes under 10 seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-cyan-400" />
                  <span>Option 1: Disconnect from the AEGIS Dashboard</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed font-sans">
                  <li>Navigate to <strong>Connectors</strong> in your AEGIS console.</li>
                  <li>Locate your connected Vercel organization card.</li>
                  <li>Click <strong>Disconnect</strong> and confirm the action.</li>
                  <li>AEGIS immediately purges the encrypted credentials from active memory and triggers token revocation with Vercel.</li>
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Option 2: Revoke Directly from Vercel</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed font-sans">
                  <li>Log in to your <strong>Vercel Dashboard</strong>.</li>
                  <li>Navigate to <strong>Account / Team Settings ➔ Integrations</strong>.</li>
                  <li>Find <strong>AEGIS</strong> in your active integrations list.</li>
                  <li>Click <strong>Manage ➔ Revoke Access</strong>.</li>
                  <li>Vercel instantly invalidates the OAuth token, preventing any future API calls.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
