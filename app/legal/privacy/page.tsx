'use client';

import React from 'react';
import Link from 'next/link';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Clear, transparent disclosures detailing how AEGIS collects, processes, encrypts, and retains customer infrastructure metadata and telemetry."
    >
      <div className="space-y-6">
        <div>
          <h2>1. Information We Collect</h2>
          <p>
            AEGIS collects and processes only the minimum data required to deliver cyber defense and attack path analysis. We categorize collected information into:
          </p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, password hashes (handled via Supabase Auth), and role assignments.</li>
            <li><strong>Technical Logs:</strong> IP address, user agent, login timestamps, and console audit trail records.</li>
            <li><strong>User-Provided Data:</strong> Organization configuration settings, custom response policy rules, and analyst incident notes.</li>
          </ul>
        </div>

        <div>
          <h2>2. Information Obtained Through Integrations (e.g. Vercel)</h2>
          <p>
            When you connect third-party targets such as Vercel, AEGIS requests read-only OAuth scopes and ingests the following metadata:
          </p>
          <ul>
            <li><strong>Project Metadata:</strong> Project ID, project name, framework type, and public domain bindings.</li>
            <li><strong>Deployment Metadata:</strong> Deployment UID, deployment URL, build state, and creator user ID.</li>
            <li><strong>Team & Collaborator Information:</strong> Team ID, team name, member list, and assigned team roles.</li>
            <li><strong>Domain Information:</strong> Apex domain, custom domains, and DNS verification state.</li>
          </ul>
          <p>
            <em>What we NEVER collect:</em> AEGIS does not download your Git source code repositories, does not decrypt application environment variable secrets, and does not inspect end-user customer traffic payloads.
          </p>
        </div>

        <div>
          <h2>3. Why We Process Your Data</h2>
          <p>We process infrastructure and telemetry data solely to:</p>
          <ul>
            <li>Construct and maintain your organization&apos;s Digital Twin relational graph.</li>
            <li>Calculate graph-traversal breach routes and enterprise cyber risk scores.</li>
            <li>Evaluate incoming security events against MITRE ATT&CK detection rules.</li>
            <li>Correlate discrete alerts into unified security incidents.</li>
            <li>Simulate the impact of defensive containment actions.</li>
          </ul>
        </div>

        <div>
          <h2>4. How Data is Stored & Encrypted</h2>
          <p>
            Third-party connector tokens are encrypted at rest using AES-256 Fernet symmetric encryption keys. Database records are stored in PostgreSQL / SQLite instances with strict foreign key organization isolation.
          </p>
        </div>

        <div>
          <h2>5. How Data is Protected</h2>
          <p>
            AEGIS implements Role-Based Access Control (RBAC), preventing unauthorized members from viewing sensitive connector settings or executing response policies. Multi-tenant database queries enforce organization boundaries on every SQL operation.
          </p>
        </div>

        <div>
          <h2>6. Data Retention Policy</h2>
          <ul>
            <li><strong>Active Connected Target Metadata:</strong> Retained for the duration of the active connection to power the Digital Twin.</li>
            <li><strong>Security Event Telemetry:</strong> Retained for 90 days by default before automated pruning.</li>
            <li><strong>Audit Logs:</strong> Retained for 12 months for compliance and incident tracking.</li>
          </ul>
        </div>

        <div>
          <h2>7. Data Deletion & Disconnection</h2>
          <p>
            When you disconnect an integration (such as Vercel), AEGIS deletes the stored OAuth token and triggers token revocation with the provider. When an organization is deleted, all associated graph assets, relationships, incidents, and telemetry records are permanently purged.
          </p>
        </div>

        <div>
          <h2>8. Third-Party Subprocessors</h2>
          <p>
            We utilize third-party hosting and authentication services (e.g. Vercel Inc., Supabase Inc.) to operate the platform. For a complete list, visit our <Link href="/legal/subprocessors">Authorized Subprocessors</Link> page.
          </p>
        </div>

        <div>
          <h2>9. International Data Transfers</h2>
          <p>
            Data may be processed in data centers located in the United States and the European Union depending on your deployment region. We enforce appropriate technical and contractual safeguards.
          </p>
        </div>

        <div>
          <h2>10. Your Privacy Rights</h2>
          <p>
            Depending on your jurisdiction, you have the right to access, rectify, port, or request the deletion of your personal account data. You may exercise these rights by contacting <a href={`mailto:${siteConfig.contacts.privacyEmail}`}>{siteConfig.contacts.privacyEmail}</a>.
          </p>
        </div>

        <div>
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            The Software is an enterprise cybersecurity tool and is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.
          </p>
        </div>

        <div>
          <h2>12. Cookies & Local Storage</h2>
          <p>
            We use strictly necessary session cookies for user authentication and CSRF protection. Review our <Link href="/legal/cookie-policy">Cookie Policy</Link> for details.
          </p>
        </div>

        <div>
          <h2>13. Security Incident Handling</h2>
          <p>
            In the event of a verified data breach impacting customer account credentials, we will notify affected administrators without undue delay in accordance with applicable data protection laws.
          </p>
        </div>

        <div>
          <h2>14. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will indicate the date of the latest revisions at the top of this page.
          </p>
        </div>

        <div>
          <h2>15. Contact Information</h2>
          <p>
            For questions or requests regarding your privacy, contact our Privacy Officer at: <a href={`mailto:${siteConfig.contacts.privacyEmail}`}>{siteConfig.contacts.privacyEmail}</a>.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
