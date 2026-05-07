import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://embelezaday.com.br'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const posts = await getAllPosts()

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
