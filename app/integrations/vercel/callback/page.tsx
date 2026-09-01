'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Zap, 
  CheckCircle2, 
  Loader2, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  KeyRound, 
  Layers, 
  Network,
  ExternalLink
} from 'lucide-react';

function VercelCallbackHandler() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const teamId = searchParams.get('teamId') || searchParams.get('team_id');
  const configurationId = searchParams.get('configurationId');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  const [status, setStatus] = useState<'verifying' | 'connected' | 'error'>('verifying');
  const [progressStep, setProgressStep] = useState(1);

  useEffect(() => {
    if (error) {
      setStatus('error');
      return;
    }

    // Simulate cryptographic token exchange & discovery initiation
    const timer1 = setTimeout(() => setProgressStep(2), 1000);
    const timer2 = setTimeout(() => setProgressStep(3), 2200);
    const timer3 = setTimeout(() => {
      setProgressStep(4);
      setStatus('connected');
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [code, error]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 glow-box-blue space-y-8">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner shadow-cyan-500/20">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                OAUTH 2.0 CALLBACK
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                Vercel Integration Authorization
              </h1>
            </div>
          </div>

          <div className="hidden sm:block">
            {status === 'connected' ? (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AUTHORIZED</span>
              </span>
            ) : status === 'error' ? (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>FAILED</span>
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>HANDSHAKE</span>
              </span>
            )}
          </div>
        </div>

        {/* State 1: Error during OAuth */}
        {status === 'error' && (
          <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-4">
            <div className="flex items-center gap-2 text-rose-300 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>Authorization Encountered an Error</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {errorDescription || error || 'The authorization request was cancelled or expired.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/docs/integrations/vercel/setup"
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs transition"
              >
                Retry Setup Flow
              </Link>
              <Link
                href="/docs/integrations/vercel/troubleshooting"
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs transition"
              >
                Troubleshooting Guide
              </Link>
            </div>
          </div>
        )}

        {/* State 2 & 3: In Progress or Completed */}
        {status !== 'error' && (
          <div className="space-y-6">
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Handshake Progress:</span>
                <span className="text-cyan-400 font-bold">{status === 'connected' ? '100%' : `${progressStep * 25}%`}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                  style={{ width: status === 'connected' ? '100%' : `${progressStep * 25}%` }}
                />
              </div>
            </div>

            {/* Step List */}
            <div className="space-y-3 font-sans text-xs">
              <div className={`p-4 rounded-xl border transition-all ${
                progressStep >= 1 ? 'bg-slate-900/80 border-slate-700 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-400'
              } flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {progressStep > 1 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin shrink-0" />
                  )}
                  <span>1. Validating OAuth state parameter & authorization code</span>
                </div>
                {code && <span className="font-mono text-[10px] text-cyan-400">code_received</span>}
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                progressStep >= 2 ? 'bg-slate-900/80 border-slate-700 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-400'
              } flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {progressStep > 2 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : progressStep === 2 ? (
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-700 block" />
                  )}
                  <span>2. Performing AES-256 Fernet symmetric token encryption</span>
                </div>
                {progressStep >= 2 && <span className="font-mono text-[10px] text-emerald-400">encrypted</span>}
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                progressStep >= 3 ? 'bg-slate-900/80 border-slate-700 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-400'
              } flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {progressStep > 3 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : progressStep === 3 ? (
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-700 block" />
                  )}
                  <span>3. Initializing resource discovery (projects, deployments, domains)</span>
                </div>
                {progressStep >= 3 && <span className="font-mono text-[10px] text-cyan-400">syncing</span>}
              </div>

              <div className={`p-4 rounded-xl border transition-all ${
                progressStep >= 4 ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200' : 'bg-slate-950/40 border-slate-900 text-slate-400'
              } flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {progressStep >= 4 ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-700 block" />
                  )}
                  <span>4. Digital Twin graph reconciliation active</span>
                </div>
                {progressStep >= 4 && <span className="font-mono text-[10px] text-emerald-400 font-bold">READY</span>}
              </div>
            </div>

            {/* Context Details */}
            {(teamId || configurationId) && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
                <span className="text-cyan-400 font-bold block mb-1">TARGET CONTEXT:</span>
                {teamId && <div>Team ID: <span className="text-slate-200">{teamId}</span></div>}
                {configurationId && <div>Configuration ID: <span className="text-slate-200">{configurationId}</span></div>}
              </div>
            )}

            {/* Action Buttons upon Completion */}
            {status === 'connected' && (
              <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/docs/integrations/vercel"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/25"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>View Connected Integration Docs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition"
                  >
                    <Network className="w-4 h-4 text-cyan-400" />
                    <span>Explore Digital Twin Graph</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VercelCallbackPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <Suspense fallback={
          <div className="max-w-3xl mx-auto px-4 py-20 text-center text-slate-400 font-mono text-xs">
            Loading authorization handshake...
          </div>
        }>
          <VercelCallbackHandler />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
