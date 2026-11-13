import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tempmailnova.com';

  // Static routes: omit lastModified where no reliable update timestamp exists
  // to avoid sending misleading dynamic timestamps to search engines.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-it-works`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Blog routes: omit lastModified since no verified modification timestamp exists in the post data.
  // Search engines should not treat publication dates as last modification dates.
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
