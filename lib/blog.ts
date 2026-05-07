import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostFrontmatter {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  cover: string
  coverAlt: string
  tags: string[]
  keywords?: string[]
  readingTime?: number
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTimeMinutes: number
}

export interface Post extends PostMeta {
  content: string
}

async function readPostFile(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
    const file = await fs.readFile(fullPath, 'utf-8')
    const { data, content } = matter(file)
    const frontmatter = data as PostFrontmatter
    const stats = readingTime(content)
    return {
      ...frontmatter,
      slug,
      content,
      readingTimeMinutes: frontmatter.readingTime ?? Math.ceil(stats.minutes),
    }
  } catch {
    return null
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR)
    return files
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getAllPostSlugs()
  const posts = await Promise.all(slugs.map(slug => readPostFile(slug)))
  return posts
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return readPostFile(slug)
}

export function formatBlogDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
