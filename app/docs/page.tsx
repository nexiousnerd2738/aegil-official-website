'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Rocket, Zap, Shield, KeyRound, FileText, HelpCircle, Code2, History, ArrowRight } from 'lucide-react';

const DOCS_CARDS = [
  {
    title: 'Getting Started',
    description: 'Learn how to set up your organization, connect your first target, and explore your Digital Twin in under 5 minutes.',
    href: '/docs/getting-started',
    icon: Rocket,
    tag: 'Quickstart',
  },
  {
    title: 'AEGIS for Vercel',
    description: 'Step-by-step instructions for connecting your Vercel team, reviewing scopes, and synchronizing project deployments.',
    href: '/docs/vercel',
    icon: Zap,
    tag: 'Connector Guide',
  },
  {
    title: 'Permissions Matrix',
    description: 'Detailed breakdown of every permission, scope, and resource requested across supported integrations.',
    href: '/docs/permissions',
    icon: KeyRound,
    tag: 'Least Privilege',
  },
  {
    title: 'Data Handling Pipeline',
    description: 'Inspect the end-to-end data lifecycle from authorization and normalization to encrypted storage and deletion.',
    href: '/docs/data-handling',
    icon: FileText,
    tag: 'Data Governance',
  },
  {
    title: 'Security Architecture',
    description: 'Examine our deterministic core engines, Fernet AES-256 token encryption, and multi-tenant isolation model.',
    href: '/docs/security',
    icon: Shield,
    tag: 'Zero-Trust Architecture',
  },
  {
    title: 'REST API Reference',
    description: 'Interact programmatically with the AEGIS platform for connectors, attack paths, incidents, and responses.',
    href: '/docs/api',
    icon: Code2,
    tag: 'API Docs',
  },
  {
    title: 'Troubleshooting Guide',
    description: 'Practical solutions for OAuth callback errors, token expiration, partial discovery, and network rate limits.',
    href: '/docs/troubleshooting',
    icon: HelpCircle,
    tag: 'Diagnostics',
  },
  {
    title: 'Product Changelog',
    description: 'Official record of version releases, security enhancements, and new feature additions.',
    href: '/docs/changelog',
    icon: History,
    tag: 'Updates',
  },
];

export default function DocsHomePage() {
  return (
    <DocsLayout
      title="AEGIS Documentation"
      description="Comprehensive guides, architectural blueprints, permission disclosures, and API references for the AEGIS cyber defense platform."
    >
      <div className="space-y-8">
        <div>
          <h2>Welcome to AEGIS Documentation</h2>
          <p>
            AEGIS (*Adaptive Enterprise Guard, Intelligence & Security*) is an autonomous cyber defense platform engineered to turn multi-cloud infrastructure and real-time telemetry into a continuous, self-healing blue team lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 not-prose">
          {DOCS_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="p-5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition pt-2 border-t border-slate-800/60">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white">Need Additional Assistance?</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            If you encounter issues during installation or have questions about data processing, explore our <Link href="/support" className="text-cyan-400 hover:underline">Support Center</Link> or reach out directly to our security engineering team.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
}
