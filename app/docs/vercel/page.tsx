'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Zap, CheckCircle2, ShieldCheck, Lock, RotateCcw, AlertCircle, ArrowRight } from 'lucide-react';
import { VERCEL_INTEGRATION_CONFIG } from '@/config/integrations/vercel-permissions';

export default function VercelDocsPage() {
  return (
    <DocsLayout
      title="AEGIS for Vercel Integration Guide"
      description="Complete setup, synchronization, permission disclosures, and disconnection guide for connecting your Vercel organization."
      badge="INTEGRATION GUIDE"
    >
      <div className="space-y-8">
        <div>
          <h2>Overview</h2>
          <p>
            The AEGIS for Vercel integration incorporates your Vercel projects, deployments, and team collaborators into your real-time security model. This allows security analysts to visualize cloud infrastructure attack surfaces, calculate exposure scores, and identify multi-hop paths to sensitive assets.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-white m-0 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Prerequisites</span>
          </h3>
          <ul className="text-sm text-slate-300 space-y-1.5 list-disc list-inside">
            <li>An active AEGIS account with OWNER or ADMIN permissions in your organization.</li>
            <li>A Vercel account with administrative access or permission to authorize OAuth integrations for the target team.</li>
            <li>Web browser with cookies and pop-ups enabled for the OAuth authentication flow.</li>
          </ul>
        </div>

        {/* Step-by-Step Connection Instructions */}
        <div>
          <h2>Connection Walkthrough</h2>
          <div className="space-y-6 not-prose mt-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 1: OPEN CONNECTORS</span>
              <h4 className="text-sm font-bold text-white">Navigate to Integrations</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                In your AEGIS web console, navigate to <strong>Connectors</strong> in the left sidebar menu. Select <strong>Available Integrations</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 2: SELECT VERCEL</span>
              <h4 className="text-sm font-bold text-white">Initiate Connection</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Locate the <strong>Vercel</strong> provider card and click <strong>Connect via OAuth</strong>. AEGIS will generate a cryptographically secure random state parameter and redirect you to Vercel’s authorization portal.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 3: AUTHENTICATE</span>
              <h4 className="text-sm font-bold text-white">Sign In to Vercel</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If not already logged in, enter your Vercel credentials. Select the specific Vercel team or personal account you wish to monitor.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 4: REVIEW SCOPES</span>
              <h4 className="text-sm font-bold text-white">Confirm Read-Only Permissions</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vercel will present the exact list of requested scopes: <code>projects:read</code>, <code>deployments:read</code>, <code>teams:read</code>, and <code>domains:read</code>. Confirm that all scopes are strictly read-only.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 5: AUTHORIZE</span>
              <h4 className="text-sm font-bold text-white">Grant Access</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click <strong>Authorize Integration</strong>. Vercel redirects back to the AEGIS callback endpoint with the authorization code. AEGIS exchanges the code for an access token and encrypts it at rest using AES-256 Fernet.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 6: DISCOVERY</span>
              <h4 className="text-sm font-bold text-white">Background Synchronization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                AEGIS begins immediate resource discovery, enumerating projects, deployments, domains, and team members through the Vercel REST API.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STEP 7: DIGITAL TWIN</span>
              <h4 className="text-sm font-bold text-white">Graph Topological Integration</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discovered resources are normalized and linked in the Digital Twin graph. Attack paths and exposure scores are automatically recalculated.
              </p>
            </div>
          </div>
        </div>

        {/* How to Disconnect Section */}
        <div>
          <h2>How to Disconnect & Revoke Access</h2>
          <p>
            You can revoke AEGIS access at any time through either of the methods below. Disconnection immediately halts all synchronization cycles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-white flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Disconnect from AEGIS Console</span>
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300 font-sans">
                <li>Go to <strong>Connectors ➔ Connected Targets</strong>.</li>
                <li>Find your Vercel connector.</li>
                <li>Click <strong>Disconnect</strong>.</li>
                <li>AEGIS calls Vercel token revocation and purges credentials.</li>
              </ol>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-white flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Revoke via Vercel Settings</span>
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300 font-sans">
                <li>Open <strong>Vercel Dashboard ➔ Settings ➔ Integrations</strong>.</li>
                <li>Locate <strong>AEGIS</strong>.</li>
                <li>Click <strong>Manage ➔ Revoke Access</strong>.</li>
                <li>Vercel instantly invalidates the OAuth token.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/docs/permissions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Review the complete Permissions Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
