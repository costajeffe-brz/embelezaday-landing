import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'
import { getAllPosts, formatBlogDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Conteúdo prático para profissionais de beleza: gestão de salão, agendamento online, fidelização de clientes e mais.',
  alternates: { canonical: '/blog' },
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
              Blog
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-burgundy-900 leading-tight tracking-tight">
              Conteúdo pra quem vive da beleza
            </h1>
            <p className="mt-4 text-base md:text-lg text-burgundy-700/70 leading-relaxed">
              Estratégias práticas pra organizar a agenda, fidelizar clientes e
              fazer o salão crescer sem complicação.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center text-burgundy-700/60">
              <p className="text-base">Em breve, primeiros artigos aqui.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-primary-100 overflow-hidden md:hover:shadow-lg md:hover:shadow-primary-500/5 md:hover:border-primary-200 md:transition-shadow"
                >
                  <div className="aspect-[16/9] relative bg-primary-50 overflow-hidden">
                    {post.cover ? (
                      <Image
                        src={post.cover}
                        alt={post.coverAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover md:group-hover:scale-105 md:transition-transform md:duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col p-5 md:p-6">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-primary-500/80 uppercase tracking-wide mb-3">
                      <time dateTime={post.publishedAt}>
                        {formatBlogDate(post.publishedAt)}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readingTimeMinutes} min de leitura</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-burgundy-900 leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-burgundy-700/70 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wide font-medium px-2 py-0.5 rounded-full bg-primary-50 text-primary-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}
