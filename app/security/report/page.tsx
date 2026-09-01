'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ShieldAlert, Mail, CheckCircle2, AlertTriangle, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function SecurityReportPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="COORDINATED DISCLOSURE"
          badgeIcon={<ShieldAlert className="w-3.5 h-3.5" />}
          title="Vulnerability Reporting & Disclosure"
          description="Guidelines for security researchers to report potential security vulnerabilities responsibly to the AEGIS security engineering team."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Security', href: '/security' },
            { label: 'Report Vulnerability' },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-xs">
          {/* Section 1: Disclosure Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Responsible Disclosure Policy
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We appreciate the efforts of security researchers in identifying vulnerabilities and helping us maintain a safe platform. We are committed to working constructively with researchers who adhere to our responsible disclosure guidelines.
            </p>
          </div>

          {/* Section 2: What to Include */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>What to Include in Your Report</span>
            </h3>
            <ul className="space-y-2 text-slate-300 list-disc list-inside font-sans text-xs">
              <li>Detailed summary of the vulnerability, including attack vector and severity assessment.</li>
              <li>Step-by-step reproduction instructions, proof-of-concept (PoC) scripts, or HTTP request payloads.</li>
              <li>Target component (e.g. API endpoint, Vercel OAuth callback handler, agent tool gatekeeper).</li>
              <li>Any proposed remediation steps or architectural recommendations.</li>
            </ul>
          </div>

          {/* Section 3: Safe Harbor & Guidelines */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Safe Harbor Guidelines</span>
            </h3>
            <p className="text-slate-300 leading-relaxed font-sans">
              If you conduct security research in good faith in accordance with this policy, we will not pursue legal action against you. In return, we ask that you:
            </p>
            <ul className="space-y-2 text-slate-300 list-disc list-inside font-sans text-xs">
              <li>Do not access or modify other users’ private data without explicit authorization.</li>
              <li>Do not perform denial-of-service (DoS/DDoS) attacks or degrade system availability.</li>
              <li>Allow us a reasonable timeframe (typically 90 days) to address the issue before public disclosure.</li>
            </ul>
          </div>

          {/* Section 4: Contact Box */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">Submit a Vulnerability Report</h3>
            <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
              Send your encrypted report or security disclosure directly to our security engineering inbox:
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.contacts.securityEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition"
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
      </div>
      <Footer />
    </div>
  );
}
