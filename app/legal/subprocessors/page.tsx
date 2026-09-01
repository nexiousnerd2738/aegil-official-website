'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { ExternalLink, Server } from 'lucide-react';

interface SubprocessorItem {
  name: string;
  purpose: string;
  dataProcessed: string;
  location: string;
  privacyPolicyUrl: string;
}

const SUBPROCESSORS: SubprocessorItem[] = [
  {
    name: 'Vercel Inc.',
    purpose: 'Frontend web application hosting, Edge Network, and CDN distribution',
    dataProcessed: 'HTTP request metadata, IP addresses, web console assets',
    location: 'United States & Global Edge Network',
    privacyPolicyUrl: 'https://vercel.com/legal/privacy',
  },
  {
    name: 'Supabase Inc.',
    purpose: 'User authentication, identity management, and PostgreSQL database storage',
    dataProcessed: 'User email addresses, hashed credentials, organization asset records',
    location: 'United States / European Union (Configurable)',
    privacyPolicyUrl: 'https://supabase.com/privacy',
  },
  {
    name: 'Anthropic PBC / OpenAI LLC / Google LLC',
    purpose: 'Optional Large Language Model inference for AI Security Analyst natural language queries',
    dataProcessed: 'Anonymized query prompts and incident context snippets (no persistent training)',
    location: 'United States',
    privacyPolicyUrl: 'https://www.anthropic.com/privacy',
  },
];

export default function SubprocessorsPage() {
  return (
    <LegalLayout
      title="Authorized Third-Party Subprocessors"
      description="Authoritative list of third-party cloud infrastructure, database, and hosting providers utilized in delivering AEGIS."
    >
      <div className="space-y-6">
        <div>
          <h2>Subprocessor Disclosure</h2>
          <p>
            To provide reliable, high-performance cyber defense operations, AEGIS engages carefully vetted third-party service providers (&quot;Subprocessors&quot;). Below is the complete list of active subprocessors:
          </p>
        </div>

        <div className="glass-panel rounded-xl border border-slate-800 overflow-hidden not-prose my-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Subprocessor</th>
                  <th className="p-3.5">Purpose</th>
                  <th className="p-3.5">Data Processed</th>
                  <th className="p-3.5">Location</th>
                  <th className="p-3.5">Privacy Notice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {SUBPROCESSORS.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition">
                    <td className="p-3.5 font-bold text-white font-mono">{sub.name}</td>
                    <td className="p-3.5 leading-relaxed">{sub.purpose}</td>
                    <td className="p-3.5 leading-relaxed text-slate-400">{sub.dataProcessed}</td>
                    <td className="p-3.5 font-mono text-slate-400">{sub.location}</td>
                    <td className="p-3.5">
                      <a
                        href={sub.privacyPolicyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono text-[11px]"
                      >
                        <span>Policy</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>Subprocessor Updates</h2>
          <p>
            We will update this list prior to engaging any new subprocessor. Customers may subscribe to updates or review this page periodically.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
