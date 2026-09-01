'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { ShieldAlert, Mail, CheckCircle2, AlertTriangle, Lock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function SecurityReportDocsPage() {
  return (
    <DocsLayout
      title="Security Vulnerability Reporting"
      description="Guidelines for security researchers to report vulnerabilities responsibly to the AEGIS security engineering team."
      badge="COORDINATED DISCLOSURE"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Security', href: '/docs/security' },
        { label: 'Reporting' },
      ]}
    >
      <div className="space-y-8">
        <div>
          <h2>Responsible Disclosure Policy</h2>
          <p>
            We appreciate the efforts of security researchers in identifying vulnerabilities and helping us maintain a secure platform. We are committed to working constructively with researchers who adhere to our responsible disclosure guidelines.
          </p>
        </div>

        <div className="space-y-6 not-prose">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 text-xs font-sans">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>What to Include in Your Report</span>
            </h3>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Detailed summary of the vulnerability, attack vector, and estimated severity.</li>
              <li>Step-by-step reproduction instructions, proof-of-concept (PoC) code, or sample payloads.</li>
              <li>Target component (e.g. REST API, Vercel OAuth callback handler, agent tool gatekeeper).</li>
              <li>Any proposed remediation steps or architectural mitigations.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 text-xs font-sans">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Safe Harbor Guidelines</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              If you conduct security research in good faith in accordance with this policy, we will not pursue legal action against you. Please ensure you:
            </p>
            <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
              <li>Do not access or modify other tenants&apos; data without authorization.</li>
              <li>Do not perform denial-of-service (DoS) attacks or degrade system availability.</li>
              <li>Allow a standard 90-day window for remediation before public disclosure.</li>
            </ul>
          </div>
        </div>

        {/* Contact Submission Box */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center space-y-4">
          <h3 className="text-base font-bold text-white">Submit a Vulnerability Report</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
            Send your report directly to our security engineering inbox:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${siteConfig.contacts.securityEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contacts.securityEmail}</span>
            </a>
          </div>
          <p className="text-[11px] font-mono text-slate-400">
            Expected initial acknowledgment: within 48 business hours.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
}
