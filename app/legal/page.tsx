'use client';

import React from 'react';
import Link from 'next/link';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { Lock, FileText, Shield, Cookie, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const LEGAL_CARDS = [
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, store, protect, and process user account details and target integration data.',
    href: '/legal/privacy',
    icon: Lock,
  },
  {
    title: 'End User License Agreement (EULA)',
    description: 'The formal software license terms, acceptable use limitations, and responsibilities governing AEGIS deployment.',
    href: '/legal/eula',
    icon: FileText,
  },
  {
    title: 'Terms of Service',
    description: 'General platform access terms, account responsibilities, service availability, and intellectual property terms.',
    href: '/legal/terms',
    icon: Shield,
  },
  {
    title: 'Cookie Policy',
    description: 'Detailed explanation of minimal session cookies and local storage mechanisms utilized by the web console.',
    href: '/legal/cookie-policy',
    icon: Cookie,
  },
  {
    title: 'Data Processing Addendum',
    description: 'Our technical commitments regarding data minimization, purpose limitation, and customer data security.',
    href: '/legal/data-processing',
    icon: CheckCircle2,
  },
  {
    title: 'Authorized Subprocessors',
    description: 'Exhaustive list of third-party infrastructure and cloud service providers utilized by AEGIS.',
    href: '/legal/subprocessors',
    icon: Users,
  },
];

export default function LegalIndexPage() {
  return (
    <LegalLayout
      title="Legal & Privacy Documentation"
      description="Review our formal agreements, privacy practices, data handling commitments, and subprocessor disclosures."
    >
      <div className="space-y-8">
        <div>
          <h2>Legal Framework</h2>
          <p>
            AEGIS is committed to total transparency in security, privacy, and data governance. Please select a policy below to review the applicable terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 not-prose">
          {LEGAL_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="p-5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition pt-2 border-t border-slate-800/60">
                  <span>View Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </LegalLayout>
  );
}
