'use client';

import React from 'react';
import Link from 'next/link';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export default function DataProcessingPage() {
  return (
    <LegalLayout
      title="Data Processing Addendum (DPA)"
      description="Technical commitments and processing guidelines governing customer infrastructure metadata and telemetry handling in AEGIS."
    >
      <div className="space-y-6">
        <div>
          <h2>1. Scope & Purpose Limitation</h2>
          <p>
            This Data Processing Addendum outlines the technical measures and processing principles applied when AEGIS processes Customer Data. AEGIS processes Customer Data solely as necessary to provide, maintain, and secure the cyber defense services requested by Customer.
          </p>
        </div>

        <div>
          <h2>2. Data Minimization Principles</h2>
          <p>
            AEGIS requests only the minimum metadata necessary to construct the Digital Twin graph and evaluate attack paths. AEGIS does not inspect source code, environment variable secrets, or end-user data payloads.
          </p>
        </div>

        <div>
          <h2>3. Technical & Organizational Security Measures</h2>
          <p>We maintain strict security safeguards including:</p>
          <ul>
            <li><strong>Encryption at Rest:</strong> Third-party connector tokens encrypted using AES-256 Fernet symmetric keys.</li>
            <li><strong>Encryption in Transit:</strong> Mandatory TLS 1.3 encryption on all external API requests and web console traffic.</li>
            <li><strong>Access Control:</strong> Granular Role-Based Access Control (RBAC) and least privilege connector permissions.</li>
            <li><strong>Multi-Tenant Scoping:</strong> Organization boundaries enforced at the database query layer.</li>
          </ul>
        </div>

        <div>
          <h2>4. Subprocessor Management</h2>
          <p>
            AEGIS engages authorized third-party subprocessors for hosting, authentication, and database infrastructure. All subprocessors are vetted for security and listed on our <Link href="/legal/subprocessors">Authorized Subprocessors</Link> page.
          </p>
        </div>

        <div>
          <h2>5. Data Deletion & Return</h2>
          <p>
            Upon termination of services or organization deletion, AEGIS deletes all Customer Data, graph assets, and connector credentials from active storage within 30 days.
          </p>
        </div>

        <div>
          <h2>6. Security Incident Notification</h2>
          <p>
            In the event of a confirmed security incident impacting Customer Data, AEGIS will notify customer administrators within 72 hours of verification.
          </p>
        </div>

        <div>
          <h2>7. Contact Information</h2>
          <p>
            For inquiries regarding data processing, contact: <a href={`mailto:${siteConfig.contacts.privacyEmail}`}>{siteConfig.contacts.privacyEmail}</a>.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
