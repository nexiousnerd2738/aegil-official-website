'use client';

import React from 'react';
import { ShieldAlert, Lock, FileKey, CheckSquare, EyeOff, Server } from 'lucide-react';

interface SecurityPillar {
  title: string;
  description: string;
  icon: React.ElementType;
}

const PILLARS: SecurityPillar[] = [
  {
    title: 'Zero Unrestricted Shell Access',
    description: 'Autonomous agents and AI tools never execute raw bash/PowerShell or unvetted commands. All actions operate through typed, strictly bounded tool registries.',
    icon: EyeOff,
  },
  {
    title: 'Multi-Tenant Organization Isolation',
    description: 'Every database query and API route strictly enforces org_id scoping. Cross-tenant data leakage is cryptographically and logically prohibited.',
    icon: Server,
  },
  {
    title: 'AES-256 Credential Encryption',
    description: 'Target connector tokens (Vercel, AWS, GitHub) are encrypted at rest using Fernet symmetric encryption keys and decrypted only in-memory during sync.',
    icon: FileKey,
  },
  {
    title: 'MITRE ATT&CK Matrix Alignment',
    description: 'Every detection rule, attack path hop, and incident stage maps directly to standardized MITRE enterprise tactics and techniques for audit clarity.',
    icon: CheckSquare,
  },
];

export const EnterpriseSecurity: React.FC = () => {
  return (
    <section id="security" className="py-24 relative bg-[#05070e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Security & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Zero-Trust Defense Boundaries
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            AEGIL is architected with defense-in-depth from the ground up, guaranteeing that blue team automation remains safe and strictly controlled.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-7 flex items-start gap-5 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 shadow-lg shadow-cyan-950/40">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
