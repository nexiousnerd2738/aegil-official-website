'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  Save, 
  RotateCw, 
  CheckCircle2, 
  Lock, 
  AlertTriangle, 
  Server,
  Layers,
  ArrowRight
} from 'lucide-react';

function ConfigureContent() {
  const searchParams = useSearchParams();
  const teamId = searchParams.get('teamId') || searchParams.get('team_id');
  const configurationId = searchParams.get('configurationId');

  const [saved, setSaved] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [autoDiscover, setAutoDiscover] = useState(true);
  const [syncInterval, setSyncInterval] = useState('60');
  const [monitorPreviews, setMonitorPreviews] = useState(true);
  const [alertSensitivity, setAlertSensitivity] = useState('standard');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSyncNow = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Header */}
      <div className="glass-panel rounded-3xl p-8 border border-cyan-500/30 glow-box-blue flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Settings className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
              INTEGRATION SETTINGS
            </span>
            <h1 className="text-2xl font-extrabold text-white">
              Vercel Connector Configuration
            </h1>
            <p className="text-xs text-slate-300 font-sans">
              Manage telemetry sync schedules, attack path modeling rules, and asset discovery preferences.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ACTIVE & ENCRYPTED</span>
          </span>
        </div>
      </div>

      {/* Target Info Box */}
      {(teamId || configurationId) && (
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Target Team: <strong className="text-slate-200">{teamId || 'Personal Account'}</strong></span>
          </div>
          {configurationId && (
            <div>Configuration ID: <strong className="text-slate-200">{configurationId}</strong></div>
          )}
        </div>
      )}

      {/* Configuration Form */}
      <form onSubmit={handleSave} className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-8 text-xs font-sans">
        <div className="space-y-6">
          <h2 className="text-base font-bold text-white border-b border-slate-800 pb-3">
            Discovery & Synchronization Settings
          </h2>

          {/* Setting 1: Auto Discovery */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="space-y-1 pr-4">
              <span className="font-bold text-sm text-white block">Automatic Resource Discovery</span>
              <p className="text-slate-300">
                Automatically import newly created Vercel projects and custom domains into the Digital Twin.
              </p>
            </div>
            <input
              type="checkbox"
              checked={autoDiscover}
              onChange={(e) => setAutoDiscover(e.target.checked)}
              className="w-5 h-5 rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
            />
          </div>

          {/* Setting 2: Sync Interval */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <label className="font-bold text-sm text-white block">Background Sync Interval</label>
            <p className="text-slate-300">
              How frequently AEGIS polls the Vercel API for deployment changes and collaborator access updates.
            </p>
            <select
              value={syncInterval}
              onChange={(e) => setSyncInterval(e.target.value)}
              className="w-full sm:w-64 px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-mono"
            >
              <option value="15">Every 15 Minutes</option>
              <option value="30">Every 30 Minutes</option>
              <option value="60">Every 60 Minutes (Recommended)</option>
              <option value="360">Every 6 Hours</option>
              <option value="1440">Once Daily (24 Hours)</option>
            </select>
          </div>

          {/* Setting 3: Monitor Preview Deployments */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="space-y-1 pr-4">
              <span className="font-bold text-sm text-white block">Monitor Preview Deployments</span>
              <p className="text-slate-300">
                Include pull-request preview deployment URLs in attack path surface calculation.
              </p>
            </div>
            <input
              type="checkbox"
              checked={monitorPreviews}
              onChange={(e) => setMonitorPreviews(e.target.checked)}
              className="w-5 h-5 rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 cursor-pointer"
            />
          </div>

          {/* Setting 4: Alert Sensitivity */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <label className="font-bold text-sm text-white block">Detection & Correlation Sensitivity</label>
            <p className="text-slate-300">
              Threshold for elevating deployment anomalies and access drift into active SOC incidents.
            </p>
            <select
              value={alertSensitivity}
              onChange={(e) => setAlertSensitivity(e.target.value)}
              className="w-full sm:w-64 px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition font-mono"
            >
              <option value="high">High Sensitivity (Elevate All Drift)</option>
              <option value="standard">Standard (Recommended)</option>
              <option value="low">Low (Critical Breaches Only)</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
            >
              <Save className="w-4 h-4" />
              <span>{saved ? 'Configuration Saved!' : 'Save Configuration'}</span>
            </button>

            <button
              type="button"
              onClick={handleSyncNow}
              disabled={syncing}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition"
            >
              <RotateCw className={`w-3.5 h-3.5 text-cyan-400 ${syncing ? 'animate-spin' : ''}`} />
              <span>{syncing ? 'Syncing...' : 'Sync Resources Now'}</span>
            </button>
          </div>

          <Link
            href="/vercel/import"
            className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs flex items-center gap-1"
          >
            <span>Import Specific Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default function ConfigurePage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <Suspense fallback={
          <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400 font-mono text-xs">
            Loading configuration panel...
          </div>
        }>
          <ConfigureContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
