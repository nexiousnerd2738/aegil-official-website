'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { KeyRound, ShieldCheck, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { VERCEL_INTEGRATION_CONFIG } from '@/config/integrations/vercel-permissions';

export default function PermissionsDocsPage() {
  return (
    <DocsLayout
      title="Permissions & Data Access Matrix"
      description="Detailed catalog of all scopes, API endpoints, and data attributes requested across AEGIS integrations."
      badge="LEAST PRIVILEGE"
    >
      <div className="space-y-8">
        <div>
          <h2>Least Privilege Architecture</h2>
          <p>
            AEGIS adheres strictly to the principle of least privilege. We request only the minimum read-only permissions required to map cloud topology and detect security risks. We never request write permissions to modify your production deployments or code.
          </p>
        </div>

        {/* Vercel Integration Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white m-0">Vercel Integration Permissions</h3>
            <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/30">
              100% READ-ONLY
            </span>
          </div>

          <div className="space-y-6 not-prose">
            {VERCEL_INTEGRATION_CONFIG.permissions.map((perm) => (
              <div
                key={perm.id}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 font-sans text-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-white">{perm.name}</div>
                    <div className="font-mono text-[11px] text-cyan-400">
                      Scope: <code>{perm.apiScope}</code> | Endpoint: <code>{perm.endpoint}</code>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 font-mono text-[10px] font-bold">
                      {perm.accessType}
                    </span>
                    {perm.required ? (
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-mono text-[10px] font-bold">
                        REQUIRED
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono text-[10px]">
                        OPTIONAL
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-slate-400 font-bold uppercase block">
                      Purpose & Necessity
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {perm.whyRequired}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase block flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Data Accessed</span>
                    </span>
                    <ul className="space-y-1 text-slate-300 list-disc list-inside">
                      {perm.dataAccessed.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] text-rose-400 font-bold uppercase block flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>Data Explicitly NOT Accessed</span>
                    </span>
                    <ul className="space-y-1 text-slate-400 list-disc list-inside">
                      {perm.dataNotAccessed.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Least Privilege Guarantees Card */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
          <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Guarantees Regarding Sensitive Assets</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            AEGIS never downloads repository source code, never inspects customer traffic payloads, and never requests environment variable secret values.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/data-handling"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Learn how data is processed and encrypted in Data Handling</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
