'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { RotateCcw, Lock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VercelDisconnectDocsPage() {
  return (
    <DocsLayout
      title="Disconnecting & Revoking Vercel Access"
      description="Learn how to cleanly disconnect the AEGIS for Vercel integration, purge encrypted credentials, and revoke OAuth tokens."
      badge="DISCONNECT GUIDE"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Integrations', href: '/docs/integrations' },
        { label: 'Vercel', href: '/docs/integrations/vercel' },
        { label: 'Disconnect' },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2>Disconnection Overview</h2>
          <p>
            You maintain total ownership of your Vercel organization access. You can disconnect AEGIS at any time, which takes effect immediately.
          </p>
        </div>

        {/* What Happens After Disconnect */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>What Happens When You Disconnect</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside font-sans">
            <li><strong>Synchronization Halts Immediately:</strong> AEGIS ceases all scheduled background discovery and telemetry collection jobs.</li>
            <li><strong>Token Revocation & Deletion:</strong> The stored AES-256 encrypted OAuth Bearer token is permanently deleted from the AEGIS database and revoked via Vercel’s token revocation endpoint.</li>
            <li><strong>Historical Digital Twin State:</strong> Previously discovered assets are marked as inactive. You can choose to preserve them in historical read-only mode or immediately purge all associated graph nodes.</li>
          </ul>
        </div>

        {/* Method 1: Disconnect from AEGIS */}
        <div>
          <h2>Method 1: Disconnect from the AEGIS Console</h2>
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 not-prose mt-3 text-xs font-sans">
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Log in to the <strong>AEGIS Web Console</strong>.</li>
              <li>Navigate to <strong>Connectors ➔ Connected Targets</strong>.</li>
              <li>Locate your connected Vercel connector card.</li>
              <li>Click <strong>Disconnect</strong> and confirm the confirmation dialog.</li>
              <li>Status transitions to <code>DISCONNECTED</code> and credentials are wiped.</li>
            </ol>
          </div>
        </div>

        {/* Method 2: Revoke from Vercel */}
        <div>
          <h2>Method 2: Revoke Directly from Vercel Settings</h2>
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 not-prose mt-3 text-xs font-sans">
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Log in to your <strong>Vercel Dashboard</strong>.</li>
              <li>Go to <strong>Team / Account Settings ➔ Integrations</strong>.</li>
              <li>Find <strong>AEGIS</strong> in your installed integrations list.</li>
              <li>Click <strong>Manage ➔ Revoke Access</strong>.</li>
              <li>Vercel immediately invalidates the OAuth token, preventing any future API calls.</li>
            </ol>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/integrations/vercel/troubleshooting"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Next: Vercel Troubleshooting Diagnostics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
