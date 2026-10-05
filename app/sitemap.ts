import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data/projects';
import { SERVICES } from '@/lib/data/services';
import { BLOG_POSTS } from '@/lib/data/blog';
import { LOCATIONS } from '@/lib/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atelieraura.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/inspiration',
    '/packages',
    '/calculator',
    '/consultation',
    '/quote',
    '/ai-visualizer',
    '/designers',
    '/process',
    '/testimonials',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectPages = PROJECTS.map(p => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const servicePages = SERVICES.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages = BLOG_POSTS.map(b => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationPages = LOCATIONS.map(l => ({
    url: `${baseUrl}/interior-designers/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...projectPages, ...servicePages, ...blogPages, ...locationPages];
}
