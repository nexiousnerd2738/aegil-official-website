'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Shield, FileText, Lock, Users, Cookie, CheckCircle2, ChevronRight, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface LegalLayoutProps {
  title: string;
  description: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LEGAL_NAV = [
  { title: 'Privacy Policy', href: '/legal/privacy', icon: Lock },
  { title: 'End User License Agreement (EULA)', href: '/legal/eula', icon: FileText },
  { title: 'Terms of Service', href: '/legal/terms', icon: Shield },
  { title: 'Cookie Policy', href: '/legal/cookie-policy', icon: Cookie },
  { title: 'Data Processing Addendum', href: '/legal/data-processing', icon: CheckCircle2 },
  { title: 'Authorized Subprocessors', href: '/legal/subprocessors', icon: Users },
];

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  description,
  lastUpdated = siteConfig.lastUpdated,
  children,
}) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="LEGAL & PRIVACY"
          badgeIcon={<Shield className="w-3.5 h-3.5" />}
          title={title}
          description={description}
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Legal', href: '/legal' },
            { label: title },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Legal Navigation Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="space-y-2">
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3">
                  Legal Documents
                </h3>
                <ul className="space-y-1">
                  {LEGAL_NAV.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                            isActive
                              ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold'
                              : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                          <span className="truncate">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Privacy & Legal Inquiries Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5 font-sans">
                <span className="font-bold text-white block">Legal & Privacy Contact</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Questions regarding our policies, privacy practices, or data handling?
                </p>
                <a
                  href={`mailto:${siteConfig.contacts.legalEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs flex items-center gap-1.5 pt-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.contacts.legalEmail}</span>
                </a>
              </div>
            </aside>

            {/* Main Legal Content Container */}
            <main className="lg:col-span-9 glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800/80">
              {/* Last Updated Timestamp Banner */}
              <div className="mb-8 pb-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Official Release Version</span>
                </div>
                <div>
                  Last updated: <span className="text-slate-200 font-bold">{lastUpdated}</span>
                </div>
              </div>

              <article className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-3 prose-h3:text-lg prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300">
                {children}
              </article>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
