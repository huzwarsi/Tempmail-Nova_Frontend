import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tempmailnova.com';

  const staticRoutes = [
    '',
    '/temporary-email',
    '/about',
    '/contact',
    '/faq',
    '/how-it-works',
    '/privacy',
    '/privacy-policy',
    '/terms',
    '/cookies',
    '/cookie-policy',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : route === '/temporary-email' ? 0.9 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
