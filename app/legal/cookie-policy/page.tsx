'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie & Local Storage Policy"
      description="Details regarding the strictly necessary session cookies and client-side storage mechanisms utilized across the AEGIS console."
    >
      <div className="space-y-6">
        <div>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are widely used to make web applications function efficiently and securely.
          </p>
        </div>

        <div>
          <h2>2. How AEGIS Uses Cookies & Local Storage</h2>
          <p>
            AEGIS utilizes <strong>strictly necessary session cookies</strong> and browser <code>localStorage</code> to maintain authenticated user sessions and application state. We do not use third-party advertising or cross-site tracking cookies.
          </p>
        </div>

        <div>
          <h2>3. Detailed Cookie & Storage Inventory</h2>
          <div className="glass-panel rounded-xl border border-slate-800 overflow-hidden not-prose my-4">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-slate-950 text-slate-300 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3">Name / Key</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-mono font-bold text-white">sb-access-token</td>
                  <td className="p-3 font-mono">Cookie / Storage</td>
                  <td className="p-3">Session (1 hr)</td>
                  <td className="p-3">Maintains authenticated Supabase JWT session.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-white">sb-refresh-token</td>
                  <td className="p-3 font-mono">HttpOnly Cookie</td>
                  <td className="p-3">30 Days</td>
                  <td className="p-3">Enables secure token refresh without re-entering credentials.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-white">aegis_active_org</td>
                  <td className="p-3 font-mono">localStorage</td>
                  <td className="p-3">Persistent</td>
                  <td className="p-3">Remembers the currently selected organization ID.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-white">theme</td>
                  <td className="p-3 font-mono">localStorage</td>
                  <td className="p-3">Persistent</td>
                  <td className="p-3">Stores dark mode UI preference.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through browser settings. Note that disabling strictly necessary authentication cookies will prevent you from logging in to the AEGIS web console.
          </p>
        </div>

        <div>
          <h2>5. Contact Information</h2>
          <p>
            For questions about our cookie usage, contact: <a href={`mailto:${siteConfig.contacts.privacyEmail}`}>{siteConfig.contacts.privacyEmail}</a>.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
