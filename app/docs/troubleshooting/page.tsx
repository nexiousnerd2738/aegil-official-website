'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { HelpCircle, AlertTriangle, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface TroubleshootingCase {
  issue: string;
  cause: string;
  solution: string[];
}

const CASES: TroubleshootingCase[] = [
  {
    issue: 'Vercel OAuth Callback Error or "Invalid State"',
    cause: 'The state parameter stored in your browser session expired or mismatched during redirect.',
    solution: [
      'Ensure your browser allows cross-site cookies and storage between AEGIS and vercel.com.',
      'Clear your browser cache or try an incognito session.',
      'Re-initiate the connection from Connectors ➔ Connect Vercel.',
    ],
  },
  {
    issue: 'Insufficient Permissions During Authorization',
    cause: 'Your Vercel user account does not possess OWNER or ADMIN permissions for the selected team.',
    solution: [
      'Ensure you select a personal account or a team where you have administrative integration privileges.',
      'Ask your Vercel team Owner to authorize the AEGIS integration on your team’s behalf.',
    ],
  },
  {
    issue: 'Connector Status Displays "Degraded" or "Error"',
    cause: 'The stored OAuth access token has been revoked on Vercel or expired.',
    solution: [
      'Navigate to Connectors in the AEGIS console.',
      'Click Health Check on the Vercel connector card to view the exact error code.',
      'Click Disconnect and then Reconnect Vercel to establish a fresh OAuth session.',
    ],
  },
  {
    issue: 'Partial Resource Discovery (Some Projects Missing)',
    cause: 'The OAuth token was granted to a single Vercel team while missing projects belong to a different team or personal scope.',
    solution: [
      'Verify which Vercel team scope was selected during the initial OAuth consent prompt.',
      'Connect additional Vercel teams if you manage infrastructure across multiple team boundaries.',
    ],
  },
  {
    issue: 'API Rate Limiting (HTTP 429)',
    cause: 'Rapid manual sync triggers exceeded Vercel API rate limits.',
    solution: [
      'AEGIS automatically employs exponential backoff and jitter for sync requests.',
      'Allow 5-10 minutes between consecutive manual full sync requests.',
    ],
  },
];

export default function TroubleshootingDocsPage() {
  return (
    <DocsLayout
      title="Troubleshooting Guide"
      description="Practical diagnostic steps and solutions for common connection, authorization, and discovery issues."
      badge="DIAGNOSTICS"
    >
      <div className="space-y-8">
        <div>
          <h2>Common Issues & Diagnostic Solutions</h2>
          <p>
            If you encounter errors connecting target platforms or synchronizing the Digital Twin, review the solutions below.
          </p>
        </div>

        <div className="space-y-6 not-prose">
          {CASES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 font-sans text-xs"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item.issue}</span>
              </div>
              <p className="text-slate-400 italic">
                <strong>Probable Cause:</strong> {item.cause}
              </p>
              <div className="space-y-1.5 pt-1">
                <strong className="text-cyan-400 block font-mono text-[11px] uppercase">
                  Recommended Solution:
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

        {/* Support Callout */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white">Still Having Trouble?</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Our engineering support team is available to assist with custom deployments, enterprise proxy setups, and API integrations.
          </p>
          <div className="pt-2">
            <Link
              href="/support/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
            >
              <span>Contact Support Directly ({siteConfig.contacts.supportEmail})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
