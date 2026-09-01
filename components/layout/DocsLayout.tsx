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
  X,
  Layers,
  RotateCcw,
  AlertTriangle,
  Lock,
  FileCode2,
  Plug
} from 'lucide-react';

interface DocsSubItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  badge?: string;
}

interface DocsItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  badge?: string;
  subItems?: DocsSubItem[];
}

interface DocsSection {
  title: string;
  items: DocsItem[];
}

const DOCS_NAV: DocsSection[] = [
  {
    title: 'GETTING STARTED',
    items: [
      { title: 'Overview', href: '/docs', icon: BookOpen },
      { title: 'Getting Started', href: '/docs/getting-started', icon: Rocket },
    ],
  },
  {
    title: 'INTEGRATIONS',
    items: [
      { title: 'All Integrations', href: '/docs/integrations', icon: Plug },
      { 
        title: 'Vercel', 
        href: '/docs/integrations/vercel', 
        icon: Zap, 
        badge: 'Active',
        subItems: [
          { title: 'Overview', href: '/docs/integrations/vercel', icon: Zap },
          { title: 'Setup Guide', href: '/docs/integrations/vercel/setup', icon: Rocket },
          { title: 'Permissions', href: '/docs/integrations/vercel/permissions', icon: KeyRound },
          { title: 'Disconnect', href: '/docs/integrations/vercel/disconnect', icon: RotateCcw },
          { title: 'Troubleshooting', href: '/docs/integrations/vercel/troubleshooting', icon: AlertTriangle },
        ],
      },
    ],
  },
  {
    title: 'SECURITY',
    items: [
      { title: 'Security Architecture', href: '/docs/security', icon: Shield },
      { title: 'Data Handling', href: '/docs/data-handling', icon: FileText },
      { title: 'Permissions Matrix', href: '/docs/permissions', icon: KeyRound },
      { title: 'Security Reporting', href: '/docs/security/report', icon: Lock },
    ],
  },
  {
    title: 'REFERENCE',
    items: [
      { title: 'REST API', href: '/docs/api', icon: Code2 },
      { title: 'Global Troubleshooting', href: '/docs/troubleshooting', icon: HelpCircle },
      { title: 'Changelog', href: '/docs/changelog', icon: History },
    ],
  },
];

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocsLayoutProps {
  title: string;
  description: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
  title,
  description,
  badge = 'DOCUMENTATION',
  breadcrumbs,
  children,
}) => {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'AEGIS', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: title },
  ];

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge={badge}
          badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
          title={title}
          description={description}
          breadcrumbs={breadcrumbs || defaultBreadcrumbs}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-medium"
              >
                <div className="flex items-center gap-2">
                  <Menu className="w-4 h-4 text-cyan-400" />
                  <span>Documentation Navigation</span>
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
              {/* Filter */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition font-mono"
                />
              </div>

              {/* Categorized Nav Sections */}
              <div className="space-y-6">
                {DOCS_NAV.map((section, idx) => {
                  const filteredItems = section.items.filter((item) => {
                    const matchMain = item.title.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchSub = item.subItems?.some((sub) => sub.title.toLowerCase().includes(searchQuery.toLowerCase()));
                    return matchMain || matchSub;
                  });

                  if (filteredItems.length === 0) return null;

                  return (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {filteredItems.map((item) => {
                          const Icon = item.icon || FileText;
                          const isActive = pathname === item.href;
                          const isChildActive = item.subItems?.some((sub) => pathname === sub.href);

                          return (
                            <li key={item.href} className="space-y-1">
                              <Link
                                href={item.href}
                                onClick={() => setMobileSidebarOpen(false)}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition ${
                                  isActive
                                    ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold'
                                    : isChildActive
                                    ? 'text-cyan-400 bg-slate-900/40'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 truncate">
                                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive || isChildActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                                  <span className="truncate">{item.title}</span>
                                </div>
                                {item.badge && (
                                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>

                              {/* Nested SubItems (e.g. Vercel Overview, Setup, Permissions, Disconnect, Troubleshooting) */}
                              {item.subItems && (
                                <ul className="pl-6 space-y-0.5 border-l border-slate-800 ml-4 py-0.5">
                                  {item.subItems.map((sub) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          onClick={() => setMobileSidebarOpen(false)}
                                          className={`block px-2.5 py-1 rounded text-[11px] font-medium transition ${
                                            isSubActive
                                              ? 'text-cyan-300 font-semibold bg-cyan-500/10 border-l-2 border-cyan-400'
                                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                                          }`}
                                        >
                                          {sub.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Support Callout */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                <span className="font-bold text-white block">Need assistance?</span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Browse our diagnostic troubleshooting guides or contact engineering support.
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
