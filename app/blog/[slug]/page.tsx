import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Container } from '@/components/ui/Container'
import { mdxComponents } from '@/components/mdx/MdxComponents'
import { getAllPostSlugs, getPostBySlug, formatBlogDate } from '@/lib/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://embelezaday.com.br'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: post.cover ? [{ url: post.cover, alt: post.coverAlt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.cover ? [post.cover] : undefined,
    },
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.cover ? [`${SITE_URL}${post.cover}`] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'EmbelezaDay',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="py-12 md:py-16">
          <Container size="narrow">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ChevronLeft size={16} />
              Voltar para o blog
            </Link>

            <header className="mt-6 mb-8">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-primary-500/80 uppercase tracking-wide mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-primary-50 text-primary-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-burgundy-900 leading-tight tracking-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-burgundy-800/70 leading-relaxed">
                {post.description}
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-burgundy-700/60">
                <span>Por {post.author}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMinutes} min de leitura</span>
              </div>
            </header>

            {/* Hero image só quando o artigo tem um cover real configurado.
                Sem cover, evitamos repetir o título da OG image logo acima do
                <h1>. A OG image continua sendo usada no card da listagem
                e em previews de compartilhamento (og:image). */}
            {post.cover && (
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-primary-100 mb-10">
                <Image
                  src={post.cover}
                  alt={post.coverAlt || post.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg prose-burgundy max-w-none prose-headings:text-burgundy-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-burgundy-800/80 prose-p:leading-relaxed prose-strong:text-burgundy-900 prose-li:text-burgundy-800/80 prose-blockquote:border-primary-300 prose-blockquote:bg-primary-50/40 prose-blockquote:py-1 prose-blockquote:rounded-r-lg">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </Container>
        </article>

        <FinalCTA />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
