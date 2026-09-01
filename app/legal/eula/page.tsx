'use client';

import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { siteConfig } from '@/config/site';

export default function EulaPage() {
  return (
    <LegalLayout
      title="End User License Agreement (EULA)"
      description="The standard software license terms governing authorized use, deployment, and operation of the AEGIS cyber defense platform."
    >
      <div className="space-y-6">
        <div>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing, deploying, or utilizing the AEGIS platform (&quot;Software&quot;), you (&quot;User&quot; or &quot;Customer&quot;) agree to be legally bound by this End User License Agreement (&quot;Agreement&quot;). If you do not agree to these terms, do not deploy or access the Software.
          </p>
        </div>

        <div>
          <h2>2. License Grant</h2>
          <p>
            Subject to the terms and conditions of this Agreement, {siteConfig.legal.entityName} grants you a non-exclusive, non-transferable, revocable license to use the Software solely for internal security operations, attack surface monitoring, and defensive cyber incident response.
          </p>
        </div>

        <div>
          <h2>3. Authorized Use</h2>
          <p>
            You may only connect AEGIS to target cloud environments (e.g., Vercel, AWS, Active Directory) and endpoints for which you own administrative rights or have obtained express, written authorization to perform cybersecurity monitoring and telemetry analysis.
          </p>
        </div>

        <div>
          <h2>4. Restrictions on Use</h2>
          <p>You shall not:</p>
          <ul>
            <li>Use the Software to conduct offensive cyber operations, unauthorized scanning, or denial-of-service attacks against third parties.</li>
            <li>Attempt to bypass, disable, or tamper with the Software&apos;s Role-Based Access Control (RBAC) or tenant isolation boundaries.</li>
            <li>Reverse engineer, decompile, or disassemble proprietary binary algorithms except where permitted by applicable mandatory law.</li>
            <li>Sublicense, lease, or resell the Software as a managed security service without a separate commercial agreement.</li>
          </ul>
        </div>

        <div>
          <h2>5. Account & Credential Responsibility</h2>
          <p>
            You are solely responsible for maintaining the confidentiality of your authentication credentials, session tokens, and connector encryption keys. Any actions initiated under your authenticated organization session are deemed your responsibility.
          </p>
        </div>

        <div>
          <h2>6. Third-Party Integrations</h2>
          <p>
            The Software interfaces with third-party providers (including Vercel Inc. and cloud infrastructure providers). Your use of third-party platforms is subject to their respective terms of service. {siteConfig.legal.entityName} is not responsible for provider API downtime or policy changes.
          </p>
        </div>

        <div>
          <h2>7. Data Access & Telemetry Ingestion</h2>
          <p>
            AEGIS ingests and processes metadata, deployment configurations, and security events strictly to generate your Digital Twin and calculate attack graphs, in accordance with our <a href="/legal/privacy">Privacy Policy</a>.
          </p>
        </div>

        <div>
          <h2>8. Security Responsibilities</h2>
          <p>
            While AEGIS provides automated attack path analysis and response simulations, you retain final authority and responsibility for approving containment actions (e.g., host isolation, credential revocation) within your production systems.
          </p>
        </div>

        <div>
          <h2>9. Service Availability & Performance</h2>
          <p>
            The Software is provided &quot;as is&quot; and on an &quot;as available&quot; basis. We strive to maintain continuous availability but do not guarantee uninterrupted or error-free operation.
          </p>
        </div>

        <div>
          <h2>10. Intellectual Property Rights</h2>
          <p>
            All intellectual property rights in the Software, including source code, graph traversal algorithms, user interfaces, and documentation, belong exclusively to {siteConfig.legal.entityName} and its licensors.
          </p>
        </div>

        <div>
          <h2>11. User Obligations</h2>
          <p>
            You agree to maintain necessary backups, verify response simulations before executing destructive containment, and comply with all applicable export control, cybersecurity, and data protection regulations.
          </p>
        </div>

        <div>
          <h2>12. Suspension & Termination</h2>
          <p>
            This Agreement is effective until terminated. We reserve the right to suspend or terminate your access immediately if you breach any material provision of this Agreement or engage in unauthorized security scanning.
          </p>
        </div>

        <div>
          <h2>13. Disclaimers of Warranties</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SOFTWARE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </div>

        <div>
          <h2>14. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL {siteConfig.legal.entityName.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
          </p>
        </div>

        <div>
          <h2>15. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless {siteConfig.legal.entityName} from and against any third-party claims arising from your unauthorized use of the Software or violation of third-party platform terms.
          </p>
        </div>

        <div>
          <h2>16. Governing Law & Jurisdiction</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of {siteConfig.legal.jurisdiction}, without regard to its conflict of law principles.
          </p>
        </div>

        <div>
          <h2>17. Changes to this Agreement</h2>
          <p>
            We may update this Agreement periodically. Continued use of the Software after the effective date of modifications constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2>18. Contact Information</h2>
          <p>
            For legal inquiries regarding this Agreement, contact: <a href={`mailto:${siteConfig.contacts.legalEmail}`}>{siteConfig.contacts.legalEmail}</a>.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
