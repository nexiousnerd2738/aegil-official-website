'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { AlertTriangle, HelpCircle, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface TroubleshootingItem {
  issue: string;
  cause: string;
  solution: string[];
}

const VERCEL_ISSUES: TroubleshootingItem[] = [
  {
    issue: 'OAuth Denied or "Access Denied by User"',
    cause: 'The authorization request was cancelled or declined on the Vercel consent screen.',
    solution: [
      'Re-initiate the connection from Connectors ➔ Connect Vercel.',
      'Click "Authorize Integration" on the Vercel consent prompt.',
    ],
  },
  {
    issue: 'Insufficient Permissions on Target Team',
    cause: 'Your Vercel user account does not have Owner or Member permissions with integration authorization rights.',
    solution: [
      'Ask your Vercel Team Owner to authorize the integration.',
      'Or connect a personal Vercel account where you have full administrative rights.',
    ],
  },
  {
    issue: 'OAuth Callback Failure / State Mismatch',
    cause: 'The state verification token expired or was modified during the redirect flow.',
    solution: [
      'Ensure cookies and local storage are enabled in your browser.',
      'Disable third-party privacy extensions that strip referrer headers during redirects.',
      'Initiate a fresh connection flow.',
    ],
  },
  {
    issue: 'Connector Status "Error" or "Connection Failure"',
    cause: 'The stored OAuth access token was revoked at the provider level or network firewall blocked API calls.',
    solution: [
      'Click Health Check on the Vercel connector card in the AEGIS console.',
      'Click Disconnect, then Reconnect Vercel to obtain a fresh access token.',
    ],
  },
  {
    issue: 'Discovery Failure or Partial Missing Resources',
    cause: 'The OAuth token was granted for a specific team scope while missing projects belong to another team.',
    solution: [
      'Check which team scope was selected during OAuth consent.',
      'Connect additional Vercel team scopes if managing multi-team environments.',
    ],
  },
  {
    issue: 'API Rate Limiting (HTTP 429 Too Many Requests)',
    cause: 'Repeated manual sync triggers exceeded Vercel REST API quotas.',
    solution: [
      'AEGIS automatically employs exponential backoff and jitter.',
      'Allow 5-10 minutes between consecutive manual sync triggers.',
    ],
  },
];

export default function VercelTroubleshootingDocsPage() {
  return (
    <DocsLayout
      title="Vercel Integration Troubleshooting"
      description="Diagnostic solutions for OAuth authorization errors, discovery failures, expired tokens, and rate limits."
      badge="TROUBLESHOOTING"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Integrations', href: '/docs/integrations' },
        { label: 'Vercel', href: '/docs/integrations/vercel' },
        { label: 'Troubleshooting' },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2>Vercel Diagnostic Solutions</h2>
          <p>
            Review the solutions below for common issues encountered during Vercel authorization and resource synchronization:
          </p>
        </div>

        <div className="space-y-6 not-prose">
          {VERCEL_ISSUES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 font-sans text-xs"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item.issue}</span>
              </div>
              <p className="text-slate-400 italic">
                <strong>Cause:</strong> {item.cause}
              </p>
              <div className="space-y-1.5 pt-1">
                <strong className="text-cyan-400 block font-mono text-[11px] uppercase">
                  Resolution Steps:
                </strong>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {item.solution.map((sol, sIdx) => (
                    <li key={sIdx}>{sol}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Support Box */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white">Still Experiencing Issues?</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Our engineering team can assist with enterprise proxy environments or custom OAuth app configurations.
          </p>
          <div className="pt-1">
            <Link
              href="/support/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>Contact Support ({siteConfig.contacts.supportEmail})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
