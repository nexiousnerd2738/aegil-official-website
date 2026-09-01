'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Shield, Lock, FileKey, EyeOff, Server, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface SecurityControl {
  title: string;
  category: string;
  description: string;
  technicalDetails: string;
}

const CONTROLS: SecurityControl[] = [
  {
    title: 'Authentication & Session Integrity',
    category: 'IDENTITY & ACCESS',
    description: 'JWT validation with cryptographic signature verification and short-lived session access tokens.',
    technicalDetails: 'Signed via HS256/RS256 algorithms with mandatory expiration and HttpOnly refresh cookies.',
  },
  {
    title: 'Role-Based Access Control (RBAC)',
    category: 'AUTHORIZATION',
    description: 'Five-tier hierarchical role permissioning (OWNER, ADMIN, SECURITY_ANALYST, OPERATOR, VIEWER).',
    technicalDetails: 'Enforced at every FastAPI route and database mutation layer with strict action permission mapping.',
  },
  {
    title: 'Multi-Tenant Isolation',
    category: 'TENANT BOUNDARIES',
    description: 'Cryptographic and logical database separation ensuring zero cross-organization data leakage.',
    technicalDetails: 'Mandatory org_id foreign key constraints on every SQLModel entity and query filter.',
  },
  {
    title: 'Connector Credential Encryption',
    category: 'CRYPTOGRAPHY',
    description: 'Symmetric encryption of third-party OAuth access tokens and API keys at rest.',
    technicalDetails: 'AES-256 Fernet symmetric encryption keys derived via PBKDF2; raw tokens never logged or exposed in API schemas.',
  },
  {
    title: 'Agent Tool Policy Gatekeeper',
    category: 'AUTOMATION BOUNDARIES',
    description: 'Strict privilege boundaries preventing autonomous agents from raw OS execution or arbitrary code execution.',
    technicalDetails: 'Tools partitioned into READ_ONLY, SIMULATE_ONLY, and MUTATING (requiring human-in-the-loop approval).',
  },
  {
    title: 'Immutable Audit Logging',
    category: 'GOVERNANCE & COMPLIANCE',
    description: 'Structured logging of every authentication event, connector sync, policy change, and response execution.',
    technicalDetails: 'Actor user IDs, resource IDs, IP addresses, and timestamps recorded to dedicated AuditLog tables.',
  },
];

export default function SecurityOverviewPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="SECURITY ARCHITECTURE"
          badgeIcon={<Shield className="w-3.5 h-3.5" />}
          title="Security Architecture & Controls"
          description="A transparent overview of the mathematical, cryptographic, and architectural safeguards protecting AEGIS and customer infrastructure."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Security' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTROLS.map((ctrl, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-200"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                    {ctrl.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {ctrl.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {ctrl.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 font-mono text-[11px] text-slate-400">
                  <span className="text-cyan-300 font-semibold block mb-0.5">Control Mechanism:</span>
                  <span>{ctrl.technicalDetails}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Vulnerability Reporting Callout */}
          <div className="glass-panel rounded-2xl p-8 border border-cyan-500/30 glow-box-blue flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-lg">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Found a Security Vulnerability?</span>
              </div>
              <p className="text-slate-300 text-xs max-w-xl leading-relaxed">
                We take security seriously and welcome responsible disclosures from security researchers. Review our coordinated disclosure policy.
              </p>
            </div>
            <Link
              href="/security/report"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition"
            >
              <span>Vulnerability Reporting Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
