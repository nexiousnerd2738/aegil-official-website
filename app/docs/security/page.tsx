'use client';

import React from 'react';
import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { ShieldCheck, Lock, Eye, KeyRound, Server, FileKey, CheckSquare, ArrowRight } from 'lucide-react';

export default function SecurityDocsPage() {
  return (
    <DocsLayout
      title="Security Architecture & Controls"
      description="In-depth examination of the authentication, encryption, role-based access control, and tenant isolation models powering AEGIS."
      badge="SECURITY ARCHITECTURE"
    >
      <div className="space-y-8">
        <div>
          <h2>Core Security Principles</h2>
          <p>
            AEGIS is engineered specifically for defensive cybersecurity operations. Security is not an afterthought or marketing layer; it is enforced mathematically through strict RBAC, encrypted storage, and bounded agent execution.
          </p>
        </div>

        {/* Control 1: RBAC */}
        <div>
          <h2>Role-Based Access Control (RBAC)</h2>
          <p>
            Every user within an organization is assigned one of five granular hierarchical roles:
          </p>
          <div className="glass-panel rounded-xl border border-slate-800 overflow-hidden not-prose my-4">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3">Role</th>
                  <th className="p-3">Hierarchy</th>
                  <th className="p-3">Connectors & Config</th>
                  <th className="p-3">Attack Paths & Digital Twin</th>
                  <th className="p-3">Response Containment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-bold text-white font-mono">OWNER</td>
                  <td className="p-3 font-mono">100</td>
                  <td className="p-3 text-emerald-400">Full Access</td>
                  <td className="p-3 text-emerald-400">Full Access</td>
                  <td className="p-3 text-emerald-400">Approve & Execute</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white font-mono">ADMIN</td>
                  <td className="p-3 font-mono">80</td>
                  <td className="p-3 text-emerald-400">Full Access</td>
                  <td className="p-3 text-emerald-400">Full Access</td>
                  <td className="p-3 text-emerald-400">Approve & Execute</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white font-mono">SECURITY_ANALYST</td>
                  <td className="p-3 font-mono">60</td>
                  <td className="p-3 text-slate-400">Read / Sync</td>
                  <td className="p-3 text-emerald-400">Full Access</td>
                  <td className="p-3 text-amber-300">Plan & Simulate</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white font-mono">OPERATOR</td>
                  <td className="p-3 font-mono">40</td>
                  <td className="p-3 text-slate-400">Read-Only</td>
                  <td className="p-3 text-slate-400">Read-Only</td>
                  <td className="p-3 text-slate-400">Execute Approved</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white font-mono">VIEWER</td>
                  <td className="p-3 font-mono">20</td>
                  <td className="p-3 text-slate-400">Read-Only</td>
                  <td className="p-3 text-slate-400">Read-Only</td>
                  <td className="p-3 text-slate-500">No Access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Control 2: Token Encryption */}
        <div>
          <h2>Connector Credential Encryption (AES-256 Fernet)</h2>
          <p>
            When a target environment (such as Vercel) is authorized via OAuth, the returned Bearer access token is encrypted on the server before database insertion using Fernet symmetric encryption with 256-bit keys derived from PBKDF2:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 not-prose my-3">
            token_blob = Fernet(ENCRYPTION_KEY).encrypt(raw_access_token.encode())
          </div>
          <p>
            API endpoints never return <code>encrypted_credentials</code> in any public response schema. Tokens are decrypted strictly in-memory within connector worker jobs during sync cycles.
          </p>
        </div>

        {/* Control 3: Tool Gatekeeper */}
        <div>
          <h2>Tool Policy Gatekeeper & Bounded Execution</h2>
          <p>
            Autonomous agents and AI Security Analysts have zero unrestricted access to OS shells, root filesystems, or direct external internet endpoints. All actions are classified into:
          </p>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            <li><strong>READ_ONLY:</strong> Safe inspection of graph entities, incident timelines, and evidence (immediate execution).</li>
            <li><strong>SIMULATE_ONLY:</strong> Dry-run calculation of response impacts without state changes.</li>
            <li><strong>MUTATING:</strong> Containment actions (host isolation, credential revocation). These strictly require human approval or pre-authorized policy matching.</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/security/report"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <span>Read our Security Vulnerability Reporting Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
