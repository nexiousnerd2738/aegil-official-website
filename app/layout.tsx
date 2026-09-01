import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aegil.vercel.app'),
  title: 'AEGIL — Autonomous Cyber Defense Platform | UNDERSTAND. PREDICT. DEFEND.',
  description:
    'AEGIL is the next-generation autonomous cyber-defense platform unifying Digital Twin Topology, Attack Path Intelligence, Real-Time Telemetry Correlation, and Closed-Loop Adaptive Containment.',
  keywords: [
    'Cybersecurity',
    'Blue Team',
    'Autonomous Defense',
    'Attack Path Analysis',
    'Digital Twin',
    'MITRE ATT&CK',
    'AI Security Analyst',
    'EDR Containment',
  ],
  authors: [{ name: 'AEGIL Cyber Systems' }],
  openGraph: {
    title: 'AEGIL — Autonomous Cyber Defense Platform',
    description: 'UNDERSTAND. PREDICT. DEFEND. Real-time attack graph discovery, telemetry correlation, and closed-loop defense.',
    url: 'https://aegil.vercel.app',
    siteName: 'AEGIL',
    images: [
      {
        url: '/images/aegil-hero.png',
        width: 1200,
        height: 630,
        alt: 'AEGIL Shield Eagle Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEGIL — Autonomous Cyber Defense Platform',
    description: 'UNDERSTAND. PREDICT. DEFEND. Autonomous Blue Team & Closed-Loop Response.',
    images: ['/images/aegil-hero.png'],
  },
  icons: {
    icon: '/images/aegil-logo.png',
    shortcut: '/images/aegil-logo.png',
    apple: '/images/aegil-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#05070e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
