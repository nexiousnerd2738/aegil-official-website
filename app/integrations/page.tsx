'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Zap, Server, Cloud, Github, Code2, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface IntegrationCard {
  name: string;
  category: string;
  status: 'AVAILABLE' | 'CONNECTOR_AGENT' | 'COMING_SOON';
  description: string;
  icon: React.ElementType;
  href?: string;
  badges: string[];
}

const INTEGRATIONS: IntegrationCard[] = [
  {
    name: 'Vercel',
    category: 'Cloud Deployments & Web Applications',
    status: 'AVAILABLE',
    description: 'OAuth 2.0 integration discovering projects, deployments, domains, and team collaborator roles for continuous Digital Twin mapping.',
    icon: Zap,
    href: '/integrations/vercel',
    badges: ['OAuth 2.0', 'Read-Only', 'Real-Time Sync'],
  },
  {
    name: 'Active Directory / LDAP',
    category: 'Identity & Access Management',
    status: 'CONNECTOR_AGENT',
    description: 'On-premise connector agent synchronizing users, security groups, OUs, and credential relationships into the attack graph.',
    icon: Server,
    badges: ['On-Prem Agent', 'Directory Sync', 'Privilege Mapping'],
  },
  {
    name: 'Generic REST API',
    category: 'Custom Infrastructure',
    status: 'AVAILABLE',
    description: 'Universal API key connector enabling custom telemetry ingestion and asset synchronization for bespoke enterprise pipelines.',
    icon: Code2,
    badges: ['API Key', 'JSON Envelopes', 'Webhook Stream'],
  },
  {
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud Infrastructure',
    status: 'COMING_SOON',
    description: 'Cross-account IAM role discovery for EC2, S3, RDS, Lambda, and CloudTrail event ingestion.',
    icon: Cloud,
    badges: ['Cross-Account IAM', 'CloudTrail Ingest'],
  },
  {
    name: 'Google Cloud Platform (GCP)',
    category: 'Cloud Infrastructure',
    status: 'COMING_SOON',
    description: 'Workload Identity Federation for GKE clusters, Cloud Functions, and Audit Log telemetry streams.',
    icon: Cloud,
    badges: ['Workload Identity', 'Audit Stream'],
  },
  {
    name: 'GitHub Enterprise',
    category: 'Developer & Code Security',
    status: 'COMING_SOON',
    description: 'OAuth app for repository collaborator access mapping, branch protections, and Actions secrets exposure.',
    icon: Github,
    badges: ['OAuth App', 'Access Graph'],
  },
];

export default function IntegrationsCatalogPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="INTEGRATIONS HUB"
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          title="Target Environment Integrations"
          description="Connect your authorized cloud platforms, identity providers, and developer environments to feed real data into the AEGIS Digital Twin."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Integrations' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      {item.status === 'AVAILABLE' ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          AVAILABLE
                        </span>
                      ) : item.status === 'CONNECTOR_AGENT' ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                          CONNECTOR AGENT
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700">
                          COMING SOON
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mb-3">
                      {item.category}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {item.badges.map((b, bIdx) => (
                        <span key={bIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {b}
                        </span>
                      ))}
                    </div>

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-semibold text-xs transition"
                      >
                        <span>View Vercel Integration</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 py-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Planned in Roadmap</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
