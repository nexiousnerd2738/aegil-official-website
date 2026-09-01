'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  RotateCcw, 
  HelpCircle, 
  ArrowRight, 
  KeyRound, 
  ExternalLink,
  BookOpen,
  AlertTriangle
} from 'lucide-react';
import { VERCEL_INTEGRATION_CONFIG } from '@/config/integrations/vercel-permissions';

export default function VercelIntegrationDocsCanonicalPage() {
  return (
    <DocsLayout
      title="AEGIS for Vercel"
      description="Connect your Vercel organization to AEGIS to map live web applications, discover multi-hop attack paths, and monitor deployment security in your Digital Twin."
      badge="CANONICAL VERCEL DOCS"
      breadcrumbs={[
        { label: 'AEGIS', href: '/' },
        { label: 'Docs', href: '/docs' },
        { label: 'Integrations', href: '/docs/integrations' },
        { label: 'Vercel' },
      ]}
    >
      <div className="space-y-12">
        {/* Prominent Action Buttons Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 not-prose">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Official Vercel Integration</span>
            <div className="text-base font-bold text-white">Ready to connect your Vercel environment?</div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/docs/integrations/vercel/setup"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Connect Vercel</span>
            </Link>
            <Link
              href="/docs/integrations/vercel/setup"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs transition"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Read Setup Guide</span>
            </Link>
            <Link
              href="/docs/integrations/vercel/permissions"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs transition"
            >
              <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Permissions</span>
            </Link>
          </div>
        </div>

        {/* Section 1: Overview */}
        <div>
          <h2>1. Overview</h2>
          <p>
            The <strong>AEGIS for Vercel</strong> integration allows cybersecurity teams to connect their Vercel teams and personal accounts via standard OAuth 2.0. AEGIS continuously reads deployment and project topology to construct an authoritative <strong>Digital Twin</strong> graph, enabling security analysts to identify multi-hop breach paths before attackers exploit them.
          </p>
        </div>

        {/* Section 2: How the Integration Works */}
        <div>
          <h2>2. How the Integration Works</h2>
          <p>
            When authorized, AEGIS receives a scoped Bearer token. In the background, connector synchronization tasks query Vercel&apos;s REST API to discover:
          </p>
          <ul>
            <li><strong>Projects:</strong> Web applications and framework settings mapped as <code>CLOUD_RESOURCE</code> graph assets.</li>
            <li><strong>Deployments:</strong> Live production and preview deployments mapped to evaluate internet exposure.</li>
            <li><strong>Teams & Collaborators:</strong> Team member roles mapped as <code>USER</code> assets to model privilege boundaries.</li>
            <li><strong>Domains:</strong> Custom apex and subdomain configurations mapped to trace attack path entry points.</li>
          </ul>
        </div>

        {/* Section 3: What AEGIS Accesses */}
        <div>
          <h2>3. What AEGIS Accesses (And What It Never Accesses)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
              <span className="font-mono text-emerald-400 font-bold uppercase block flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>What AEGIS Accesses</span>
              </span>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Project names, IDs, and framework types</li>
                <li>Deployment URLs, build status, and creator IDs</li>
                <li>Team names and collaborator role assignments</li>
                <li>Custom domains and DNS verification state</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
              <span className="font-mono text-rose-400 font-bold uppercase block flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>What AEGIS NEVER Accesses</span>
              </span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li>Git source code or repository contents</li>
                <li>Encrypted environment variable secret values</li>
                <li>End-user application traffic or customer payloads</li>
                <li>Billing credentials or credit card numbers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Required Permissions */}
        <div>
          <h2>4. Required Permissions & Scopes</h2>
          <p>
            AEGIS requests strictly <strong>100% Read-Only</strong> OAuth permissions. For full details, review our <Link href="/docs/integrations/vercel/permissions" className="text-cyan-400 hover:underline">Vercel Permissions Matrix</Link>.
          </p>
        </div>

        {/* Section 5: Data Handling */}
        <div>
          <h2>5. Data Handling & Token Storage</h2>
          <p>
            OAuth access tokens are encrypted immediately on ingestion using <strong>AES-256 Fernet</strong> symmetric keys. Tokens are stored encrypted in the database and decrypted only in-memory during sync jobs. Discovered metadata is strictly scoped by organization ID. Learn more in our <Link href="/docs/data-handling" className="text-cyan-400 hover:underline">Data Handling Documentation</Link>.
          </p>
        </div>

        {/* Section 6: Security */}
        <div>
          <h2>6. Security Controls</h2>
          <p>
            All API communications with Vercel are conducted over TLS 1.3. Role-Based Access Control (RBAC) ensures only authorized administrators in your organization can trigger connector syncs or modify settings.
          </p>
        </div>

        {/* Section 7: Installation / Connection */}
        <div>
          <h2>7. Installation & Connection Steps</h2>
          <p>
            Connecting your Vercel organization is a simple 5-step OAuth authorization. Step-by-step instructions are available in our <Link href="/docs/integrations/vercel/setup" className="text-cyan-400 hover:underline">Vercel Setup Guide</Link>.
          </p>
        </div>

        {/* Section 8: Disconnecting */}
        <div>
          <h2>8. Disconnecting & Revoking Access</h2>
          <p>
            You can revoke access at any time directly from the AEGIS console or the Vercel integrations dashboard. Read the full <Link href="/docs/integrations/vercel/disconnect" className="text-cyan-400 hover:underline">Disconnection Guide</Link>.
          </p>
        </div>

        {/* Section 9: Troubleshooting */}
        <div>
          <h2>9. Troubleshooting</h2>
          <p>
            Encountering callback errors, token expiration, or partial project discovery? Review our <Link href="/docs/integrations/vercel/troubleshooting" className="text-cyan-400 hover:underline">Vercel Troubleshooting Diagnostics</Link>.
          </p>
        </div>

        {/* Section 10: Frequently Asked Questions (FAQ) */}
        <div>
          <h2>10. Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4 not-prose mt-4 text-xs font-sans">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <h4 className="font-bold text-sm text-white">Does AEGIS have write access to my Vercel projects?</h4>
              <p className="text-slate-300">
                No. AEGIS requests only read-only scopes (<code>projects:read</code>, <code>deployments:read</code>, <code>teams:read</code>, <code>domains:read</code>). We cannot modify, redeploy, or delete your applications.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <h4 className="font-bold text-sm text-white">Can AEGIS see my environment variable secrets?</h4>
              <p className="text-slate-300">
                No. AEGIS does not inspect or request decrypted environment variable secrets.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <h4 className="font-bold text-sm text-white">How often does AEGIS sync with Vercel?</h4>
              <p className="text-slate-300">
                AEGIS syncs automatically every 60 minutes, or immediately upon manual request from the Connectors console.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/integrations/vercel/setup"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Proceed to Step-by-Step Setup Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
