import { redirect } from 'next/navigation';

export default function LegacyVercelDocsRedirect() {
  redirect('/docs/integrations/vercel');
}
