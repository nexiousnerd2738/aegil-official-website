'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The standard terms and operational guidelines governing access to the AEGIS cyber defense platform and web interfaces."
    >
      <div className="space-y-6">
        <div>
          <h2>1. Service Description</h2>
          <p>
            AEGIS provides continuous cyber defense, digital twin modeling, attack path evaluation, and security telemetry analysis for authorized enterprise environments.
          </p>
        </div>

        <div>
          <h2>2. Account Registration & Organization Context</h2>
          <p>
            You must provide accurate account information upon registration. You are responsible for safeguarding your credentials and designating appropriate role permissions (OWNER, ADMIN, SECURITY_ANALYST, OPERATOR, VIEWER) to team members.
          </p>
        </div>

        <div>
          <h2>3. Acceptable Use Policy</h2>
          <p>
            You agree to use AEGIS solely for lawful defensive security operations on systems you own or have explicit authorization to monitor. Prohibited activities include conducting unauthorized penetration tests against third parties or attempting to compromise AEGIS multi-tenant infrastructure.
          </p>
        </div>

        <div>
          <h2>4. Third-Party Integrations & Services</h2>
          <p>
            Connecting target environments (such as Vercel) authorizes AEGIS to query provider APIs on your behalf. You acknowledge that third-party availability is governed by the respective provider&apos;s terms and uptime.
          </p>
        </div>

        <div>
          <h2>5. Intellectual Property Rights</h2>
          <p>
            All software code, visual designs, algorithms, and documentation are the proprietary property of {siteConfig.legal.entityName}. Customer data and graph models generated from customer environments remain customer property.
          </p>
        </div>

        <div>
          <h2>6. Termination of Access</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate this Agreement, abuse API rate limits, or engage in malicious security scanning.
          </p>
        </div>

        <div>
          <h2>7. Disclaimers & Limitations of Liability</h2>
          <p>
            AEGIS IS PROVIDED &quot;AS IS&quot;. WE DO NOT WARRANT THAT ALL SECURITY THREATS OR ATTACK PATHS WILL BE DETECTED. IN NO EVENT SHALL WE BE LIABLE FOR CONSEQUENTIAL DAMAGES OR SECURITY BREACHES ON CUSTOMER TARGET INFRASTRUCTURE.
          </p>
        </div>

        <div>
          <h2>8. Governing Law & Dispute Resolution</h2>
          <p>
            These terms are governed by the laws of {siteConfig.legal.jurisdiction}.
          </p>
        </div>

        <div>
          <h2>9. Contact Information</h2>
          <p>
            For questions regarding these Terms, contact: <a href={`mailto:${siteConfig.contacts.legalEmail}`}>{siteConfig.contacts.legalEmail}</a>.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
