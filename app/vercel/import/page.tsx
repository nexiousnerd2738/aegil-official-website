'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Zap, 
  Download, 
  CheckCircle2, 
  Layers, 
  Network, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Server,
  Loader2
} from 'lucide-react';

interface MockProject {
  id: string;
  name: string;
  framework: string;
  domain: string;
  deployments: number;
}

const SAMPLE_PROJECTS: MockProject[] = [
  { id: 'prj_web_app', name: 'enterprise-dashboard', framework: 'Next.js 14', domain: 'app.example.com', deployments: 42 },
  { id: 'prj_api_service', name: 'auth-gateway-api', framework: 'Node.js', domain: 'api.example.com', deployments: 18 },
  { id: 'prj_docs_site', name: 'public-developer-docs', framework: 'Next.js', domain: 'docs.example.com', deployments: 9 },
  { id: 'prj_marketing', name: 'corporate-marketing', framework: 'Astro', domain: 'example.com', deployments: 31 },
];

function VercelImportContent() {
  const searchParams = useSearchParams();
  const teamId = searchParams.get('teamId') || searchParams.get('team_id');

  const [selectedProjects, setSelectedProjects] = useState<string[]>(['prj_web_app', 'prj_api_service', 'prj_docs_site', 'prj_marketing']);
  const [importing, setImporting] = useState(false);
  const [imported, setImported] = useState(false);

  const toggleProject = (id: string) => {
    if (selectedProjects.includes(id)) {
      setSelectedProjects(selectedProjects.filter((p) => p !== id));
    } else {
      setSelectedProjects([...selectedProjects, id]);
    }
  };

  const handleStartImport = () => {
    setImporting(true);
    setTimeout(() => {
      setImporting(false);
      setImported(true);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Header */}
      <div className="glass-panel rounded-3xl p-8 border border-cyan-500/30 glow-box-blue flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Download className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
              RESOURCE IMPORT
            </span>
            <h1 className="text-2xl font-extrabold text-white">
              Import Vercel Target Resources
            </h1>
            <p className="text-xs text-slate-300 font-sans">
              Select projects, custom domains, and environments to reconcile into your AEGIS Digital Twin.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>{teamId ? `TEAM: ${teamId}` : 'ALL ACCESSIBLE TEAMS'}</span>
          </span>
        </div>
      </div>

      {/* Project Selector List */}
      <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="space-y-0.5">
            <h2 className="text-base font-bold text-white">Discovered Vercel Projects</h2>
            <p className="text-xs text-slate-400">Select which projects to include in the attack graph evaluation.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (selectedProjects.length === SAMPLE_PROJECTS.length) {
                setSelectedProjects([]);
              } else {
                setSelectedProjects(SAMPLE_PROJECTS.map((p) => p.id));
              }
            }}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            {selectedProjects.length === SAMPLE_PROJECTS.length ? 'Deselect All' : 'Select All'}
          </button>
        </div>

        <div className="space-y-3">
          {SAMPLE_PROJECTS.map((project) => {
            const isSelected = selectedProjects.includes(project.id);
            return (
              <div
                key={project.id}
                onClick={() => toggleProject(project.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/40 text-slate-200 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/40 border-slate-800/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-cyan-500 pointer-events-none"
                  />
                  <div>
                    <span className="font-bold text-sm text-white block">{project.name}</span>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                      <span>{project.framework}</span>
                      <span>•</span>
                      <span className="text-cyan-400">{project.domain}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono text-[11px] text-slate-400">
                  <span>{project.deployments} Deployments</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Banner upon import */}
        {imported && (
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Resources Successfully Reconciled into Digital Twin</span>
            </div>
            <p className="text-xs text-slate-300">
              {selectedProjects.length} cloud projects and associated deployments have been mapped to graph nodes. Attack paths updated.
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleStartImport}
            disabled={importing || selectedProjects.length === 0}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/25"
          >
            {importing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Building Digital Twin Graph...</span>
              </>
            ) : (
              <>
                <Network className="w-4 h-4" />
                <span>Import {selectedProjects.length} Selected Resources</span>
              </>
            )}
          </button>

          <Link
            href="/docs/integrations/vercel"
            className="text-slate-400 hover:text-slate-200 text-xs font-mono flex items-center gap-1"
          >
            <span>Read Vercel Integration Docs</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VercelImportPage() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col justify-between">
      <div>
        <Navbar />
        <Suspense fallback={
          <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400 font-mono text-xs">
            Loading resource importer...
          </div>
        }>
          <VercelImportContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
