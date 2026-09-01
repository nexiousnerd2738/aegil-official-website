/**
 * Central site configuration for AEGIL
 * Used across navigation, footer, metadata, support, and legal documents.
 */

export const siteConfig = {
  name: "AEGIL",
  fullName: "AEGIS — Adaptive Enterprise Guard, Intelligence & Security",
  tagline: "UNDERSTAND | PREDICT | DEFEND",
  description:
    "An adaptive cybersecurity platform that maps authorized environments, identifies attack paths, detects threats, reconstructs incidents, and coordinates defensive response.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aegil.vercel.app",
  version: "1.0.0",
  lastUpdated: "2026-09-01",

  // Central contact configuration
  contacts: {
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@aegil.vercel.app",
    securityEmail: process.env.NEXT_PUBLIC_SECURITY_EMAIL || "security@aegil.vercel.app",
    privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "privacy@aegil.vercel.app",
    legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL || "legal@aegil.vercel.app",
  },

  // Legal entity settings (configurable placeholder until business registration is finalized)
  legal: {
    entityName: process.env.NEXT_PUBLIC_LEGAL_ENTITY || "AEGIL Cyber Security Systems",
    jurisdiction: process.env.NEXT_PUBLIC_LEGAL_JURISDICTION || "United States / European Union (Configurable)",
    addressPlaceholder: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || "Open Source / Independent Security Engineering Project",
  },

  links: {
    github: "https://github.com/nexiousnerd2738/Aegis",
    websiteRepo: "https://github.com/nexiousnerd2738/aegil-official-website",
    vercelMarketplace: "https://vercel.com/integrations/aegis",
    docs: "/docs",
    gettingStarted: "/docs/getting-started",
    vercelIntegration: "/integrations/vercel",
    security: "/security",
    support: "/support",
    privacy: "/legal/privacy",
    terms: "/legal/terms",
    eula: "/legal/eula",
  },
};
