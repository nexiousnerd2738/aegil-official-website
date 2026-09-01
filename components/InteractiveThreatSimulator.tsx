'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  ShieldAlert, 
  KeyRound, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap,
  Activity,
  Cpu,
  Layers
} from 'lucide-react';

interface SimulationStep {
  time: string;
  source: string;
  message: string;
  severity: 'INFO' | 'HIGH' | 'CRITICAL' | 'SUCCESS';
}

export const InteractiveThreatSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeScenario, setActiveScenario] = useState<'NONE' | 'KILLCHAIN' | 'EXFIL'>('NONE');
  const [riskScore, setRiskScore] = useState(31.0);
  const [attackPathsCount, setAttackPathsCount] = useState(5);
  const [incidentStatus, setIncidentStatus] = useState<'NONE' | 'CRITICAL' | 'CONTAINED'>('NONE');
  const [quarantinedHost, setQuarantinedHost] = useState<string | null>(null);
  const [logs, setLogs] = useState<SimulationStep[]>([
    {
      time: '09:30:00',
      source: 'DIGITAL_TWIN',
      message: 'Environment baseline synced: 18 assets, 19 relationships. Top target: Customer-DB.',
      severity: 'INFO',
    },
    {
      time: '09:30:05',
      source: 'PATH_ENGINE',
      message: 'Attack graph traversal calculated 5 potential routes (Top path: WS-01 -> APP-01 -> Customer-DB).',
      severity: 'INFO',
    },
    {
      time: '09:30:10',
      source: 'RISK_ENGINE',
      message: 'Enterprise Cyber Risk Baseline: 31.0 (NORMAL).',
      severity: 'INFO',
    },
  ]);

  const runKillchainScenario = () => {
    setIsRunning(true);
    setActiveScenario('KILLCHAIN');
    setLogs([
      {
        time: '09:31:00',
        source: 'IDENTITY',
        message: 'User authentication: alice@acme-corp.demo logged into WS-01 (Normal baseline).',
        severity: 'INFO',
      },
    ]);

    const timeline = [
      {
        delay: 800,
        step: {
          time: '09:32:15',
          source: 'ENDPOINT',
          message: 'Process create: WINWORD.EXE opened Q3_Financial_Audit.docx.',
          severity: 'INFO' as const,
        },
        risk: 34.0,
        paths: 5,
        status: 'NONE' as const,
        quarantine: null,
      },
      {
        delay: 1600,
        step: {
          time: '09:33:00',
          source: 'RULE-001',
          message: '[HIGH ALERT] Encoded PowerShell spawned by WINWORD.EXE (MITRE T1059.001).',
          severity: 'HIGH' as const,
        },
        risk: 58.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 2400,
        step: {
          time: '09:34:30',
          source: 'RULE-002',
          message: '[HIGH ALERT] Reconnaissance execution: "whoami /priv" (MITRE T1033).',
          severity: 'HIGH' as const,
        },
        risk: 68.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 3200,
        step: {
          time: '09:36:00',
          source: 'RULE-003',
          message: '[HIGH ALERT] Outbound C2 Beaconing to 198.51.100.44:4444 (MITRE T1071.001).',
          severity: 'HIGH' as const,
        },
        risk: 79.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 4000,
        step: {
          time: '09:38:00',
          source: 'RULE-006',
          message: '[CRITICAL ALERT] Lateral access from WS-01 toward Customer-DB on Port 5432. Intersects pre-calculated Attack Path!',
          severity: 'CRITICAL' as const,
        },
        risk: 91.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 4800,
        step: {
          time: '09:38:05',
          source: 'CORRELATION',
          message: 'Synthesized Incident INC-0001: "Critical Multi-Stage Lateral Compromise" (4 correlated alerts).',
          severity: 'CRITICAL' as const,
        },
        risk: 91.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 5600,
        step: {
          time: '09:38:15',
          source: 'AI_ANALYST',
          message: 'AI Investigation Grounded: Recommends ISOLATE_ENDPOINT on WS-01 (Simulated Risk Drop: -48.0 points).',
          severity: 'INFO' as const,
        },
        risk: 91.0,
        paths: 5,
        status: 'CRITICAL' as const,
        quarantine: null,
      },
      {
        delay: 6400,
        step: {
          time: '09:38:30',
          source: 'ORCHESTRATOR',
          message: '[DEFENSIVE RESPONSE] Approved containment executed: WS-01 ISOLATED in Digital Twin. 4 attack paths severed!',
          severity: 'SUCCESS' as const,
        },
        risk: 43.0,
        paths: 1,
        status: 'CONTAINED' as const,
        quarantine: 'WS-01',
      },
      {
        delay: 7200,
        step: {
          time: '09:38:35',
          source: 'RECALCULATE',
          message: '[CLOSED-LOOP] Post-response risk recalculated: 91.0 -> 43.0. Defense effectiveness recorded.',
          severity: 'SUCCESS' as const,
        },
        risk: 43.0,
        paths: 1,
        status: 'CONTAINED' as const,
        quarantine: 'WS-01',
      },
    ];

    timeline.forEach(({ delay, step, risk, paths, status, quarantine }) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        setRiskScore(risk);
        setAttackPathsCount(paths);
        setIncidentStatus(status);
        if (quarantine) setQuarantinedHost(quarantine);
        if (delay === 7200) setIsRunning(false);
      }, delay);
    });
  };

  const resetSimulator = () => {
    setIsRunning(false);
    setActiveScenario('NONE');
    setRiskScore(31.0);
    setAttackPathsCount(5);
    setIncidentStatus('NONE');
    setQuarantinedHost(null);
    setLogs([
      {
        time: '09:30:00',
        source: 'DIGITAL_TWIN',
        message: 'Environment baseline synced: 18 assets, 19 relationships. Top target: Customer-DB.',
        severity: 'INFO',
      },
      {
        time: '09:30:05',
        source: 'PATH_ENGINE',
        message: 'Attack graph traversal calculated 5 potential routes (Top path: WS-01 -> APP-01 -> Customer-DB).',
        severity: 'INFO',
      },
      {
        time: '09:30:10',
        source: 'RISK_ENGINE',
        message: 'Enterprise Cyber Risk Baseline: 31.0 (NORMAL).',
        severity: 'INFO',
      },
    ]);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Blue Team Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience Closed-Loop Defense in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Launch a real simulated attack sequence. Watch AEGIL detect anomalous execution, correlate sequential MITRE ATT&CK alerts, plan AI containment, isolate the compromised host, and recalculate enterprise risk in real time.
          </p>
        </div>

        {/* Live Simulator Workbench */}
        <div className="glass-panel rounded-2xl border border-cyan-500/30 glow-box-blue overflow-hidden shadow-2xl">
          {/* Top Control Header */}
          <div className="bg-slate-950/90 border-b border-slate-800 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">
                AEGIL // LIVE_DEFENSE_ENGINE_SHELL
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runKillchainScenario}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-mono text-xs font-bold transition shadow-lg shadow-rose-950/50 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate 6-Stage Kill-Chain</span>
              </button>

              <button
                onClick={resetSimulator}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs transition disabled:opacity-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset State</span>
              </button>
            </div>
          </div>

          {/* Telemetry Dashboard Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800 bg-slate-900/50">
            {/* Metric 1: Risk Gauge */}
            <div className="p-4 sm:p-6 border-r border-b md:border-b-0 border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Enterprise Cyber Risk
              </span>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl sm:text-4xl font-extrabold font-mono transition-colors duration-300 ${
                  riskScore > 75 ? 'text-rose-400' : riskScore > 50 ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {riskScore.toFixed(1)}
                </span>
                <span className="text-xs font-mono text-slate-400">/ 100</span>
              </div>
            </div>

            {/* Metric 2: Attack Paths */}
            <div className="p-4 sm:p-6 border-r border-b md:border-b-0 border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Active Attack Paths
              </span>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl sm:text-4xl font-extrabold font-mono transition-colors duration-300 ${
                  attackPathsCount > 2 ? 'text-rose-400' : 'text-cyan-400'
                }`}>
                  {attackPathsCount}
                </span>
                <span className="text-xs font-mono text-slate-400">paths</span>
              </div>
            </div>

            {/* Metric 3: Incident State */}
            <div className="p-4 sm:p-6 border-r border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Incident Status
              </span>
              <div className="flex items-center gap-2 mt-1">
                {incidentStatus === 'CRITICAL' ? (
                  <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 border border-rose-500/40 font-mono text-xs font-bold animate-pulse">
                    INC-0001: CRITICAL
                  </span>
                ) : incidentStatus === 'CONTAINED' ? (
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-bold">
                    INC-0001: CONTAINED
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 font-mono text-xs">
                    NO ACTIVE INCIDENT
                  </span>
                )}
              </div>
            </div>

            {/* Metric 4: Containment / EDR */}
            <div className="p-4 sm:p-6">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                Quarantined Target
              </span>
              <div className="flex items-center gap-2 mt-1">
                {quarantinedHost ? (
                  <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/40 font-mono text-xs font-bold">
                    {quarantinedHost} [ISOLATED]
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 font-mono text-xs">
                    ALL HOSTS ACTIVE
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 sm:p-6 bg-[#03060d] font-mono text-xs sm:text-[13px] space-y-2.5 h-[340px] overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <span className="text-slate-400 shrink-0 select-none">[{log.time}]</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
                  log.severity === 'CRITICAL'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    : log.severity === 'HIGH'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : log.severity === 'SUCCESS'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}>
                  {log.source}
                </span>
                <span className={`leading-relaxed ${
                  log.severity === 'CRITICAL'
                    ? 'text-rose-300 font-semibold'
                    : log.severity === 'SUCCESS'
                    ? 'text-emerald-300 font-semibold'
                    : log.severity === 'HIGH'
                    ? 'text-amber-200'
                    : 'text-slate-300'
                }`}>
                  {log.message}
                </span>
              </div>
            ))}
            {isRunning && (
              <div className="flex items-center gap-2 text-cyan-400 animate-pulse pt-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Processing real-time telemetry stream...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
