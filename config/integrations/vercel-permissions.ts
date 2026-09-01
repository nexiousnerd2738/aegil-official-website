/**
 * Canonical Single Source of Truth for Vercel Integration Permissions & Data Access.
 * Synchronized with the backend connector implementation (backend/app/services/connectors/vercel.py).
 */

export interface VercelPermission {
  id: string;
  name: string;
  apiScope: string;
  endpoint: string;
  accessType: "Read-Only" | "Write";
  required: boolean;
  purpose: string;
  whyRequired: string;
  dataAccessed: string[];
  dataNotAccessed: string[];
}

export const VERCEL_INTEGRATION_CONFIG = {
  integrationName: "AEGIS for Vercel",
  provider: "vercel",
  authType: "OAuth 2.0 (Authorization Code Flow with State Verification)",
  tokenStorage: "AES-256 Fernet encrypted at rest, decrypted in-memory during sync",
  defaultSyncInterval: "Every 60 minutes (or manual on-demand sync)",
  revocationEndpoint: "https://api.vercel.com/v2/oauth/tokens/current",
  
  permissions: [
    {
      id: "projects-read",
      name: "Project Metadata",
      apiScope: "projects:read",
      endpoint: "GET /v9/projects",
      accessType: "Read-Only",
      required: true,
      purpose: "Discovers web applications, frameworks, build settings, and target environments.",
      whyRequired: "Maps projects as CLOUD_RESOURCE asset nodes within the Digital Twin topology to compute attack surface exposure.",
      dataAccessed: [
        "Project name and ID",
        "Framework type (e.g. Next.js, Vite)",
        "Creation timestamp",
        "Public domains assigned to the project",
        "Latest deployment status",
      ],
      dataNotAccessed: [
        "Source code contents or Git repository files",
        "Encrypted environment variable secret values",
        "Application runtime memory or serverless execution payloads",
      ],
    },
    {
      id: "deployments-read",
      name: "Deployment Metadata",
      apiScope: "deployments:read",
      endpoint: "GET /v7/deployments",
      accessType: "Read-Only",
      required: true,
      purpose: "Identifies active deployment state, target preview/production URLs, and build health.",
      whyRequired: "Enables AEGIS to model live deployment boundaries and trace lateral attack paths across environments.",
      dataAccessed: [
        "Deployment UID and URL",
        "Deployment state (READY, ERROR, BUILDING)",
        "Creator user ID",
        "Target environment (production vs preview)",
        "Deployment created timestamp",
      ],
      dataNotAccessed: [
        "Serverless function execution logs or database query contents",
        "End-user customer traffic or request payloads",
      ],
    },
    {
      id: "teams-read",
      name: "Team & Account Information",
      apiScope: "teams:read",
      endpoint: "GET /v2/teams & GET /v2/user",
      accessType: "Read-Only",
      required: true,
      purpose: "Verifies organization ownership, team scope, and collaborator roles.",
      whyRequired: "Reconciles team members as USER asset nodes to detect privilege escalation and unauthorized administrative access paths.",
      dataAccessed: [
        "Team ID and name",
        "Team slug",
        "Member list (User ID, username, assigned role e.g. OWNER, MEMBER)",
        "Account created timestamp",
      ],
      dataNotAccessed: [
        "User passwords or authentication credentials",
        "Billing details, credit card numbers, or invoice data",
        "Personal email contents",
      ],
    },
    {
      id: "domains-read",
      name: "Domain Information",
      apiScope: "domains:read",
      endpoint: "GET /v5/domains",
      accessType: "Read-Only",
      required: false,
      purpose: "Discovers custom domains, apex domains, and SSL certificate verification status.",
      whyRequired: "Calculates internet exposure scores for DOMAIN asset nodes in the Digital Twin.",
      dataAccessed: [
        "Domain name and apex domain",
        "Verification status",
        "Nameserver and DNS configuration metadata",
      ],
      dataNotAccessed: [
        "DNS registrar account credentials",
        "Private SSL/TLS certificates or private keys",
      ],
    },
  ] as VercelPermission[],

  leastPrivilegeGuarantees: [
    "100% Read-Only Access: AEGIS requests zero write, delete, or build-mutation permissions on your Vercel projects.",
    "Zero Source Code Access: AEGIS inspects project topology and deployment metadata, never your private code repositories or intellectual property.",
    "Zero Environment Secret Inspection: AEGIS does not read or decrypt sensitive environment variable values.",
    "Immediate Revocation: When disconnected, AEGIS deletes the OAuth access token from active storage and triggers token revocation with Vercel API.",
  ],
};
