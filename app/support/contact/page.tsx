'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Mail, MessageSquare, Shield, HelpCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactSupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <PageHeader
          badge="SUPPORT INQUIRIES"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Contact Engineering Support"
          description="Have questions about AEGIS, integration setup, or enterprise deployment? Reach out directly to our team."
          breadcrumbs={[
            { label: 'AEGIS', href: '/' },
            { label: 'Support', href: '/support' },
            { label: 'Contact' },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Direct Email Channel 1: Support */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-cyan-400">Technical Support</span>
              <div className="font-bold text-white text-sm">General Inquiries</div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Assistance with installation, connector setup, and console usage.
              </p>
              <a
                href={`mailto:${siteConfig.contacts.supportEmail}`}
                className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold block pt-2 break-all"
              >
                {siteConfig.contacts.supportEmail}
              </a>
            </div>

            {/* Direct Email Channel 2: Security */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-400">Security Team</span>
              <div className="font-bold text-white text-sm">Vulnerability Reports</div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Coordinated vulnerability disclosures and security queries.
              </p>
              <a
                href={`mailto:${siteConfig.contacts.securityEmail}`}
                className="text-amber-400 hover:text-amber-300 font-mono font-semibold block pt-2 break-all"
              >
                {siteConfig.contacts.securityEmail}
              </a>
            </div>

            {/* Direct Email Channel 3: Privacy & Legal */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-400">Privacy & Legal</span>
              <div className="font-bold text-white text-sm">Data Inquiries</div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Questions regarding DPA, subprocessor updates, and privacy terms.
              </p>
              <a
                href={`mailto:${siteConfig.contacts.privacyEmail}`}
                className="text-purple-400 hover:text-purple-300 font-mono font-semibold block pt-2 break-all"
              >
                {siteConfig.contacts.privacyEmail}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white">Send Us a Direct Message</h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Acknowledged</h4>
                <p className="text-xs text-slate-300">
                  Thank you for contacting AEGIS support. An engineer will follow up via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium">Subject / Inquiry Type</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-sans">
                    <option>Vercel Connector Setup Assistance</option>
                    <option>Digital Twin & Attack Path Evaluation</option>
                    <option>Enterprise Deployment Architecture</option>
                    <option>Privacy, Compliance & Legal Questions</option>
                    <option>Other Technical Question</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your question, environment configuration, or error message..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
                >
                  Send Support Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
