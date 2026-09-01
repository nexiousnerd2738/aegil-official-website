import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/product',
    '/features',
    '/how-it-works',
    '/integrations',
    '/integrations/vercel',
    '/docs',
    '/docs/getting-started',
    '/docs/vercel',
    '/docs/security',
    '/docs/data-handling',
    '/docs/permissions',
    '/docs/troubleshooting',
    '/docs/api',
    '/docs/changelog',
    '/legal',
    '/legal/eula',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookie-policy',
    '/legal/data-processing',
    '/legal/subprocessors',
    '/security',
    '/security/report',
    '/support',
    '/support/contact',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(siteConfig.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/integrations/vercel') || route.startsWith('/docs') ? 0.8 : 0.6,
  }));
}
