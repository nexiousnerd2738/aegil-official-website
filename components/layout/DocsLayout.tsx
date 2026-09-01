'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { 
  BookOpen, 
  Rocket, 
  Zap, 
  Shield, 
  FileText, 
  HelpCircle, 
  History, 
  Code2, 
  KeyRound, 
  ChevronRight,
  Search,
  Menu,
  X
} from 'lucide-react';

interface DocsSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon?: React.ElementType;
    badge?: string;
  }[];
}

const DOCS_NAV: DocsSection[] = [
  {
    title: 'Overview & Quickstart',
    items: [
      { title: 'Documentation Home', href: '/docs', icon: BookOpen },
      { title: 'Getting Started', href: '/docs/getting-started', icon: Rocket },
      { title: 'AEGIS for Vercel', href: '/docs/vercel', icon: Zap, badge: 'Popular' },
    ],
  },
  {
    title: 'Integrations & Access',
    items: [
      { title: 'Permissions Matrix', href: '/docs/permissions', icon: KeyRound },
      { title: 'Data Handling Pipeline', href: '/docs/data-handling', icon: FileText },
      { title: 'Security Architecture', href: '/docs/security', icon: Shield },
    ],
  },
  {
    title: 'Developer & API',
    items: [
      { title: 'REST API Reference', href: '/docs/api', icon: Code2 },
      { title: 'Troubleshooting Guide', href: '/docs/troubleshooting', icon: HelpCircle },
      { title: 'Product Changelog', href: '/docs/changelog', icon: History },
    ],
  },
];

interface DocsLayoutProps {
  title: string;
  description: string;
  badge?: string;
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
  title,
  description,
  badge = 'DOCUMENTATION',
  children,
}) => {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNav = DOCS_NAV.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge={badge}
          badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
          title={title}
          description={description}
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Docs', href: '/docs' },
            { label: title },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Mobile Sidebar Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium"
              >
                <div className="flex items-center gap-2">
                  <Menu className="w-4 h-4 text-cyan-400" />
                  <span>Docs Navigation Menu</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileSidebarOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {/* Left Docs Navigation Sidebar */}
            <aside
              className={`lg:col-span-3 space-y-6 ${
                mobileSidebarOpen ? 'block' : 'hidden lg:block'
              }`}
            >
              {/* Quick Filter */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition font-mono"
                />
              </div>

              {/* Navigation Sections */}
              <div className="space-y-6">
                {filteredNav.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon || FileText;
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileSidebarOpen(false)}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition ${
                                isActive
                                  ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold'
                                  : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                                <span className="truncate">{item.title}</span>
                              </div>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Support Callout */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <span className="font-bold text-white block">Need assistance?</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Browse our troubleshooting guide or contact support directly.
                </p>
                <Link
                  href="/support"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs inline-flex items-center gap-1 pt-1"
                >
                  <span>Support Center</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-9 glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800/80">
              <article className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-3 prose-h3:text-lg prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-code:text-cyan-300 prose-code:font-mono">
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
